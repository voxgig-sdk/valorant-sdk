# ProjectName SDK exists test

import pytest
from valorant_sdk import ValorantSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ValorantSDK.test(None, None)
        assert testsdk is not None
