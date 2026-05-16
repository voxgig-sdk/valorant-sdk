# Valorant SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ValorantFeatures
  def self.make_feature(name)
    case name
    when "base"
      ValorantBaseFeature.new
    when "test"
      ValorantTestFeature.new
    else
      ValorantBaseFeature.new
    end
  end
end
