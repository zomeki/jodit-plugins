#!/usr/bin/bash -x

for d in ./plugins/*/ ; do
    (cd "$d" && rm -rf dist)
done

rm -rf dist
