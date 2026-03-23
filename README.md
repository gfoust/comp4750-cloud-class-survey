# COMP 4750 Class Survey

Starting point for the [Class Survey project](https://cs.harding.edu/gfoust/classes/comp4750/projects/lambda).



## Project organization

- `template.yaml` — SAM template defining all AWS infrastructure: S3 bucket and access policy, API
  Gateway, DynamoDB table, and both Lambda functions.
- `s3/` — Static HTML pages for the survey form (`index.html`) and the results page
  (`results.html`).  Copy these files to your front-end S3 bucket after it's created.
- `lambdas/` — Lambda functions.
  - `submitSurvey/` — Lambda function triggered by API Gateway; stores survey responses in
    DynamoDB.
  - `aggregateStats/` — Lambda function triggered by DynamoDB Streams; aggregates response
    statistics and writes them to S3.
- `events/` — Sample event payloads for each lambda.
