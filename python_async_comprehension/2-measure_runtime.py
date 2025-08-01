#!/usr/bin/env python3
"""
Coroutine that measures runtime of running async_comprehension 4 times in parallel.
"""

import asyncio
from time import perf_counter
from typing import Coroutine
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Runs async_comprehension 4 times concurrently,
    measures total runtime and returns it.
    """
    start = perf_counter()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    end = perf_counter()
    return end - start
