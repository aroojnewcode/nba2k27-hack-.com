import { createCarousel } from '@starwind-ui/runtime/carousel';
import Autoplay from 'embla-carousel-autoplay';

export const HERO_AUTOPLAY_MS = 4800;

type EmblaApi = {
  selectedScrollSnap: () => number;
  scrollTo: (n: number) => void;
  on: (event: string, cb: () => void) => void;
};

type AutoplayPlugin = {
  stop: () => void;
  play: () => void;
  reset: () => void;
};

type CarouselHandle = {
  api: EmblaApi;
  scrollPrev: (jump?: boolean) => void;
  scrollNext: (jump?: boolean) => void;
};

const heroCarousels = new WeakMap<HTMLElement, CarouselHandle>();
const heroAutoplay = new WeakMap<HTMLElement, AutoplayPlugin>();

function getCarouselRoot(wrap: HTMLElement): HTMLElement | null {
  return wrap.querySelector<HTMLElement>('[data-sw-carousel]');
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
  const { prev, next } = getNavButtons(wrap);
  for (const btn of [prev, next]) {
    if (!btn) continue;
    btn.disabled = false;
    btn.setAttribute('aria-disabled', 'false');
    btn.removeAttribute('data-disabled');
  }
}

function restartProgress(progressEl: HTMLElement) {
  progressEl.style.animation = 'none';
  void progressEl.offsetWidth;
  progressEl.style.animation = `hero-embla-progress ${HERO_AUTOPLAY_MS}ms linear forwards`;
}

function bindHeroDots(wrapper: HTMLElement, api: EmblaApi, autoplay: AutoplayPlugin) {
  const dotsRoot = wrapper.querySelector('[data-hero-embla-dots]');
  if (!dotsRoot) return;

  const dots = Array.from(dotsRoot.querySelectorAll<HTMLButtonElement>('[data-hero-embla-dot]'));

  const syncProgress = () => {
    const index = api.selectedScrollSnap();
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
    const index = api.selectedScrollSnap();
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
    dot.addEventListener('click', () => {
      api.scrollTo(index);
      autoplay.reset();
    });
  });

  api.on('select', setActive);
  api.on('reInit', setActive);
  setActive();
}

function bindHeroNav(wrap: HTMLElement, carousel: CarouselHandle, autoplay: AutoplayPlugin) {
  const { prev, next } = getNavButtons(wrap);
  if (!prev && !next) return;

  const onNav = (direction: 'prev' | 'next') => {
    if (direction === 'prev') carousel.scrollPrev();
    else carousel.scrollNext();
    autoplay.reset();
  };

  const bind = (button: HTMLButtonElement | null, direction: 'prev' | 'next') => {
    if (!button || button.dataset.heroNavBound === 'true') return;
    button.dataset.heroNavBound = 'true';
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      onNav(direction);
    });
  };

  bind(prev, 'prev');
  bind(next, 'next');

  const keepNavActive = () => enableNavButtons(wrap);
  carousel.api.on('select', keepNavActive);
  carousel.api.on('reInit', keepNavActive);
  keepNavActive();
}

function bindHeroNavDelegation() {
  if (document.documentElement.dataset.heroEmblaDelegation === 'true') return;
  document.documentElement.dataset.heroEmblaDelegation = 'true';

  document.addEventListener(
    'click',
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const wrap = target.closest<HTMLElement>('[data-hero-embla-wrap]');
      if (!wrap) return;

      const carousel = heroCarousels.get(wrap);
      const autoplay = heroAutoplay.get(wrap);
      if (!carousel || !autoplay) return;

      const isPrev = target.closest('[data-sw-carousel-previous], [data-slot="carousel-previous"]');
      const isNext = target.closest('[data-sw-carousel-next], [data-slot="carousel-next"]');
      if (!isPrev && !isNext) return;
      if (!wrap.contains(isPrev ?? isNext)) return;

      event.preventDefault();
      if (isPrev) carousel.scrollPrev();
      else carousel.scrollNext();
      autoplay.reset();
    },
    true,
  );
}

function initHeroCarousels(root: ParentNode = document) {
  const wraps = [...root.querySelectorAll<HTMLElement>('[data-hero-embla-wrap]')].filter(
    (wrap) => wrap.dataset.heroEmblaReady !== 'true',
  );
  if (!wraps.length) return;

  bindHeroNavDelegation();

  wraps.forEach((wrap) => {
    const carouselRoot = getCarouselRoot(wrap);
    if (!carouselRoot) return;

    try {
      const autoplay = Autoplay({
        delay: HERO_AUTOPLAY_MS,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      });

      const instance = createCarousel(carouselRoot, {
        opts: { loop: true, align: 'start', duration: 20 },
        plugins: [autoplay],
      }) as CarouselHandle;

      wrap.dataset.heroEmblaReady = 'true';
      heroCarousels.set(wrap, instance);
      heroAutoplay.set(wrap, autoplay);

      bindHeroDots(wrap, instance.api, autoplay);
      bindHeroNav(wrap, instance, autoplay);

      const pauseWhenHidden = () => {
        if (document.hidden) autoplay.stop();
        else autoplay.play();
      };
      document.addEventListener('visibilitychange', pauseWhenHidden);

      const io = new IntersectionObserver(
        ([entry]) => {
          if (!entry) return;
          if (entry.isIntersecting && !document.hidden) autoplay.play();
          else autoplay.stop();
        },
        { threshold: 0.35 },
      );
      io.observe(carouselRoot);
    } catch (error) {
      console.error('[hero-embla] Failed to initialize carousel', error);
      wrap.dataset.heroEmblaReady = 'false';
    }
  });
}

let listenersBound = false;

export function setupHeroEmbla() {
  const run = () => {
    initHeroCarousels();
  };

  run();

  if (listenersBound) return;
  listenersBound = true;
  document.addEventListener('astro:page-load', run);
  document.addEventListener('astro:after-swap', run);
}
