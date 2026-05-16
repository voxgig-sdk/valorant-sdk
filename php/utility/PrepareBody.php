<?php
declare(strict_types=1);

// Valorant SDK utility: prepare_body

class ValorantPrepareBody
{
    public static function call(ValorantContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
