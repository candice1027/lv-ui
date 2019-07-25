<template>
<div class="cascder">
    <div class="trigger">
        <!-- 这是触发器 点击之后弹出浮层-->
        <slot></slot>
    </div> 
    <div class="popover">
        <!-- 这里是级联选择器的popover -->
        <div v-for="(item,index) in source" :key="index">
            <cascader-item :source-item="item"></cascader-item>
        </div>
    </div> 
</div>
    
</template>
<script>
import cascaderItem from './cascader-item'
export default {
    name: "cascader",
    props: {
        source: {
            type: Array
        }
    },
    components: {
        cascaderItem
    }   
}
</script>
<style lang="scss" scoped>
@import "var";

.cascader {

} 

</style>


