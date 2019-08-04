module.exports = {
  base: '/lv-ui/',
  title: 'UI 框架',
  description: '一个UI框架',
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
        children: [
          '/components/icon',
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/tab',
          '/components/popover',
          '/components/collapse',
        ]
      }   
    ]
  }
}