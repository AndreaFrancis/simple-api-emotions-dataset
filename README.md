
# Emotions API

This project is a very simple finder for text in a emotions dataset from Hugging Face hub.

Dataset: https://huggingface.co/datasets/emotion

## Architecture


## Requirements
- Default AWS profile configured in environment
- The configured user should have in general, the following policies allowed in IAM: 
    - AmazonAPIGatewayAdministrator
    - IAMFullAccess
    - CloudWatchLogsFullAccess
    - AWSLambdaBasicExecutionRole
    - AmazonDynamoDBFullAccess
    - AmazonS3FullAccess
    - AWSCloudFormationFullAccess
- serverless installed (https://www.serverless.com/)
- aws cli
- python
- nodejs
- By default the code is pointing to us-east-1 region (TO DO - Make it a parameter)

## Deployment steps
- Download/clone repository x
- Go to folder api-stack
- Execute ```serverless deploy``` (This will create all resources needed in AWS)
- Go to the root folder 
- Run crawler ```python crawler.py ``` (This will load the dataset into Dynamodb table)


## API Reference

#### Get all records

```http
  GET /emotions
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get records that matches search criteria

```http
  GET /emotions?text={value}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `value`      | `string` | Value of item to fetch |



## Demo

Insert gif or link to demo


## Demo
GET method is available at the moment

* Get all recods

https://di2k3dk192.execute-api.us-east-1.amazonaws.com/emotions

* Get records by search criteria (text query param)

https://di2k3dk192.execute-api.us-east-1.amazonaws.com/emotions?text=feeling
## TO DO

- Add support for upper/lower case search
- Make region parameterized
- Add more functions to perform other actions (Like calculated values, etc)