<template>
    <div class="cascaderItem" :style="{height: itemHeight}">
        <div>
            selected: {{cascaderSelected && cascaderSelected[level] && cascaderSelected[level].name}}
            level: {{level}}
        </div>
       <div class="left-container" v-if="source" :style="{height: itemHeight}">
          <div class="label" 
            v-for="(item,index) in source" 
            :key="index" 
            @click="changeData(item)"
        > 
            {{item.name}}
            <Icon v-if="item.children" icon-name="right"></Icon>
        </div> 
       </div>
       <div class="right-container" v-if="rightData" >
          <cascader-item 
            :source="rightData" 
            :itemHeight="itemHeight"
            :level="level+1"
            @update:cascaderSelected="onUpdateSelected"
          ></cascader-item>
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
        },
        cascaderSelected: {
            type: Array,
            default: ()=>{
                return []
            }
        },
        level: {
            type: Number,
            default: 0
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
            let currentSelected = this.cascaderSelected[this.level];
            if (currentSelected && currentSelected.children) {
                return currentSelected.children
            } else {
                return null
            }
        }
    },
    methods:{
        changeData(item) {
            let copy = JSON.parse(JSON.stringify(this.cascaderSelected));
            copy[this.level] = item
            this.$emit('updated:cascaderSelected',copy)
            console.log(copy[this.level])
        },
        onUpdateSelected(newSelected) {
            this.$emit('update:cascaderSelected',newSelected)
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



