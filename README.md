# gatsby-starter-stellar

**This starter has been updated for Gatsby.js V2.**

**The older V1 version of this starter can be found in the V1 branch**

Gatsby.js V2 starter based on the Stellar site template, designed by HTML5 UP. Check out https://codebushi.com/gatsby-starters-and-themes/ for more Gatsby starters and templates.

## Preview

https://gatsby-stellar.surge.sh/

## Installation

Install this starter (assuming Gatsby is installed) by running from your CLI:
<br>
`gatsby new gatsby-starter-stellar https://github.com/codebushi/gatsby-starter-stellar`

Run `gatsby develop` in the terminal to start the dev site.

## S3 Deployment and Management
In the S3 management console, create a CLI user that has full S3 access. Set up the AWS cli with `aws configure`.
```bash
./scripts/aws/create-preview-bucket.sh *BUCKET_NAME* *AWS_REGION*
./scripts/aws/upload-preview-bucket.sh *BUCKET_NAME*
./scripts/aws/remove-preview-bucket.sh *BUCKET_NAME*
```

## Github Actions
In the Settings>Secrets, add `AWS_KEY` and `AWS_SECRET` with values from the S3 Deployment and Management Step. 

The following triggers are used:
*   Pull Request Open: Build App, Create S3 Bucket, and Preview App in S3 bucket
*   Pull Request Sync: Build App, Upload to Bucket
*   Pull Request Close: Destroy S3 Bucket