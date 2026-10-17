/** Forum index: sort, filter, search, pagination. */
export function initForumIndex() {
  const cards = [...document.querySelectorAll<HTMLElement>('[data-forum-card]')];
  const sortButtons = [...document.querySelectorAll<HTMLButtonElement>('[data-forum-sort]')];
  const filterButtons = [...document.querySelectorAll<HTMLButtonElement>('[data-forum-filter]')];
  const searchInput = document.querySelector<HTMLInputElement>('[data-forum-search]');
  const list = document.querySelector<HTMLElement>('.forum-post-list');
  const pagination = document.querySelector<HTMLElement>('[data-forum-pagination]');
  const pageButtons = document.querySelector<HTMLElement>('[data-page-buttons]');
  const pageStatus = document.querySelector<HTMLElement>('[data-page-status]');
  const countStatus = document.querySelector<HTMLElement>('[data-forum-count]');
  const visibleCount = document.querySelector<HTMLElement>('[data-forum-visible-count]');
  const emptyState = document.querySelector<HTMLElement>('[data-forum-empty]');
  const previousButton = document.querySelector<HTMLButtonElement>('[data-page-previous]');
  const nextButton = document.querySelector<HTMLButtonElement>('[data-page-next]');

  if (!list || cards.length === 0) return;

  const pageSize = 20;
  let currentPage = 1;
  let activeFilter = new URLSearchParams(window.location.search).get('category') ?? 'all';

  const updateForum = () => {
    const sort =
      sortButtons.find((button) => button.getAttribute('aria-pressed') === 'true')?.dataset.forumSort ??
      'popular';
    const query = searchInput?.value.trim().toLocaleLowerCase() ?? '';
    const ordered = [...cards].sort((a, b) => {
      const upA = Number(a.dataset.upvotes) || 0;
      const upB = Number(b.dataset.upvotes) || 0;
      const pubA = Number(a.dataset.published) || 0;
      const pubB = Number(b.dataset.published) || 0;
      const comA = Number(a.dataset.comments) || 0;
      const comB = Number(b.dataset.comments) || 0;
      if (sort === 'latest') return pubB - pubA || upB - upA;
      if (sort === 'top') return comB - comA || upB - upA;
      return upB - upA || comB - comA || pubB - pubA;
    });
    const matching = ordered.filter((card) => {
      const matchesCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
      return matchesCategory && (!query || card.textContent?.toLocaleLowerCase().includes(query));
    });
    const pageCount = Math.max(1, Math.ceil(matching.length / pageSize));
    currentPage = Math.min(currentPage, pageCount);
    const firstVisible = (currentPage - 1) * pageSize;
    const visibleCards = new Set(matching.slice(firstVisible, firstVisible + pageSize));

    const matchingSet = new Set(matching);
    matching.forEach((card) => {
      card.hidden = !visibleCards.has(card);
      list.append(card);
    });
    cards.forEach((card) => {
      if (!matchingSet.has(card)) {
        card.hidden = true;
        list.append(card);
      }
    });

    if (countStatus) {
      countStatus.textContent = `${matching.length} ${matching.length === 1 ? 'discussion' : 'discussions'}`;
    }
    if (visibleCount) {
      visibleCount.textContent = `${matching.length} ${matching.length === 1 ? 'discussion' : 'discussions'}`;
    }
    if (emptyState) emptyState.hidden = matching.length > 0;
    if (pagination) pagination.hidden = matching.length <= pageSize;
    if (pageStatus) {
      pageStatus.textContent = matching.length
        ? `Showing ${firstVisible + 1}–${Math.min(firstVisible + pageSize, matching.length)} of ${matching.length}`
        : '0 discussions';
    }
    if (previousButton) previousButton.disabled = currentPage <= 1;
    if (nextButton) nextButton.disabled = currentPage >= pageCount;
    if (pageButtons) {
      pageButtons.replaceChildren(
        ...Array.from({ length: pageCount }, (_, index) => {
          const button = document.createElement('button');
          const page = index + 1;
          button.type = 'button';
          button.textContent = String(page);
          button.setAttribute('aria-label', `Page ${page}`);
          if (page === currentPage) button.setAttribute('aria-current', 'page');
          button.addEventListener('click', () => {
            currentPage = page;
            updateForum();
          });
          return button;
        }),
      );
    }
  };

  sortButtons.forEach((button) =>
    button.addEventListener('click', () => {
      sortButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      currentPage = 1;
      updateForum();
    }),
  );

  filterButtons.forEach((button) =>
    button.addEventListener('click', () => {
      activeFilter = button.dataset.forumFilter ?? 'all';
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      currentPage = 1;
      updateForum();
    }),
  );

  searchInput?.addEventListener('input', () => {
    currentPage = 1;
    updateForum();
  });
  previousButton?.addEventListener('click', () => {
    currentPage = Math.max(1, currentPage - 1);
    updateForum();
  });
  nextButton?.addEventListener('click', () => {
    currentPage += 1;
    updateForum();
  });

  const initialFilter = filterButtons.find((button) => button.dataset.forumFilter === activeFilter);
  if (initialFilter) {
    filterButtons.forEach((item) => {
      const active = item === initialFilter;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
  } else {
    activeFilter = 'all';
  }
  updateForum();
}
