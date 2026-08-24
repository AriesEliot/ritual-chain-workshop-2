import { expect } from "chai";

import {
  normalizeBoolean,
  normalizeString,
  normalizeValue,
} from "../utils/result-normalizer";

describe("result normalizer", function () {
  it("normalizes true", function () {
    expect(
      normalizeBoolean(true),
    ).to.equal("YES");
  });

  it("normalizes false", function () {
    expect(
      normalizeBoolean(false),
    ).to.equal("NO");
  });

  it("normalizes yes", function () {
    expect(
      normalizeString("yes"),
    ).to.equal("YES");
  });

  it("normalizes uppercase YES", function () {
    expect(
      normalizeString("YES"),
    ).to.equal("YES");
  });

  it("normalizes true string", function () {
    expect(
      normalizeString("true"),
    ).to.equal("YES");
  });

  it("normalizes no", function () {
    expect(
      normalizeString("no"),
    ).to.equal("NO");
  });

  it("returns unknown for other values", function () {
    expect(
      normalizeString("maybe"),
    ).to.equal("UNKNOWN");
  });

  it("handles unknown input types", function () {
    expect(
      normalizeValue(123),
    ).to.equal("UNKNOWN");
  });
});
