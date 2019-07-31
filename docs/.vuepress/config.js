module.exports = {
  base: '/lv-ui/',
  title: 'UI 框架',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: ['/components/button']
      }   
    ]
  }
}