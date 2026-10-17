import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { discordInviteUrl } from '../config/discord';
import { BLOG_INDEX_SEO_TITLE, HOME_SEO } from '../config/homeSeo';
import { PRODUCT_BASE } from '../config/site';
import { blogPosts } from '../data/blog/posts';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'NBA 2K27 HACK',
    domain: 'nba2k27hack.net',
    title: HOME_SEO.title,
    description: HOME_SEO.description,
    discord: discordInviteUrl(),
  },
  nav: [
    { href: '/', label: 'Home' },
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'NBA 2K27 · PC',
    eyebrow: '',
    titleLine1: 'NBA 2K27 hack',
    titleLine2: 'auto green, shooting',
    titleLine3: 'timing & cheat tools',
    subtitle:
      'Auto green, shot meter assist, dribble macros, badge editor, and VC utilities in one menu—kept up to date after every patch at nba2k27hack.net.',
    ctaPrimary: 'View products',
    ctaBuy: 'Buy now',
    ctaDiscord: 'Join Discord',
    modesLabel: 'NBA 2K27 modes',
    modes: ['MyCareer', 'Park', 'Rec', 'Pro-Am'],
    metrics: [
      { label: 'Stream-safe', strong: 'Yes' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Users', strong: '300+' },
      { label: 'Live support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need in one package',
    subtitle: 'Shooting, badges, VC and Park/Rec utilities for NBA 2K27 on PC—maintained every title update.',
    items: [
      {
        title: 'Auto Green',
        subtitle: 'Perfect Release. Every Build.',
        desc: 'Humanized release windows tuned for your height, badges and latency—start conservative in MyCourt before Park or Rec.',
        bullets: [
          'Shot timing assist with latency and input sliders',
          'Build profiles for guards, wings and bigs',
          'Park vs MyCareer preset slots in the portal',
          'Optional meter-only mode for manual shooters',
          'Cloud sync for every PC you play on',
        ],
        tags: ['auto green', 'shot timing', 'myplayer'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Shot Meter',
        subtitle: 'Read the Window Clearly.',
        desc: 'Overlay feedback that stays readable in Rec teamfights and crowded Park runs—not a cluttered HUD.',
        bullets: [
          'Custom meter styles and opacity controls',
          'Latency offset per game mode',
          'Toggle overlay without restarting the game',
        ],
        tags: ['shot meter', 'overlay', 'timing'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Dribble Macros',
        subtitle: 'Combo Moves on Demand.',
        desc: 'Chain size-ups, escapes and behind-the-backs with sane defaults—tighten timings as you get comfortable online.',
        bullets: ['One-key combo chains for Park dribblers', 'Stamina-aware pacing sliders', 'Hotkey profiles per build archetype'],
        tags: ['dribble macros', 'combos', 'park'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Badge Editor',
        subtitle: 'Plan Builds Before You Grind.',
        desc: 'Preview badge layouts and cap breakpoints locally so you know what to chase in MyCareer before spending VC.',
        bullets: ['Badge point planner with tier caps', 'Compare Park vs Rec badge meta notes', 'Export favorites to cloud profiles'],
        tags: ['badge editor', 'build planner', 'mycareer'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'VC Tools',
        subtitle: 'Track Progress. Spend Smarter.',
        desc: 'Utilities that help you monitor VC flow and avoid wasted upgrades—paired with conservative online defaults.',
        bullets: [
          'VC gain trackers and upgrade calculators',
          'MyCareer drill reminders from portal presets',
          'Spending checklists before big badge purchases',
          'Stream-friendly overlay toggles',
        ],
        tags: ['vc tools', 'mycareer', 'progress'],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Park / Rec Presets',
        subtitle: 'Online-Ready in One Click.',
        desc: 'Separate latency, auto green and macro profiles for Park, Rec and Pro-Am so offline tuning does not follow you online.',
        bullets: [
          'Mode-specific cloud profiles',
          'Quick swap hotkeys between Park and Rec',
          'Conservative defaults for new patches',
          'Operator notes in Discord #status',
        ],
        tags: ['park presets', 'rec', 'pro-am'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Unlock All',
        subtitle: 'Preview Gear Locally.',
        desc: 'Courts, City Edition jerseys and MyPlayer wardrobes for content planning—local preview workflow documented in the portal.',
        bullets: ['Court and jersey preview library', 'MyPlayer wardrobe favorites', 'Pairs with Elite or standalone utility'],
        tags: ['unlock all', 'jerseys', 'courts'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Creators Stay Safe.',
        desc: 'Keep assists on your monitor while capture software records a clean game feed for streams and clips.',
        bullets: ['OBS and Game Bar safe modes', 'Toggle stream proof per module', 'Test checklist in portal docs'],
        tags: ['obs safe', 'stream proof', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Cloud Config & Updates',
        subtitle: 'Patch Day Ready.',
        desc: 'Same presets on every PC—portal updates track NBA 2K27 title days and loader builds ship fast.',
        bullets: ['Cloud backup for slider profiles', 'Loader push within hours of patches', 'Discord #status for build notes'],
        tags: ['cloud sync', 'auto update', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'NBA 2K27 cheats that keep up with every patch',
    subtitle:
      'Many sites sell outdated tools and slow support. We focus on quick updates after game patches, natural-looking settings, and real help on Discord.',
    usLabel: 'NBA 2K27 HACK',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'Builds pushed within hours of NBA 2K27 title updates—check Discord #status before you queue Park or Rec.',
      },
      {
        title: 'Humanized timing & delays',
        desc: 'Latency sliders and conservative auto green defaults mimic high-skill release windows—not instant bot shots that flood reports.',
      },
      {
        title: 'Live Discord operators',
        desc: 'Real engineers for loader setup, Park presets and HWID resets—24/7 shift coverage, not copy-paste FAQ tickets.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'Overlay suite with OBS-safe modes—no risky injection into the game process like legacy providers still sell.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'MyCareer, Park and Rec profiles backup to the portal—same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord ops—most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a loader build after major NBA 2K27 or anti-cheat changes.',
      },
      {
        value: '24/7',
        title: 'Operator support',
        desc: 'Discord engineers on shift for setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Active operators',
        desc: 'PC players running auto green, badge tools and utilities on nba2k27hack.net.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to your first online game in just',
    titleHighlight: 'three simple steps',
    intro:
      'Getting started is easy. Follow the operator portal flow to download the loader, load Park/Rec presets, and launch NBA 2K27 on PC—with live Discord help if anything blocks you.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the external loader, import MyCareer or Park presets, and tune auto green and shot meter sliders in MyCourt.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & queue online',
        desc: 'Check the live status banner, launch NBA 2K27, and play with cloud-backed profiles saved in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching NBA 2K27 after updates.',
    items: [
      'Windows 10 & 11',
      'PC (Steam / Epic)',
      'NBA 2K27 client',
      'Auto updater',
      'Config cloud sync',
      'Discord support',
      'HWID reset',
      'External loader',
    ],
  },
  cheats: {
    eyebrow: 'Elite hack',
    title: 'NBA 2K27 Elite hack',
    subtitle: 'Full PC suite—auto green, badge editor, VC tools, Unlock All, and priority patch delivery.',
    viewAll: 'View Elite details',
    explore: 'Explore',
    items: [
      {
        badge: 'Limited slots',
        tier: 'Private',
        name: 'Elite',
        title: 'NBA 2K27 Elite',
        desc: 'Private NBA 2K27 hack build with auto green, dribble macros, badge editor, VC utilities, Unlock All and direct dev support.',
        features: [
          'Auto Green & shot meter',
          'Dribble macro suite',
          'Badge editor & VC tools',
          'Park / Rec cloud presets',
          'Unlock All cosmetics',
          'Priority patch queue',
        ],
        more: 42,
        href: `${productBase}elite/`,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'NBA 2K27 products',
    subtitle: 'Elite hack plus HWID spoofer and Unlock All utilities.',
    viewAll: 'View all products',
    get: 'Get',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer',
        subtitle: 'Clean slate for your PC',
        desc: 'Hardware ID spoofing for disk serials, MAC addresses and GPU IDs—follow the portal setup guide before launching NBA 2K27.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Cosmetic',
        title: 'Unlock All',
        subtitle: 'Courts, jerseys & gear preview',
        desc: 'Unlock All for courts, City Edition jerseys and MyPlayer wardrobes—local preview workflow without grinding every cosmetic.',
        features: ['Court & jersey library', 'MyPlayer wardrobe preview', 'Favorites export', 'Pairs with Elite suite'],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: BLOG_INDEX_SEO_TITLE,
    homeTitle: 'BLOGS AND UPDATES',
    subtitle: 'Hack setup, auto green tuning, Elite tier notes and patch-day checks for NBA 2K27.',
    latestTitle: BLOG_INDEX_SEO_TITLE,
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All articles',
    searchLabel: 'Search articles',
    searchPlaceholder: 'Search by title or topic…',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all blogs',
    read: 'Read',
    items: blogPosts.map(({ tag, title, slug, image, desc, date, readTime }) => ({
      tag,
      title,
      slug,
      image,
      desc,
      date,
      readTime,
    })),
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning between MyCourt tests and online Park runs.',
    items: [
      {
        num: '01',
        label: 'Shooting',
        title: 'Auto green that respects latency',
        desc: 'Shot meter overlay, release windows and mode-specific sliders in one shooting tab.',
      },
      {
        num: '02',
        label: 'Handles',
        title: 'Dribble macros without chaos',
        desc: 'Combo chains, stamina pacing and hotkey profiles for Park dribblers.',
      },
      {
        num: '03',
        label: 'Builds',
        title: 'Badge editor & VC planning',
        desc: 'Badge caps, upgrade calculators and MyCareer reminders on a compact panel.',
      },
      {
        num: '04',
        label: 'Online',
        title: 'Park / Rec preset slots',
        desc: 'Swap cloud profiles for Park, Rec and Pro-Am without retuning from scratch.',
      },
      {
        num: '05',
        label: 'Cosmetics',
        title: 'Unlock All preview library',
        desc: 'Courts, jerseys and MyPlayer gear favorites for content and build planning.',
      },
      {
        num: '06',
        label: 'Profiles',
        title: 'Configs for every mode',
        desc: 'Separate MyCareer, Park and Rec presets with cloud backup.',
      },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to an NBA 2K27 profile you can reuse every session.',
    ctaLabel: 'Current plan',
    ctaHref: `${productBase}elite/`,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check patch status',
        desc: 'Read the live banner on nba2k27hack.net before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your tier',
        desc: 'Pick Elite or a utility—the access level that matches your MyCareer and Park goals.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune timing in MyCourt.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save Park and Rec presets to the cloud.',
      },
    ],
  },
  hackMenu: {
    eyebrow: 'Loader menu',
    titleBefore: 'Shooting, builds, and Park tools in one',
    titleHighlight: 'NBA 2K27 overlay',
    titleAfter: '',
    subtitle:
      'Tap a tab to preview how Elite modules look in the loader—shot timing, MyPlayer utilities, and Park presets before you queue online.',
    previewHint: 'Preview updates when you switch tabs',
    previewFooter: 'DRAG SLIDERS IN THE PORTAL · LIVE NBA 2K27 GAMEPLAY PREVIEW',
    tabs: [
      { id: 'shooting', label: 'Shooting' },
      { id: 'myplayer', label: 'MyPlayer' },
      { id: 'park', label: 'Park' },
    ],
    panels: [
      {
        id: 'shooting',
        rows: [
          { label: 'Shot meter overlay', value: 'On', kind: 'status' },
          { label: 'Auto green assist', value: 'On', kind: 'status' },
          { label: 'Latency offset', value: 'On', kind: 'slider', sliderValue: '12 ms' },
        ],
        note: 'Meter, auto green, and latency—most Park players start on this tab.',
      },
      {
        id: 'myplayer',
        rows: [
          { label: 'Badge editor', value: 'On', kind: 'status' },
          { label: 'Attribute preview', value: 'Off', kind: 'status' },
          { label: 'VC utilities', value: 'On', kind: 'status' },
        ],
        note: 'Tune badges and builds offline before you spend VC in MyCareer.',
      },
      {
        id: 'park',
        rows: [
          { label: 'Cloud configs', value: 'On', kind: 'status' },
          { label: 'Unlock All preview', value: 'On', kind: 'status' },
          { label: 'Hotkeys', value: 'On', kind: 'slider', sliderValue: 'F6 menu' },
        ],
        note: 'Save Park and Rec presets, load hotkeys, and preview courts locally.',
      },
    ],
    cards: [
      {
        tabId: 'shooting',
        title: 'Shooting',
        text: 'Meter, auto green, and latency—most Park players start on this tab.',
      },
      {
        tabId: 'myplayer',
        title: 'MyPlayer',
        text: 'Badge editor and VC tools—test conservative profiles in MyCourt first.',
      },
      {
        tabId: 'park',
        title: 'Park',
        text: 'Cloud configs, hotkeys, and Unlock All preview without touching matchmaking files.',
      },
    ],
    ctaPrimary: 'Current plan',
    ctaPrimaryHref: `${productBase}elite/`,
    ctaSecondary: 'Open menu demo',
    ctaSecondaryHref: '#hack-menu-showcase',
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how NBA 2K27 plays.',
    items: [
      {
        num: '01',
        title: 'Patch-day ready',
        desc: 'Patch notes hit Discord and the portal before most creators post—check before you queue Park or Rec.',
      },
      {
        num: '02',
        title: 'Conservative defaults',
        desc: 'Start with safe auto green latency and macro pacing, then tune up—not the other way around.',
      },
      {
        num: '03',
        title: 'Real operator support',
        desc: 'Stuck on loader or Park presets? Discord staff walk you through live—not copy-paste FAQs.',
      },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'NBA 2K27 HACK support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about Elite and utilities.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Chat to support',
        desc: "We're here for loader, HWID and account issues.",
        linkLabel: 'support@nba2k27hack.net',
        href: 'mailto:support@nba2k27hack.net',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Live operators',
        desc: 'Discord engineers on shift 24/7.',
        linkLabel: 'Open contact page',
        href: '/support/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      {
        title: 'Order email',
        desc: 'The address used at checkout on nba2k27hack.net or via our secure checkout.',
      },
      {
        title: 'Platform',
        desc: 'NBA 2K27 on Windows 10 or 11—and your client version (Steam or Epic).',
      },
      {
        title: 'Error detail',
        desc: 'Screenshot or exact message from the loader or game client.',
      },
    ],
  },
  faqPage: {
    eyebrow: 'Help center',
    title: 'FAQ for NBA 2K27 hack',
    subtitle: 'Elite hack tiers, utilities, auto green, HWID tools, safety, and setup—in one place.',
  },
  notFound: {
    title: 'Page not found',
    description: 'The page you requested could not be found on nba2k27hack.net.',
    heading: 'Page not found',
    body: 'That URL does not exist or may have moved. Head back to the homepage or browse cheat tiers and products.',
    backHome: 'Back to home',
    viewProducts: 'View products',
    viewElite: 'View Elite cheats',
  },
  productsUtilities: {
    breadcrumb: 'Compare utilities',
    title: 'Compare utilities',
    subtitle:
      'HWID Spoofer and Unlock All solve different problems. Match the tool to your situation before checkout.',
    tableUtility: 'Utility',
    tableBestFor: 'Best for',
    tableLink: 'Product page',
    viewCategory: 'View',
    includes: 'Includes:',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if the NBA 2K27 hack is online?',
        a: 'The live status banner is on nba2k27hack.net and in the Discord #status channel. Always check after a NBA 2K27 title update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching NBA 2K27.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party NBA 2K27 tools?',
        a: 'Yes—any modification carries risk. 2K enforcement and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'NBA 2K27 on Windows 10/11 64-bit (Steam or Epic). macOS and console are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Elite hack, HWID Spoofer, and Unlock All live at nba2k27hack.net/products/nba-2k27-hack/ with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'NBA 2K27 hack — auto green, badges and tools for PC. nba2k27hack.net',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/nba-2k27-hack/elite/', label: 'Elite NBA 2K27 hack', ariaLabel: 'Elite hack' },
      { href: '/products/nba-2k27-hack/', label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About NBA 2K27 HACK',
      description:
        'NBA 2K27 HACK provides Elite hack access, utility tools and PC support resources at nba2k27hack.net.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'NBA 2K27 HACK is a PC-focused resource for players exploring auto green, badge editor, VC utilities and Unlock All workflows in MyCareer, Park, Rec and Pro-Am. We publish tier comparisons, setup guides, and live status notes so you can evaluate the hack before checkout.',
            'NBA 2K and related marks are property of their respective owners. Our site is not affiliated with or endorsed by 2K.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers Elite hack access, HWID utilities, and Unlock All cosmetics. Blog articles explain Park-safe configs, patch-day checks, and title update behavior.',
            'Content is updated when patches land or when loader modules shift. Check the homepage status banner and Discord #status before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are handled through Discord and email support. Include your order email, platform (Steam or Epic), and Windows version when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How NBA 2K27 HACK handles analytics, cookies, and contact data when you use nba2k27hack.net.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on nba2k27hack.net.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for NBA 2K27 HACK products and nba2k27hack.net.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: October 2026. By using nba2k27hack.net or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to NBA 2K27 Elite hack and utility tools (HWID Spoofer, Unlock All) delivered through an operator portal and loader for NBA 2K27 on Windows PC.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when NBA 2K27 or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. nba2k27hack.net does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching NBA 2K27.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, 2K penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—NBA 2K27 on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page. Include your order email, Windows version, game build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for NBA 2K27 can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action under 2K Terms of Use.',
            'Check the homepage status banner before every session. Do not queue Park or Rec while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'NBA 2K27 HACK Support',
      description:
        'Get support for loader, HWID, and checkout questions at nba2k27hack.net.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Get Hack',
    browseCheatsMobile: 'Get Hack',
    homeAria: 'NBA 2K27 HACK home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join NBA 2K27 HACK on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
    languageLabel: 'Language',
    languageCode: 'EN',
    languageEn: 'English (site content)',
  },
};
