# Valorant SDK utility: make_context

from projectname_sdk.core.context import ValorantContext


def make_context_util(ctxmap, basectx):
    return ValorantContext(ctxmap, basectx)
