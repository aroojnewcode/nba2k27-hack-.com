import { emblaWatchDragAllowInteractive } from './embla-watch-drag.ts';

type CarouselRoot = HTMLElement;

function getCarouselRoot(wrap: CarouselRoot): CarouselRoot | null {
  return wrap.matches('[data-sw-carousel]') ? wrap : wrap.querySelector<CarouselRoot>('[data-sw-carousel]');
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
    { rootMargin: '120px 0px' },
  );
  io.observe(el);
}

async function initDeferredCarousel(wrap: HTMLElement) {
  if (wrap.dataset.deferredCarouselReady === 'true') return;

  const root = getCarouselRoot(wrap);
  if (!root) return;

  wrap.dataset.deferredCarouselReady = 'true';

  const { createCarousel } = await import('@starwind-ui/runtime/carousel');
  createCarousel(root, { opts: { watchDrag: emblaWatchDragAllowInteractive } });
}

function bootDeferredCarousels(scope: ParentNode = document) {
  scope.querySelectorAll<HTMLElement>('[data-deferred-carousel]').forEach((wrap) => {
    if (wrap.dataset.deferredCarouselBound === 'true') return;
    wrap.dataset.deferredCarouselBound = 'true';

    whenNearViewport(wrap, () => {
      const schedule = () => void initDeferredCarousel(wrap);
      if (typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(schedule, { timeout: 2000 });
      } else {
        window.setTimeout(schedule, 0);
      }
    });
  });
}

export function setupDeferredCarousels() {
  bootDeferredCarousels();
  document.addEventListener('astro:page-load', () => bootDeferredCarousels());
  document.addEventListener('astro:after-swap', () => bootDeferredCarousels());
}
