const path = require('path');
const { description } = require('../../package');
const title = 'Vue Layout System';

module.exports = {
  title,
  description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://leeboyin.github.io/vue-layout-system/' }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: 'https://leeboyin.github.io/vue-layout-system/logo.png' }],
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    repo: 'leeboyin/vue-layout-system',
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    search: false,
    nav: [
      {
        text: 'Get Started',
        link: '/guide/',
      },
      {
        text: 'Components',
        link: '/components/',
      },
      {
        text: 'Customize',
        link: '/customize/',
      },
      {
        text: 'Showcase',
        link: '/showcase/',
      },
    ],
    sidebar: {
      '/components/': [
        {
          title: 'Components',
          collapsable: false,
          children: [
            '/components/',
            'LayoutAbsolute',
            'LayoutAlign',
            'LayoutList',
            'LayoutListInline',
            'LayoutFlexColumn',
            'LayoutFlexRow',
            'LayoutColumns',
            'LayoutRows',
            'LayoutGrid',
          ],
        },
        {
          title: 'Tools',
          collapsable: false,
          children: [
              'UtilityClass',
          ],
        }
      ],
      '/': 'auto',
    },
  },
  plugins: [
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: [
          // register layout system components
          path.resolve('components'),
          path.resolve(__dirname, '../../../src/components'),
        ],
      },
    ],
    'live',
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@layout-system-components': path.resolve(__dirname, '../../../src/components'),
        '@layout-system-scss': path.resolve(__dirname, '../../../src/scss'),
      },
      extensions: ['.js', '.vue', '.css', '.scss'],
    },
  },
  base: '/vue-layout-system/',
  dest: 'dist',
};
