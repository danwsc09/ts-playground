#!/bin/bash

tsc "$1/$2.ts" --outfile "$1/$2.js"
node "$1/$2.js"

rm "$1/$2.js"