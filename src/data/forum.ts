export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    upvotes: 14,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'what-auto-green-presets-include',
    title: 'What do auto green presets include in the setup guide?',
    upvotes: 73,
    excerpt: 'Shot meter windows, latency sliders, and MyCourt vs Park profiles explained.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'NBA 2K27 hack setup guide',
    sourcePath: '/blog/nba-2k27-hack-setup-guide/',
    answer:
      'The guide covers conservative timing windows, shot meter overlay tuning, and separate cloud profiles for MyCareer, Park, and Rec.',
    detail: 'Start in MyCourt with portal defaults before enabling faster windows online.',
    tip: 'Adjust latency in small steps—large jumps look obvious in Rec.',
  }),
  guideDiscussion({
    slug: 'how-to-tune-shot-meter-overlay',
    title: 'How should I tune the shot meter overlay for the first time?',
    upvotes: 58,
    excerpt: 'Readable colors, meter placement, and stream-proof testing workflow.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Auto green timing for NBA 2K27',
    sourcePath: '/blog/nba-2k27-auto-green-timing/',
    answer:
      'Pick high-contrast colors, keep the meter off center court UI, and verify stream-proof mode if you record content.',
    detail: 'Test each build height separately—big men and guards use different default windows.',
    tip: 'Save a backup profile before experimenting with Park latency.',
  }),
  guideDiscussion({
    slug: 'when-to-upgrade-to-elite-hack',
    title: 'When should I upgrade to Elite instead of utilities only?',
    upvotes: 44,
    excerpt: 'Elite bundles auto green, badge tools, VC utilities, and Unlock All on one patch queue.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'NBA 2K27 Elite tier guide',
    sourcePath: '/blog/nba-2k27-elite-tier-guide/',
    answer:
      'Elite fits operators who want gameplay modules and cosmetics on the same loader build with priority patch delivery.',
    detail: 'If you only need courts and jerseys preview, Unlock All standalone may be enough.',
    tip: 'Check Discord #status for Elite slot availability before checkout.',
  }),
  guideDiscussion({
    slug: 'what-to-check-after-nba-2k27-patch',
    title: 'What should I check before playing after an NBA 2K27 patch?',
    upvotes: 36,
    excerpt: 'Status banner, loader version, and conservative profile reload steps.',
    category: 'Patch Talk',
    categoryTone: 'orange',
    sourceTitle: 'NBA 2K27 patch day checklist',
    sourcePath: '/blog/nba-2k27-patch-day-checklist/',
    answer:
      'Read the live banner on nba2k27hack.net, download the latest loader, and run a MyCourt test before Park or Rec.',
    detail: 'Do not carry old cloud profiles forward without reloading portal presets.',
    tip: 'Post patch notes in Discord #status list module-level changes.',
  }),
  guideDiscussion({
    slug: 'unlock-all-local-preview-explained',
    title: 'Does Unlock All show courts and jerseys to other players online?',
    upvotes: 29,
    excerpt: 'Local preview only—other players still see your real inventory.',
    category: 'Community',
    categoryTone: 'green',
    sourceTitle: 'Unlock All courts and jerseys guide',
    sourcePath: '/blog/nba-2k27-unlock-all-courts-jerseys/',
    answer:
      'Unlock All previews cosmetics on your client for content and build planning. Online sessions still display your actual inventory.',
    detail: 'Included with Elite or available as a standalone utility.',
    tip: 'Export favorites from the portal before major title updates.',
  }),
  guideDiscussion({
    slug: 'hwid-spoofer-vs-new-account',
    title: 'HWID spoofer or new account after a hardware flag?',
    upvotes: 24,
    excerpt: 'When to spoof, when to appeal, and when to start fresh.',
    category: 'Patch Talk',
    categoryTone: 'orange',
    sourceTitle: 'HWID spoofer after a hardware ban',
    sourcePath: '/blog/nba-2k27-hwid-spoofer-after-ban/',
    answer:
      'Spoof when fresh accounts fail instantly on one PC but work elsewhere. Use account recovery workflows for restriction appeals—not hardware spoofing.',
    detail: 'Follow restore-point and verification steps in the portal before going online.',
    tip: 'Never stack two spoof tools on the same machine.',
  }),
];

export const forumPosts: ForumPost[] = [
  ...additionalGuidePosts,
  {
    slug: 'how-to-buy-nba-2k27-hack',
    category: 'Community',
    categoryTone: 'green',
    title: 'How does checkout and portal access work?',
    excerpt: 'Order email, operator dashboard, and first Discord ticket tips.',
    author: 'guide_team',
    age: '3 days ago',
    commentsCount: 2,
    upvotes: 48,
    flair: 'Guide Q&A',
    sourceTitle: 'How to buy NBA 2K27 hack in 2026',
    sourcePath: '/blog/how-to-buy-nba-2k27-hack-2026/',
    body: [
      'Complete checkout on nba2k27hack.net, then open the portal link from your order email to download the current loader.',
      'Include your order email and Windows version when opening Discord support for setup help.',
    ],
    comments: [
      {
        author: 'guide_team',
        age: 'From the guide',
        score: 3,
        body: 'Elite and utilities use the same secure checkout flow—pick the product page that matches your goal first.',
      },
    ],
  },
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
