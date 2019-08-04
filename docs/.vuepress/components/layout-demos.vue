<template>
  <div>
    <p>布局容器 可以快速搭建页面布局</p>
    <div>
     {{content}}
    </div>
    <p>上中下</p>
    <div class="my-container">
      <g-layout>
        <g-header class="header" headerHeight="30">header</g-header>
        <g-content class="content">content</g-content>
        <g-footer class="footer" footerHeight="30">footer</g-footer>
      </g-layout>
    </div>
    <pre><code>{{content1}}</code></pre>
    <p>有边栏的布局</p>
    <div class="my-container">
      <g-layout>
        <g-header class="header" headerHeight="30">header</g-header>
        <g-layout>
          <g-sider class="sider">sider</g-sider>
          <g-content class="content">content</g-content>
        </g-layout>
        <g-footer class="footer" footerHeight="30">footer</g-footer>
      </g-layout>
    </div>
    <pre><code>{{content2}}</code></pre>
    <p>边栏可放置在右边</p>
    <div class="my-container">
      <g-layout>
        <g-header class="header" headerHeight="30">header</g-header>
        <g-layout>
          <g-content class="content">content</g-content>
          <g-sider class="sider">sider</g-sider>
        </g-layout>
        <g-footer class="footer" footerHeight="30">footer</g-footer>
      </g-layout>
    </div>
    <pre><code>{{content3}}</code></pre>
    <p>边栏在左侧</p>
    <div class="my-container">
      <g-layout>
        <g-sider class="sider">sider</g-sider>
        <g-layout>
          <g-header class="header" headerHeight="30">header</g-header>
          <g-content class="content">content</g-content>
          <g-footer class="footer" footerHeight="30">footer</g-footer>
        </g-layout>
      </g-layout>
    </div>
    <pre><code>{{content4}}</code></pre>
  </div>
</template>
<script>
  import Header from '../../../src/header'
  import Footer from '../../../src/footer'
  import Sider from '../../../src/sider'
  import Content from '../../../src/content'
  import Layout from '../../../src/layout'
  export default {
    components: {
      'g-header': Header,
      'g-footer': Footer,
      'g-sider': Sider,
      'g-content': Content,
      'g-layout': Layout
    },
    data () {
      return {
        content: `
          <g-layout>: 最外层的容器 
          <g-header>: 顶栏容器 
          <g-content>: 主要内容区域，会自动撑开
          <g-footer>: 底栏容器 
        `,
        content1: `
          <div class="my-container">
            <g-layout>
              <g-header class="header" headerHeight="30">header</g-header>
              <g-content class="content">content</g-content>
              <g-footer class="footer" footerHeight="30">footer</g-footer>
            </g-layout>
          </div>
        `,
        content2: `
          <div class="my-container">
            <g-layout>
              <g-header class="header" headerHeight="30">header</g-header>
              <g-layout>
                <g-sider class="sider">sider</g-sider>
                <g-content class="content">content</g-content>
              </g-layout>
              <g-footer class="footer" footerHeight="30">footer</g-footer>
            </g-layout>
          </div>
        `,
        content3: `
          <div class="my-container">
            <g-layout>
              <g-header class="header" headerHeight="30">header</g-header>
              <g-layout>
                <g-content class="content">content</g-content>
                <g-sider class="sider">sider</g-sider>
              </g-layout>
              <g-footer class="footer" footerHeight="30">footer</g-footer>
            </g-layout>
          </div>
        `,
        content4: `
          <div class="my-container">
            <g-layout>
              <g-sider class="sider">sider</g-sider>
              <g-layout>
                <g-header class="header" headerHeight="30">header</g-header>
                <g-content class="content">content</g-content>
                <g-footer class="footer" footerHeight="30">footer</g-footer>
              </g-layout>
            </g-layout>
          </div>
        `,
      }
    }
  }
</script>
<style scoped>
.my-container {
  height: 200px;
  margin: 0 auto 20px 0;
}
.header {
  background: #b3c0d1;
  
}
.content {
  background: #ddd
}
.footer {
  background: #b3c0d1
}
.header,.footer,.content,.sider {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sider {
  background: #d3dce6;
}

</style>
