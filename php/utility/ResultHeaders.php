<?php
declare(strict_types=1);

// Valorant SDK utility: result_headers

class ValorantResultHeaders
{
    public static function call(ValorantContext $ctx): ?ValorantResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
