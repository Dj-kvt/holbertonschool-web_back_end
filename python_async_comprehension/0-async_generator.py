#!/usr/bin/env python3
"""
0-async_generator module
Defines an async generator coroutine yielding 10 random numbers asynchronously.
"""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Coroutine that loops 10 times, each iteration:
    - asynchronously waits 1 second,
    - yields a random float number between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.random() * 10
