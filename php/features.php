<?php
declare(strict_types=1);

// Valorant SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ValorantFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ValorantBaseFeature();
            case "test":
                return new ValorantTestFeature();
            default:
                return new ValorantBaseFeature();
        }
    }
}
