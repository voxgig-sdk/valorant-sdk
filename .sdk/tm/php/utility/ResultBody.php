<?php
declare(strict_types=1);

// Valorant SDK utility: result_body

class ValorantResultBody
{
    public static function call(ValorantContext $ctx): ?ValorantResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
