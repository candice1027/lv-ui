<template>
    <div class="tabs-head">
        <slot></slot>
        <div ref="line" class="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>    
    </div>
</template>
<script>
export default {
    name:'tabsHead',
    inject: ['eventBus'],
    created() {
        this.eventBus.$on('update:selected',(name,vm) =>{
            let {width,height,top,left} = vm.$el.getBoundingClientRect();
            let lineEl = this.$refs.line;
            document.body.appendChild(lineEl)
            this.$refs.line.style.width = `${width}px`;
            this.$refs.line.style.left = `${left}px`;
            this.$refs.line.style.top = `${top+height}px`;
        })
    },
    mounted() {
        
    }

}
</script>
<style lang="scss" scoped>
$tab-height: 40px;
$blue: #409eff;
$border-color: #ddd;
.line {
    position: absolute;
    border-bottom: 2px solid $blue;
    transition: all .5s;
}
.tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-bottom: 1px solid $border-color;
    
    > .actions-wrapper {
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-items: center;
        padding: 0 2em;
    }
}
</style>


