#!/bin/zsh
# Zirvə — PWA üçün docs/ qovluğunu (GitHub Pages) yığır (index.html tam HTML sənədinə bükülür)
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
rm -rf "$ROOT/docs" && mkdir -p "$ROOT/docs"
rsync -a --exclude 'index.html' "$ROOT/web/" "$ROOT/docs/"
python3 - "$ROOT" <<'PY'
import sys,io
root=sys.argv[1]
s=io.open(root+"/web/index.html",encoding="utf-8").read().replace('<meta charset="utf-8">\n','',1)
head,body=s.split('<div class="top">',1)
out='<!doctype html>\n<html lang="az">\n<head>\n<meta charset="utf-8">\n'+head+'</head>\n<body>\n<div class="top">'+body+'\n</body>\n</html>\n'
io.open(root+"/docs/index.html","w",encoding="utf-8").write(out)
PY
touch "$ROOT/docs/.nojekyll"
echo "docs: $(du -sh "$ROOT/docs" | cut -f1)"
