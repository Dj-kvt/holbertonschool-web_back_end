#!/usr/bin/env python3
""" Provides some stats about Nginx logs stored in MongoDB """
from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient("mongodb://127.0.0.1:27017")
    collection = client.logs.nginx

    total_logs = collection.count()
    print(f"{total_logs} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count({"method": method})
        print(f"\tmethod {method}: {count}")

    status_check = collection.count({"method": "GET", "path": "/status"})
    print(f"{status_check} status check")
