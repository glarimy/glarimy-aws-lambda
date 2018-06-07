AWS Hello World

Objective:
Publish a REST API on AWS by deploying a Lambda function written in Javascript

STEP 0: Install node
Verify the installed versions of node and npm
> node -v 
> npm -v

STEP 1: Install serverless
> npm install -g serverless

STEP 2: Create Lambda Function
> mkdir glarimy-aws-lambda-00
> cd glarimy-aws-lambda-00
> serverless create -t aws-nodejs
Creates the necessary files
Edit the handler.js and serverless.yml (these files are included in this illustrated project already)

STEP 3: Create AWS Credentials (optional)
Go to http://aws.amazon.com/lambda
Sign-in
Select My Security Credentials under your userprofile
Select Access Keys
Select/Create New Access Key
Make a note of the generated AWS-ACCESS-KEY-ID and AWS-SECRETE-ACCESS-KEY
Optionall, download the credentials file and keep it for future reference

STEP: Setup the AWS Credentials
> serverless config credentials --provider aws --key <aws access key id> --secrete <aws secrete access key>
Sets up AWS by saving the AWS profile in ~/.aws/credentials

STEP 4: Stage the Lambda Function for development 
> serverless deploy
Displays HTTP URL (https://jlpdnffi8b.execute-api.us-east-1.amazonaws.com/dev/glarimy/hello)
Visit the URL on the browser

STEP 4: Stage the Lambda Function for production
> serverless deploye --stage production
Displays HTTP URL (https://sj0vstgh69.execute-api.us-east-1.amazonaws.com/production/glarimy/hello)
Visit the URL on the browser

Done :-)