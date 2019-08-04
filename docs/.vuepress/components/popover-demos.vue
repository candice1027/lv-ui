<template>
  <div>
    <p>popover组件 可通过传入contentPosition 属性来设置内容弹出框的位置</p>
    <g-popover  contentPosition="top">
      <div slot="content">这里是弹出内容呀</div>
      <g-button >点击弹出内容</g-button>
    </g-popover>
    <g-popover  contentPosition="bottom">
      <div slot="content">这里是弹出内容呀</div>
      <g-button >点击弹出内容</g-button>
    </g-popover>
     <g-popover contentPosition="left">
      <div slot="content">这里是弹出内容呀</div>
      <g-button >点击弹出内容</g-button>
    </g-popover>
     <g-popover  contentPosition="right">
      <div slot="content">这里是弹出内容呀</div>
      <g-button >点击弹出内容</g-button>
    </g-popover>

    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Popover from '../../../src/popover'
  import Button from '../../../src/button'
  export default {
    components: {
      'g-popover': Popover,
      'g-button': Button
    },
    data () {
      return {
        content: `
          <g-popover  contentPosition="top">
            <div slot="content">这里是弹出内容呀</div>
            <g-button >点击弹出内容</g-button>
          </g-popover>
          <g-popover  contentPosition="bottom">
            <div slot="content">这里是弹出内容呀</div>
            <g-button >点击弹出内容</g-button>
          </g-popover>
          <g-popover contentPosition="left">
            <div slot="content">这里是弹出内容呀</div>
            <g-button >点击弹出内容</g-button>
          </g-popover>
          <g-popover  contentPosition="right">
            <div slot="content">这里是弹出内容呀</div>
            <g-button >点击弹出内容</g-button>
          </g-popover>
      `
      }
    }
  }
</script>