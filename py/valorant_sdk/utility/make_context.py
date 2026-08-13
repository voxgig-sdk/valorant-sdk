# Valorant SDK utility: make_context

from valorant_sdk.core.context import ValorantContext


def make_context_util(ctxmap, basectx):
    return ValorantContext(ctxmap, basectx)
