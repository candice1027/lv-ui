<template>
  <div class="popover"  @click.stop="showContent">
    <div v-if="visible" class="content-wrapper" @click.stop>
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
      this.visible = !this.visible;
      if (this.visible === true) {
        this.$nextTick(()=>{
          let eventHandler = (e) =>{
              this.visible = false;
              document.removeEventListener('click',eventHandler)
          }
          document.addEventListener('click',eventHandler)
        })
      }
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