#!/usr/bin/env python3
"""
This module defines a function that returns the length of elements in a sequence.
"""

from typing import List, Tuple, Iterable, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Takes a list (or any iterable) of sequences and returns a list of tuples,
    each containing the sequence and its length.

    """
    return [(i, len(i)) for i in lst]