#!/usr/bin/env bash

set -ex

BUCKET=$1

die() {
    echo "$1"
    exit ${2:-1}
}

[[ -z ${BUCKET} ]] && die "USAGE: $0 <bucket>"

## Create Bucket if it does not already exist and upload

if aws s3api head-bucket --bucket "$BUCKET" 2>/dev/null; then
  ./scripts/aws/upload-preview-bucket.sh "$BUCKET"
else
  ./scripts/aws/create-preview-bucket.sh "$BUCKET" us-east-2
  ./scripts/aws/upload-preview-bucket.sh "$BUCKET"
fi
