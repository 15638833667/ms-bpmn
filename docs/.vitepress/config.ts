import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Component Template",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    nav: [
      { text: '组件', link: '/packages/features', activeMatch: '/packages/' },
      { text: '工具', link: '/utils/started', activeMatch: '/utils/' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present The Muse Catcher'
    },

    sidebar: {
      '/packages/': [
        {
          text: '指引',
          items: [
            {
              text: '快速上手',
              link: '/packages/started'
            }
          ]
        },
        {
          text: '组件',
          items: [
            {
              text: '按钮 Button',
              link: '/packages/components/button'
            }
          ]
        }
      ],
      '/utils/': [
        {
          text: '指引',
          items: [
            {
              text: '快速上手',
              link: '/utils/started'
            }
          ]
        },
        {
          text: '工具',
          items: [
            {
              text: 'date 日期格式化',
              link: '/utils/date-format'
            },
            {
              text: 'debounce 防抖',
              link: '/utils/debounce'
            },
            {
              text: 'throttle 节流',
              link: '/utils/throttle'
            },
            {
              text: 'toggleDark 切换暗黑',
              link: '/utils/toggle-dark'
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
