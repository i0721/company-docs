import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'VPN 使用文档',
  description: '公司 VPN 客户端下载及 Windows、Android、iOS 使用教程',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '客户端下载', link: '/vpn/client-download' },
      { text: '使用规范', link: '/vpn/guide' },
      { text: 'Android', link: '/vpn/mobile-android' },
      { text: 'iOS', link: '/vpn/mobile-ios' },
    ],
    sidebar: [
      {
        text: 'VPN 使用文档',
        items: [
          { text: '客户端下载与安装（Android / Windows / iOS）', link: '/vpn/client-download' },
          { text: 'Windows · FlClash 使用教程与节点规范', link: '/vpn/guide' },
          { text: 'Android · FlClash 使用教程', link: '/vpn/mobile-android' },
          { text: 'iPhone / iPad · Shadowrocket 使用教程', link: '/vpn/mobile-ios' },
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
