# Agent entity test

require "minitest/autorun"
require "json"
require_relative "../Valorant_sdk"
require_relative "runner"

class AgentEntityTest < Minitest::Test
  def test_create_instance
    testsdk = ValorantSDK.test(nil, nil)
    ent = testsdk.Agent(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = agent_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "agent." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set VALORANT_TEST_AGENT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    agent_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.agent")))
    agent_ref01_data = nil
    if agent_ref01_data_raw.length > 0
      agent_ref01_data = Helpers.to_map(agent_ref01_data_raw[0][1])
    end

    # LIST
    agent_ref01_ent = client.Agent(nil)
    agent_ref01_match = {}

    agent_ref01_list_result, err = agent_ref01_ent.list(agent_ref01_match, nil)
    assert_nil err
    assert agent_ref01_list_result.is_a?(Array)

    # LOAD
    agent_ref01_match_dt0 = {}
    agent_ref01_data_dt0_loaded, err = agent_ref01_ent.load(agent_ref01_match_dt0, nil)
    assert_nil err
    assert !agent_ref01_data_dt0_loaded.nil?

  end
end

def agent_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "agent", "AgentTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = ValorantSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["agent01", "agent02", "agent03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["VALORANT_TEST_AGENT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "VALORANT_TEST_AGENT_ENTID" => idmap,
    "VALORANT_TEST_LIVE" => "FALSE",
    "VALORANT_TEST_EXPLAIN" => "FALSE",
    "VALORANT_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["VALORANT_TEST_AGENT_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["VALORANT_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["VALORANT_APIKEY"],
      },
      extra || {},
    ])
    client = ValorantSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["VALORANT_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["VALORANT_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
