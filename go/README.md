# Valorant Golang SDK

The Golang SDK for the Valorant API. Provides an entity-oriented interface using standard Go conventions — no generics required, data flows as `map[string]any`.


## Install
```bash
go get github.com/voxgig-sdk/valorant-sdk/go
```

If the module is not yet published to a registry, use a `replace` directive
in your `go.mod` to point to a local checkout:

```bash
go mod edit -replace github.com/voxgig-sdk/valorant-sdk/go=../path/to/github.com/voxgig-sdk/valorant-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```go
package main

import (
    "fmt"

    sdk "github.com/voxgig-sdk/valorant-sdk/go"
    "github.com/voxgig-sdk/valorant-sdk/go/core"
)

func main() {
    client := sdk.NewValorantSDK(map[string]any{})
```

### 2. List agents

```go
    result, err := client.Agent(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }

    rm := core.ToMapAny(result)
    if rm["ok"] == true {
        for _, item := range rm["data"].([]any) {
            p := core.ToMapAny(item)
            fmt.Println(p["id"], p["name"])
        }
    }
```

### 3. Load a agent

```go
    result, err = client.Agent(nil).Load(
        map[string]any{"id": "example_id"}, nil,
    )
    if err != nil {
        panic(err)
    }

    rm = core.ToMapAny(result)
    if rm["ok"] == true {
        fmt.Println(rm["data"])
    }
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.TestSDK(nil, nil)

result, err := client.Planet(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
// result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewValorantSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
VALORANT_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewValorantSDK

```go
func NewValorantSDK(options map[string]any) *ValorantSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *ValorantSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### ValorantSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Agent` | `(data map[string]any) ValorantEntity` | Create a Agent entity instance. |
| `Competitive` | `(data map[string]any) ValorantEntity` | Create a Competitive entity instance. |
| `Cosmetic` | `(data map[string]any) ValorantEntity` | Create a Cosmetic entity instance. |
| `GameMode` | `(data map[string]any) ValorantEntity` | Create a GameMode entity instance. |
| `Map` | `(data map[string]any) ValorantEntity` | Create a Map entity instance. |
| `Weapon` | `(data map[string]any) ValorantEntity` | Create a Weapon entity instance. |

### Entity interface (ValorantEntity)

All entities implement the `ValorantEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(any, error)`. The `any` value is a
`map[string]any` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `"ok"` | `bool` | `true` if the HTTP status is 2xx. |
| `"status"` | `int` | HTTP status code. |
| `"headers"` | `map[string]any` | Response headers. |
| `"data"` | `any` | Parsed JSON response body. |

On error, `"ok"` is `false` and `"err"` contains the error value.

### Entities

#### Agent

| Field | Description |
| --- | --- |
| `"ability"` |  |
| `"asset_path"` |  |
| `"background"` |  |
| `"background_gradient_color"` |  |
| `"bust_portrait"` |  |
| `"character_tag"` |  |
| `"data"` |  |
| `"description"` |  |
| `"developer_name"` |  |
| `"display_icon"` |  |
| `"display_icon_small"` |  |
| `"display_name"` |  |
| `"full_portrait"` |  |
| `"full_portrait_v2"` |  |
| `"is_available_for_test"` |  |
| `"is_base_content"` |  |
| `"is_full_portrait_right_facing"` |  |
| `"is_playable_character"` |  |
| `"killfeed_portrait"` |  |
| `"role"` |  |
| `"status"` |  |
| `"uuid"` |  |
| `"voice_line"` |  |

Operations: List, Load.

API path: `/v1/agents`

#### Competitive

| Field | Description |
| --- | --- |
| `"asset_object_name"` |  |
| `"asset_path"` |  |
| `"tier"` |  |
| `"uuid"` |  |

Operations: List.

API path: `/v1/competitivetiers`

#### Cosmetic

| Field | Description |
| --- | --- |
| `"animation_gif"` |  |
| `"animation_png"` |  |
| `"asset_path"` |  |
| `"category"` |  |
| `"display_icon"` |  |
| `"display_name"` |  |
| `"full_icon"` |  |
| `"full_transparent_icon"` |  |
| `"hide_if_not_owned"` |  |
| `"is_hidden_if_not_owned"` |  |
| `"is_null_spray"` |  |
| `"large_art"` |  |
| `"level"` |  |
| `"small_art"` |  |
| `"theme_uuid"` |  |
| `"uuid"` |  |
| `"wide_art"` |  |

Operations: List.

API path: `/v1/buddies`

#### GameMode

| Field | Description |
| --- | --- |
| `"allows_match_timeout"` |  |
| `"asset_path"` |  |
| `"display_icon"` |  |
| `"display_name"` |  |
| `"duration"` |  |
| `"economy_type"` |  |
| `"game_feature_override"` |  |
| `"game_rule_bool_override"` |  |
| `"is_minimap_hidden"` |  |
| `"is_team_voice_allowed"` |  |
| `"orb_count"` |  |
| `"rounds_per_half"` |  |
| `"team_role"` |  |
| `"uuid"` |  |

Operations: List.

API path: `/v1/gamemodes`

#### Map

| Field | Description |
| --- | --- |
| `"asset_path"` |  |
| `"callout"` |  |
| `"coordinate"` |  |
| `"data"` |  |
| `"display_icon"` |  |
| `"display_name"` |  |
| `"list_view_icon"` |  |
| `"map_url"` |  |
| `"narrative_description"` |  |
| `"splash"` |  |
| `"status"` |  |
| `"tactical_description"` |  |
| `"uuid"` |  |
| `"x_multiplier"` |  |
| `"x_scalar_to_add"` |  |
| `"y_multiplier"` |  |
| `"y_scalar_to_add"` |  |

Operations: List, Load.

API path: `/v1/maps`

#### Weapon

| Field | Description |
| --- | --- |
| `"asset_path"` |  |
| `"category"` |  |
| `"data"` |  |
| `"default_skin_uuid"` |  |
| `"display_icon"` |  |
| `"display_name"` |  |
| `"kill_stream_icon"` |  |
| `"shop_data"` |  |
| `"skin"` |  |
| `"status"` |  |
| `"uuid"` |  |
| `"weapon_stat"` |  |

Operations: List, Load.

API path: `/v1/weapons`



## Entities


### Agent

Create an instance: `agent := client.Agent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ability` | ``$ARRAY`` |  |
| `asset_path` | ``$STRING`` |  |
| `background` | ``$STRING`` |  |
| `background_gradient_color` | ``$ARRAY`` |  |
| `bust_portrait` | ``$STRING`` |  |
| `character_tag` | ``$ARRAY`` |  |
| `data` | ``$OBJECT`` |  |
| `description` | ``$STRING`` |  |
| `developer_name` | ``$STRING`` |  |
| `display_icon` | ``$STRING`` |  |
| `display_icon_small` | ``$STRING`` |  |
| `display_name` | ``$STRING`` |  |
| `full_portrait` | ``$STRING`` |  |
| `full_portrait_v2` | ``$STRING`` |  |
| `is_available_for_test` | ``$BOOLEAN`` |  |
| `is_base_content` | ``$BOOLEAN`` |  |
| `is_full_portrait_right_facing` | ``$BOOLEAN`` |  |
| `is_playable_character` | ``$BOOLEAN`` |  |
| `killfeed_portrait` | ``$STRING`` |  |
| `role` | ``$OBJECT`` |  |
| `status` | ``$INTEGER`` |  |
| `uuid` | ``$STRING`` |  |
| `voice_line` | ``$OBJECT`` |  |

#### Example: Load

```go
result, err := client.Agent(nil).Load(map[string]any{"id": "agent_id"}, nil)
```

#### Example: List

```go
results, err := client.Agent(nil).List(nil, nil)
```


### Competitive

Create an instance: `competitive := client.Competitive(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_object_name` | ``$STRING`` |  |
| `asset_path` | ``$STRING`` |  |
| `tier` | ``$ARRAY`` |  |
| `uuid` | ``$STRING`` |  |

#### Example: List

```go
results, err := client.Competitive(nil).List(nil, nil)
```


### Cosmetic

Create an instance: `cosmetic := client.Cosmetic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animation_gif` | ``$STRING`` |  |
| `animation_png` | ``$STRING`` |  |
| `asset_path` | ``$STRING`` |  |
| `category` | ``$STRING`` |  |
| `display_icon` | ``$STRING`` |  |
| `display_name` | ``$STRING`` |  |
| `full_icon` | ``$STRING`` |  |
| `full_transparent_icon` | ``$STRING`` |  |
| `hide_if_not_owned` | ``$BOOLEAN`` |  |
| `is_hidden_if_not_owned` | ``$BOOLEAN`` |  |
| `is_null_spray` | ``$BOOLEAN`` |  |
| `large_art` | ``$STRING`` |  |
| `level` | ``$ARRAY`` |  |
| `small_art` | ``$STRING`` |  |
| `theme_uuid` | ``$STRING`` |  |
| `uuid` | ``$STRING`` |  |
| `wide_art` | ``$STRING`` |  |

#### Example: List

```go
results, err := client.Cosmetic(nil).List(nil, nil)
```


### GameMode

Create an instance: `game_mode := client.GameMode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allows_match_timeout` | ``$BOOLEAN`` |  |
| `asset_path` | ``$STRING`` |  |
| `display_icon` | ``$STRING`` |  |
| `display_name` | ``$STRING`` |  |
| `duration` | ``$STRING`` |  |
| `economy_type` | ``$STRING`` |  |
| `game_feature_override` | ``$ARRAY`` |  |
| `game_rule_bool_override` | ``$ARRAY`` |  |
| `is_minimap_hidden` | ``$BOOLEAN`` |  |
| `is_team_voice_allowed` | ``$BOOLEAN`` |  |
| `orb_count` | ``$INTEGER`` |  |
| `rounds_per_half` | ``$INTEGER`` |  |
| `team_role` | ``$ARRAY`` |  |
| `uuid` | ``$STRING`` |  |

#### Example: List

```go
results, err := client.GameMode(nil).List(nil, nil)
```


### Map

Create an instance: `map := client.Map(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_path` | ``$STRING`` |  |
| `callout` | ``$ARRAY`` |  |
| `coordinate` | ``$STRING`` |  |
| `data` | ``$OBJECT`` |  |
| `display_icon` | ``$STRING`` |  |
| `display_name` | ``$STRING`` |  |
| `list_view_icon` | ``$STRING`` |  |
| `map_url` | ``$STRING`` |  |
| `narrative_description` | ``$STRING`` |  |
| `splash` | ``$STRING`` |  |
| `status` | ``$INTEGER`` |  |
| `tactical_description` | ``$STRING`` |  |
| `uuid` | ``$STRING`` |  |
| `x_multiplier` | ``$NUMBER`` |  |
| `x_scalar_to_add` | ``$NUMBER`` |  |
| `y_multiplier` | ``$NUMBER`` |  |
| `y_scalar_to_add` | ``$NUMBER`` |  |

#### Example: Load

```go
result, err := client.Map(nil).Load(map[string]any{"id": "map_id"}, nil)
```

#### Example: List

```go
results, err := client.Map(nil).List(nil, nil)
```


### Weapon

Create an instance: `weapon := client.Weapon(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_path` | ``$STRING`` |  |
| `category` | ``$STRING`` |  |
| `data` | ``$OBJECT`` |  |
| `default_skin_uuid` | ``$STRING`` |  |
| `display_icon` | ``$STRING`` |  |
| `display_name` | ``$STRING`` |  |
| `kill_stream_icon` | ``$STRING`` |  |
| `shop_data` | ``$OBJECT`` |  |
| `skin` | ``$ARRAY`` |  |
| `status` | ``$INTEGER`` |  |
| `uuid` | ``$STRING`` |  |
| `weapon_stat` | ``$OBJECT`` |  |

#### Example: Load

```go
result, err := client.Weapon(nil).Load(map[string]any{"id": "weapon_id"}, nil)
```

#### Example: List

```go
results, err := client.Weapon(nil).List(nil, nil)
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller. An unexpected panic triggers the
`PreUnexpected` hook.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/valorant-sdk/go/
├── valorant.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/valorant-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
moon := client.Moon(nil)
moon.Load(map[string]any{"planet_id": "earth", "id": "luna"}, nil)

// moon.Data() now returns the loaded moon data
// moon.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
