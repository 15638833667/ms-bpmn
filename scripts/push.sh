# /bin/bash

# 确保脚本抛出遇到的错误
set -e

# 提交修改到github

echo "执行脚本：$0"
echo "commit信息：$1"

# 升级 ms-bpmn-js 依赖版本
# pnpm up ms-bpmn-js@$version

# 提交版本更新代码到github
echo "----- git add . -----"
git add .

echo "----- git commit -m "$1" -----"
git commit -m "$1"

echo "----- git pull -----"
git pull

echo "----- git push -----"
git push