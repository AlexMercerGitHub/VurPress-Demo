(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{356:function(e,t,r){"use strict";r.r(t);var n=r(42),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"vurpress搭建流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vurpress搭建流程"}},[e._v("#")]),e._v(" VurPress搭建流程")]),e._v(" "),r("h3",{attrs:{id:"制作流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#制作流程"}},[e._v("#")]),e._v(" 制作流程")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.vuepress.cn/guide/getting-started.html#%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网Demo"),r("OutboundLink")],1)]),e._v(" "),r("h4",{attrs:{id:"_1-新建vuepressdemo文件夹"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-新建vuepressdemo文件夹"}},[e._v("#")]),e._v(" 1.新建VuePressDemo文件夹")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.vuepress.cn/guide/getting-started.html#%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"}},[e._v("现有项目"),r("OutboundLink")],1)]),e._v(" "),r("blockquote",[r("ul",[r("li",[e._v("VuePressDemo 这个只是一个外壳\nVuePress包,如果之前安装过，可以忽略不计")])])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# 将 VuePress 作为一个本地依赖安装\nyarn add -D vuepress # 或者：npm install -D vuepress\n\n# 新建一个 docs 文件夹\nmkdir docs\n\n# 新建一个 markdown 文件\necho '# Hello VuePress!' > docs/README.md\n\n# 开始写作\nnpx vuepress dev docs\n")])])]),r("h4",{attrs:{id:"_2-安装package-json"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装package-json"}},[e._v("#")]),e._v(" 2.安装package.json")]),e._v(" "),r("ul",[r("li",[e._v("a.快捷方式 "),r("code",[e._v("npm init -y")])]),e._v(" "),r("li",[e._v("b.新建文件"),r("code",[e._v("package.json")]),e._v("，内容如下")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{\n    "scripts": {\n      "server": "vuepress dev docs",  //npm run server启动\n      "build": "vuepress build docs"\n    }\n  }\n')])])]),r("h4",{attrs:{id:"_3-首页主题配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-首页主题配置"}},[e._v("#")]),e._v(" 3.首页主题配置")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.vuepress.cn/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网教程"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("在"),r("code",[e._v("docs")]),e._v("中有一个"),r("code",[e._v("README.md")]),e._v("文件，将下面的复制粘贴进去\nheroImage 是在接下来的配置")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("---\nhome: true\nheroImage: /img/logo.jpg\nheroText: Hero 标题\ntagline: Hero 副标题\nactionText: 快速上手 →\nactionLink: /zh/guide/\nfeatures:\n- title: 简洁至上\n  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。\n- title: Vue驱动\n  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。\n- title: 高性能\n  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。\nfooter: MIT Licensed | Copyright © 2018-present Evan You\n---\n")])])]),r("h4",{attrs:{id:"_4-生成-vuepress文件夹"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-生成-vuepress文件夹"}},[e._v("#")]),e._v(" 4.生成.vuepress文件夹")]),e._v(" "),r("p",[r("code",[e._v("npm run build")]),e._v("打包文件，会自动生成"),r("code",[e._v(".vuepress")]),e._v("文件夹，新建"),r("code",[e._v("public")]),e._v("文件夹以及"),r("code",[e._v("config.js")]),e._v("等文件")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.vuepress.cn/guide/directory-structure.html#%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网文件夹目录"),r("OutboundLink")],1)]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.vuepress.cn/config/",target:"_blank",rel:"noopener noreferrer"}},[e._v("config.js"),r("OutboundLink")],1)])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("const nav = require('./public/config/nav'); // 头部菜单\nconst sidebar = require('./public/config/sidebar'); // 侧边栏菜单\nmodule.exports = {\n    title: '标题',\n    description: '介绍',\n    markdown: {\n        //lineNumbers: true // 代码块显示行号\n      },\n    base: '/vuepress/', // 这是部署到github相关的配置\n    themeConfig: {\n        smoothScroll: true, // 页面滚动\n        nav: nav,\n        sidebar: sidebar,\n        sidebarDepth: 2, // 同时提取markdown中h2 和 h3 标题，显示在侧边栏上\n    }\n}\n")])])]),r("ul",[r("li",[r("a",{attrs:{href:"https://www.vuepress.cn/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F",target:"_blank",rel:"noopener noreferrer"}},[e._v("public/config/nav.js"),r("OutboundLink")],1)])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("module.exports = [\n    {\n      text: '文档',\n      link: '/doc/'\n    },\n    {\n      text: 'GitHub',\n      link: 'https://github.com/'\n    }\n  ]\n")])])]),r("ul",[r("li",[r("a",{attrs:{href:"https://www.vuepress.cn/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F",target:"_blank",rel:"noopener noreferrer"}},[e._v("public/config/sidebar.js"),r("OutboundLink")],1)])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("module.exports = {\n  '/doc/': [\n    {\n      title: '文档指南',\n        //path: '/doc/', //好像可以不写\n        children: [\n        '/doc/aa', // \n        '/doc/bb', \n      ]\n    }\n  ],\n}\n")])])]),r("p",[r("code",[e._v("public/img/")]),e._v("里面可以放图片，然后在主题配置里面引用这个图片")]),e._v(" "),r("h4",{attrs:{id:"_5-markdown-文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-markdown-文件"}},[e._v("#")]),e._v(" 5.markdown 文件")]),e._v(" "),r("p",[e._v("上面的link文件地址"),r("code",[e._v("link: '/doc/'")]),e._v("创建的目录为 /docs/doc。"),r("em",[r("strong",[e._v("切记，文件夹里面一定要有index.md或者README.md文件，否则直接 404！！！")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);