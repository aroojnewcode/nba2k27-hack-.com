/** Blog index topic filters + Starwind sort select. */
export function initBlogIndexFilters(emptyMessage?: string) {
  const grid = document.getElementById('blog-grid');
  const emptyEl = document.getElementById('blog-empty');
  const resolvedEmptyMessage =
    emptyMessage ??
    emptyEl?.dataset.emptyMessage ??
    emptyEl?.textContent?.trim() ??
    'No articles match this filter.';
  const sortRoot = document.getElementById('blog-sort-select');
  const searchInput = document.querySelector<HTMLInputElement>('[data-blog-search]');
  if (!grid) return;

  const filters = document.querySelectorAll<HTMLButtonElement>('[data-blog-filter]');

  const gridCards = () => [...grid.querySelectorAll<HTMLElement>('[data-blog-card]')];

  const activeTag = () =>
    document.querySelector<HTMLButtonElement>('[data-blog-filter][aria-pressed="true"]')?.getAttribute(
      'data-blog-filter',
    ) ?? 'all';

  const getSortSelectRoot = () =>
    sortRoot?.querySelector<HTMLElement>('[data-sw-select]') ??
    document.getElementById('blog-sort');

  const getSort = () => {
    const root = getSortSelectRoot();
    const fromAttr = root?.getAttribute('data-value');
    if (fromAttr) return fromAttr;
    const input = sortRoot?.querySelector<HTMLInputElement>('[data-sw-select-input]');
    if (input?.value) return input.value;
    const named = sortRoot?.querySelector<HTMLInputElement>('input[name="blog-sort"]');
    return named?.value || 'newest';
  };

  const getSearchQuery = () => searchInput?.value.trim().toLowerCase() ?? '';

  const tagMatches = (el: HTMLElement, tag: string) =>
    tag === 'all' || el.getAttribute('data-tag') === tag;

  const searchMatches = (el: HTMLElement) => {
    const q = getSearchQuery();
    if (!q) return true;
    const hay = el.getAttribute('data-search') ?? el.textContent?.toLowerCase() ?? '';
    return hay.includes(q);
  };

  const compareCards = (a: HTMLElement, b: HTMLElement, sort: string) => {
    const tsA = Number(a.getAttribute('data-ts') ?? 0);
    const tsB = Number(b.getAttribute('data-ts') ?? 0);
    const readA = Number(a.getAttribute('data-read-minutes') ?? 0);
    const readB = Number(b.getAttribute('data-read-minutes') ?? 0);
    if (sort === 'oldest') return tsA - tsB;
    if (sort === 'short') return readA - readB;
    if (sort === 'long') return readB - readA;
    return tsB - tsA;
  };

  const apply = (sortOverride?: string) => {
    const tag = activeTag();
    const sort = sortOverride ?? getSort();
    const items = gridCards();

    const sorted = [...items].sort((a, b) => compareCards(a, b, sort));
    sorted.forEach((el) => grid.appendChild(el));

    let visibleCount = 0;
    items.forEach((el) => {
      const match = tagMatches(el, tag) && searchMatches(el);
      el.classList.toggle('hidden', !match);
      if (match) visibleCount += 1;
    });

    if (emptyEl) {
      emptyEl.classList.toggle('hidden', visibleCount > 0);
      emptyEl.textContent = resolvedEmptyMessage;
    }
  };

  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      apply();
    });
  });

  searchInput?.addEventListener('input', () => apply());

  const bindSortSelect = () => {
    const selectRoot = getSortSelectRoot();
    if (!selectRoot || selectRoot.dataset.blogSortBound === 'true') return false;

    selectRoot.dataset.blogSortBound = 'true';

    const onSortChange = (value?: string) => apply(value || undefined);

    selectRoot.addEventListener('starwind:value-change', (event) => {
      const value = (event as CustomEvent<{ value?: string | null }>).detail?.value;
      onSortChange(value ?? undefined);
    });
    selectRoot.addEventListener('starwind-select:change', () => onSortChange());

    const hiddenInput = sortRoot?.querySelector<HTMLInputElement>('[data-sw-select-input]');
    if (hiddenInput) {
      let lastValue = hiddenInput.value;
      const syncFromInput = () => {
        if (hiddenInput.value === lastValue) return;
        lastValue = hiddenInput.value;
        onSortChange(lastValue);
      };
      hiddenInput.addEventListener('change', syncFromInput);
      hiddenInput.addEventListener('input', syncFromInput);
    }

    selectRoot.addEventListener('click', (event) => {
      const item = (event.target as Element | null)?.closest<HTMLElement>('[data-sw-select-item]');
      const value = item?.getAttribute('data-value');
      if (!value) return;
      window.requestAnimationFrame(() => onSortChange(value));
    });

    return true;
  };

  if (!bindSortSelect() && sortRoot) {
    const observer = new MutationObserver(() => {
      if (bindSortSelect()) observer.disconnect();
    });
    observer.observe(sortRoot, { childList: true, subtree: true });
    window.setTimeout(() => {
      bindSortSelect();
      observer.disconnect();
    }, 2000);
  }

  requestAnimationFrame(apply);
  window.setTimeout(apply, 0);
}
