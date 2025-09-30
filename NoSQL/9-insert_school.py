#!/usr/bin/env python3
""" Insert a document in a MongoDB collection """


def insert_school(mongo_collection, **kwargs):
    """Inserts a new document into a collection.
    Args:
        mongo_collection: pymongo collection object
        kwargs: key-value pairs to insert
    Returns:
        The _id of the inserted document
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
