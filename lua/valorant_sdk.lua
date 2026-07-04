-- Valorant SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local ValorantSDK = {}
ValorantSDK.__index = ValorantSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

ValorantSDK._make_feature = _make_feature


function ValorantSDK.new(options)
  local self = setmetatable({}, ValorantSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features from config.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local feature_items = vs.items(feature_opts)
    if feature_items ~= nil then
      for _, item in ipairs(feature_items) do
        local fname = item[1]
        local fopts = helpers.to_map(item[2])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

  -- #BuildFeatures

  return self
end


function ValorantSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function ValorantSDK:get_utility()
  return Utility.copy(self._utility)
end


function ValorantSDK:get_root_ctx()
  return self._rootctx
end


function ValorantSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


function ValorantSDK:direct(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end



-- Idiomatic facade: client:agent():list() / client:agent():load({ id = ... })
function ValorantSDK:agent(data)
  local EntityMod = require("entity.agent_entity")
  if data == nil then
    if self._agent == nil then
      self._agent = EntityMod.new(self, nil)
    end
    return self._agent
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:agent() instead.
function ValorantSDK:Agent(data)
  local EntityMod = require("entity.agent_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:competitive():list() / client:competitive():load({ id = ... })
function ValorantSDK:competitive(data)
  local EntityMod = require("entity.competitive_entity")
  if data == nil then
    if self._competitive == nil then
      self._competitive = EntityMod.new(self, nil)
    end
    return self._competitive
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:competitive() instead.
function ValorantSDK:Competitive(data)
  local EntityMod = require("entity.competitive_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:cosmetic():list() / client:cosmetic():load({ id = ... })
function ValorantSDK:cosmetic(data)
  local EntityMod = require("entity.cosmetic_entity")
  if data == nil then
    if self._cosmetic == nil then
      self._cosmetic = EntityMod.new(self, nil)
    end
    return self._cosmetic
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:cosmetic() instead.
function ValorantSDK:Cosmetic(data)
  local EntityMod = require("entity.cosmetic_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:game_mode():list() / client:game_mode():load({ id = ... })
function ValorantSDK:game_mode(data)
  local EntityMod = require("entity.game_mode_entity")
  if data == nil then
    if self._game_mode == nil then
      self._game_mode = EntityMod.new(self, nil)
    end
    return self._game_mode
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:game_mode() instead.
function ValorantSDK:GameMode(data)
  local EntityMod = require("entity.game_mode_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:map():list() / client:map():load({ id = ... })
function ValorantSDK:map(data)
  local EntityMod = require("entity.map_entity")
  if data == nil then
    if self._map == nil then
      self._map = EntityMod.new(self, nil)
    end
    return self._map
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:map() instead.
function ValorantSDK:Map(data)
  local EntityMod = require("entity.map_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:weapon():list() / client:weapon():load({ id = ... })
function ValorantSDK:weapon(data)
  local EntityMod = require("entity.weapon_entity")
  if data == nil then
    if self._weapon == nil then
      self._weapon = EntityMod.new(self, nil)
    end
    return self._weapon
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:weapon() instead.
function ValorantSDK:Weapon(data)
  local EntityMod = require("entity.weapon_entity")
  return EntityMod.new(self, data)
end




function ValorantSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = ValorantSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return ValorantSDK
