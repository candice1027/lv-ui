<template>
  <div>
    <p>调用$toast方法，可配置toast的内容，是否自动关闭，toast的位置等内容</p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        content: `
          <div @click="showToast"></div>
          this.$toast('成功了',{
            autoClose: false
            toastPosition: 'bottom',
            closeButton: {
              text: '关闭',
              callBack: null //配置关闭按钮的回调函数
            },
            enableHtml: true, //开启此配置可传入html标签内容
          })                 
      `
      }
    },
    components: {
      // 'g-button': Button
    },
    methods: {
      // showToast() {
      //   this.$toast('这里是toast呀')
      // }
    }
  }
</script>