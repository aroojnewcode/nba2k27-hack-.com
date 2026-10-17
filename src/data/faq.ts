import type { IconName } from '../components/icons/types';
import { getTranslations } from '../i18n';
import { localizeUiString } from '../i18n/localeStringMap';
import { normalizeLocale } from '../utils/locale';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'features'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string, locale?: string | null): string {
  return `<a href="${normalizeInternalPath(href, locale)}">${text}</a>`;
}

function faqLinks(locale?: string | null) {
  const loc = normalizeLocale(locale);
  return {
    elite: link('NBA 2K27 Elite', productPath('elite', loc), loc),
    productsHub: link('NBA 2K27 products', ROUTES.products, loc),
    hwid: link('HWID Spoofer', productPath('hwid-spoofer', loc), loc),
    unlockAll: link('Unlock All', productPath('unlock-all', loc), loc),
    faqPage: link('full FAQ', ROUTES.faq, loc),
    blog: link('blog guides', ROUTES.blog, loc),
    utilitiesHub: link('utilities comparison', `${ROUTES.products}utilities/`, loc),
  };
}

/** English link placeholders for static FAQ copy in this module. */
const L = faqLinks('en');

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if NBA 2K27 cheats are online?',
    a: a(
      'The live status banner is on nba2k27hack.net and in the Discord #status channel. Always check after a NBA 2K27 title update.',
    ),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a(
      'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching NBA 2K27.',
    ),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using third-party NBA 2K27 hack?',
    a: a(
      'Yes—any modification carries risk. Report systems and enforcement evolve. Read current status and accept the risk before use.',
    ),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('NBA 2K27 on Windows 10/11 64-bit (Steam or Epic) only. macOS and Linux are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your product.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `${L.productsHub} lists ${L.elite}, ${L.hwid}, and ${L.unlockAll} with feature lists and checkout via our partner.`,
  },
  {
    id: 'what-is-auto-green',
    topic: 'features',
    icon: 'faqWhatIsEsp',
    q: 'What is auto green and shot meter assist?',
    a: `Auto green timing and shot meter overlays help you hit consistent releases in MyCareer, Park, and Rec. ${L.elite} bundles shooting modules with badge tools, VC utilities, and cloud presets—tune in MyCourt before going online.`,
    scopes: ['elite'],
  },
  {
    id: 'park-rec-presets',
    topic: 'features',
    icon: 'faqEspVsScripts',
    q: 'Do Park and Rec need different presets than MyCareer?',
    a: a(
      'Yes. Online modes use different latency offsets than offline drills. Import conservative Park and Rec packs from the portal before your first queue.',
    ),
    scopes: ['elite'],
  },
  {
    id: 'elite-vs-utilities',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'Should I buy Elite or a utility only?',
    a: `Gameplay modules (auto green, badges, VC tools) → ${L.elite}. Hardware flag on one PC → ${L.hwid}. Cosmetic preview only → ${L.unlockAll}. See ${L.utilitiesHub} or the ${L.faqPage}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: 'Why is Elite limited slots?',
    a: `Elite is a private build with direct dev support and priority patch delivery. Slot caps keep patch cycles fast. Check the status banner before checkout.`,
    scopes: ['elite'],
  },
  {
    id: 'who-elite',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'Who should buy Elite?',
    a: `Daily MyCareer, Park, and Rec players who want auto green, dribble macros, badge editor, VC tools, Unlock All, and priority patches in one loader.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'features',
    icon: 'faqStreamProof',
    q: 'Can OBS capture my overlay?',
    a: `Stream-proof mode on ${L.elite} hides overlays from OBS and Discord share. Test a local recording before going live.`,
    scopes: ['elite'],
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Are undetected NBA 2K27 cheats guaranteed?',
    a: a(
      'No. Undetected is current status on the product page—not a permanent guarantee. Stop if the build shows updating, testing, or detected.',
    ),
  },
  {
    id: 'conservative-settings',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Are conservative presets safer than maxed sliders?',
    a: a(
      'Conservative auto green and macro timing draws fewer reports than instant-max profiles—but any cheat carries risk. Ramp settings over several sessions.',
    ),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When do I need the HWID Spoofer?',
    a: `Use ${L.hwid} when new accounts fail instantly on one PC but work elsewhere—classic hardware enforcement. Follow the portal verification steps before going online.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'unlock-all-preview',
    topic: 'products',
    icon: 'faqSkinChanger',
    q: 'Does Unlock All change what other players see?',
    a: `${L.unlockAll} previews courts, jerseys, and MyPlayer gear locally on your client. Other players see your real inventory. Included with ${L.elite}; available standalone for cosmetic preview.`,
    scopes: ['unlock-all', 'elite'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is the loader injected into the game folder?',
    a: `NBA 2K27 HACK runs as an external loader with cloud config sync—no files dropped into the NBA 2K27 install directory. Risk still applies. See ${L.productsHub}.`,
  },
  {
    id: 'blog-vs-cheats',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Are blog cheat codes the same as ranked cheats?',
    a: `No. Articles about 2K console commands apply only in custom lobbies with cheats enabled. Ranked tools are separate products—see ${L.elite}.`,
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where do blog setup guides point for purchase?',
    a: `Guides link to ${L.productsHub} and ${L.elite}. Checkout runs through our secure partner—never paste loader files from random Discord DMs.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Where do I compare Elite vs utilities?',
    a: `Each product page lists features and checkout. ${L.utilitiesHub} summarizes HWID vs Unlock All. The ${L.faqPage} collects setup, safety, and product answers.`,
  },
  {
    id: 'patch-day',
    topic: 'safety',
    icon: 'faqVacUpdate',
    q: 'What should I do after a NBA 2K27 patch?',
    a: a(
      'Check nba2k27hack.net status and Discord #status. Do not launch until the banner shows online. Reload portal presets after any title update.',
    ),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a(
      'Open Discord after purchase with your order email, Windows version, and NBA 2K27 client build (Steam or Epic). Staff walk through loader setup live.',
    ),
  },
  {
    id: 'dribble-macros',
    topic: 'features',
    icon: 'faqAutoFarm',
    q: 'Which product includes dribble macros?',
    a: `Dribble combo chains and Park presets ship with ${L.elite}. Utilities alone do not include gameplay modules.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private NBA 2K27 cheats?',
    a: a(
      'Private means per-user keys and maintained builds—not public zip packs. NBA 2K27 HACK delivers through the operator portal with patch-day updates.',
    ),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `This site includes landing FAQs and per-page sections. See the ${L.faqPage} for all product and setup answers—or read ${L.blog} for deep guides.`,
  },
];

function translateFaqItem(
  item: SiteFaqItem,
  qMap: Record<string, string>,
  aMap: Record<string, string>,
): SiteFaqItem {
  return {
    ...item,
    q: qMap[item.q] ?? item.q,
    a: item.aHtml ? item.a : (aMap[item.a] ?? item.a),
  };
}

function faqMapsForLocale(locale?: string | null) {
  const t = getTranslations(locale);
  const qMap: Record<string, string> = {};
  const aMap: Record<string, string> = {};
  for (const item of t.faq.items) {
    qMap[item.q] = item.q;
    aMap[item.a] = item.a;
  }
  const en = getTranslations('en');
  for (let i = 0; i < en.faq.items.length; i++) {
    const enItem = en.faq.items[i];
    const locItem = t.faq.items[i];
    if (enItem && locItem) {
      qMap[enItem.q] = locItem.q;
      aMap[enItem.a] = locItem.a;
    }
  }
  return { qMap, aMap };
}

function withLocaleFaqLinks(item: SiteFaqItem, locale?: string | null): SiteFaqItem {
  if (item.id !== 'products-page') return item;
  const links = faqLinks(locale);
  return {
    ...item,
    a: `${links.productsHub} lists ${links.elite}, ${links.hwid}, and ${links.unlockAll} with feature lists and checkout via our partner.`,
  };
}

function applyUiStringMap(item: SiteFaqItem, locale: string): SiteFaqItem {
  if (locale === 'en') return item;
  return {
    ...item,
    q: localizeUiString(item.q, locale),
    a: item.aHtml ? item.a : localizeUiString(item.a, locale),
  };
}

export function getSiteFaqs(locale?: string | null): SiteFaqItem[] {
  const loc = normalizeLocale(locale);
  const { qMap, aMap } = faqMapsForLocale(locale);
  return siteFaqs.map((item) => {
    const translated = translateFaqItem(item, qMap, aMap);
    const linked = withLocaleFaqLinks(translated, loc);
    return applyUiStringMap(linked, loc);
  });
}

const LANDING_FAQ_IDS = ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'] as const;

export function getLandingFaqs(locale?: string | null): SiteFaqItem[] {
  const t = getTranslations(locale);
  const metaById = new Map(siteFaqs.map((f) => [f.id, f]));

  return LANDING_FAQ_IDS.map((id, index) => {
    const meta = metaById.get(id)!;
    const fromTranslations = t.faq.items[index];
    const base: SiteFaqItem = {
      ...meta,
      q: fromTranslations?.q ?? meta.q,
      a: fromTranslations?.a ?? meta.a,
    };
    return applyUiStringMap(withLocaleFaqLinks(base, locale), normalizeLocale(locale));
  });
}

export function getAllFaqs(locale?: string | null): SiteFaqItem[] {
  return getSiteFaqs(locale).filter((f) => f.topic !== 'all');
}

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter Elite features, utilities, safety, setup, and blog answers.',
} as const;

export function getSiteFaqSectionCopy(locale?: string | null) {
  const loc = normalizeLocale(locale);
  if (loc === 'en') return SITE_FAQ_SECTION_COPY;
  const labels: Record<string, typeof SITE_FAQ_SECTION_COPY> = {
    es: {
      eyebrow: 'Todos los temas',
      title: 'Explorar por categoría',
      subtitle: 'Filtra Elite, utilidades, seguridad, configuración y blog.',
    },
    'pt-br': {
      eyebrow: 'Todos os tópicos',
      title: 'Explorar por categoria',
      subtitle: 'Filtre Elite, utilitários, segurança, setup e blog.',
    },
    fr: {
      eyebrow: 'Tous les sujets',
      title: 'Parcourir par catégorie',
      subtitle: 'Filtrez Elite, utilitaires, sécurité, installation et blog.',
    },
    de: {
      eyebrow: 'Alle Themen',
      title: 'Nach Kategorie',
      subtitle: 'Elite, Utilities, Sicherheit, Setup und Blog filtern.',
    },
  };
  return labels[loc] ?? SITE_FAQ_SECTION_COPY;
}

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'features',
  'safety',
  'products',
  'blog',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) => !f.scopes && ['setup', 'safety', 'plans', 'features', 'products'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['elite-vs-utilities', 'compare-plans', 'undetected', 'patch-day'].includes(f.id),
  );

  const combined =
    kind === 'tier'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Should I use console cheat codes in ranked?',
      a: a(
        'No. 2K practice mode tools only work in custom games with cheats enabled. Ranked Park and Rec require the NBA 2K27 hack products listed on nba2k27hack.net.',
      ),
    },
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which product matches this guide?',
      a: `Setup and Elite tier guides → ${L.elite}. HWID workflows → ${L.hwid}. Cosmetic preview → ${L.unlockAll}.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a(
        'Check the article date and the live status banner. Patch-day articles note when modules change—Discord #status has the latest build notes.',
      ),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from your operator portal after checkout—not from third-party links in comments or DMs.'),
    },
    {
      id: 'blog-setup-lobby',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test in MyCourt first?',
      a: a(
        'Yes. Load conservative presets in MyCourt before Park or Rec. Tune auto green latency and macro pacing over several sessions.',
      ),
    },
  ],
  Updates: [
    {
      id: 'blog-sec-anti-cheat',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Does this article guarantee undetected status?',
      a: a(
        'No article replaces the live status banner. Undetected is a point-in-time label—stop if status shows updating or detected.',
      ),
    },
  ],
  Troubleshooting: [
    {
      id: 'blog-trouble-status',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Loader errors after a patch?',
      a: a('Confirm the status banner is online, download the latest portal build, and re-import presets before queueing online.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${L.elite}, ${L.hwid}, ${L.unlockAll}, and ${L.productsHub}. Feature lists on product pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Open Discord with your order email and the article slug. Staff reference the same portal presets mentioned in guides.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: a('Re-check status after every NBA 2K27 update. Portal presets update with patch notes—reload configs instead of copying old sliders.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('auto-green') || slug.includes('timing') || slug.includes('shot')) {
    slugHints.push({
      id: 'blog-slug-shooting',
      topic: 'features',
      icon: 'faqBlogSlugEsp',
      q: 'Which product covers auto green from this article?',
      a: `Shooting assist, shot meter, and Park presets ship with ${L.elite}. Start conservative in MyCourt before online games.`,
    });
  }
  if (slug.includes('elite') || slug.includes('lite-vs-elite')) {
    slugHints.push({
      id: 'blog-slug-elite',
      topic: 'plans',
      icon: 'faqBlogSlugScripts',
      q: 'Does this article require Elite?',
      a: `Full gameplay modules and Unlock All bundle → ${L.elite}. Utilities-only buyers should match the article to ${L.hwid} or ${L.unlockAll} instead.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('patch')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this article replace the HWID product?',
      a: `HWID guides complement ${L.hwid}—read the product page for portal workflow and realistic outcomes after hardware flags.`,
    });
  }
  if (slug.includes('unlock-all') || slug.includes('courts') || slug.includes('jersey')) {
    slugHints.push({
      id: 'blog-slug-unlock',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Is Unlock All in this guide standalone or Elite?',
      a: `${L.unlockAll} works standalone for local preview. ${L.elite} includes Unlock All plus gameplay modules.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

/** Elite vs utilities feature matrix (for future compare UI). */
export const compareRows = [
  { feature: 'Auto green & shot meter', icon: 'compareAutoCombo' as const, elite: true, utility: false },
  { feature: 'Dribble macros & Park presets', icon: 'compareOrbwalker' as const, elite: true, utility: false },
  { feature: 'Badge editor & VC tools', icon: 'compareAbilityRadius' as const, elite: true, utility: false },
  { feature: 'Unlock All cosmetics', icon: 'compareSkinChanger' as const, elite: true, utility: true },
  { feature: 'HWID spoofer & cleanup', icon: 'compareWardLocator' as const, elite: false, utility: true },
  { feature: 'Priority patch queue', icon: 'comparePriorityPatch' as const, elite: true, utility: false },
  { feature: 'Direct dev Discord support', icon: 'compareDevSupport' as const, elite: true, utility: false },
  { feature: 'Cloud config backup', icon: 'compareCloudBackup' as const, elite: true, utility: false },
];
