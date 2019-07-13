<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
             <slot></slot>
        </div>
        <div class="popover" v-show="popoverVisible">
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
    data(){
        return {
            popoverVisible: false
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



