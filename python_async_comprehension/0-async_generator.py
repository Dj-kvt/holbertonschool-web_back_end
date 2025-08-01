#!/usr/bin/env python3
"""
Async generator that yields 10 random numbers asynchronously.
"""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Coroutine that loops 10 times, asynchronously waits 1 second
    each iteration, and yields a random float between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
