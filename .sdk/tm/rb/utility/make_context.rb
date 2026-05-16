# Valorant SDK utility: make_context
require_relative '../core/context'
module ValorantUtilities
  MakeContext = ->(ctxmap, basectx) {
    ValorantContext.new(ctxmap, basectx)
  }
end
