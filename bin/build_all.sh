#!/usr/bin/bash -x

for d in ./plugins/*/ ; do
    (cd "$d" && npm run build)
done

npm run build
