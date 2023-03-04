#!/bin/bash

tsc &&
vite build &&
BUILD_VERSION=$(git describe --tags --abbrev=0) &&
sed -i -- 's/%BUILD-VERSION%/'$BUILD_VERSION'/g' dist/index.html &&
echo Build Version = $BUILD_VERSION &&
BUILD_DATE="$(date -u +"%Y-%m-%dT%H:%M:%SZ")" &&
sed -i -- 's/%BUILD-DATE%/'$BUILD_DATE'/g' dist/index.html &&
echo Build Date = $BUILD_DATE
