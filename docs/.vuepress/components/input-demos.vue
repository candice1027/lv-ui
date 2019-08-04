<template>
  <div>
    <p>通过传入value,disabled,readonly,error等属性进行配置</p>
    
    <g-input v-model="inputData"></g-input>
    <p>测试v-model:{{inputData}}</p>
   
    <g-input disabled></g-input>
     <p>disabled</p>
    
    <g-input readonly></g-input>
    <p>readonly</p>
    
    <g-input error="出错了"></g-input>
    <p>error</p>
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
        inputData: '可以给input传值',
        content: `
          <g-input v-model="inputData"></g-input>
          <g-input disabled></g-input>
          <g-input readonly></g-input>
          <g-input :error="出错了"></g-input>
      `
      }
    }
  }
</script>