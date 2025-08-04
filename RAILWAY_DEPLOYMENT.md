# Railway 部署指南

## 概述

本指南详细说明如何将此 Next.js 项目部署到 Railway 平台。Railway 是一个现代化的云平台，支持自动化部署和扩展。

## 前置条件

- ✅ GitHub 账户
- ✅ Railway 账户（[railway.app](https://railway.app)）
- ✅ 项目代码已推送到 GitHub 仓库

## 项目兼容性

此项目已经满足 Railway 部署的所有要求：

### ✅ 技术栈兼容性
- **Next.js 15** - 完全支持
- **React 19** - 完全支持  
- **TypeScript** - 完全支持
- **Node.js >=18.17.0** - 符合 Railway 要求

### ✅ 构建配置
- `package.json` 包含正确的脚本：
  - `npm run build` - 生产构建
  - `npm run start` - 生产启动
- Next.js 配置文件 `next.config.ts` 已就绪
- TypeScript 配置 `tsconfig.json` 已配置

## 部署步骤

### 第一步：准备 GitHub 仓库

1. **确保代码已提交并推送到 GitHub**
   ```bash
   git add .
   git commit -m "Ready for Railway deployment"
   git push origin main
   ```

2. **验证仓库结构**
   ```
   joseph/
   ├── src/
   ├── package.json
   ├── next.config.ts
   ├── tsconfig.json
   └── README.md
   ```

### 第二步：连接 Railway

1. **登录 Railway**
   - 访问 [railway.app](https://railway.app)
   - 使用 GitHub 账户登录

2. **创建新项目**
   - 点击 "New Project"
   - 选择 "Deploy from GitHub repo"
   - 授权 Railway 访问你的 GitHub 账户

3. **选择仓库**
   - 找到并选择你的项目仓库
   - 点击 "Deploy Now"

### 第三步：自动检测与部署

Railway 会自动：

1. **检测项目类型**
   - 识别为 Next.js 项目
   - 设置 Node.js 运行环境

2. **配置构建命令**
   - 构建命令：`npm run build`
   - 启动命令：`npm run start`
   - 端口：自动设置为 `$PORT`

3. **开始构建**
   - 安装依赖：`npm install`
   - 执行构建：`npm run build`
   - 启动应用：`npm run start`

### 第四步：环境变量配置（可选）

如果你的应用需要环境变量：

1. **在 Railway 面板中**
   - 选择你的项目
   - 进入 "Variables" 标签
   - 添加需要的环境变量

2. **推荐的环境变量**
   ```env
   NODE_ENV=production
   NEXT_PUBLIC_APP_NAME=joseph
   NEXT_PUBLIC_APP_URL=https://your-app.railway.app
   ```

### 第五步：访问部署的应用

1. **获取部署 URL**
   - Railway 会自动生成一个 URL
   - 格式通常为：`https://your-app.railway.app`

2. **验证部署**
   - 点击生成的 URL
   - 确认应用正常运行
   - 测试所有功能

## 高级配置

### 自定义域名

1. **在 Railway 面板中**
   - 进入 "Settings" > "Domains"
   - 点击 "Custom Domain"
   - 输入你的域名
   - 按照说明配置 DNS

### Railway 配置文件（可选）

如需高级配置，可创建 `railway.toml`：

```toml
[build]
  command = "npm run build"

[deploy]
  command = "npm run start"
  healthcheckPath = "/"
  healthcheckTimeout = 100
  restartPolicyType = "on_failure"

[[services]]
  name = "joseph-app"

[services.variables]
  NODE_ENV = "production"
```

### Dockerfile（可选）

如需完全控制构建过程，可添加 `Dockerfile`：

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

## 监控与维护

### 查看日志
- 在 Railway 面板中选择 "Deployments"
- 点击最新部署查看构建和运行时日志

### 性能监控
- Railway 提供基本的 CPU 和内存使用情况
- 可在 "Metrics" 标签中查看

### 自动重新部署
- 每次推送到 main 分支时自动重新部署
- 可在 "Settings" 中配置触发分支

## 故障排除

### 常见问题

1. **构建失败**
   ```bash
   # 检查本地构建
   npm run build
   ```

2. **启动失败**
   ```bash
   # 验证启动命令
   npm run start
   ```

3. **端口问题**
   - Railway 自动设置 `PORT` 环境变量
   - Next.js 会自动使用这个端口

### 调试步骤

1. **检查构建日志**
   - 在 Railway 面板查看详细日志
   - 寻找错误信息

2. **验证依赖**
   ```bash
   npm audit
   npm outdated
   ```

3. **本地测试生产构建**
   ```bash
   npm run build
   npm run start
   ```

## 成本考虑

### Railway 定价
- **免费额度**：每月 $5 的免费使用额度
- **按使用量计费**：超出免费额度后按实际使用付费

### 优化建议
- 使用 Next.js 的静态生成功能减少服务器负载
- 合理配置图片优化
- 启用缓存策略

## 安全最佳实践

1. **环境变量**
   - 不要在代码中硬编码敏感信息
   - 使用 Railway 的环境变量功能

2. **依赖安全**
   ```bash
   npm audit fix
   ```

3. **HTTPS**
   - Railway 自动提供 HTTPS
   - 确保所有外部资源使用 HTTPS

## 联系支持

- **Railway 文档**：[docs.railway.app](https://docs.railway.app)
- **Railway 社区**：[Discord](https://discord.gg/railway)
- **GitHub Issues**：报告项目相关问题

---



## 总结

此项目已完全准备好部署到 Railway。只需连接 GitHub 仓库，Railway 会自动处理构建和部署过程。整个过程通常在 2-5 分钟内完成。

**下一步**：访问 [railway.app](https://railway.app) 开始部署！