type PlainObject = Record<string, unknown>;

function isPlainObject(value: unknown): value is PlainObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/** Deep merge `patch` into `base`. Arrays and primitives from patch replace base values. */
export function deepMerge<T>(base: T, patch: Partial<T>): T {
  if (patch === undefined || patch === null) return base;
  if (!isPlainObject(base) || !isPlainObject(patch)) {
    return (patch as T) ?? base;
  }

  const result: PlainObject = { ...(base as PlainObject) };

  for (const key of Object.keys(patch)) {
    const patchVal = patch[key as keyof T];
    if (patchVal === undefined) continue;
    const baseVal = result[key];

    if (Array.isArray(patchVal)) {
      result[key] = patchVal;
    } else if (isPlainObject(patchVal) && isPlainObject(baseVal)) {
      result[key] = deepMerge(baseVal, patchVal as PlainObject);
    } else {
      result[key] = patchVal;
    }
  }

  return result as T;
}
