<?php
declare(strict_types=1);

// Valorant SDK base feature

class ValorantBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ValorantContext $ctx, array $options): void {}
    public function PostConstruct(ValorantContext $ctx): void {}
    public function PostConstructEntity(ValorantContext $ctx): void {}
    public function SetData(ValorantContext $ctx): void {}
    public function GetData(ValorantContext $ctx): void {}
    public function GetMatch(ValorantContext $ctx): void {}
    public function SetMatch(ValorantContext $ctx): void {}
    public function PrePoint(ValorantContext $ctx): void {}
    public function PreSpec(ValorantContext $ctx): void {}
    public function PreRequest(ValorantContext $ctx): void {}
    public function PreResponse(ValorantContext $ctx): void {}
    public function PreResult(ValorantContext $ctx): void {}
    public function PreDone(ValorantContext $ctx): void {}
    public function PreUnexpected(ValorantContext $ctx): void {}
}
