# Valorant Golang SDK



The Golang SDK for the Valorant API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Agent(nil)` — each with the same small set of operations (`List`, `Load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/valorant-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/valorant-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/valorant-sdk/go=../valorant-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/valorant-sdk/go"
)

func main() {
    client := sdk.New()

    // List agent records — the value is the array of records itself.
    agents, err := client.Agent(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range agents.([]any) {
        fmt.Println(item)
    }

    // Load a single agent — the value is the loaded record.
    agent, err := client.Agent(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(agent)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
cosmetics, err := client.Cosmetic(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = cosmetics
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
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
client := sdk.Test()

cosmetic, err := client.Cosmetic(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(cosmetic) // the returned mock data
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
| `Agent` | `(data map[string]any) ValorantEntity` | Create an Agent entity instance. |
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
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    agent, err := client.Agent(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // agent is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Agent

| Field | Description |
| --- | --- |
| `"abilities"` |  |
| `"assetPath"` | Asset path in game files |
| `"background"` | URL to the agent's background image |
| `"backgroundGradientColors"` | Gradient colors for the agent's background |
| `"bustPortrait"` | URL to the agent's bust portrait |
| `"characterTags"` | Tags associated with the character |
| `"description"` | Description of the agent |
| `"developerName"` | Internal developer name |
| `"displayIcon"` | URL to the agent's display icon |
| `"displayIconSmall"` | URL to the agent's small display icon |
| `"displayName"` | Display name of the agent |
| `"fullPortrait"` | URL to the agent's full portrait |
| `"fullPortraitV2"` | URL to the agent's full portrait version 2 |
| `"isAvailableForTest"` | Whether the agent is available for testing |
| `"isBaseContent"` | Whether the agent is base content |
| `"isFullPortraitRightFacing"` | Whether the full portrait faces right |
| `"isPlayableCharacter"` | Whether the agent is playable |
| `"killfeedPortrait"` | URL to the agent's killfeed portrait |
| `"role"` |  |
| `"uuid"` | Unique identifier for the agent |
| `"voiceLine"` |  |

Operations: List, Load.

API path: `/v1/agents`

#### Competitive

| Field | Description |
| --- | --- |
| `"assetObjectName"` | Asset object name |
| `"assetPath"` | Asset path in game files |
| `"tiers"` |  |
| `"uuid"` | Unique identifier for the competitive tier set |

Operations: List.

API path: `/v1/competitivetiers`

#### Cosmetic

| Field | Description |
| --- | --- |
| `"animationGif"` | URL to the spray's animation GIF |
| `"animationPng"` | URL to the spray's animation PNG |
| `"assetPath"` | Asset path in game files |
| `"category"` | Category of the spray |
| `"displayIcon"` | URL to the buddy's display icon |
| `"displayName"` | Display name of the buddy |
| `"fullIcon"` | URL to the spray's full icon |
| `"fullTransparentIcon"` | URL to the spray's full transparent icon |
| `"hideIfNotOwned"` | Whether the spray is hidden if not owned |
| `"isHiddenIfNotOwned"` | Whether the buddy is hidden if not owned |
| `"isNullSpray"` | Whether this is a null spray |
| `"largeArt"` | URL to the card's large art |
| `"levels"` |  |
| `"smallArt"` | URL to the card's small art |
| `"themeUuid"` | UUID of the theme |
| `"uuid"` | Unique identifier for the buddy |
| `"wideArt"` | URL to the card's wide art |

Operations: List.

API path: `/v1/buddies`

#### GameMode

| Field | Description |
| --- | --- |
| `"allowsMatchTimeouts"` | Whether match timeouts are allowed |
| `"assetPath"` | Asset path in game files |
| `"displayIcon"` | URL to the game mode's display icon |
| `"displayName"` | Display name of the game mode |
| `"duration"` | Duration of the game mode |
| `"economyType"` | Type of economy system |
| `"gameFeatureOverrides"` | Game feature overrides |
| `"gameRuleBoolOverrides"` | Game rule boolean overrides |
| `"isMinimapHidden"` | Whether the minimap is hidden |
| `"isTeamVoiceAllowed"` | Whether team voice chat is allowed |
| `"orbCount"` | Number of orbs in the game mode |
| `"roundsPerHalf"` | Number of rounds per half |
| `"teamRoles"` | Team roles in the game mode |
| `"uuid"` | Unique identifier for the game mode |

Operations: List.

API path: `/v1/gamemodes`

#### Map

| Field | Description |
| --- | --- |
| `"assetPath"` | Asset path in game files |
| `"callouts"` |  |
| `"coordinates"` | Geographic coordinates of the map location |
| `"displayIcon"` | URL to the map's display icon |
| `"displayName"` | Display name of the map |
| `"listViewIcon"` | URL to the map's list view icon |
| `"mapUrl"` | URL to the map overview |
| `"narrativeDescription"` | Narrative description of the map |
| `"splash"` | URL to the map's splash image |
| `"tacticalDescription"` | Tactical description of the map |
| `"uuid"` | Unique identifier for the map |
| `"xMultiplier"` | X coordinate multiplier |
| `"xScalarToAdd"` | X scalar to add |
| `"yMultiplier"` | Y coordinate multiplier |
| `"yScalarToAdd"` | Y scalar to add |

Operations: List, Load.

API path: `/v1/maps`

#### Weapon

| Field | Description |
| --- | --- |
| `"assetPath"` | Asset path in game files |
| `"category"` | Weapon category (e.g., Rifle, Pistol) |
| `"defaultSkinUuid"` | UUID of the default skin |
| `"displayIcon"` | URL to the weapon's display icon |
| `"displayName"` | Display name of the weapon |
| `"killStreamIcon"` | URL to the weapon's kill stream icon |
| `"shopData"` |  |
| `"skins"` |  |
| `"uuid"` | Unique identifier for the weapon |
| `"weaponStats"` |  |

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
| `abilities` | `[]any` |  |
| `assetPath` | `string` | Asset path in game files |
| `background` | `string` | URL to the agent's background image |
| `backgroundGradientColors` | `[]any` | Gradient colors for the agent's background |
| `bustPortrait` | `string` | URL to the agent's bust portrait |
| `characterTags` | `[]any` | Tags associated with the character |
| `description` | `string` | Description of the agent |
| `developerName` | `string` | Internal developer name |
| `displayIcon` | `string` | URL to the agent's display icon |
| `displayIconSmall` | `string` | URL to the agent's small display icon |
| `displayName` | `string` | Display name of the agent |
| `fullPortrait` | `string` | URL to the agent's full portrait |
| `fullPortraitV2` | `string` | URL to the agent's full portrait version 2 |
| `isAvailableForTest` | `bool` | Whether the agent is available for testing |
| `isBaseContent` | `bool` | Whether the agent is base content |
| `isFullPortraitRightFacing` | `bool` | Whether the full portrait faces right |
| `isPlayableCharacter` | `bool` | Whether the agent is playable |
| `killfeedPortrait` | `string` | URL to the agent's killfeed portrait |
| `role` | `map[string]any` |  |
| `uuid` | `string` | Unique identifier for the agent |
| `voiceLine` | `map[string]any` |  |

#### Example: Load

```go
agent, err := client.Agent(nil).Load(map[string]any{"id": "agent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(agent) // the loaded record
```

#### Example: List

```go
agents, err := client.Agent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(agents) // the array of records
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
| `assetObjectName` | `string` | Asset object name |
| `assetPath` | `string` | Asset path in game files |
| `tiers` | `[]any` |  |
| `uuid` | `string` | Unique identifier for the competitive tier set |

#### Example: List

```go
competitives, err := client.Competitive(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(competitives) // the array of records
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
| `animationGif` | `string` | URL to the spray's animation GIF |
| `animationPng` | `string` | URL to the spray's animation PNG |
| `assetPath` | `string` | Asset path in game files |
| `category` | `string` | Category of the spray |
| `displayIcon` | `string` | URL to the buddy's display icon |
| `displayName` | `string` | Display name of the buddy |
| `fullIcon` | `string` | URL to the spray's full icon |
| `fullTransparentIcon` | `string` | URL to the spray's full transparent icon |
| `hideIfNotOwned` | `bool` | Whether the spray is hidden if not owned |
| `isHiddenIfNotOwned` | `bool` | Whether the buddy is hidden if not owned |
| `isNullSpray` | `bool` | Whether this is a null spray |
| `largeArt` | `string` | URL to the card's large art |
| `levels` | `[]any` |  |
| `smallArt` | `string` | URL to the card's small art |
| `themeUuid` | `string` | UUID of the theme |
| `uuid` | `string` | Unique identifier for the buddy |
| `wideArt` | `string` | URL to the card's wide art |

#### Example: List

```go
cosmetics, err := client.Cosmetic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cosmetics) // the array of records
```


### GameMode

Create an instance: `gameMode := client.GameMode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowsMatchTimeouts` | `bool` | Whether match timeouts are allowed |
| `assetPath` | `string` | Asset path in game files |
| `displayIcon` | `string` | URL to the game mode's display icon |
| `displayName` | `string` | Display name of the game mode |
| `duration` | `string` | Duration of the game mode |
| `economyType` | `string` | Type of economy system |
| `gameFeatureOverrides` | `[]any` | Game feature overrides |
| `gameRuleBoolOverrides` | `[]any` | Game rule boolean overrides |
| `isMinimapHidden` | `bool` | Whether the minimap is hidden |
| `isTeamVoiceAllowed` | `bool` | Whether team voice chat is allowed |
| `orbCount` | `int` | Number of orbs in the game mode |
| `roundsPerHalf` | `int` | Number of rounds per half |
| `teamRoles` | `[]any` | Team roles in the game mode |
| `uuid` | `string` | Unique identifier for the game mode |

#### Example: List

```go
gameModes, err := client.GameMode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(gameModes) // the array of records
```


### Map

Create an instance: `map_ := client.Map(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assetPath` | `string` | Asset path in game files |
| `callouts` | `[]any` |  |
| `coordinates` | `string` | Geographic coordinates of the map location |
| `displayIcon` | `string` | URL to the map's display icon |
| `displayName` | `string` | Display name of the map |
| `listViewIcon` | `string` | URL to the map's list view icon |
| `mapUrl` | `string` | URL to the map overview |
| `narrativeDescription` | `string` | Narrative description of the map |
| `splash` | `string` | URL to the map's splash image |
| `tacticalDescription` | `string` | Tactical description of the map |
| `uuid` | `string` | Unique identifier for the map |
| `xMultiplier` | `float64` | X coordinate multiplier |
| `xScalarToAdd` | `float64` | X scalar to add |
| `yMultiplier` | `float64` | Y coordinate multiplier |
| `yScalarToAdd` | `float64` | Y scalar to add |

#### Example: Load

```go
map_, err := client.Map(nil).Load(map[string]any{"id": "map_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(map_) // the loaded record
```

#### Example: List

```go
map_s, err := client.Map(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(map_s) // the array of records
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
| `assetPath` | `string` | Asset path in game files |
| `category` | `string` | Weapon category (e.g., Rifle, Pistol) |
| `defaultSkinUuid` | `string` | UUID of the default skin |
| `displayIcon` | `string` | URL to the weapon's display icon |
| `displayName` | `string` | Display name of the weapon |
| `killStreamIcon` | `string` | URL to the weapon's kill stream icon |
| `shopData` | `map[string]any` |  |
| `skins` | `[]any` |  |
| `uuid` | `string` | Unique identifier for the weapon |
| `weaponStats` | `map[string]any` |  |

#### Example: Load

```go
weapon, err := client.Weapon(nil).Load(map[string]any{"id": "weapon_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(weapon) // the loaded record
```

#### Example: List

```go
weapons, err := client.Weapon(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(weapons) // the array of records
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

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

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

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

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
cosmetic := client.Cosmetic(nil)
cosmetic.List(nil, nil)

// cosmetic.Data() now returns the cosmetic data from the last list
// cosmetic.Match() returns the last match criteria
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
