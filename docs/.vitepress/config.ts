import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'VPN 使用文档',
  description: '公司 VPN 节点使用规范与 Windows、Android、iOS 客户端教程',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '使用规范', link: '/vpn/guide' },
      { text: 'Android', link: '/vpn/mobile-android' },
      { text: 'iOS', link: '/vpn/mobile-ios' },
    ],
    sidebar: [
      {
        text: 'VPN 使用文档',
        items: [
          { text: '节点使用规范与电脑端教程', link: '/vpn/guide' },
          { text: 'Android · FlClash', link: '/vpn/mobile-android' },
          { text: 'iPhone / iPad · Shadowrocket', link: '/vpn/mobile-ios' },
        ],
      },
    ],
    outline: { label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '上次更新' },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
  },
})
