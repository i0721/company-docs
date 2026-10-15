# VPN 使用文档

这是一个基于 VitePress 的公司 VPN 使用文档项目，包含部门节点使用规范、电脑端 FlClash 操作说明、Android FlClash 教程和 iOS Shadowrocket 教程。移动端教程配有 `docs/vpn/assets/mobile/` 下的操作截图。

## 本地运行

需要 Node.js 和项目指定的 pnpm 版本。进入项目根目录后运行：

```bash
corepack enable
pnpm install
pnpm docs:dev
```

开发服务启动后，根据终端输出的本地地址访问文档站。

## 构建

```bash
pnpm docs:build
```

构建产物位于 `docs/.vitepress/dist/`。在 Cloudflare Pages 等静态托管平台中，构建命令为 `pnpm docs:build`，输出目录为 `docs/.vitepress/dist`。

## 内容位置

| 文件或目录 | 内容 |
| --- | --- |
| `docs/index.md` | 文档首页 |
| `docs/vpn/guide.md` | 部门订阅分配、使用规范和电脑端教程 |
| `docs/vpn/mobile-android.md` | Android / FlClash 教程 |
| `docs/vpn/mobile-ios.md` | iOS / Shadowrocket 教程 |
| `docs/vpn/assets/` | 座位图、电脑端截图、手机端截图 |
| `docs/.vitepress/config.ts` | 文档站导航、侧边栏和站点设置 |

修改节点分组或订阅地址时，请同步检查三份 VPN 文档里的分配信息，避免员工使用过期链接。
