import EmblaCarousel, { type EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

export const HERO_AUTOPLAY_MS = 4800;

type AutoplayPlugin = ReturnType<typeof Autoplay>;

type HeroInstance = {
  embla: EmblaCarouselType;
  autoplay: AutoplayPlugin;
};

const heroInstances = new WeakMap<HTMLElement, HeroInstance>();

function getViewport(wrap: HTMLElement): HTMLElement | null {
  return wrap.querySelector<HTMLElement>('[data-sw-carousel-viewport]');
}

function getNavButtons(wrap: HTMLElement) {
  const prev =
    wrap.querySelector<HTMLButtonElement>('[data-sw-carousel-previous]') ??
    wrap.querySelector<HTMLButtonElement>('[data-slot="carousel-previous"]');
  const next =
    wrap.querySelector<HTMLButtonElement>('[data-sw-carousel-next]') ??
    wrap.querySelector<HTMLButtonElement>('[data-slot="carousel-next"]');
  return { prev, next };
}

function enableNavButtons(wrap: HTMLElement) {
  for (const btn of Object.values(getNavButtons(wrap))) {
    if (!btn) continue;
    btn.disabled = false;
    btn.removeAttribute('aria-disabled');
    btn.removeAttribute('data-disabled');
  }
}

function restartProgress(progressEl: HTMLElement) {
  progressEl.style.animation = 'none';
  void progressEl.offsetWidth;
  progressEl.style.animation = `hero-embla-progress ${HERO_AUTOPLAY_MS}ms linear forwards`;
}

function bindHeroDots(wrap: HTMLElement, embla: EmblaCarouselType, autoplay: AutoplayPlugin) {
  const dotsRoot = wrap.querySelector('[data-hero-embla-dots]');
  if (!dotsRoot) return;

  const dots = Array.from(dotsRoot.querySelectorAll<HTMLButtonElement>('[data-hero-embla-dot]'));

  const syncProgress = () => {
    const index = embla.selectedScrollSnap();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    dots.forEach((dot, i) => {
      const progress = dot.querySelector<HTMLElement>('[data-hero-embla-progress]');
      if (!progress) return;

      progress.style.animation = 'none';
      progress.style.width = i === index && reducedMotion ? '100%' : '0%';

      if (i === index && !reducedMotion) {
        restartProgress(progress);
      }
    });
  };

  const setActive = () => {
    const index = embla.selectedScrollSnap();
    dots.forEach((dot, i) => {
      const active = i === index;
      dot.dataset.active = active ? 'true' : 'false';
      if (active) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
      dot.tabIndex = active ? 0 : -1;
    });
    syncProgress();
  };

  dots.forEach((dot) => {
    const index = Number(dot.getAttribute('data-hero-embla-dot'));
    dot.addEventListener('click', (event) => {
      event.preventDefault();
      embla.scrollTo(index);
      autoplay.reset();
    });
  });

  embla.on('select', setActive);
  embla.on('reInit', setActive);
  setActive();
}

function bindHeroControls(wrap: HTMLElement, embla: EmblaCarouselType, autoplay: AutoplayPlugin) {
  if (wrap.dataset.heroControlsBound === 'true') return;
  wrap.dataset.heroControlsBound = 'true';

  wrap.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const prev = target.closest('[data-sw-carousel-previous], [data-slot="carousel-previous"]');
    const next = target.closest('[data-sw-carousel-next], [data-slot="carousel-next"]');
    if (!prev && !next) return;

    event.preventDefault();
    if (prev) embla.scrollPrev();
    else embla.scrollNext();
    autoplay.reset();
  });

  enableNavButtons(wrap);
  embla.on('select', () => enableNavButtons(wrap));
  embla.on('reInit', () => enableNavButtons(wrap));
}

function startAutoplay(wrap: HTMLElement, autoplay: AutoplayPlugin) {
  const play = () => {
    if (!document.hidden) autoplay.play();
  };

  play();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) autoplay.stop();
    else play();
  });

  const io = new IntersectionObserver(
    ([entry]) => {
      if (!entry) return;
      if (entry.isIntersecting && !document.hidden) autoplay.play();
      else autoplay.stop();
    },
    { threshold: 0.15, rootMargin: '40px 0px' },
  );
  io.observe(wrap);
}

function initHeroWrap(wrap: HTMLElement) {
  if (wrap.dataset.heroEmblaReady === 'true' && heroInstances.has(wrap)) return;

  const viewport = getViewport(wrap);
  if (!viewport) return;

  try {
    const autoplay = Autoplay({
      delay: HERO_AUTOPLAY_MS,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    });

    const embla = EmblaCarousel(viewport, { loop: true, align: 'start', duration: 20 }, [autoplay]);

    wrap.dataset.heroEmblaReady = 'true';
    heroInstances.set(wrap, { embla, autoplay });

    bindHeroDots(wrap, embla, autoplay);
    bindHeroControls(wrap, embla, autoplay);
    startAutoplay(wrap, autoplay);
  } catch (error) {
    console.error('[hero-embla] Failed to initialize carousel', error);
    wrap.dataset.heroEmblaReady = 'false';
  }
}

function initHeroCarousels(root: ParentNode = document) {
  const wraps = root.querySelectorAll<HTMLElement>('[data-hero-embla-wrap]');
  wraps.forEach((wrap) => initHeroWrap(wrap));
}

let listenersBound = false;

export function setupHeroEmbla() {
  const run = () => {
    requestAnimationFrame(() => initHeroCarousels());
  };

  run();

  if (listenersBound) return;
  listenersBound = true;
  document.addEventListener('astro:page-load', run);
  document.addEventListener('astro:after-swap', run);
}
