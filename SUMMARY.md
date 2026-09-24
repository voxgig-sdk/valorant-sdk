# Valorant API

The Valorant API provides extensive data related to in-game items, assets, and other game features, sourced directly from the Valorant game files. This API automatically updates with each game patch, ensuring accurate and up-to-date information for developers and fans alike.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 6 entities and 11 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Agent

Results: Successful response with list of agents; Successful response with agent details.

SDK operations: `list`, `load`.

Key fields to recognise:

- `assetPath`: Asset path in game files
- `background`: URL to the agent&#39;s background image
- `backgroundGradientColors`: Gradient colors for the agent&#39;s background
- `bustPortrait`: URL to the agent&#39;s bust portrait
- `characterTags`: Tags associated with the character

### Competitive

Results: Successful response with competitive tier information.

SDK operations: `list`.

Key fields to recognise:

- `assetObjectName`: Asset object name
- `assetPath`: Asset path in game files
- `uuid`: Unique identifier for the competitive tier set

### Cosmetic

Results: Successful response with list of buddies; Successful response with list of player cards; Successful response with list of sprays.

SDK operations: `list`.

Key fields to recognise:

- `animationGif`: URL to the spray&#39;s animation GIF
- `animationPng`: URL to the spray&#39;s animation PNG
- `assetPath`: Asset path in game files
- `category`: Category of the spray
- `displayIcon`: URL to the buddy&#39;s display icon

### GameMode

Results: Successful response with list of game modes.

SDK operations: `list`.

Key fields to recognise:

- `allowsMatchTimeouts`: Whether match timeouts are allowed
- `assetPath`: Asset path in game files
- `displayIcon`: URL to the game mode&#39;s display icon
- `displayName`: Display name of the game mode
- `duration`: Duration of the game mode

### Map

Results: Successful response with list of maps; Successful response with map details.

SDK operations: `list`, `load`.

Key fields to recognise:

- `assetPath`: Asset path in game files
- `coordinates`: Geographic coordinates of the map location
- `displayIcon`: URL to the map&#39;s display icon
- `displayName`: Display name of the map
- `listViewIcon`: URL to the map&#39;s list view icon

### Weapon

Results: Successful response with list of weapons; Successful response with weapon details.

SDK operations: `list`, `load`.

Key fields to recognise:

- `assetPath`: Asset path in game files
- `category`: Weapon category (for example, Rifle, Pistol)
- `defaultSkinUuid`: UUID of the default skin
- `displayIcon`: URL to the weapon&#39;s display icon
- `displayName`: Display name of the weapon

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Agent | `list` | `GET /v1/agents` | See reference |
| Agent | `load` | `GET /v1/agents/{uuid}` | See reference |
| Competitive | `list` | `GET /v1/competitivetiers` | See reference |
| Cosmetic | `list` | `GET /v1/buddies` | See reference |
| Cosmetic | `list` | `GET /v1/cards` | See reference |
| Cosmetic | `list` | `GET /v1/sprays` | See reference |
| GameMode | `list` | `GET /v1/gamemodes` | See reference |
| Map | `list` | `GET /v1/maps` | See reference |
| Map | `load` | `GET /v1/maps/{uuid}` | See reference |
| Weapon | `list` | `GET /v1/weapons` | See reference |
| Weapon | `load` | `GET /v1/weapons/{uuid}` | See reference |

## Connect to the API

- Production server: `https://valorant-api.com`

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `valorant_list`: List records for an entity. Supported entities: `agent`, `competitive`, `cosmetic`, `game_mode`, `map`, `weapon`.
- `valorant_load`: Load one record for an entity. Supported entities: `agent`, `map`, `weapon`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

