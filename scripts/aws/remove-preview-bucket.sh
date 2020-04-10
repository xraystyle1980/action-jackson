#!/usr/bin/env bash

set -ex

BUCKET=$1

die() {
    echo "$1"
    exit ${2:-1}
}

[[ -z ${BUCKET} ]] && die "USAGE: $0 <bucket>"

aws s3 rm s3://${BUCKET} --recursive
aws s3api delete-bucket --bucket ${BUCKET}
