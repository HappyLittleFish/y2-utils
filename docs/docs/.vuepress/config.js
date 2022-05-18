module.exports = {
  title: 'ds-utils',
  description: '前端常用功能JS函数库',
  themeConfig: {
    // sidebar: [
    //   '/',
    //   ['/date/', '日期'],
    //   ['/number/', '数字']
    //   ['/tool/', '工具']
    // ]
    sidebar: [
      {
        title: '介绍',
        path: '/'
      },
      {
        title: '日期',   // 必要的
        path: '/date/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/date/',
          '/date/timestamp.html'
        ]
      },
      {
        title: '校验',
        path: '/validate/', 
        children: [
          '/validate/card.html',
          '/validate/phone.html'
        ],
        collapsable: false, 
        // initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
  }
}