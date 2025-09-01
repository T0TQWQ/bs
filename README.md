# 🌍 Interactive World Map

一个美观的交互式世界地图网站，使用SVG技术构建，包含点击跳转功能。

## ✨ 特性

- 🎨 **现代化设计**: 渐变背景和优雅的UI界面
- 🗺️ **SVG世界地图**: 使用点和线构成的简洁地图设计
- 🔘 **交互按钮**: 每个主要国家都有可点击的圆形按钮
- 🚀 **快速跳转**: 
  - 点击中国按钮 → 跳转到 [DeepSeek](https://www.deepseek.com/)
  - 点击美国按钮 → 跳转到 [ChatGPT](https://chat.openai.com/)
- 📱 **响应式设计**: 适配桌面端和移动端
- ♿ **无障碍支持**: 支持键盘导航和屏幕阅读器
- 🎭 **动画效果**: 悬停和点击动画，提升用户体验

## 🚀 在线演示

访问 GitHub Pages 查看在线演示: [https://你的用户名.github.io/bs](https://你的用户名.github.io/bs)

## 📦 本地运行

1. 克隆仓库:
```bash
git clone https://github.com/你的用户名/bs.git
cd bs
```

2. 使用本地服务器运行 (推荐):
```bash
# 使用 Python
python -m http.server 8000

# 或使用 Node.js
npx serve .

# 或使用 Live Server (VS Code 扩展)
```

3. 在浏览器中打开 `http://localhost:8000`

## 🛠️ 技术栈

- **HTML5**: 语义化标记
- **CSS3**: 现代样式和动画
- **JavaScript (ES6+)**: 交互逻辑和事件处理
- **SVG**: 矢量图形世界地图
- **GitHub Pages**: 免费托管

## 📁 项目结构

```
bs/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript逻辑
├── README.md           # 项目说明
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Pages 自动部署
```

## 🎯 功能说明

### 交互按钮
- **中国按钮** (绿色): 点击跳转到 DeepSeek AI 网站
- **美国按钮** (红色): 点击跳转到 ChatGPT 网站

### 视觉效果
- 按钮悬停时会放大并显示阴影
- 点击时有缩放动画效果
- 脉冲动画突出重要按钮
- 通知消息显示跳转状态

### 响应式设计
- 桌面端: 完整功能和大尺寸显示
- 平板端: 适中尺寸，保持所有功能
- 移动端: 紧凑布局，触摸友好

## 🔧 自定义配置

### 添加新国家
1. 在 `index.html` 中添加新的 SVG 路径和按钮
2. 在 `script.js` 中添加对应的点击处理逻辑
3. 在 `styles.css` 中添加相应的样式

### 修改跳转链接
在 `script.js` 文件的 `handleButtonClick` 函数中修改对应的URL:

```javascript
case 'china':
    window.open('https://你的链接.com/', '_blank');
    break;
```

## 🌐 部署到 GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 `main` 分支作为源
4. 网站将在几分钟内可用

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 这个仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证

这个项目使用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- 感谢 SVG 技术让我们能够创建可缩放的矢量图形
- 感谢 GitHub Pages 提供免费的静态网站托管
- 感谢所有开源贡献者的努力

## 📞 联系

如果你有任何问题或建议，请通过以下方式联系:

- 创建 [Issue](https://github.com/你的用户名/bs/issues)
- 发送邮件到: your-email@example.com

---

⭐ 如果这个项目对你有帮助，请给它一个星标！
