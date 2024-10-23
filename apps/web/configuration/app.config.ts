export const appConfiguration = {
  head: {
    viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { name: 'shop-name', content: process.env.STORENAME || 'Trekking Star' },
      { name: 'description', content: process.env.METADESC || 'Trekking Star' },
      { name: 'keywords', content: process.env.METAKEYWORDS || 'Trekking Star' },
      { name: 'theme-color', content: '#0C7992' },
      { property: 'og:title', content: process.env.OGTITLE || 'Trekking Star' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: process.env.OGIMAGE || '' },
      { property: 'og:url', content: process.env.API_ENDPOINT },
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/favicon.ico' },
    ],
    title: process.env.STORENAME || 'Trekking Star',
  },
};
