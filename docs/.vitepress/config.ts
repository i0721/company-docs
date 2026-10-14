import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Company Docs",
  description: "Docs Desc",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'VPN 使用规范', link: '/vpn/guide' }
    ],

    sidebar: [
      {
        text: '快速浏览',
        items: [
          { text: '新人 VPN 使用规范', link: '/vpn/guide' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
