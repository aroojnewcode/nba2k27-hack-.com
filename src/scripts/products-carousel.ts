import { emblaWatchDragAllowInteractive } from './embla-watch-drag.ts';

function getCarouselRoot(wrap: HTMLElement): HTMLElement | null {
  return wrap.querySelector<HTMLElement>('[data-sw-carousel]');
}

function getControl(root: HTMLElement, kind: 'previous' | 'next'): HTMLButtonElement | null {
  const attr = kind === 'previous' ? 'data-sw-carousel-previous' : 'data-sw-carousel-next';
  return (
    root.querySelector<HTMLButtonElement>(`[${attr}]`) ??
    root.querySelector<HTMLButtonElement>(`[data-slot="carousel-${kind}"]`)
  );
}

type CarouselHandle = {
  canScrollPrev: () => boolean;
  canScrollNext: () => boolean;
  api: { on: (event: string, cb: () => void) => void };
};

function syncProductsCarousel(wrap: HTMLElement, root: HTMLElement, carousel: CarouselHandle) {
  const prev = getControl(root, 'previous');
  const next = getControl(root, 'next');
  const canPrev = carousel.canScrollPrev();
  const canNext = carousel.canScrollNext();

  prev?.classList.toggle('is-visible', canPrev);
  prev?.toggleAttribute('hidden', !canPrev);

  next?.classList.toggle('is-visible', canNext);
  next?.toggleAttribute('hidden', !canNext);
}

async function bindProductsCarousel(wrap: HTMLElement) {
  const carouselRoot = getCarouselRoot(wrap);
  if (!carouselRoot) return;

  const { createCarousel } = await import('@starwind-ui/runtime/carousel');

  try {
    const carousel = createCarousel(carouselRoot, {
      opts: { watchDrag: emblaWatchDragAllowInteractive },
    }) as CarouselHandle;
    const onUpdate = () => syncProductsCarousel(wrap, carouselRoot, carousel);
    onUpdate();
    carousel.api.on('select', onUpdate);
    carousel.api.on('reInit', onUpdate);
  } catch {
    window.setTimeout(() => syncProductsCarousel(wrap, carouselRoot, {
      canScrollPrev: () => false,
      canScrollNext: () => true,
      api: { on: () => {} },
    }), 50);
  }
}

export function initProductsCarousels(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-products-carousel]').forEach((wrap) => {
    if (wrap.dataset.productsCarouselBound === 'true') return;
    wrap.dataset.productsCarouselBound = 'true';
    bindProductsCarousel(wrap);
  });
}

function whenNearViewport(el: Element, cb: () => void) {
  if (typeof IntersectionObserver === 'undefined') {
    cb();
    return;
  }

  const io = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) return;
      io.disconnect();
      cb();
    },
    { rootMargin: '200px 0px' },
  );
  io.observe(el);
}

export function setupProductsCarousel() {
  const boot = () => {
    document.querySelectorAll<HTMLElement>('[data-products-carousel]').forEach((wrap) => {
      whenNearViewport(wrap, () => {
        const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number })
          .requestIdleCallback;
        if (idle) idle(() => initProductsCarousels());
        else window.setTimeout(() => initProductsCarousels(), 0);
      });
    });
  };

  boot();
  document.addEventListener('astro:page-load', boot);
  document.addEventListener('astro:after-swap', boot);
}
