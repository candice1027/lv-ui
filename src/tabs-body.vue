<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'tabsBody',
    inject: ['eventBus'],
    created() {
        console.log('给body eventBus',this.eventBus)
    }
    
}
</script>
<style>
.tabs-body {

}
</style>


