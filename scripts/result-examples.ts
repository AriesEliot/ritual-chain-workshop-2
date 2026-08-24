import {
  normalizeValue,
} from "../utils/result-normalizer";

const values: unknown[] = [
  true,
  false,
  "YES",
  "no",
  "true",
  "0",
  "maybe",
  123,
];

console.log("Result normalization");
console.log("====================");

for (const value of values) {
  console.log(
    "input:",
    String(value),
  );

  console.log(
    "normalized:",
    normalizeValue(value),
  );

  console.log("");
}
