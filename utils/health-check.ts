export type HealthState = {
  rpc: boolean;
  contract: boolean;
  network: boolean;
};

export function createHealthState(
  rpc: boolean,
  contract: boolean,
  network: boolean,
): HealthState {
  return {
    rpc,
    contract,
    network,
  };
}

export function isHealthy(
  state: HealthState,
): boolean {
  return (
    state.rpc &&
    state.contract &&
    state.network
  );
}

export function failedChecks(
  state: HealthState,
): string[] {
  const failed: string[] = [];

  if (!state.rpc) {
    failed.push("rpc");
  }

  if (!state.contract) {
    failed.push("contract");
  }

  if (!state.network) {
    failed.push("network");
  }

  return failed;
}

export function healthMessage(
  state: HealthState,
): string {
  if (isHealthy(state)) {
    return "All checks passed";
  }

  const failed =
    failedChecks(state);

  return `Failed: ${failed.join(", ")}`;
}

export function checkSummary(
  state: HealthState,
): string[] {
  return [
    `RPC: ${state.rpc ? "OK" : "FAIL"}`,
    `Contract: ${
      state.contract
        ? "OK"
        : "FAIL"
    }`,
    `Network: ${
      state.network
        ? "OK"
        : "FAIL"
    }`,
    healthMessage(state),
  ];
}
