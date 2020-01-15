#!/usr/bin/env bash
npm config get registry
npm config set registry=http://registry.npmjs.org 
echo '登录吧'
npm login
echo 'publish...'
npm publish
npm config set registry=https://registry.npm.taobao.org
echo '完成'
exit