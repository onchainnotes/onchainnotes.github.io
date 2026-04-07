# ChainNotes 官网

ChainNotes - 智能笔记，链上存储

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

## 部署到 GitHub Pages

### 方法一：自动部署（推荐）

1. 在 GitHub 仓库设置中，进入 `Settings > Pages`
2. 在 "Source" 下选择 `GitHub Actions`
3. 提交代码到 `main` 分支，GitHub Actions 会自动构建和部署

### 方法二：手动部署

```bash
# 构建项目
pnpm build

# 将 dist 目录的内容推送到 gh-pages 分支
# 可以使用 gh-pages 包
pnpm add -D gh-pages
npx gh-pages -d dist
```

## 配置说明

如果你的仓库名不是 `<username>.github.io`，需要在 `vite.config.ts` 中修改 `base` 配置：

```typescript
export default defineConfig({
  base: '/<your-repo-name>/',  // 改成你的仓库名
  // ...
})
```

## 隐私政策

隐私政策链接：https://onchainnotes.github.io/privacy
