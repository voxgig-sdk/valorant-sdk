-- Valorant SDK error

local json = require("dkjson")

local ValorantError = {}
ValorantError.__index = ValorantError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function ValorantError.new(code, msg, ctx)
  local self = setmetatable({}, ValorantError)
  self.is_sdk_error = true
  self.sdk = "Valorant"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  self.status = -1
  CONTEXT[self] = ctx
  return self
end


function ValorantError:context()
  return CONTEXT[self]
end


function ValorantError:error()
  return self.msg
end


function ValorantError:not_found()
  return 404 == self.status
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function ValorantError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function ValorantError:to_json()
  return json.encode(self:to_table())
end


function ValorantError:__tostring()
  return self.msg
end


function ValorantError.__tojson(self)
  return self:to_json()
end


return ValorantError
