const SKIP_KEYS = new Set([
  'href',
  'slug',
  'image',
  'id',
  'icon',
  'scrollTarget',
  'variant',
  'more',
  'bento',
  'sliderValue',
  'kind',
  'category',
  'tier',
  'tag',
  'date',
  'readTime',
  'tabId',
  'phase',
  'value',
  'name',
]);

function shouldTranslateString(value: string): boolean {
  if (!value.trim()) return false;
  if (value.startsWith('/') || value.startsWith('http') || value.startsWith('mailto:') || value.startsWith('#')) {
    return false;
  }
  if (value.includes('../') || value.endsWith('.ts')) return false;
  if (value.startsWith('sm:col-span')) return false;
  if (value === 'nba2k27hack.net') return false;
  return true;
}

export function translateSafe<T>(value: T, map: Readonly<Record<string, string>>, parentKey?: string): T {
  if (typeof value === 'string') {
    if (parentKey && SKIP_KEYS.has(parentKey)) return value;
    if (!shouldTranslateString(value)) return value;
    return (map[value] ?? value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((entry) => translateSafe(entry, map)) as T;
  }

  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value)) {
      out[key] = translateSafe(child, map, key);
    }
    return out as T;
  }

  return value;
}
