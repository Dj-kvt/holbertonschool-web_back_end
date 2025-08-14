#!/usr/bin/env python3
"""
function index_range that return a the tupe with two contains

"""


def index_range(page, page_size):
    start = (page - 1) * page_size
    end = start + page_size

    return (start, end)
