import Cocoa
let size: CGFloat = 1024
let img = NSImage(size: NSSize(width: size, height: size))
img.lockFocus()
let inset: CGFloat = 60
let rect = NSRect(x: inset, y: inset, width: size - inset*2, height: size - inset*2)
let bg = NSBezierPath(roundedRect: rect, xRadius: 215, yRadius: 215)
NSGradient(colors: [NSColor(red: 0.13, green: 0.72, blue: 0.65, alpha: 1), NSColor(red: 0.04, green: 0.43, blue: 0.39, alpha: 1)])!.draw(in: bg, angle: -60)
// sun
NSColor(red: 0.96, green: 0.77, blue: 0.41, alpha: 1).setFill()
NSBezierPath(ovalIn: NSRect(x: 660, y: 700, width: 96, height: 96)).fill()
// mountains (y up)
func pt(_ x: CGFloat, _ y: CGFloat) -> NSPoint { NSPoint(x: inset + x/64*(size-inset*2), y: inset + (64-y)/64*(size-inset*2)) }
let m = NSBezierPath(); m.move(to: pt(6,52)); m.line(to: pt(24,24)); m.line(to: pt(32,36)); m.line(to: pt(38,29)); m.line(to: pt(58,52)); m.close()
NSColor(white: 1, alpha: 0.96).setFill(); m.fill()
let cap1 = NSBezierPath(); cap1.move(to: pt(24,24)); cap1.line(to: pt(28.5,31)); cap1.line(to: pt(24,33.5)); cap1.line(to: pt(19.5,31)); cap1.close()
NSColor(red: 0.04, green: 0.43, blue: 0.39, alpha: 1).setFill(); cap1.fill()
let cap2 = NSBezierPath(); cap2.move(to: pt(38,29)); cap2.line(to: pt(41.5,34)); cap2.line(to: pt(38,36)); cap2.line(to: pt(34.5,34)); cap2.close()
NSColor(red: 0.04, green: 0.43, blue: 0.39, alpha: 0.8).setFill(); cap2.fill()
img.unlockFocus()
let rep = NSBitmapImageRep(data: img.tiffRepresentation!)!
try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: CommandLine.arguments[1]))
