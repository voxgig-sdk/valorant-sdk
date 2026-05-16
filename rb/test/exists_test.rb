# Valorant SDK exists test

require "minitest/autorun"
require_relative "../Valorant_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ValorantSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
