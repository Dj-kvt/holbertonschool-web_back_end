#!/usr/bin/env python3
"""Measures runtime of wait_n and returns average time per call"""
import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the average execution time of wait_n(n, max_delay)

    """
    start_time = time.time()  # Record start time
    asyncio.run(wait_n(n, max_delay))  # Run the asynchronous wait_n coroutine
    end_time = time.time()  # Record end time

    total_time = end_time - start_time  # Total time elapsed
    return total_time / n  # Average time per coroutine