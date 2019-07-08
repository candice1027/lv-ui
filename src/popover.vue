<template>
  <div class="popover"  @click="showContent">
    <div v-if="visible" class="content-wrapper">
       <slot name="content"></slot>
    </div>
    <slot></slot>  
  </div>
</template>
<script>
export default {
  name:"popover",
  data() {
    return {
      visible: false
    }
  },
  methods: {
    showContent() {
      console.log('点击了 ')
      this.visible = !this.visible;
    }
  }
}
</script>
<style lang="scss" scoped>
.popover {
  display: inline-block;
  position: relative;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
  }
}
  
</style>