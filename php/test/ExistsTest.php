<?php
declare(strict_types=1);

// Valorant SDK exists test

require_once __DIR__ . '/../valorant_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ValorantSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
