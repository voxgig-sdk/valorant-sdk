# Valorant SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ValorantFeatures
  def self.make_feature(name)
    case name
    when "base"
      ValorantBaseFeature.new
    when "ratelimit"
      ValorantRatelimitFeature.new
    when "retry"
      ValorantRetryFeature.new
    when "test"
      ValorantTestFeature.new
    when "timeout"
      ValorantTimeoutFeature.new
    else
      ValorantBaseFeature.new
    end
  end
end
