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
| `docs/vpn/mobile-android.md` | Android FlClash 使用教程；安装步骤链接至下载页 |
| `docs/vpn/mobile-ios.md` | iOS Shadowrocket 使用教程；安装步骤链接至下载页 |
| `docs/vpn/assets/` | 原有座位图、PC 和手机操作截图，及新增下载选项截图 |
| `docs/.vitepress/config.ts` | 导航与侧边栏 |

客户端下载教程位于 `/vpn/client-download`，可通过 `#android`、`#windows`、`#ios` 跳转到相应平台。使用教程与下载教程之间均有互相跳转的链接。
