#!/usr/bin/env python3
"""Async function that returns list of delays using task_wait_random"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns task_wait_random n times with max_delay and returns list float

    """
    delays: List[float] = []

    # Define a coroutine to await each task and append its result
    async def collect(task: asyncio.Task):
        delay = await task
        delays.append(delay)

    # Launch all tasks concurrently using task_wait_random
    tasks = [asyncio.create_task(
        collect(task_wait_random(max_delay))) for _ in range(n)]

    # Wait for all the wrapped collector coroutines to finish
    for task in tasks:
        await task

    # Manually insert in order (without using sort)
    result: List[float] = []
    for d in delays:
        i = 0
        while i < len(result) and result[i] < d:
            i += 1
        result.insert(i, d)

    return result
