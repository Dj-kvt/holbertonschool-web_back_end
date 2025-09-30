#!/usr/bin/env python3
""" Find schools by topic """


def schools_by_topic(mongo_collection, topic):
    """Returns list of schools having a specific topic.
    Args:
        mongo_collection: pymongo collection object
        topic (str): topic searched
    Returns:
        List of documents
    """
    return list(mongo_collection.find({"topics": topic}))
