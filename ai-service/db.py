from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

def get_mongodb_client():
    # Get MongoDB URI from environment variable
    mongo_uri = os.getenv('MONGODB_URI', 'mongodb://localhost:27017')
    return MongoClient(mongo_uri)

def get_database():
    client = get_mongodb_client()
    return client['tortoise_db']  # Your database name 