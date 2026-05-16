-- Valorant SDK error

local ValorantError = {}
ValorantError.__index = ValorantError


function ValorantError.new(code, msg, ctx)
  local self = setmetatable({}, ValorantError)
  self.is_sdk_error = true
  self.sdk = "Valorant"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ValorantError:error()
  return self.msg
end


function ValorantError:__tostring()
  return self.msg
end


return ValorantError
