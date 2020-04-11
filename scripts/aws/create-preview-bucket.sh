#!/usr/bin/env bash

set -ex

BUCKET=$1
REGION=$2

die() {
    echo "$1"
    exit ${2:-1}
}

[[ -z ${BUCKET} ]] || [[ -z ${REGION} ]] && die "USAGE: $0 <bucket> <region>"

sed -e "s/{{BUCKET}}/${BUCKET}/" ./scripts/aws/public-web-policy.json > ./scripts/aws/temp-web-policy.json

aws s3api create-bucket --acl public-read --bucket ${BUCKET} --region ${REGION} --create-bucket-configuration LocationConstraint=${REGION}
aws s3api put-bucket-policy --bucket ${BUCKET} --policy file://scripts/aws/temp-web-policy.json
aws s3api put-bucket-cors --bucket ${BUCKET} --cors-configuration file://scripts/aws/cors.json
aws s3 website ${BUCKET} --index-document index.html --error-document index.html
