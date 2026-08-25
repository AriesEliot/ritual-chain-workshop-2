import {
  createHealthState,
  checkSummary,
} from "../utils/health-check";

const state =
  createHealthState(
    true,
    true,
    true,
  );

console.log(
  "Ritual workshop health check",
);

console.log(
  "============================",
);

for (const line of checkSummary(state)) {
  console.log(line);
}

console.log("");

console.log(
  "This is only a local sanity check.",
);

console.log(
  "It does not replace on-chain verification.",
);
