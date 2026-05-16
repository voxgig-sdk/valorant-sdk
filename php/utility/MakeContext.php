<?php
declare(strict_types=1);

// Valorant SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ValorantMakeContext
{
    public static function call(array $ctxmap, ?ValorantContext $basectx): ValorantContext
    {
        return new ValorantContext($ctxmap, $basectx);
    }
}
