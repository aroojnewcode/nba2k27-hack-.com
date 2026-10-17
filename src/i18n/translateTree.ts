export function translateTree<T>(value: T, map: Readonly<Record<string, string>>): T {
  if (typeof value === 'string') {
    return (map[value] ?? value) as T;
  }
  if (Array.isArray(value)) {
    return value.map((entry) => translateTree(entry, map)) as T;
  }
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value)) {
      out[key] = translateTree(child, map);
    }
    return out as T;
  }
  return value;
}
