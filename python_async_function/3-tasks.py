#!/usr/bin/env python3
"""Creates and returns an asyncio.Task for wait_random"""
import asyncio
from typing import Callable
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Returns an asyncio.Task that will run wait_random with given max_delay.

    """
    return asyncio.create_task(wait_random(max_delay))
