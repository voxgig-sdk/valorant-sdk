# Valorant SDK feature factory

from valorant_sdk.feature.base_feature import ValorantBaseFeature
from valorant_sdk.feature.ratelimit_feature import ValorantRatelimitFeature
from valorant_sdk.feature.retry_feature import ValorantRetryFeature
from valorant_sdk.feature.test_feature import ValorantTestFeature
from valorant_sdk.feature.timeout_feature import ValorantTimeoutFeature


_FEATURES = {
    "base": lambda: ValorantBaseFeature(),
    "ratelimit": lambda: ValorantRatelimitFeature(),
    "retry": lambda: ValorantRetryFeature(),
    "test": lambda: ValorantTestFeature(),
    "timeout": lambda: ValorantTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
