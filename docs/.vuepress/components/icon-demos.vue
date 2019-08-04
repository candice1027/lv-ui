<template>
  <div>
    <p>icon组件 内置了一些常见icon </p>
    <div>设置 <g-icon iconName="setting"></g-icon></div>
    <div>加载 <g-icon iconName="loading"></g-icon></div>
    <div>向下 <g-icon iconName="down"></g-icon></div>
    <div>向右 <g-icon iconName="right"></g-icon></div>
    <div>向左 <g-icon iconName="left"></g-icon></div>
    <div>下载 <g-icon iconName="download"></g-icon></div>
    <div>点赞 <g-icon iconName="awesome"></g-icon></div>
    <div>警告 <g-icon iconName="err"></g-icon></div>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Icon from '../../../src/icon'
  export default {
    components: {
      'g-icon': Icon
    },
    data () {
      return {
        content: `
          <div>设置 <g-icon iconName="setting"></g-icon></div>
          <div>加载 <g-icon iconName="loading"></g-icon></div>
          <div>向下 <g-icon iconName="down"></g-icon></div>
          <div>向右 <g-icon iconName="right"></g-icon></div>
          <div>向左 <g-icon iconName="left"></g-icon></div>
          <div>下载 <g-icon iconName="download"></g-icon></div>
          <div>点赞 <g-icon iconName="awesome"></g-icon></div>
          <div>警告 <g-icon iconName="err"></g-icon></div>
      `
      }
    }
  }
</script>