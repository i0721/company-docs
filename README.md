# VPN 使用文档

这是基于 VitePress 的公司 VPN 文档项目。**客户端下载**和**客户端使用**分成独立页面，包含 Android FlClash、Windows FlClash、iOS Shadowrocket 的下载步骤及图文使用说明。

## 本地运行

需要 Node.js 和项目配置的 pnpm 环境。进入项目根目录执行：

```bash
corepack enable
pnpm install
pnpm docs:dev
```

## 构建

```bash
pnpm docs:build
```

构建输出位于 `docs/.vitepress/dist/`。Cloudflare Pages 的构建命令为 `pnpm docs:build`，输出目录为 `docs/.vitepress/dist`。

## 文档目录

| 路径 | 内容 |
| --- | --- |
| `docs/index.md` | 首页及导航 |
| `docs/vpn/client-download.md` | **统一客户端下载与安装教程**（Android / Windows / iOS） |
| `docs/vpn/guide.md` | 部门订阅、使用规范及 Windows FlClash 使用教程；下载统一链接至下载页 |
| `docs/vpn/seat-map.md` | 座位与节点归属详情；仅从使用规范中的详情链接进入，不在首页/导航中展示 |
| `docs/vpn/mobile-android.md` | Android FlClash 使用教程；安装步骤链接至下载页 |
| `docs/vpn/mobile-ios.md` | iOS Shadowrocket 使用教程；安装步骤链接至下载页 |
| `docs/vpn/assets/` | PC 和手机操作截图、下载选项截图（原始座位图文件保留但不在网页展示） |
| `docs/.vitepress/config.ts` | 导航与侧边栏 |
| `docs/.vitepress/theme/components/SubscriptionList.vue` | 各平台共用的订阅地址一键复制组件（点击地址即可复制） |
| `docs/.vitepress/theme/index.ts` | 注册全局订阅组件 |

客户端下载教程位于 `/vpn/client-download`，可通过 `#android`、`#windows`、`#ios` 跳转到相应平台。使用教程与下载教程之间均有互相跳转的链接。


## 页面说明

- `/vpn/client-download`：客户端下载与安装
- `/vpn/guide`：Windows 使用规范与订阅配置
- `/vpn/seat-map`：座位分布与节点归属速查
- `/vpn/mobile-android`：Android 使用教程
- `/vpn/mobile-ios`：iOS 使用教程

## 订阅地址一键复制

Windows、Android、iOS 使用教程均通过 `<SubscriptionList />` 展示订阅地址。点击订阅地址可复制到剪贴板，按钮反馈「已复制」；如果浏览器禁用剪贴板，将尝试兼容复制方式。后续修改订阅地址时，只需修改 `docs/.vitepress/theme/components/SubscriptionList.vue` 中的列表。
