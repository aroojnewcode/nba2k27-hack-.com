export type { BlogBlock, BlogPostFull } from './blog/types';
export { blogPosts } from './blog/posts';

import { blogPosts } from './blog/posts';
import type { BlogPostFull } from './blog/types';
import { localizeUiString, localizeUiStrings } from '../i18n/localeStringMap';
import { isStrongTranslationLocale, useLightLongFormContent } from '../i18n/translationPolicy';
import { normalizeLocale } from '../utils/locale';

/** Strong locales: full post tree when long-form is enabled; otherwise title/desc/tag only. */
export function localizeBlogPost<T extends BlogPostFull>(post: T, locale?: string | null): T {
  const loc = normalizeLocale(locale);
  if (loc === 'en' || !isStrongTranslationLocale(loc)) return post;
  if (useLightLongFormContent(loc)) {
    return {
      ...post,
      title: localizeUiString(post.title, loc),
      desc: localizeUiString(post.desc, loc),
      tag: localizeUiString(post.tag, loc),
    };
  }
  return localizeUiStrings(post, loc);
}

export function getBlogPost(slug: string, locale?: string | null) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return undefined;
  return localizeBlogPost(post, locale);
}

export function getAllBlogSlugs() {
  return blogPosts.map((p) => p.slug);
}

/** Never promote the setup guide as the blog index hero (it stays in the grid). */
const BLOG_INDEX_HERO_EXCLUDE_SLUGS = new Set(['nba-2k27-hack-setup-guide']);

export function getFeaturedBlogPost() {
  const explicit = blogPosts.find((p) => p.featured);
  if (explicit && !BLOG_INDEX_HERO_EXCLUDE_SLUGS.has(explicit.slug)) return explicit;
  return (
    blogPosts.find((p) => !BLOG_INDEX_HERO_EXCLUDE_SLUGS.has(p.slug)) ?? undefined
  );
}

export function getNonFeaturedBlogPosts() {
  const featured = getFeaturedBlogPost();
  return blogPosts.filter((p) => p.slug !== featured?.slug);
}

export function getFeaturedBlogPosts(limit = 3) {
  const featured = getFeaturedBlogPost();
  const rest = blogPosts.filter((p) => p.slug !== featured?.slug);
  return featured ? [featured, ...rest].slice(0, limit) : blogPosts.slice(0, limit);
}

export function getRelatedBlogPosts(slug: string, limit = 3) {
  const current = getBlogPost(slug);
  if (!current) return [];

  const sameTag = blogPosts.filter((p) => p.slug !== slug && p.tag === current.tag);
  const others = blogPosts.filter((p) => p.slug !== slug && p.tag !== current.tag);
  return [...sameTag, ...others].slice(0, limit);
}

export function getBlogPostsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((post): post is NonNullable<typeof post> => post != null);
}

export function getRelatedBlogPostsForProduct(relatedSlugs: string[], limit = 6) {
  const curated = getBlogPostsBySlugs(relatedSlugs);
  if (curated.length >= limit) return curated.slice(0, limit);

  const used = new Set(curated.map((p) => p.slug));
  const fill = blogPosts.filter((p) => !used.has(p.slug));
  return [...curated, ...fill].slice(0, limit);
}

export function getBlogTags() {
  return [...new Set(blogPosts.map((p) => p.tag))].sort((a, b) => a.localeCompare(b));
}

/** Topic pill order on the blog index — only tags that exist on published posts. */
const BLOG_FILTER_ORDER = ['Features', 'Guides', 'Setup', 'Updates', 'Troubleshooting'] as const;

export function getBlogFilterTags() {
  const used = new Set(blogPosts.map((p) => p.tag));
  return BLOG_FILTER_ORDER.filter((tag) => used.has(tag));
}

export function getBlogPostTimestamp(date: string) {
  return new Date(date).getTime();
}

export function getBlogReadMinutes(readTime: string) {
  const match = readTime.match(/(\d+)/);
  return match ? Number(match[1]) : 0;
}
