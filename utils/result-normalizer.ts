export type NormalizedResult =
  | "YES"
  | "NO"
  | "UNKNOWN";

export function normalizeBoolean(
  value: boolean,
): NormalizedResult {
  return value
    ? "YES"
    : "NO";
}

export function normalizeString(
  value: string,
): NormalizedResult {
  const normalized =
    value.trim().toLowerCase();

  if (
    normalized === "yes" ||
    normalized === "true" ||
    normalized === "1"
  ) {
    return "YES";
  }

  if (
    normalized === "no" ||
    normalized === "false" ||
    normalized === "0"
  ) {
    return "NO";
  }

  return "UNKNOWN";
}

export function normalizeValue(
  value: unknown,
): NormalizedResult {
  if (typeof value === "boolean") {
    return normalizeBoolean(value);
  }

  if (typeof value === "string") {
    return normalizeString(value);
  }

  return "UNKNOWN";
}
