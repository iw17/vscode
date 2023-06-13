# 须知

## 依赖环境

- Node.js >= 16
- pnpm >= 7

## 依赖

- [Nextra](https://nextra.site/)
- [Nextra-docs-theme](https://nextra.site/docs/docs-theme/start)
- [Next.js](https://nextjs.org)

## 内容组织

内容都在 [pages](./pages) 目录下，使用 Markdown 和 [\_meta.json](./pages/_meta.json) 组织，也可以使用 mdx 自行加入 React Component，实现一些更复杂的功能。更具体的配置可以参考 [Nextra 官网 Page Configuration](https://nextra.site/docs/docs-theme/page-configuration)。

## 本地开发

```bash
# 安装依赖
pnpm install
# 开发
pnpm dev
# 检测错误
pnpm lint
# 格式化（commit 前请主动 format）
pnpm format
# 构建
pnpm build
# 预览
pnpm preview

```
