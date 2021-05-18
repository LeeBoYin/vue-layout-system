const path = require('path');
const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vue Layout System',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
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
      // {
      //   text: 'Showcases',
      //   link: '/showcases/',
      // },
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
            'LayoutColumns',
            'LayoutFlexColumn',
            'LayoutFlexRow',
            'LayoutList',
            'LayoutListInline',
          ]
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

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
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
  // The base URL the site will be deployed at.
  base: '/vue-layout-system/',
  // Specify the output directory for vuepress build.
  dest: 'dist',
};
