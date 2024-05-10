# /bin/bash

# 确保脚本抛出遇到的错误
set -e

# 读取package.json中的version
# version=`jq -r .version package.json`
# echo "发布前版本：$version"


echo "执行脚本：$0"
echo "commit信息：$1"

# 打包构建
echo "----- npm run build -----"
npm run build

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

# echo "当前版本：$version"

# 发布到npm，pnpm(高性能的npm)
echo "----- npm publish --registry http://192.168.3.105:15001/repository/npm-common/ -----"
npm publish --registry http://192.168.3.105:15001/repository/npm-common/
