# 🚀 部署指南

## 快速部署到GitHub Pages

### 1. 创建GitHub仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名称输入: `bs` (或者你喜欢的名称)
4. 设置为 Public (GitHub Pages 免费版需要公开仓库)
5. 不要初始化 README、.gitignore 或 license (我们已经创建了)
6. 点击 "Create repository"

### 2. 本地Git初始化和推送

在项目根目录 (`/Users/c/bs`) 运行以下命令:

```bash
# 初始化Git仓库
git init

# 添加所有文件
git add .

# 创建初始提交
git commit -m "Initial commit: Interactive World Map with DeepSeek and ChatGPT integration"

# 添加远程仓库 (替换为你的GitHub用户名)
git remote add origin https://github.com/你的用户名/bs.git

# 推送到GitHub
git push -u origin main
```

### 3. 启用GitHub Pages

1. 在GitHub仓库页面，点击 "Settings" 标签
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分，选择 "GitHub Actions"
4. GitHub Actions 工作流会自动运行并部署网站

### 4. 访问你的网站

几分钟后，你的网站将在以下地址可用:
```
https://你的用户名.github.io/bs
```

## 🔧 手动命令 (如果需要)

如果你想手动运行这些命令，可以复制粘贴:

```bash
cd /Users/c/bs
git init
git add .
git commit -m "Initial commit: Interactive World Map"
git branch -M main
git remote add origin https://github.com/你的用户名/bs.git
git push -u origin main
```

## 🛠️ 本地开发

在开发过程中，你可以使用以下命令启动本地服务器:

```bash
# 使用Python (如果已安装)
python3 -m http.server 8000

# 或使用Node.js
npx serve .

# 然后访问 http://localhost:8000
```

## 📝 更新网站

当你修改代码后，使用以下命令更新:

```bash
git add .
git commit -m "描述你的更改"
git push
```

GitHub Actions 会自动重新部署网站。

## ⚠️ 注意事项

1. **仓库必须是公开的** - GitHub Pages 免费版只支持公开仓库
2. **分支名称** - 确保使用 `main` 分支 (现代GitHub默认)
3. **等待时间** - 首次部署可能需要5-10分钟
4. **自定义域名** - 如果需要自定义域名，在Pages设置中配置

## 🔍 故障排除

### 网站没有更新？
1. 检查 Actions 标签页是否有错误
2. 确保推送到了正确的分支
3. 等待几分钟，GitHub Pages 有缓存

### 404错误？
1. 确保 `index.html` 在根目录
2. 检查 Pages 设置是否正确
3. 确认仓库是公开的

### 样式没有加载？
1. 检查文件路径是否正确
2. 确保所有文件都被推送到GitHub
3. 查看浏览器控制台的错误信息
