#!/usr/bin/env python3
"""Asynchronous coroutine that spawns wait_random n times concurrently"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns wait_random n times with max_delay and returns list of delays.

    """
    delays: List[float] = []

    async def collect_delay():
        delay = await wait_random(max_delay)
        delays.append(delay)

    tasks = [asyncio.create_task(collect_delay()) for _ in range(n)]

    for task in tasks:
        await task

    result: List[float] = []
    for d in delays:
        i = 0
        while i < len(result) and result[i] < d:
            i += 1
        result.insert(i, d)

    return result