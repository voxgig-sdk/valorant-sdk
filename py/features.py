# Valorant SDK feature factory

from feature.base_feature import ValorantBaseFeature
from feature.test_feature import ValorantTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ValorantBaseFeature(),
        "test": lambda: ValorantTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
