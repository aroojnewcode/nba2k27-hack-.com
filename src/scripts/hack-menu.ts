/** Home page loader menu preview tabs */
export function initHackMenuSection() {
  const root = document.getElementById('hack-menu');
  if (!root) return;

  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[data-hack-menu-tab]')];
  const panels = [...root.querySelectorAll<HTMLElement>('[data-hack-menu-panel]')];
  const cards = [...root.querySelectorAll<HTMLElement>('[data-hack-menu-card]')];
  const previewImg = root.querySelector<HTMLImageElement>('[data-hack-menu-preview-wrap] img');

  const activate = (id: string) => {
    tabs.forEach((tab) => tab.setAttribute('aria-selected', tab.dataset.hackMenuTab === id ? 'true' : 'false'));
    panels.forEach((panel) => {
      const active = panel.dataset.hackMenuPanel === id;
      panel.hidden = !active;
    });
    cards.forEach((card) => {
      const active = card.dataset.hackMenuCard === id;
      card.toggleAttribute('hidden', !active);
    });
    const panel = panels.find((p) => p.dataset.hackMenuPanel === id);
    const src = panel?.dataset.previewWebp;
    if (previewImg && src) previewImg.src = src;
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.hackMenuTab;
      if (id) activate(id);
    });
  });

  const initial = tabs.find((t) => t.getAttribute('aria-selected') === 'true')?.dataset.hackMenuTab ?? tabs[0]?.dataset.hackMenuTab;
  if (initial) activate(initial);
}
