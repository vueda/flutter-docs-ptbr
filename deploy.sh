#!/usr/bin/env sh

set -e
npm run build

cd dist

git init
git add -A
git commit -m 'Deploy flutter-docs-ptbr'

git push -f git@github.com:vueda/flutter-docs-ptbr.git master:gh-pages