import type { ProductSlide } from './products';

const HERO_IMG = '/images/gameplay/hero';

/** Homepage hero carousel — dedicated screenshots under public/images/gameplay/hero. */
export const homeHeroSlides: ProductSlide[] = [
  {
    src: `${HERO_IMG}/nba-2k27-hero-01-auto-green.jpg`,
    alt: 'NBA 2K27 shot meter and auto green release window during a jump shot',
    caption: 'Auto green timing',
    captionDesc: 'Shot meter assist tuned for Park, Rec, and MyCareer release windows.',
  },
  {
    src: `${HERO_IMG}/nba-2k27-hero-02-park.jpg`,
    alt: 'NBA 2K27 Park 3v3 gameplay with teammate grade and badge HUD',
    caption: 'Park & Rec online',
    captionDesc: 'Live Park runs with presets and stream-safe overlay options.',
  },
  {
    src: `${HERO_IMG}/nba-2k27-hero-03-takeover.jpg`,
    alt: 'NBA 2K27 Park takeover and defensive possession on an outdoor court',
    caption: 'Takeover & badges',
    captionDesc: 'Badge boosts and build presets without grinding every upgrade.',
  },
  {
    src: `${HERO_IMG}/nba-2k27-hero-04-excellent.jpg`,
    alt: 'NBA 2K27 Excellent shot release feedback on a streetball court',
    caption: 'Excellent releases',
    captionDesc: 'Consistent green windows with humanized latency sliders.',
  },
  {
    src: `${HERO_IMG}/nba-2k27-hero-05-park-action.jpg`,
    alt: 'NBA 2K27 Park gameplay with Excellent shot feedback and scoreboard',
    caption: 'Live Park action',
    captionDesc: 'Dribble macros and timing tuned for online modes.',
  },
  {
    src: `${HERO_IMG}/nba-2k27-hero-06-scoreboard.jpg`,
    alt: 'NBA 2K27 Park scoreboard and Season 1 court during online play',
    caption: 'Park scoreboard',
    captionDesc: 'MyCareer, Park, Rec, and Pro-Am on PC.',
  },
];

export const homeHeroBackground = homeHeroSlides[0].src;
