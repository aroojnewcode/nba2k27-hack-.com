import { forumPosts } from '../src/data/forum.ts';

/** Astro static redirect entries for legacy /forum/:slug/ URLs. */
export function buildForumLegacyRedirects() {
  const redirects = {};
  for (const post of forumPosts) {
    redirects[`/forum/${post.slug}/`] = `/en/forum/${post.slug}/`;
  }
  return redirects;
}
