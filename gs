#!/bin/bash
# This is from here: https://github.com/blang/latex-docker/blob/master/dockercmd.sh
# exec docker run --rm -i --user="$(id -u):$(id -g)" --net=none -v "$PWD":/data blang/latex "/usr/bin/pdflatex $@"
docker run --rm -ti --user="$(id -u):$(id -g)" --net=none -v "$PWD":/data neomindryan/ghostscript gs "$@"
