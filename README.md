# QR code generator

## Frontend
React app with typescript

### Commands
- yarn start - start dev server
- yarn build - build output into '/dist' folder
- yarn lint - statical code analysis
- yarn prettier - format code
### Deploy
Upload to S3 bucket using aws-cli:
```
aws2 s3 sync ./dist s3://bucket-name
```

## Backend
AWS lambda function written in Go

### Deploy
```sh
GOOS=linux go build main.go # Creates binary 'main'
zip main.zip main # Creates zip file from binary
aws2 lambda update-function-code --function-name my-lambda --zip-file fileb://main.zip ## Uploads code to AWS lambda
```