#!/bin/bash

# 交互式世界地图快速部署脚本
# 使用方法: ./quick-deploy.sh 您的GitHub用户名

echo "🚀 开始部署交互式世界地图..."

# 检查是否提供了用户名参数
if [ -z "$1" ]; then
    echo "❌ 请提供GitHub用户名"
    echo "使用方法: ./quick-deploy.sh 您的GitHub用户名"
    echo "例如: ./quick-deploy.sh yourname"
    exit 1
fi

USERNAME=$1
REPO_URL="https://github.com/$USERNAME/bs.git"

echo "📁 配置远程仓库: $REPO_URL"

# 添加远程仓库
git remote add origin $REPO_URL

# 推送代码
echo "📤 推送代码到GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ 代码推送成功！"
    echo ""
    echo "🌐 接下来的步骤："
    echo "1. 访问: https://github.com/$USERNAME/bs"
    echo "2. 点击 'Settings' 标签"
    echo "3. 在左侧菜单找到 'Pages'"
    echo "4. 在 'Source' 选择 'GitHub Actions'"
    echo "5. 等待自动部署完成"
    echo ""
    echo "🎉 您的网站将在以下地址可用:"
    echo "   https://$USERNAME.github.io/bs"
    echo ""
    echo "⏱️  首次部署可能需要5-10分钟"
else
    echo "❌ 推送失败，请检查："
    echo "1. GitHub仓库是否存在"
    echo "2. 是否有推送权限"
    echo "3. 网络连接是否正常"
fi
