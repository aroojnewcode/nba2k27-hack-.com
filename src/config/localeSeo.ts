import type { SiteLocale } from '../utils/locale';
import type { PageSeoEntry } from './pageSeo';
import { BLOG_INDEX_SEO_TITLE, HOME_SEO } from './homeSeo';

export const HOME_SEO_BY_LOCALE: Record<SiteLocale, { title: string; description: string }> = {
  en: { title: HOME_SEO.title, description: HOME_SEO.description },
  es: {
    title: 'Hack y cheats NBA 2K27 | Auto green, badges y VC para PC',
    description:
      'Hack NBA 2K27 para MyCareer, Park y Rec en PC: auto green, medidor de tiro, editor de badges, herramientas VC y Unlock All actualizados en cada parche en nba2k27hack.net.',
  },
  'pt-br': {
    title: 'Hack e cheats NBA 2K27 | Auto green, badges e VC para PC',
    description:
      'Hack NBA 2K27 para MyCareer, Park e Rec no PC—auto green, medidor de arremesso, editor de badges, ferramentas de VC e Unlock All atualizados em cada patch em nba2k27hack.net.',
  },
  fr: {
    title: 'Hack & cheats NBA 2K27 | Auto green, badges et VC pour PC',
    description:
      'Hack NBA 2K27 pour MyCareer, Park et Rec sur PC—auto green, shot meter, éditeur de badges, outils VC et Unlock All mis à jour à chaque patch sur nba2k27hack.net.',
  },
  de: {
    title: 'NBA 2K27 Hack & Cheats | Auto Green, Badges & VC für PC',
    description:
      'NBA 2K27 Hack für MyCareer, Park und Rec auf PC—Auto Green, Shot Meter, Badge-Editor, VC-Tools und Unlock All nach jedem Patch auf nba2k27hack.net.',
  },
};

const BLOG_INDEX_ES = 'Guías del hack NBA 2K27 y notas de parche';
const BLOG_INDEX_PT = 'Guias do hack NBA 2K27 e notas de patch';
const BLOG_INDEX_FR = 'Guides hack NBA 2K27 et notes de patch';
const BLOG_INDEX_DE = 'NBA 2K27 Hack-Guides & Patch-Notizen';

export const BLOG_INDEX_TITLE_BY_LOCALE: Record<SiteLocale, string> = {
  en: BLOG_INDEX_SEO_TITLE,
  es: BLOG_INDEX_ES,
  'pt-br': BLOG_INDEX_PT,
  fr: BLOG_INDEX_FR,
  de: BLOG_INDEX_DE,
};

function pageSeoEn(): Record<string, PageSeoEntry> {
  return {
    '/': HOME_SEO_BY_LOCALE.en,
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
}

const PAGE_SEO_LOCALIZED: Record<SiteLocale, Record<string, PageSeoEntry>> = {
  en: pageSeoEn(),
  es: {
    ...pageSeoEn(),
    '/': HOME_SEO_BY_LOCALE.es,
    '/blog/': {
      title: BLOG_INDEX_ES,
      description:
        'Guías de configuración, consejos Elite, listas de parche y ajustes Park/Rec para usuarios del hack NBA 2K27 en PC.',
    },
    '/faq/': {
      title: 'FAQ | Hack NBA 2K27, productos y configuración',
      description:
        'Respuestas sobre Elite, auto green, medidor de tiro, HWID spoofer, Unlock All, checkout y seguridad para NBA 2K27 en PC.',
    },
    '/products/nba-2k27-hack/': {
      title: 'Productos hack NBA 2K27 | Elite y utilidades',
      description:
        'Hack Elite NBA 2K27 más HWID spoofer y Unlock All para MyCareer, Park y Rec en PC—compara niveles en nba2k27hack.net.',
    },
    '/support/': {
      title: 'Soporte y contacto | NBA 2K27 HACK',
      description:
        'Ayuda con loader, HWID spoofer, checkout Elite y parches—contacta soporte NBA 2K27 HACK para MyCareer y Park en PC.',
    },
    '/forum/': {
      title: 'Foro NBA 2K27 | Comunidad NBA 2K27 HACK',
      description:
        'Preguntas sobre setup del hack, auto green, meta Park, parches, Elite y HWID—explora temas en nba2k27hack.net.',
    },
  },
  'pt-br': {
    ...pageSeoEn(),
    '/': HOME_SEO_BY_LOCALE['pt-br'],
    '/blog/': {
      title: BLOG_INDEX_PT,
      description:
        'Guias de setup, dicas Elite, checklists de patch e configs Park/Rec para usuários do hack NBA 2K27 no PC.',
    },
    '/faq/': {
      title: 'FAQ | Hack NBA 2K27, produtos e setup',
      description:
        'Respostas sobre Elite, auto green, medidor, HWID spoofer, Unlock All, checkout e segurança para NBA 2K27 no PC.',
    },
    '/products/nba-2k27-hack/': {
      title: 'Produtos hack NBA 2K27 | Elite e utilitários',
      description:
        'Hack Elite NBA 2K27 mais HWID spoofer e Unlock All para MyCareer, Park e Rec no PC—compare planos em nba2k27hack.net.',
    },
    '/support/': {
      title: 'Suporte e contato | NBA 2K27 HACK',
      description:
        'Ajuda com loader, HWID spoofer, checkout Elite e dia de patch—suporte NBA 2K27 HACK para MyCareer e Park no PC.',
    },
    '/forum/': {
      title: 'Fórum NBA 2K27 | Comunidade NBA 2K27 HACK',
      description:
        'Perguntas sobre setup do hack, auto green, meta Park, patches, Elite e HWID—veja tópicos em nba2k27hack.net.',
    },
  },
  fr: {
    ...pageSeoEn(),
    '/': HOME_SEO_BY_LOCALE.fr,
    '/blog/': {
      title: BLOG_INDEX_FR,
      description:
        'Guides d’installation, conseils Elite, checklists patch et configs Park/Rec pour le hack NBA 2K27 sur PC.',
    },
    '/faq/': {
      title: 'FAQ | Hack NBA 2K27, produits et installation',
      description:
        'Réponses sur Elite, auto green, shot meter, HWID spoofer, Unlock All, checkout et sécurité pour NBA 2K27 sur PC.',
    },
    '/products/nba-2k27-hack/': {
      title: 'Produits hack NBA 2K27 | Elite et utilitaires',
      description:
        'Hack Elite NBA 2K27 plus HWID spoofer et Unlock All pour MyCareer, Park et Rec sur PC—comparez les offres sur nba2k27hack.net.',
    },
    '/support/': {
      title: 'Support et contact | NBA 2K27 HACK',
      description:
        'Aide loader, HWID spoofer, checkout Elite et jour de patch—support NBA 2K27 HACK pour MyCareer et Park sur PC.',
    },
    '/forum/': {
      title: 'Forum NBA 2K27 | Communauté NBA 2K27 HACK',
      description:
        'Questions sur setup hack, auto green, meta Park, patches, Elite et HWID—parcourir les sujets sur nba2k27hack.net.',
    },
  },
  de: {
    ...pageSeoEn(),
    '/': HOME_SEO_BY_LOCALE.de,
    '/blog/': {
      title: BLOG_INDEX_DE,
      description:
        'Setup-Guides, Elite-Tipps, Patch-Checklisten und Park/Rec-Configs für NBA 2K27 Hack-Nutzer auf dem PC.',
    },
    '/faq/': {
      title: 'FAQ | NBA 2K27 Hack, Produkte & Setup',
      description:
        'Antworten zu Elite, Auto Green, Shot Meter, HWID Spoofer, Unlock All, Checkout und Sicherheit für NBA 2K27 auf PC.',
    },
    '/products/nba-2k27-hack/': {
      title: 'NBA 2K27 Hack Produkte | Elite & Utilities',
      description:
        'Elite NBA 2K27 Hack plus HWID Spoofer und Unlock All für MyCareer, Park und Rec auf PC—Tiers auf nba2k27hack.net vergleichen.',
    },
    '/support/': {
      title: 'Support & Kontakt | NBA 2K27 HACK',
      description:
        'Hilfe zu Loader, HWID Spoofer, Elite-Checkout und Patch-Tag—NBA 2K27 HACK Support für MyCareer und Park auf PC.',
    },
    '/forum/': {
      title: 'NBA 2K27 Forum | NBA 2K27 HACK Community',
      description:
        'Fragen zu Hack-Setup, Auto Green, Park-Meta, Patches, Elite und HWID—Themen auf nba2k27hack.net durchsuchen.',
    },
  },
};

export function getPageSeoForLocale(locale: SiteLocale, path: string): PageSeoEntry | undefined {
  const map = PAGE_SEO_LOCALIZED[locale] ?? PAGE_SEO_LOCALIZED.en;
  return map[path];
}
