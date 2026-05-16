# Valorant SDK utility: feature_add
module ValorantUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
