<?php
declare(strict_types=1);

// Valorant SDK utility: feature_add

class ValorantFeatureAdd
{
    public static function call(ValorantContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
