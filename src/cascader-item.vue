<template>
    <div class="cascaderItem">
       <div class="left-container" v-if="source">
          <div v-for="(item,index) in source" :key="index" @click="leftChildrenData = item.children"> {{item.name}}</div>
       </div>
       <div class="right-container" v-if="rightData" >
          <cascader-item :source="rightData"></cascader-item>
       </div>   
    </div>
</template>
<script>
export default {
    name:'cascaderItem',
    props:{
        source:{
            type: Array
        }
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
            if (this.leftChildrenData) {
                return this.leftChildrenData

            } else {
                return null
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.cascaderItem {
    display: flex;
}
.left-container {
    border: 1px solid red;
}
</style>



