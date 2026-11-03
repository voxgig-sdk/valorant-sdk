# Valorant SDK utility: prepare_body
require_relative 'media'
module ValorantUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return ValorantUtilities.raw_body(ctx.reqdata) if ValorantUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
