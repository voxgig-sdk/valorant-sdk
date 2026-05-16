# Valorant SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ValorantUtility.registrar = ->(u) {
  u.clean = ValorantUtilities::Clean
  u.done = ValorantUtilities::Done
  u.make_error = ValorantUtilities::MakeError
  u.feature_add = ValorantUtilities::FeatureAdd
  u.feature_hook = ValorantUtilities::FeatureHook
  u.feature_init = ValorantUtilities::FeatureInit
  u.fetcher = ValorantUtilities::Fetcher
  u.make_fetch_def = ValorantUtilities::MakeFetchDef
  u.make_context = ValorantUtilities::MakeContext
  u.make_options = ValorantUtilities::MakeOptions
  u.make_request = ValorantUtilities::MakeRequest
  u.make_response = ValorantUtilities::MakeResponse
  u.make_result = ValorantUtilities::MakeResult
  u.make_point = ValorantUtilities::MakePoint
  u.make_spec = ValorantUtilities::MakeSpec
  u.make_url = ValorantUtilities::MakeUrl
  u.param = ValorantUtilities::Param
  u.prepare_auth = ValorantUtilities::PrepareAuth
  u.prepare_body = ValorantUtilities::PrepareBody
  u.prepare_headers = ValorantUtilities::PrepareHeaders
  u.prepare_method = ValorantUtilities::PrepareMethod
  u.prepare_params = ValorantUtilities::PrepareParams
  u.prepare_path = ValorantUtilities::PreparePath
  u.prepare_query = ValorantUtilities::PrepareQuery
  u.result_basic = ValorantUtilities::ResultBasic
  u.result_body = ValorantUtilities::ResultBody
  u.result_headers = ValorantUtilities::ResultHeaders
  u.transform_request = ValorantUtilities::TransformRequest
  u.transform_response = ValorantUtilities::TransformResponse
}
