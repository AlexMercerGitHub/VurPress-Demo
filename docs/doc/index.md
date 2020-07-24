# VurPress搭建流程
### 制作流程
[官网Demo](https://www.vuepress.cn/guide/getting-started.html#%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85)

#### 1.新建VuePressDemo文件夹
[现有项目](https://www.vuepress.cn/guide/getting-started.html#%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85)
>- VuePressDemo 这个只是一个外壳
VuePress包,如果之前安装过，可以忽略不计
```
# 将 VuePress 作为一个本地依赖安装
yarn add -D vuepress # 或者：npm install -D vuepress

# 新建一个 docs 文件夹
mkdir docs

# 新建一个 markdown 文件
echo '# Hello VuePress!' > docs/README.md

# 开始写作
npx vuepress dev docs
```
#### 2.安装package.json
* a.快捷方式 `npm init -y`
* b.新建文件`package.json`，内容如下
```
{
    "scripts": {
      "server": "vuepress dev docs",  //npm run server启动
      "build": "vuepress build docs"
    }
  }
```

#### 3.首页主题配置
[官网教程](https://www.vuepress.cn/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5)

在`docs`中有一个`README.md`文件，将下面的复制粘贴进去
heroImage 是在接下来的配置
```
---
home: true
heroImage: /img/logo.jpg
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

#### 4.生成.vuepress文件夹
`npm run build`打包文件，会自动生成`.vuepress`文件夹，新建`public`文件夹以及`config.js`等文件

[官网文件夹目录](https://www.vuepress.cn/guide/directory-structure.html#%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1)

* [config.js](https://www.vuepress.cn/config/)
```
const nav = require('./public/config/nav'); // 头部菜单
const sidebar = require('./public/config/sidebar'); // 侧边栏菜单
module.exports = {
    title: '标题',
    description: '介绍',
    markdown: {
        //lineNumbers: true // 代码块显示行号
      },
    base: '/vuepress/', // 这是部署到github相关的配置
    themeConfig: {
        smoothScroll: true, // 页面滚动
        nav: nav,
        sidebar: sidebar,
        sidebarDepth: 2, // 同时提取markdown中h2 和 h3 标题，显示在侧边栏上
    }
}
```

* [public/config/nav.js](https://www.vuepress.cn/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F)
```
module.exports = [
    {
      text: '文档',
      link: '/doc/'
    },
    {
      text: 'GitHub',
      link: 'https://github.com/'
    }
  ]
```

* [public/config/sidebar.js](https://www.vuepress.cn/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F)
```
module.exports = {
  '/doc/': [
    {
      title: '文档指南',
        //path: '/doc/', //好像可以不写
        children: [
        '/doc/aa', // 
        '/doc/bb', 
      ]
    }
  ],
}
```

`public/img/`里面可以放图片，然后在主题配置里面引用这个图片

#### 5.markdown 文件
上面的link文件地址`link: '/doc/'`创建的目录为 /docs/doc。***切记，文件夹里面一定要有index.md或者README.md文件，否则直接 404！！！***


