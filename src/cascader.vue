<template>
    <div class="cascader">
        <div class="trigger">
             <slot></slot>
        </div>
        <div class="popover">
            <div v-for="(item,index) in source" :key="index">
                <cascader-item :sourceItem="item"></cascader-item>
            </div>
            
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



