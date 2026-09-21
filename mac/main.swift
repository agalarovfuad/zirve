import Cocoa
import WebKit
import Speech
import AVFoundation

final class AppDelegate: NSObject, NSApplicationDelegate, WKScriptMessageHandler, WKNavigationDelegate {
    var window: NSWindow!
    var webView: WKWebView!

    // --- nitq tanıma ---
    let recognizer = SFSpeechRecognizer(locale: Locale(identifier: "en-US"))
    let audioEngine = AVAudioEngine()
    var request: SFSpeechAudioBufferRecognitionRequest?
    var task: SFSpeechRecognitionTask?
    var lastText = ""
    var lastChange = Date()
    var silenceTimer: Timer?
    var listening = false

    let stateURL: URL = {
        let base = FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0]
        let dir = base.appendingPathComponent("Zirve", isDirectory: true)
        try? FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        return dir.appendingPathComponent("progress.json")
    }()

    func applicationDidFinishLaunching(_ note: Notification) {
        let cfg = WKWebViewConfiguration()
        let ucc = WKUserContentController()
        if let data = try? Data(contentsOf: stateURL), let json = String(data: data, encoding: .utf8), !json.isEmpty {
            ucc.addUserScript(WKUserScript(source: "window.__NATIVE_STATE__=\(json);", injectionTime: .atDocumentStart, forMainFrameOnly: true))
        }
        ucc.addUserScript(WKUserScript(source: "window.__NATIVE_SPEECH__=true;", injectionTime: .atDocumentStart, forMainFrameOnly: true))
        ucc.add(self, name: "native")
        cfg.userContentController = ucc
        cfg.preferences.setValue(true, forKey: "developerExtrasEnabled")
        cfg.preferences.setValue(true, forKey: "allowFileAccessFromFileURLs")
        cfg.mediaTypesRequiringUserActionForPlayback = []

        webView = WKWebView(frame: .zero, configuration: cfg)
        webView.navigationDelegate = self
        webView.setValue(false, forKey: "drawsBackground")

        let rect = NSRect(x: 0, y: 0, width: 1140, height: 800)
        window = NSWindow(contentRect: rect, styleMask: [.titled, .closable, .miniaturizable, .resizable], backing: .buffered, defer: false)
        window.title = "Zirvə"
        window.minSize = NSSize(width: 720, height: 540)
        window.titlebarAppearsTransparent = true
        window.contentView = webView
        window.setFrameAutosaveName("main")
        if !window.setFrameUsingName("main") { window.center() }
        window.makeKeyAndOrderFront(nil)

        let web = Bundle.main.resourceURL!.appendingPathComponent("web", isDirectory: true)
        webView.loadFileURL(web.appendingPathComponent("index.html"), allowingReadAccessTo: web)
        NSApp.activate(ignoringOtherApps: true)
    }

    func userContentController(_ ucc: WKUserContentController, didReceive message: WKScriptMessage) {
        guard message.name == "native" else { return }
        if let s = message.body as? String {
            try? s.data(using: .utf8)?.write(to: stateURL, options: .atomic)
            // gündəlik ehtiyat nüsxə (son 14 gün)
            let dir = stateURL.deletingLastPathComponent().appendingPathComponent("backups", isDirectory: true)
            try? FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
            let f = DateFormatter(); f.dateFormat = "yyyy-MM-dd"
            let day = dir.appendingPathComponent("progress-\(f.string(from: Date())).json")
            try? s.data(using: .utf8)?.write(to: day, options: .atomic)
            if let files = try? FileManager.default.contentsOfDirectory(at: dir, includingPropertiesForKeys: nil) {
                for old in files.sorted(by: { $0.lastPathComponent < $1.lastPathComponent }).dropLast(14) { try? FileManager.default.removeItem(at: old) }
            }
        } else if let d = message.body as? [String: Any], let cmd = d["cmd"] as? String {
            switch cmd {
            case "listen": startListening()
            case "stop": stopListening(final: true)
            default: break
            }
        }
    }

    func js(_ obj: [String: Any]) {
        guard let data = try? JSONSerialization.data(withJSONObject: obj), let s = String(data: data, encoding: .utf8) else { return }
        DispatchQueue.main.async { self.webView.evaluateJavaScript("window.__speech&&window.__speech(\(s))", completionHandler: nil) }
    }

    func startListening() {
        if listening { return }
        SFSpeechRecognizer.requestAuthorization { auth in
            guard auth == .authorized else { self.js(["status": "error", "text": "Nitq tanımaya icazə verilməyib (Sistem Ayarları → Gizlilik → Nitq Tanıma)."]); return }
            AVCaptureDevice.requestAccess(for: .audio) { ok in
                guard ok else { self.js(["status": "error", "text": "Mikrofona icazə verilməyib (Sistem Ayarları → Gizlilik → Mikrofon)."]); return }
                DispatchQueue.main.async { self.beginRecognition() }
            }
        }
    }

    func beginRecognition() {
        guard let recognizer = recognizer, recognizer.isAvailable else { js(["status": "error", "text": "Nitq tanıma bu Mac-də əlçatan deyil."]); return }
        stopListening(final: false)
        let req = SFSpeechAudioBufferRecognitionRequest()
        req.shouldReportPartialResults = true
        if recognizer.supportsOnDeviceRecognition { req.requiresOnDeviceRecognition = true }
        request = req
        let input = audioEngine.inputNode
        let fmt = input.outputFormat(forBus: 0)
        input.removeTap(onBus: 0)
        input.installTap(onBus: 0, bufferSize: 1024, format: fmt) { buf, _ in req.append(buf) }
        audioEngine.prepare()
        do { try audioEngine.start() } catch { js(["status": "error", "text": "Mikrofon açılmadı."]); return }
        listening = true; lastText = ""; lastChange = Date()
        js(["status": "listening"])
        task = recognizer.recognitionTask(with: req) { result, error in
            if let r = result {
                let t = r.bestTranscription.formattedString
                if t != self.lastText { self.lastText = t; self.lastChange = Date(); self.js(["status": "partial", "text": t]) }
                if r.isFinal { self.finish() }
            }
            if error != nil && self.listening { self.finish() }
        }
        silenceTimer?.invalidate()
        silenceTimer = Timer.scheduledTimer(withTimeInterval: 0.25, repeats: true) { _ in
            guard self.listening else { return }
            let quiet = Date().timeIntervalSince(self.lastChange)
            if (!self.lastText.isEmpty && quiet > 1.5) || quiet > 8 { self.finish() }
        }
    }

    func finish() {
        guard listening else { return }
        let t = lastText
        stopListening(final: false)
        js(["status": "final", "text": t])
    }

    func stopListening(final: Bool) {
        silenceTimer?.invalidate(); silenceTimer = nil
        if audioEngine.isRunning { audioEngine.stop(); audioEngine.inputNode.removeTap(onBus: 0) }
        request?.endAudio(); task?.cancel(); task = nil; request = nil
        let was = listening; listening = false
        if final && was { js(["status": "final", "text": lastText]) }
    }

    func webView(_ webView: WKWebView, decidePolicyFor action: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        if let url = action.request.url, let scheme = url.scheme?.lowercased(), scheme == "http" || scheme == "https", action.navigationType == .linkActivated {
            NSWorkspace.shared.open(url); decisionHandler(.cancel); return
        }
        decisionHandler(.allow)
    }

    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool { true }
}

let app = NSApplication.shared
let delegate = AppDelegate()
app.delegate = delegate
app.setActivationPolicy(.regular)

let menubar = NSMenu()
let appItem = NSMenuItem(); menubar.addItem(appItem)
let appMenu = NSMenu()
appMenu.addItem(withTitle: "Hide Zirvə", action: #selector(NSApplication.hide(_:)), keyEquivalent: "h")
appMenu.addItem(NSMenuItem.separator())
appMenu.addItem(withTitle: "Quit Zirvə", action: #selector(NSApplication.terminate(_:)), keyEquivalent: "q")
appItem.submenu = appMenu
let editItem = NSMenuItem(); menubar.addItem(editItem)
let editMenu = NSMenu(title: "Edit")
editMenu.addItem(withTitle: "Undo", action: Selector(("undo:")), keyEquivalent: "z")
editMenu.addItem(withTitle: "Cut", action: #selector(NSText.cut(_:)), keyEquivalent: "x")
editMenu.addItem(withTitle: "Copy", action: #selector(NSText.copy(_:)), keyEquivalent: "c")
editMenu.addItem(withTitle: "Paste", action: #selector(NSText.paste(_:)), keyEquivalent: "v")
editMenu.addItem(withTitle: "Select All", action: #selector(NSText.selectAll(_:)), keyEquivalent: "a")
editItem.submenu = editMenu
let winItem = NSMenuItem(); menubar.addItem(winItem)
let winMenu = NSMenu(title: "Window")
winMenu.addItem(withTitle: "Minimize", action: #selector(NSWindow.miniaturize(_:)), keyEquivalent: "m")
winMenu.addItem(withTitle: "Close", action: #selector(NSWindow.performClose(_:)), keyEquivalent: "w")
winItem.submenu = winMenu
app.mainMenu = menubar
app.run()
