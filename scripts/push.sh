# /bin/bash

# 确保脚本抛出遇到的错误
set -e

# 提交修改到github

git add .
git commit -m 'feat: update'

git pull

git push
