<template>
  <div>
    <p>collapse组件 传入selected值设置默认展开项<br/>
      selected的数组项与传给collapse-item的name属性一一对应<br/>
      single值设置是否可展开多项<br/>
      collapse-item可传入title属性值设置title
    </p>
      <g-collapse :selected="['id1']" single>
        <g-collapse-item title="体育" name="id1">
          <div class="inner-content">体育内容</div>
        </g-collapse-item>
        <g-collapse-item title="娱乐" name="id2">
          <div class="inner-content">娱乐内容</div>
        </g-collapse-item>
        <g-collapse-item title="新闻" name="id3">
          <div class="inner-content">新闻内容</div>
        </g-collapse-item>
      </g-collapse>
    <pre><code>{{content}}</code></pre>
     <g-collapse :selected="['id1']" >
        <g-collapse-item title="体育" name="id1">
          <div class="inner-content">体育内容</div>
        </g-collapse-item>
        <g-collapse-item title="娱乐" name="id2">
          <div class="inner-content">娱乐内容</div>
        </g-collapse-item>
        <g-collapse-item title="新闻" name="id3">
          <div class="inner-content">新闻内容</div>
        </g-collapse-item>
      </g-collapse>
      <pre><code>{{content1}}</code></pre>
  </div>
</template>
<script>
  import Collapse from '../../../src/collapse'
  import CollapseItem from '../../../src/collapse-item'
  export default {
    components: {
      'g-collapse': Collapse,
      'g-collapse-item': CollapseItem
    },
    data () {
      return {
        content: `
          <g-collapse :selected="['id1']" single>
            <g-collapse-item title="体育" name="id1">
              <div class="inner-content">体育内容</div>
            </g-collapse-item>
            <g-collapse-item title="娱乐" name="id2">
              <div class="inner-content">娱乐内容</div>
            </g-collapse-item>
            <g-collapse-item title="新闻" name="id3">
              <div class="inner-content">新闻内容</div>
            </g-collapse-item>
          </g-collapse>
      `,
      content1: `
          <g-collapse :selected="['id1']">
            <g-collapse-item title="体育" name="id1">
              <div class="inner-content">体育内容</div>
            </g-collapse-item>
            <g-collapse-item title="娱乐" name="id2">
              <div class="inner-content">娱乐内容</div>
            </g-collapse-item>
            <g-collapse-item title="新闻" name="id3">
              <div class="inner-content">新闻内容</div>
            </g-collapse-item>
          </g-collapse>
      `
      }
    }
  }
</script>
<style>
.inner-content {
  min-height: 100px;
  padding: 5px;;
}
</style>
