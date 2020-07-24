const nav = require('./public/config/nav'); // 头部菜单
const sidebar = require('./public/config/sidebar'); // 侧边栏菜单


module.exports = {
    title: 'VurPress Demo',
    description: 'VurPress Demo 快速入门',
    markdown: {
        //lineNumbers: true // 代码块显示行号
      },
    base: '/vuepressdemo/', // 这是部署到github相关的配置
    themeConfig: {
        smoothScroll: true, // 页面滚动
        nav: nav,
        sidebar: sidebar,
        sidebarDepth: 2, // 同时提取markdown中h2 和 h3 标题，显示在侧边栏上
    }
}

