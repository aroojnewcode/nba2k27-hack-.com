import { pageTitle } from './seo';

type BlogPostSeoOverride = {
  title: string;
  description?: string;
  h1?: string;
};

/** English blog SEO overrides (document title + meta; optional H1). */
const BLOG_POST_SEO: Record<string, BlogPostSeoOverride> = {
  'nba-2k27-auto-green-timing': {
    title: 'Green Timing – How NBA 2K27 auto green reads shot meter',
    description:
      'Green timing: How NBA 2K27 auto green reads shot meter windows, latency sliders, and separate Park vs MyCareer presets—start conservative before online.',
    h1: 'Auto green timing for NBA 2K27 hack: how the assist works',
  },
  'nba-2k27-elite-tier-guide': {
    title: 'NBA 2K27 Elite tier: when to upgrade your hack | 2K27 HACK',
  },
};

export function resolveBlogPostSeo(
  slug: string,
  postTitle: string,
  postDesc: string,
): { title: string; description: string; h1: string } {
  const override = BLOG_POST_SEO[slug];
  if (override) {
    return {
      title: override.title,
      description: override.description ?? postDesc,
      h1: override.h1 ?? postTitle,
    };
  }
  return {
    title: pageTitle(postTitle),
    description: postDesc,
    h1: postTitle,
  };
}
