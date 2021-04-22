## 开发说明

使用了 rollup + TypeScript 技术栈进行开发。

```bash
# 安装依赖
$ npm i

# 将 mo-cli 链接到全局，这样就可以直接使用 mo-cli 命令
$ npm link

# 如果没有全局安装rollup,可以将 rollup 链接到全局，项目运行需要rollup
$ npm link rollup

# watch src 文件夹，自动打包到 libs/bundle.js
$ npm run dev

# 打包 src 到 dist/main.js
$ npm run build
```

## 目录结构

- `src` 源码目录
- `bin/mo-cli.js` dsv 命令入口
- `dist/main.js` src 打包后的输出，提供具体执行命令的函数
- `src/types` TypeScript 类型声明文件夹
