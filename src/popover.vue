<template>
  <div class="popover"  @click.stop="showContent">
    <div v-if="visible" ref="contentWrapper" class="content-wrapper" >
       <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>  
    </span>
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
          let contentWrapper = this.$refs.contentWrapper;
          let triggerWrapper = this.$refs.triggerWrapper;
          document.body.appendChild(contentWrapper)

          let { width,height,left,top } = triggerWrapper.getBoundingClientRect();
              contentWrapper.style.left = `${left+window.scrollX}px`;
              contentWrapper.style.top = `${top+window.scrollY}px`;

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
}
.content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0,0,0,.5);
  transform: translateY(-100%);
}
  
</style>