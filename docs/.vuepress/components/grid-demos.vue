<template>
  <div>
    <p>通栏被划分为24分栏，传入span值代表每一块占几分栏</p>
    <g-row class="g-row">
      <g-col span="24" class="col">
        <div class="inner-content"></div>
      </g-col>
    </g-row>
    <g-row class="g-row">
      <g-col span="12" class="col"><div class="inner-content"></div></g-col>
      <g-col span="12" class="col"><div class="inner-content inner-cc"></div></g-col>
    </g-row>
    <g-row class="g-row">
      <g-col span="3" class="col"><div class="inner-content"></div></g-col>
      <g-col span="12" class="col"><div class="inner-content inner-cc"></div></g-col>
      <g-col span="9" class="col"><div class="inner-content"></div></g-col>
    </g-row>
    <pre><code>{{content}}</code></pre>
    <p>给col组件传入offset值可设置分栏的间隔</p>
    <g-row class="g-row">
      <g-col span="3"  class="col"><div class="inner-content"></div></g-col>
      <g-col span="6" offset="4" class="col"><div class="inner-content inner-cc"></div></g-col>
      <g-col span="9"  offset="2" class="col"><div class="inner-content"></div></g-col>
    </g-row>
    <g-row class="g-row">
      <g-col span="3"  class="col"><div class="inner-content"></div></g-col>
      <g-col span="15" offset="6" class="col"><div class="inner-content"></div></g-col>
    </g-row>
    <pre><code>{{content2}}</code></pre>
    <p>给row组件传入gutter值可设置分栏的均匀间隔</p>
    <g-row class="g-row" :gutter="20">
      <g-col span="3"  class="col"><div class="inner-content"></div></g-col>
      <g-col span="15"  class="col"><div class="inner-content inner-cc"></div></g-col>
      <g-col span="6"  class="col"><div class="inner-content"></div></g-col>
    </g-row>
    <pre><code>{{content3}}</code></pre>
  </div>
</template>
<script>
  import Col from '../../../src/col'
  import Row from '../../../src/row'
  export default {
    components: {
      'g-col': Col,
      'g-row': Row
    },
    data () {
      return {
        content: `
          <g-row class="g-row">
            <g-col span="24" class="col">
              <div class="inner-content"></div>
            </g-col>
          </g-row>
          <g-row class="g-row">
            <g-col span="12" class="col"><div class="inner-content"></div></g-col>
            <g-col span="12" class="col"><div class="inner-content inner-cc"></div></g-col>
          </g-row>
          <g-row class="g-row">
            <g-col span="3" class="col"><div class="inner-content"></div></g-col>
            <g-col span="12" class="col"><div class="inner-content inner-cc"></div></g-col>
            <g-col span="9" class="col"><div class="inner-content"></div></g-col>
          </g-row> 
      `,
      content2:  `
        <g-row class="g-row">
          <g-col span="3"  class="col"><div class="inner-content"></div></g-col>
          <g-col span="6" offset="4" class="col"><div class="inner-content inner-cc"></div></g-col>
          <g-col span="9"  offset="2" class="col"><div class="inner-content"></div></g-col>
        </g-row>
        <g-row class="g-row">
          <g-col span="3"  class="col"><div class="inner-content"></div></g-col>
          <g-col span="15" offset="6" class="col"><div class="inner-content"></div></g-col>
        </g-row> 
      `,
      content3: `
        <g-row class="g-row" :gutter="20">
          <g-col span="3"  class="col"><div class="inner-content"></div></g-col>
          <g-col span="15"  class="col"><div class="inner-content inner-cc"></div></g-col>
          <g-col span="6"  class="col"><div class="inner-content"></div></g-col>
        </g-row>
      `

      }
    }
  }
</script>
<style>
.inner-content {
  min-height: 36px;
  background-color: #ccc;
}
.inner-cc {
  background-color: #ddd;
}
.g-row {
  margin-bottom: 10px;
}
</style>
