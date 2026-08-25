import { expect } from "chai";

import {
  createHealthState,
  isHealthy,
  failedChecks,
  healthMessage,
  checkSummary,
} from "../utils/health-check";

describe("health check", function () {
  it("creates a healthy state", function () {
    const state =
      createHealthState(
        true,
        true,
        true,
      );

    expect(
      isHealthy(state),
    ).to.equal(true);
  });

  it("detects a failed rpc", function () {
    const state =
      createHealthState(
        false,
        true,
        true,
      );

    expect(
      isHealthy(state),
    ).to.equal(false);

    expect(
      failedChecks(state),
    ).to.deep.equal(["rpc"]);
  });

  it("detects multiple failures", function () {
    const state =
      createHealthState(
        false,
        false,
        true,
      );

    expect(
      failedChecks(state),
    ).to.deep.equal([
      "rpc",
      "contract",
    ]);
  });

  it("returns a healthy message", function () {
    const state =
      createHealthState(
        true,
        true,
        true,
      );

    expect(
      healthMessage(state),
    ).to.equal(
      "All checks passed",
    );
  });

  it("returns failed checks", function () {
    const state =
      createHealthState(
        true,
        false,
        true,
      );

    expect(
      healthMessage(state),
    ).to.contain(
      "contract",
    );
  });

  it("creates a readable summary", function () {
    const state =
      createHealthState(
        true,
        false,
        true,
      );

    const summary =
      checkSummary(state);

    expect(summary)
      .to.have.length(4);

    expect(summary[1])
      .to.equal(
        "Contract: FAIL",
      );
  });
});
