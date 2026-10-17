import type { Translations } from '../../types';

/** UI sections that receive strong translation (not blog article bodies). */
export function strongUiSlice(source: Translations): Partial<Translations> {
  return {
    hero: source.hero,
    features: source.features,
    whyUs: source.whyUs,
    setup: source.setup,
    compatibility: source.compatibility,
    cheats: source.cheats,
    products: source.products,
    blog: {
      eyebrow: source.blog.eyebrow,
      subtitle: source.blog.subtitle,
      latestSubtitle: source.blog.latestSubtitle,
      filterAll: source.blog.filterAll,
      searchLabel: source.blog.searchLabel,
      searchPlaceholder: source.blog.searchPlaceholder,
      sortLabel: source.blog.sortLabel,
      sortNewest: source.blog.sortNewest,
      sortOldest: source.blog.sortOldest,
      sortShortRead: source.blog.sortShortRead,
      sortLongRead: source.blog.sortLongRead,
      emptyFilter: source.blog.emptyFilter,
      viewAll: source.blog.viewAll,
      read: source.blog.read,
    },
    toolkit: source.toolkit,
    workflow: source.workflow,
    hackMenu: source.hackMenu,
    fieldNotes: source.fieldNotes,
    support: source.support,
    faq: source.faq,
    footer: source.footer,
    faqPage: source.faqPage,
    notFound: source.notFound,
    productsUtilities: source.productsUtilities,
  };
}
