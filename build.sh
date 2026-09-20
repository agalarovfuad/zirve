#!/bin/zsh
# Zirvə — macOS proqramını yığır və /Applications-a qoyur
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
APP="$ROOT/build/Zirvə.app"
rm -rf "$ROOT/build" && mkdir -p "$APP/Contents/MacOS" "$APP/Contents/Resources"
cp "$ROOT/mac/Info.plist" "$APP/Contents/"
cp -R "$ROOT/web" "$APP/Contents/Resources/web"
# icon
TMP="$ROOT/build/icon"; mkdir -p "$TMP/AppIcon.iconset"
swiftc -swift-version 5 -O -framework Cocoa "$ROOT/mac/icon.swift" -o "$TMP/mkicon" 2>/dev/null
"$TMP/mkicon" "$TMP/icon1024.png"
for s in 16 32 64 128 256 512; do
  sips -z $s $s "$TMP/icon1024.png" --out "$TMP/AppIcon.iconset/icon_${s}x${s}.png" >/dev/null
  d=$((s*2)); sips -z $d $d "$TMP/icon1024.png" --out "$TMP/AppIcon.iconset/icon_${s}x${s}@2x.png" >/dev/null
done
iconutil -c icns "$TMP/AppIcon.iconset" -o "$APP/Contents/Resources/AppIcon.icns"
# binary
swiftc -swift-version 5 -O -framework Cocoa -framework WebKit -framework Speech -framework AVFoundation "$ROOT/mac/main.swift" -o "$APP/Contents/MacOS/Zirve"
codesign --force --deep --sign - "$APP" 2>/dev/null || true
echo "built: $APP"
