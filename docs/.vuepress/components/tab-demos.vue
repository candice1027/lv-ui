<template>
  <div>
    <p>tab组件的功能实现了可切换</p>
    <g-tab selected="id2">
      <g-tab-head>
        <g-tab-item name="id1">体育</g-tab-item>
        <g-tab-item name="id2">新闻</g-tab-item>
        <g-tab-item name="id3">娱乐</g-tab-item>
        <div slot="actions">action</div>
      </g-tab-head>
      <g-tab-body>
        <g-tab-pane name="id1"><div class="content">体育内容</div></g-tab-pane>
        <g-tab-pane name="id2"><div class="content">新闻内容</div></g-tab-pane>
        <g-tab-pane name="id3"><div class="content">娱乐内容</div></g-tab-pane>
      </g-tab-body>
    </g-tab>

    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Tabs from '../../../src/tabs'
  import TabHead from '../../../src/tabs-head'
  import TabBody from '../../../src/tabs-body'
  import TabItem from '../../../src/tabs-item'
  import TabPane from '../../../src/tabs-pane'

  export default {
    components: {
      'g-tab': Tabs,
      'g-tab-head': TabHead,
      'g-tab-body': TabBody,
      'g-tab-item': TabItem,
      'g-tab-pane': TabPane
    },
    data () {
      return {
        content: `
        <g-tab selected="id2">
          <g-tab-head>
            <g-tab-item name="id1">体育</g-tab-item>
            <g-tab-item name="id2">新闻</g-tab-item>
            <g-tab-item name="id3">娱乐</g-tab-item>
            <div slot="actions">action</div>
          </g-tab-head>
          <g-tab-body>
            <g-tab-pane name="id1"><div class="content">体育内容</div></g-tab-pane>
            <g-tab-pane name="id2"><div class="content">新闻内容</div></g-tab-pane>
            <g-tab-pane name="id3"><div class="content">娱乐内容</div></g-tab-pane>
          </g-tab-body>
        </g-tab>
      `
      }
    }
  }
</script>
<style>
.content {
  padding: 20px;
}
</style>
