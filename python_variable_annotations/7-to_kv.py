#!/usr/bin/env python3
"""
This module provides a function that returns a key-value pair tuple.
The value is the square of a number (int or float), always returned as a float.
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Return a tuple with a string and the square of a number as float.

    """
    return (k, float(v ** 2))
