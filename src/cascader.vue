<template>
    <div class="cascader">
        <div class="trigger">
             <slot></slot>
        </div>
        <div class="popover">
            <cascader-item :source="source"></cascader-item>
        </div>    
    </div>
</template>
<script>
import cascaderItem from './cascader-item'
export default {
    name:'cascader',
    props: {
        source: {
            type: Array
        }
    },
    mounted() {
        console.log(this.source,'source====')
    },
    components:{
        cascaderItem
    }
}
</script>
<style lang="scss" scoped>
@import "var";
.cascader {

}

</style>



