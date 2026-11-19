#!/usr/bin/env bash
# 在 Git Bash 中运行：bash deploy.sh <你的GitHub用户名>
# 例如：bash deploy.sh zhangsan
set -e

USER="${1:-你的GitHub用户名}"
REPO="mind-isle-admin"

echo "仓库地址: https://github.com/$USER/$REPO"
echo ""

# 1. 初始化本地仓库（若尚未初始化）
git init
git add -A
git commit -m "Deploy mind-isle admin: 14 tests + arcane template + Arcanelogin" || echo "（无新变更或已提交）"

# 2. 关联远端（若已存在则忽略错误）
if ! git remote get-url origin >/dev/null 2>&1; then
  git remote add origin "https://github.com/$USER/$REPO.git"
else
  git remote set-url origin "https://github.com/$USER/$REPO.git"
fi

# 3. 推送（首次）
git branch -M main
echo ""
echo "准备推送到 GitHub... 如提示登录，请在浏览器弹出的窗口用账号密码/令牌授权。"
git push -u origin main

echo ""
echo "完成。接下来去仓库 Settings -> Pages："
echo "  Source = Deploy from a branch"
echo "  Branch = main / (root)"
echo "  Save"
echo "约 1-2 分钟后访问: https://$USER.github.io/$REPO/"
