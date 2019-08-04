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
            console.log(left,'left====')
            this.$refs.line.style.width = `${width}px`;
            this.$refs.line.style.left = `${left}px`;
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
.tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .line {
        position: absolute;
        bottom: 0;
        border-bottom: 2px solid $blue;
        transition: all .5s;
    }
    > .actions-wrapper {
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-items: center;
        padding: 0 2em;
    }
}
</style>


