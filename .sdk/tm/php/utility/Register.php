<?php
declare(strict_types=1);

// Valorant SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

ValorantUtility::setRegistrar(function (ValorantUtility $u): void {
    $u->clean = [ValorantClean::class, 'call'];
    $u->done = [ValorantDone::class, 'call'];
    $u->make_error = [ValorantMakeError::class, 'call'];
    $u->feature_add = [ValorantFeatureAdd::class, 'call'];
    $u->feature_hook = [ValorantFeatureHook::class, 'call'];
    $u->feature_init = [ValorantFeatureInit::class, 'call'];
    $u->fetcher = [ValorantFetcher::class, 'call'];
    $u->make_fetch_def = [ValorantMakeFetchDef::class, 'call'];
    $u->make_context = [ValorantMakeContext::class, 'call'];
    $u->make_options = [ValorantMakeOptions::class, 'call'];
    $u->make_request = [ValorantMakeRequest::class, 'call'];
    $u->make_response = [ValorantMakeResponse::class, 'call'];
    $u->make_result = [ValorantMakeResult::class, 'call'];
    $u->make_point = [ValorantMakePoint::class, 'call'];
    $u->make_spec = [ValorantMakeSpec::class, 'call'];
    $u->make_url = [ValorantMakeUrl::class, 'call'];
    $u->param = [ValorantParam::class, 'call'];
    $u->prepare_auth = [ValorantPrepareAuth::class, 'call'];
    $u->prepare_body = [ValorantPrepareBody::class, 'call'];
    $u->prepare_headers = [ValorantPrepareHeaders::class, 'call'];
    $u->prepare_method = [ValorantPrepareMethod::class, 'call'];
    $u->prepare_params = [ValorantPrepareParams::class, 'call'];
    $u->prepare_path = [ValorantPreparePath::class, 'call'];
    $u->prepare_query = [ValorantPrepareQuery::class, 'call'];
    $u->result_basic = [ValorantResultBasic::class, 'call'];
    $u->result_body = [ValorantResultBody::class, 'call'];
    $u->result_headers = [ValorantResultHeaders::class, 'call'];
    $u->transform_request = [ValorantTransformRequest::class, 'call'];
    $u->transform_response = [ValorantTransformResponse::class, 'call'];
});
