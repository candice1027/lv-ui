<template>
    <div class="cascaderItem" :style="{height: itemHeight}">
       <div class="left-container" v-if="source" :style="{height: itemHeight}">
          <div class="label" 
            v-for="(item,index) in source" 
            :key="index" 
            @click="leftChildrenData = item"
        > 
            {{item.name}}
            <Icon v-if="item.children" icon-name="right"></Icon>
        </div>
        
       </div>
       <div class="right-container" v-if="rightData" >
          <cascader-item :source="rightData" :itemHeight="itemHeight"></cascader-item>
       </div>   
    </div>
</template>
<script>
import Icon from './icon'
export default {
    name:'cascaderItem',
    props:{
        source:{
            type: Array
        },
        itemHeight: {
            type: String
        }
    },
    components:{
        Icon
    },
    mounted(){
        console.log(this.source,'source====')
    },
    data(){
        return {
            leftChildrenData: null
        }
    },
    computed:{
        rightData(){
            if (this.leftChildrenData && this.leftChildrenData.children) {
                return this.leftChildrenData.children

            } else {
                return null
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import "var";
.cascaderItem {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .label {
        padding: .3em 1em;
        display: flex;
        align-items: center;
    }
}
.left-container {
    padding: .3em 0 0 0;
   
    // border: 1px solid red;
}
.right-container {
    margin-top: -1px;
    border-left: 1px solid $border-color-light;
}
</style>



