<template>
  <div>
    <p>通过传入value,disabled,readonly,error等属性进行配置</p>
    <g-input value="可以给input传值"></g-input>
    <g-input disabled></g-input>
    <g-input readonly></g-input>
    <g-input error="出错了"></g-input>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Input from '../../../src/input'
  export default {
    components: {
      'g-input': Input
    },
    data () {
      return {
        content: `
          <g-input :value="可传值"></g-input>
          <g-input disabled></g-input>
          <g-input readonly></g-input>
          <g-input :error="出错了"></g-input>
      `
      }
    }
  }
</script>