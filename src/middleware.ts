import { defineMiddleware } from 'astro:middleware';
import { resolveCheckoutPathRedirect } from './config/checkout-redirects.mjs';
import { resolveForumLegacyRedirect } from '../scripts/redirects.mjs';

export const onRequest = defineMiddleware((context, next) => {
  const pathname = new URL(context.request.url).pathname;

  const forumDestination = resolveForumLegacyRedirect(pathname);
  if (forumDestination) {
    return context.redirect(forumDestination, 301);
  }

  const destination = resolveCheckoutPathRedirect(pathname);
  if (destination) {
    return context.redirect(destination, 302);
  }
  return next();
});
