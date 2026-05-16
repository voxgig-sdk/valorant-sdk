package = "voxgig-sdk-valorant"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/valorant-sdk.git"
}
description = {
  summary = "Valorant SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["valorant_sdk"] = "valorant_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
