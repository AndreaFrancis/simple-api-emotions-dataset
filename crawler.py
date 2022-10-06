import uuid
import boto3
from datasets import load_dataset
from botocore.config import Config

config = Config(
    region_name = 'us-east-1'
)

dynamodb = boto3.resource('dynamodb', config = config)
table = dynamodb.Table('emotionsTable')

split_name = 'train'
dataset = load_dataset('emotion', split = split_name)
df_pandas = dataset.to_pandas()

for index, row in df_pandas.iterrows():
    emotion = {'id': str(uuid.uuid1()), 'text': row[0], 'label': row[1] }
    table.put_item(Item=emotion)