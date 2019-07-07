<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'tabsPane',
    data() {
        return {
            active: false
        }
    },
    inject: ['eventBus'],
     created() {
        this.eventBus.$on('update:selected',(name) =>{
            console.log('监听Name的改变',name)
        })
    },
    
}
</script>
<style>
.tabs-pane {

}
</style>


