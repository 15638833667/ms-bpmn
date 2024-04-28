# /bin/bash

# 确保脚本抛出遇到的错误
set -e

# 读取package.json中的version
# version=`jq -r .version package.json`
# echo "发布前版本：$version"

# 打包构建
pnpm build

# 升级 ms-bpmn 依赖版本
# pnpm up ms-bpmn@$version

# 提交版本更新代码到github
git add .
git commit -m "feat: update"
git push

# echo "当前版本：$version"

# 发布到npm，pnpm(高性能的npm)
pnpm publish --registry http://192.168.3.105:15001/repository/npm-common/
