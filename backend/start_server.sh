#!/usr/bin/env bash
version='0.1'
FLASK_ENV=development

while [[ "$1" =~ ^- && ! "$1" == "--" ]]; do case $1 in
  -V | --version )
    echo $version
    exit
    ;;
  -s | --string )
    shift; string=$1
    ;;
  -p | --prod )
    IS_PROD=1
    ;;
esac; shift; done
if [[ "$1" == '--' ]]; then shift; fi

export FLASK_APP=server.py

if [[ -n "$IS_PROD" ]]; then
    FLASK_ENV=production
fi

export FLASK_ENV

flask run