import { defineUserConfig } from 'vuepress'

// pnpm i -D @vuepress/plugin-back-to-top@next
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

// pnpm i -D @vuepress/plugin-medium-zoom@next
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'

import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Recipes',
  //description: '这是我的第一个 VuePress 站点',
  base: '/recipes/',
  port: '8087',

  plugins: [
    backToTopPlugin(),
    mediumZoomPlugin({}),
  ],

  theme: defaultTheme({
    logo: '/favicon.png',
    // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar
    navbar: navbarFun(),
    // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar
    sidebar: sidebarFun(),
  }),
})

/* 顶部导航栏 */
function navbarFun() {
  return [
    { text: '首页', link: '/' },
    {
      text: '肉类', children: [
        { text: '猪肉', link: '/meat/pork/' },
        { text: '牛肉', link: '/meat/beef/' },
        { text: '鸡肉', link: '/meat/chicken/' },
      ]
    },
    {
      text: '米面干腌', children: [
        {
          text: '米面类', children: [
            { text: '米类', link: '/principals/rices/' },
            { text: '面类', link: '/principals/wheaten/' },
          ]
        }
      ]
    },
    {
      text: '果蔬', children: [
        { text: '水果', link: '/fruit_vigetables/fruits/' },
        { text: '蔬菜', link: '/fruit_vigetables/vegetables/' },
      ],
    },
    { text: '铁板烧', link: '/teppanyaki/' },
  ];
}

/* 侧边菜单栏 */
function sidebarFun() {
  return {
    '/principals/rices/': [{
      text: '米类',
      children: [
        '/principals/rices/rice.md',
      ],
    }],
    '/principals/wheaten/': [{
      text: '面类',
      children: [
        '/principals/wheaten/wheaten.md',
      ],
    }],
    '/meat/pork/': [{
      text: '猪肉',
      children: [
        '/meat/pork/pork.md',
        '/meat/pork/ribs.md',
      ],
    }],
    '/meat/beef/': [{
      text: '牛肉',
      children: [
        '/meat/beef/beef.md',
      ],
    }],
    '/meat/chicken/': [{
      text: '鸡肉',
      children: [
        '/meat/chicken/chicken.md',
      ],
    }],
  };
}
