/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

import { BLOG_INDEX_SEO_TITLE, HOME_SEO } from './homeSeo';

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: HOME_SEO.title,
    description: HOME_SEO.description,
  },
  '/products/nba-2k27-hack/': {
    title: 'NBA 2K27 Hack Products | Elite & Utilities',
    description:
      'Elite NBA 2K27 hack plus HWID spoofer and unlock-all utilities for MyCareer, Park, and Rec on PC—compare tiers at nba2k27hack.net.',
  },
  '/products/nba-2k27-hack/elite/': {
    title: 'NBA 2K27 Elite Hack | Full MyCareer Suite',
    description:
      'Elite tier: auto green, shot meter assist, VC tools, badge editor, unlock-all, and priority patch delivery for NBA 2K27 on PC.',
  },
  '/products/nba-2k27-hack/utilities/': {
    title: 'NBA 2K27 Utilities | HWID, Recovery & Unlock All',
    description:
      'Choose HWID Spoofer or Unlock All—when each utility fits, setup notes, and links to full NBA 2K27 hack product pages.',
  },
  '/products/nba-2k27-hack/ugc/': {
    title: 'NBA 2K27 Account Recovery (UGC) | Appeals & Disputes',
    description:
      'Account recovery workspace for 2K restrictions, security holds, and appeal workflows—pair with HWID tools when hardware is flagged on PC.',
  },
  '/products/nba-2k27-hack/hwid-spoofer/': {
    title: 'NBA 2K27 HWID Spoofer | PC Hardware ID Reset',
    description:
      'HWID spoofer for NBA 2K27 on PC: disk serial, MAC rotation, compatibility scan, and post-spoof verification—follow the portal workflow before going online.',
  },
  '/products/nba-2k27-hack/unlock-all/': {
    title: 'NBA 2K27 Unlock All | Courts, Jerseys & Gear Preview',
    description:
      'Unlock All for NBA 2K27: preview courts, City Edition jerseys, and MyPlayer wardrobes locally on PC—standalone utility or bundled with Elite hack.',
  },
  '/blog/': {
    title: BLOG_INDEX_SEO_TITLE,
    description:
      'Setup guides, Elite tier tips, patch-day checklists, and Park/Rec config advice for NBA 2K27 hack users on PC.',
  },
  '/forum/': {
    title: 'NBA 2K27 Community Forum | NBA 2K27 HACK',
    description:
      'Community Q&A on NBA 2K27 hack setup, auto green presets, Park meta, patch-day checks, Elite upgrades, and HWID recovery—browse topics at nba2k27hack.net.',
  },
  '/faq/': {
    title: 'FAQ | NBA 2K27 Hack, Products & Setup',
    description:
      'Answers on Elite hack tiers, auto green, shot meter, HWID spoofer, Unlock All, checkout, safety, and blog guides for NBA 2K27 on PC at nba2k27hack.net.',
  },
  '/terms/': {
    title: 'Terms & Conditions | NBA 2K27 HACK',
    description:
      'Purchase terms, license use, and refund policy for NBA 2K27 HACK products sold through nba2k27hack.net.',
  },
  '/privacy/': {
    title: 'Privacy Policy | NBA 2K27 HACK',
    description:
      'How nba2k27hack.net collects and uses analytics, cookies, and contact data when you browse NBA 2K27 hack pages, checkout, or request support on PC.',
  },
  '/about/': {
    title: 'About NBA 2K27 Hack | PC Tools, Guides & Status',
    description:
      'Learn what NBA 2K27 HACK publishes—Elite hack tiers, utilities, patch status, and setup guides for MyCareer, Park, and Rec players on PC.',
  },
  '/support/': {
    title: 'Support & Contact | NBA 2K27 HACK',
    description:
      'Get help with loader setup, HWID spoofer, Elite hack checkout, and patch-day issues—contact NBA 2K27 HACK support for PC MyCareer and Park tools.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
