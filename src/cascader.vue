<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
             <slot></slot>
        </div>
        <div class="popover-wrapper" v-show="popoverVisible">
            <cascader-item 
                :source="source" 
                :itemHeight="popoverHeight"
                class="popover"
            ></cascader-item>
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
        },
        popoverHeight: {
            type: String
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
    position: relative;
    .trigger {
        border: 1px solid red;
        height: 32px;
        // width: 100px;
    }
    .popover-wrapper {
        position: absolute;
        top: 100%;
        background: #fff;
        // border: 1px solid green;
        height: 200px;
        display: flex;
        @extend .box-shadow;
        .label {
            white-space: nowrap;
        }

    }

}



</style>



