import { getTranslations } from '../i18n';
import type { Translations } from '../i18n/types';
import { localizeUiString, localizeUiStrings } from '../i18n/localeStringMap';
import { useStrongProductCopy } from '../i18n/translationPolicy';
import { localizedInternalPath, normalizeLocale, type SiteLocale } from '../utils/locale';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';
import { nbaGameplayImages } from './nbaImages';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

export const productRelatedBlogSlugs: Record<string, string[]> = {
  elite: [
    'nba-2k27-elite-tier-guide',
    'nba-2k27-auto-green-timing',
    'nba-2k27-hack-setup-guide',
    'nba-2k27-patch-day-checklist',
    'how-to-buy-nba-2k27-hack-2026',
  ],
  'hwid-spoofer': [
    'nba-2k27-hwid-spoofer-after-ban',
    'nba-2k27-patch-day-checklist',
    'nba-2k27-hack-setup-guide',
  ],
  ugc: [
    'nba-2k27-account-recovery-guide',
    'nba-2k27-hwid-spoofer-after-ban',
    'how-to-buy-nba-2k27-hack-2026',
  ],
  'unlock-all': [
    'nba-2k27-unlock-all-courts-jerseys',
    'nba-2k27-elite-tier-guide',
    'nba-2k27-hack-setup-guide',
  ],
};

const productBase = '/products/nba-2k27-hack/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on nba2k27hack.net and Discord #status before purchase—especially after a NBA 2K27 title update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Elite hack or the utility that matches your goal. Review the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in MyCourt, load presets, then queue Park or Rec.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'NBA 2K27 receives frequent updates. Confirm module availability on the live status panel at nba2k27hack.net before you purchase or launch. Overlay behavior may differ in cutscenes, replays, and spectator modes after patches.';

const sharedLimitations =
  'Third-party software for NBA 2K27 can violate 2K Terms of Use and lead to bans or account action. You use this software at your own risk. Compatibility and availability can change after game, anti-cheat, or Windows updates without notice.';

const nbaSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqSteam', text: 'Current NBA 2K27 client with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets NBA 2K27 published hardware requirements.' },
];

type GalleryKey = keyof typeof galleryRaw;

const galleryRaw = {
  autoGreen: {
    src: nbaGameplayImages.autoGreenShot,
    alt: 'NBA 2K27 auto green shot meter with perfect release window highlighted',
    caption: 'Auto green timing',
    captionDesc: 'Shot meter assist tuned for Park, Rec, and MyCareer release windows.',
  },
  excellent: {
    src: nbaGameplayImages.excellentRelease,
    alt: 'NBA 2K27 Park game showing Excellent release and perfect shot trail',
    caption: 'Excellent releases',
    captionDesc: 'Consistent green windows with humanized latency sliders in the portal.',
  },
  scoreboard: {
    src: nbaGameplayImages.parkScoreboard,
    alt: 'NBA 2K27 Park scoreboard and teammate grade HUD during online play',
    caption: 'Park & Rec HUD',
    captionDesc: 'Presets for online modes with stream-safe overlay options.',
  },
  cityCourt: {
    src: nbaGameplayImages.cityCourt,
    alt: 'NBA 2K27 The City outdoor court with Season 1 branding',
    caption: 'The City courts',
    captionDesc: 'Unlock All preview for courts, jerseys, and MyPlayer gear.',
  },
  cityWaiting: {
    src: nbaGameplayImages.cityWaiting,
    alt: 'NBA 2K27 The City court while waiting for teammates online',
    caption: 'Online matchmaking',
    captionDesc: 'Loader status checks before you queue Park or Rec.',
  },
  parkAction: {
    src: nbaGameplayImages.parkExcellent,
    alt: 'NBA 2K27 Park 3v3 gameplay with Excellent shot feedback',
    caption: 'Live Park action',
    captionDesc: 'Badge boosts and takeover moments with tuned dribble macros.',
  },
  takeover: {
    src: nbaGameplayImages.parkTakeover,
    alt: 'NBA 2K27 Park takeover meter and defensive possession stats',
    caption: 'Takeover & badges',
    captionDesc: 'Badge editor and build presets without grinding every upgrade.',
  },
  parkWide: {
    src: nbaGameplayImages.parkGameplay,
    alt: 'Wide NBA 2K27 Park court gameplay screenshot',
    caption: 'Streetball modes',
    captionDesc: 'MyCareer, Park, Rec, and Pro-Am supported on PC.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => galleryRaw[k]);
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'nba-2k27-hack';
}

const tierAbout: Record<string, ProductPage['about']> = {
  elite: [
    {
      type: 'p',
      text: 'NBA 2K27 Elite is the full operator build for MyCareer grinders and Park competitors who want auto green, badge tools, VC utilities, and unlock-all in one maintained package.',
    },
    { type: 'h2', text: 'Use Elite responsibly' },
    {
      type: 'p',
      text: 'Elite power demands conservative profiles. Test in MyCourt, start with portal presets, and scale timing sliders over days—not minutes. Staff in Discord help Elite users tune before their first online session.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  elite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Auto green assist, shot meter tuning, dribble move macros, badge editor, VC workflow tools, unlock-all preview, and stream-safe overlay hiding. Presets for MyCareer, Park, and Rec ship in the portal.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite shows as limited slots on the status banner. Open a Discord ticket if checkout is gated—staff confirm slot availability before purchase.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh accounts fail instantly on one PC but work elsewhere—classic hardware enforcement. Do not use for account-only ban cases; see [account recovery](/products/nba-2k27-hack/ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative hack profile before going online. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  ugc: [
    { type: 'h2', text: 'What account recovery covers' },
    {
      type: 'p',
      text: 'Structured appeal workspace for platform restrictions, security holds, and dispute tracking—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some bans cannot be reversed. Recovery tools organize evidence and follow-ups. Pair with [HWID Spoofer](/products/nba-2k27-hack/hwid-spoofer/) when hardware is flagged.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Courts, jerseys, and MyPlayer cosmetics display on your client for testing and content creation. Other players in your session see your actual inventory, not preview items.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Unlock All ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full gameplay modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  elite: {
    images: slide('autoGreen', 'excellent', 'scoreboard'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: nbaSystemRequirements,
    fullFeatures: [
      'Auto green & shot timing assist',
      'Shot meter overlay tuning',
      'Dribble move macro suite',
      'Badge editor & build presets',
      'VC workflow utilities',
      'MyCareer progression tools',
      'Park & Rec presets',
      'Unlock All (cosmetic preview)',
      'Streamproof overlay mode',
      'Cloud config backup',
      'Priority patch queue',
      'Direct dev Discord support',
      'Private slot access',
      'Patch auto-updater',
    ],
    overview: {
      title: 'Built around a full NBA 2K27 operator workflow',
      paragraphs: [
        'NBA 2K27 Elite combines auto green, badge tools, VC utilities, and unlock-all in one external loader maintained every patch. Modules are grouped in the portal so you can tune timing, dribble macros, and stream-proof mode before your first online game.',
        'Elite slots stay limited so patch cycles stay fast. Direct dev support in Discord helps you tune conservative profiles before Park or Rec. Check the status banner on nba2k27hack.net before purchase.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('cityWaiting', 'cityCourt', 'parkWide'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching NBA 2K27.',
    limitations:
      'Spoofing does not help account-only ban cases. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching NBA 2K27 after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'Built around a clear hardware recovery workflow',
      paragraphs: [
        'The HWID Spoofer helps NBA 2K27 players recover when anti-cheat flags PC hardware but the account is still clean. Disk and MAC profile tools ship with a restore-point checklist, compatibility scan, and post-spoof verification steps.',
        'Use this path when fresh accounts fail instantly on one machine but work elsewhere—not for account-only bans. After spoof, load a conservative profile from nba2k27hack.net before going online.',
      ],
    },
  },
  ugc: {
    images: slide('scoreboard', 'cityWaiting', 'parkAction'),
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. Recovery tools structure appeals—they do not bypass platform review.',
    limitations:
      'Recovery does not guarantee account restoration. Results vary by case type. Permanent bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on nba2k27hack.net.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Discord support and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'Built around account recovery and appeal workflows',
      paragraphs: [
        'Account recovery helps you organize restricted gaming and marketplace accounts with structured appeal workflows—not instant unban guarantees.',
        'Build custom dispute paths, track case status, and rebuild your presence with smart restriction-management tools. Support walks you through each step via Discord when you need hands-on help.',
      ],
    },
  },
  'unlock-all': {
    images: slide('cityCourt', 'excellent', 'parkAction'),
    goodToKnow:
      'Unlock All previews cosmetics locally on your client. Other players in your session see your real inventory—not preview items. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify live store inventory. Other players cannot see previewed courts or jerseys.',
    systemRequirements: nbaSystemRequirements,
    fullFeatures: [
      'Court & arena preview',
      'Jersey & shoe catalog',
      'MyPlayer outfit swap',
      'Animation pack preview',
      'Loading screen themes',
      'Favorites list',
      'Loadout export',
      'Searchable cosmetic index',
    ],
    overview: {
      title: 'Built around a local cosmetic preview workflow',
      paragraphs: [
        'Unlock All lets you browse courts, jerseys, shoes, and MyPlayer gear locally in NBA 2K27—searchable catalog, favorites, and loadout export without modifying live purchases.',
        'Cosmetics display on your client for testing and content creation. Other players see your actual inventory, not preview items. Included with Elite; available standalone for cosmetic preview without gameplay modules.',
      ],
    },
  },
};

function buildTierPages(t: Translations): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = 'NBA 2K27 Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(t: Translations): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

const pagesByLocale = new Map<string, ProductPage[]>();

function localizeProductPage(page: ProductPage, locale: SiteLocale): ProductPage {
  if (!useStrongProductCopy(locale) || locale === 'en') return page;
  return localizeUiStrings(page, locale);
}

export function getProductPages(locale?: string | null): ProductPage[] {
  const key = normalizeLocale(locale);
  if (!pagesByLocale.has(key)) {
    const t = getTranslations(key);
    const pages = [...buildTierPages(t), ...buildUtilityPages(t)].map((p) => localizeProductPage(p, key));
    pagesByLocale.set(key, pages);
  }
  return pagesByLocale.get(key)!;
}

export function getCheatPages(locale?: string | null) {
  return getProductPages(locale).filter((p) => p.kind === 'tier');
}

/** @deprecated Use getProductPages(locale) */
export const productPages = getProductPages('en');

/** @deprecated Use getCheatPages(locale) */
export const cheatPages = getCheatPages('en');

export function getProductPage(slug: string, locale?: string | null) {
  return getProductPages(locale).find((p) => p.slug === slug);
}

export function getCheatPage(slug: string, locale?: string | null) {
  return getCheatPages(locale).find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return getProductPages('en').map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return getCheatPages('en').map((p) => p.slug);
}

/** Homepage hero carousel — all six user-provided NBA 2K27 Park / shot-meter shots. */
export const heroSlides = slide(
  'autoGreen',
  'parkWide',
  'takeover',
  'excellent',
  'parkAction',
  'scoreboard',
);

export function getProductHub(locale?: string | null) {
  const t = getTranslations(locale);
  const loc = normalizeLocale(locale);
  return {
    path: localizedInternalPath(loc, productBase),
    title: t.products.title,
    subtitle: t.products.subtitle,
    description: localizeUiString(
      'Elite NBA 2K27 hack, HWID spoofer, and unlock-all utilities for PC.',
      loc,
    ),
    buyUrl: checkoutPath('nba2k27'),
  };
}

/** @deprecated Use getProductHub(locale) */
export const productHub = getProductHub('en');
