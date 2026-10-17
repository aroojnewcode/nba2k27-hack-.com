import type { EmblaCarouselType } from 'embla-carousel';

/** Let links and buttons inside carousels receive clicks (Embla won't start a drag). */
export function emblaWatchDragAllowInteractive(
  _api: EmblaCarouselType,
  event: PointerEvent | TouchEvent,
): boolean {
  const target = event.target;
  if (!(target instanceof Element)) return true;
  return !target.closest(
    'a, button, input, select, textarea, label, [role="button"], [data-slot="button"]',
  );
}
