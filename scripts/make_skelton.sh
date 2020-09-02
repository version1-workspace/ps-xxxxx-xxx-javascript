#!/bin/bash

DOC_DIR=docs
SRC_DIR=src

cp -pr ./$DOC_DIR/* $SRC_DIR/.
find ./$SRC_DIR -type f -name '*.md' | xargs rm
