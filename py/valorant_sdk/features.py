# Valorant SDK feature factory

from valorant_sdk.feature.base_feature import ValorantBaseFeature
from valorant_sdk.feature.test_feature import ValorantTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ValorantBaseFeature(),
        "test": lambda: ValorantTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
