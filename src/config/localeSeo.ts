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
  'zh-cn': {
    title: 'NBA 2K27 外挂与辅助 | PC 自动绿、徽章与 VC',
    description:
      'NBA 2K27 PC 版 MyCareer、Park 与 Rec 外挂—自动绿、投篮条、徽章编辑、VC 工具与 Unlock All，每次更新后在 nba2k27hack.net 同步维护。',
  },
  it: {
    title: 'Hack e cheat NBA 2K27 | Auto green, badge e VC per PC',
    description:
      'Hack NBA 2K27 per MyCareer, Park e Rec su PC—auto green, shot meter, editor badge, strumenti VC e Unlock All aggiornati a ogni patch su nba2k27hack.net.',
  },
  ar: {
    title: 'هاك وغش NBA 2K27 | auto green وشارات وVC للكمبيوتر',
    description:
      'هاك NBA 2K27 لـ MyCareer وPark وRec على PC—auto green ومقياس التصويب ومحرر الشارات وأدوات VC وUnlock All محدّث مع كل تحديث على nba2k27hack.net.',
  },
  nl: {
    title: 'NBA 2K27 hack & cheats | Auto green, badges en VC voor PC',
    description:
      'NBA 2K27 hack voor MyCareer, Park en Rec op PC—auto green, shot meter, badge-editor en VC-tools op nba2k27hack.net.',
  },
  tr: {
    title: 'NBA 2K27 hack ve hileler | PC için auto green, rozet ve VC',
    description:
      'NBA 2K27 hack—MyCareer, Park ve Rec için auto green, shot meter ve VC araçları nba2k27hack.net üzerinde.',
  },
  pl: {
    title: 'Hack i cheaty NBA 2K27 | Auto green, odznaki i VC na PC',
    description:
      'Hack NBA 2K27 na PC—MyCareer, Park i Rec, auto green, shot meter i narzędzia VC na nba2k27hack.net.',
  },
  pt: {
    title: 'Hack e cheats NBA 2K27 | Auto green, badges e VC para PC',
    description:
      'Hack NBA 2K27 para MyCareer, Park e Rec no PC—ferramentas auto green e VC em nba2k27hack.net.',
  },
  id: {
    title: 'Hack & cheat NBA 2K27 | Auto green, badge & VC untuk PC',
    description:
      'Hack NBA 2K27 untuk MyCareer, Park, dan Rec di PC—auto green, shot meter, dan utilitas VC di nba2k27hack.net.',
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
  'zh-cn': 'NBA 2K27 外挂指南与更新说明',
  it: 'Guide hack NBA 2K27 e note patch',
  ar: 'أدلة هاك NBA 2K27 وملاحظات التحديث',
  nl: 'NBA 2K27 hack-gidsen en patchnotities',
  tr: 'NBA 2K27 hack rehberleri ve yama notları',
  pl: 'Poradniki hack NBA 2K27 i notatki patchy',
  pt: 'Guias hack NBA 2K27 e notas de patch',
  id: 'Panduan hack NBA 2K27 dan catatan patch',
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
        'NBA 2K27 hack setup guides, Elite tier tips, patch-day checklists, and Park/Rec config advice for PC players—guides and patch notes on nba2k27hack.net.',
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
      title: 'Status – About NBA 2K27 HACK | PC Tools & Guides',
      description:
        'Live patch status, loader updates, and operator notes for NBA 2K27 HACK—what we publish, how support works, and setup guides for PC MyCareer, Park, and Rec.',
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
  'zh-cn': {
    ...pageSeoEn(),
    '/': HOME_SEO_BY_LOCALE['zh-cn'],
    '/blog/': {
      title: BLOG_INDEX_TITLE_BY_LOCALE['zh-cn'],
      description: 'NBA 2K27 外挂安装指南、Elite 技巧、更新日清单与 Park/Rec 配置建议。',
    },
    '/faq/': {
      title: '常见问题 | NBA 2K27 外挂、产品与安装',
      description: '关于 Elite、自动绿、投篮条、HWID 伪装、Unlock All、结账与安全性的 NBA 2K27 PC 解答。',
    },
    '/products/nba-2k27-hack/': {
      title: 'NBA 2K27 外挂产品 | Elite 与工具',
      description:
        'NBA 2K27 Elite 外挂、HWID 伪装与 Unlock All，适用于 MyCareer、Park 与 Rec PC 版—在 nba2k27hack.net 对比方案。',
    },
    '/forum/': {
      title: 'NBA 2K27 论坛 | NBA 2K27 HACK 社区',
      description: '外挂安装、自动绿、Park meta、更新、Elite 与 HWID 相关讨论—在 nba2k27hack.net 浏览主题。',
    },
  },
  it: {
    ...pageSeoEn(),
    '/': HOME_SEO_BY_LOCALE.it,
    '/blog/': {
      title: BLOG_INDEX_TITLE_BY_LOCALE.it,
      description:
        'Guide setup, consigli Elite, checklist patch e config Park/Rec per utenti hack NBA 2K27 su PC.',
    },
    '/faq/': {
      title: 'FAQ | Hack NBA 2K27, prodotti e setup',
      description:
        'Risposte su Elite, auto green, shot meter, HWID spoofer, Unlock All, checkout e sicurezza per NBA 2K27 su PC.',
    },
    '/products/nba-2k27-hack/': {
      title: 'Prodotti hack NBA 2K27 | Elite e utility',
      description:
        'Hack Elite NBA 2K27 più HWID spoofer e Unlock All per MyCareer, Park e Rec su PC—confronta i piani su nba2k27hack.net.',
    },
    '/forum/': {
      title: 'Forum NBA 2K27 | Community NBA 2K27 HACK',
      description:
        'Domande su setup hack, auto green, meta Park, patch, Elite e HWID—esplora gli argomenti su nba2k27hack.net.',
    },
  },
  ar: {
    ...pageSeoEn(),
    '/': HOME_SEO_BY_LOCALE.ar,
    '/blog/': {
      title: BLOG_INDEX_TITLE_BY_LOCALE.ar,
      description: 'أدلة الإعداد ونصائح Elite وقوائم التحديث وإعدادات Park/Rec لمستخدمي هاك NBA 2K27 على PC.',
    },
    '/faq/': {
      title: 'الأسئلة الشائعة | هاك NBA 2K27 والمنتجات',
      description: 'إجابات عن Elite وauto green وHWID spoofer وUnlock All والدفع والأمان لـ NBA 2K27 على PC.',
    },
    '/products/nba-2k27-hack/': {
      title: 'منتجات هاك NBA 2K27 | Elite وأدوات',
      description: 'هاك Elite NBA 2K27 وHWID spoofer وUnlock All لـ MyCareer وPark وRec على PC—قارن على nba2k27hack.net.',
    },
    '/forum/': {
      title: 'منتدى NBA 2K27 | مجتمع NBA 2K27 HACK',
      description: 'أسئلة حول إعداد الهاك وauto green وPark والباتش وElite وHWID على nba2k27hack.net.',
    },
  },
  nl: {
    ...pageSeoEn(),
    '/': HOME_SEO_BY_LOCALE.nl,
    '/blog/': { title: BLOG_INDEX_TITLE_BY_LOCALE.nl, description: pageSeoEn()['/blog/']!.description },
  },
  tr: {
    ...pageSeoEn(),
    '/': HOME_SEO_BY_LOCALE.tr,
    '/blog/': { title: BLOG_INDEX_TITLE_BY_LOCALE.tr, description: pageSeoEn()['/blog/']!.description },
  },
  pl: {
    ...pageSeoEn(),
    '/': HOME_SEO_BY_LOCALE.pl,
    '/blog/': { title: BLOG_INDEX_TITLE_BY_LOCALE.pl, description: pageSeoEn()['/blog/']!.description },
  },
  pt: {
    ...pageSeoEn(),
    '/': HOME_SEO_BY_LOCALE.pt,
    '/blog/': { title: BLOG_INDEX_TITLE_BY_LOCALE.pt, description: pageSeoEn()['/blog/']!.description },
  },
  id: {
    ...pageSeoEn(),
    '/': HOME_SEO_BY_LOCALE.id,
    '/blog/': { title: BLOG_INDEX_TITLE_BY_LOCALE.id, description: pageSeoEn()['/blog/']!.description },
  },
};

export function getPageSeoForLocale(locale: SiteLocale, path: string): PageSeoEntry | undefined {
  const map = PAGE_SEO_LOCALIZED[locale] ?? PAGE_SEO_LOCALIZED.en;
  return map[path];
}
