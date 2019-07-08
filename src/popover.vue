<template>
  <div class="popover"  @click="showContent" ref="popover">
    <div 
      v-if="visible" 
      ref="contentWrapper" 
      class="content-wrapper"
      :class="{[`position-${contentPosition}`]: true}"
    >
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
  props:{
    contentPosition: {
      type: String,
      default: 'top',
      validator:(value)=>{
        return ['top','bottom','left','right'].indexOf(value) >= 0
      }
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
      let {contentWrapper,triggerWrapper} = this.$refs;
      document.body.appendChild(contentWrapper)
      let { width,height,left,top } = triggerWrapper.getBoundingClientRect();
        if (this.contentPosition == 'top') {
          contentWrapper.style.left = `${left+window.scrollX}px`;
          contentWrapper.style.top = `${top+window.scrollY}px`;
        } else if (this.contentPosition == 'bottom') {
          contentWrapper.style.left = `${left+window.scrollX}px`;
          contentWrapper.style.top = `${top+height+window.scrollY}px`;
        } else if (this.contentPosition == 'left') {
          let {height: height2} = contentWrapper.getBoundingClientRect();
          contentWrapper.style.left = `${left+window.scrollX}px`;
          contentWrapper.style.top = `${top + window.scrollY - (height-height2)/2}px`;
          
        } else if (this.contentPosition == 'right') {
          let {height: height2} = contentWrapper.getBoundingClientRect();
          contentWrapper.style.left = `${left+window.scrollX + width}px`;
          contentWrapper.style.top = `${top + window.scrollY - (height-height2)/2}px`;
        }     
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
  // transform: translateY(-100%);
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
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before ,&::after{
      left: 10px;
    }
    &::before {
      top: 100%;
      border-top-color: black;
    }
    &::after {
      top: calc(100% - 1px);
      border-top-color: white;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before ,&::after{
      left: 10px;
    }
    &::before {
      bottom: 100%;
      border-bottom-color: black;
    }
    &::after {
      bottom: calc(100% - 1px);
      border-bottom-color: white;
    }
  }
  &.position-left {
    margin-left: -10px;
    transform: translateX(-100%);
    &::before ,&::after{
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-left-color: black;
    }
    &::after {
      left: calc(100% - 1px);
      border-left-color: white;
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before ,&::after{
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      right: 100%;
      border-right-color: black;
    }
    &::after {
      right: calc(100% - 1px);
      border-right-color: white;
    }
  }

}
  
</style>