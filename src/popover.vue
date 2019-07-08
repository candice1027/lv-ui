<template>
  <div class="popover"  @click="showContent" ref="popover">
    <div v-if="visible" ref="contentWrapper" class="content-wrapper" >
       <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block;">
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
    onClickDocument(e) {
      let popover = this.$refs.popover;
      let contentWrapper = this.$refs.contentWrapper;
      if (popover && (popover.contains(e.target)  || popover === e.target)) {
        return false;
      }
      if (contentWrapper && (contentWrapper.contains(e.target) || contentWrapper === e.target))  {
        return false;
      }
      this.popoverClose();
    },
    positionContent() {
      let contentWrapper = this.$refs.contentWrapper;
      let triggerWrapper = this.$refs.triggerWrapper;
      document.body.appendChild(contentWrapper)
      let { width,height,left,top } = triggerWrapper.getBoundingClientRect();
          contentWrapper.style.left = `${left+window.scrollX}px`;
          contentWrapper.style.top = `${top+window.scrollY}px`;
    },
    popoverShow(){
      this.visible = true;
      this.$nextTick(()=>{
        this.positionContent();
        document.addEventListener('click',this.onClickDocument)   
      })
    },
    popoverClose() {
      this.visible = false;
      document.removeEventListener('click',this.onClickDocument)
    },
    showContent(e) {
      if (this.$refs.triggerWrapper.contains(e.target)) {
        if (this.visible === true) {
          this.popoverClose()
        } else {
          this.popoverShow();
        }
      } 
    }
  }
}
</script>
<style lang="scss" scoped>
$border-color: #333;
$border-radius: 5px;
.popover {
  display: inline-block;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  filter: drop-shadow(0 1px 1px rgba(0,0,0,.5));
  background: #fff;
  border-radius: $border-radius;
  // box-shadow: 0 0 3px rgba(0,0,0,.5);
  transform: translateY(-100%);
  margin-top: -10px;
  padding: .5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before,&::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    border: 10px solid transparent;
  }
  &::before {
    top: 100%;
    left: 10px;
    border-top-color: black;
  }
  &::after {
    top: calc(100% - 1px);
    left: 10px;
    border-top-color: white;
  }
}
  
</style>