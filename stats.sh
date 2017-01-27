#!/usr/bin/env sh

NUM_FUNCS=`grep '^  desc' ./test/**/*.js | cut -d '(' -f 2 | wc -l`
echo "functions with tests: ${NUM_FUNCS}"

NUM_IMPL=`find ./src -name '*.js' | grep -v index | grep -v Prelude | xargs grep export | grep -v undefined | wc -l`
echo "functions implemented: ${NUM_IMPL}"

NUM_DEF=`find ./src -name '*.js' | grep -v index | grep -v Prelude | xargs grep export | wc -l`
echo "functions defined (total): ${NUM_DEF}"

NUM_SIGS_SRC=`find ./src/ -name '*.js' | xargs grep -e '//' | grep '::' | wc -l`
echo "type sigs in src: ${NUM_SIGS_SRC}"

NUM_SIGS_TEST=`find ./test/ -name '*.js' | xargs grep -e '//' | grep '::' | wc -l`
echo "type sigs in test: ${NUM_SIGS_TEST}"

NUM_TESTS=`find ./test/ -name '*.js' | xargs grep -e 'it(' | wc -l`
echo "it assertions documented (total): ${NUM_TESTS}"
