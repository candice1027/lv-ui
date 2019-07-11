<template>
    <div class="cascaderItem">
        {{sourceItem.name}}
            <cascader-item  
                v-if="sourceItem.children"
                v-for=" (item,index) in sourceItem.children"
                :key="index"
                :sourceItem = item
            ></cascader-item> 
          
    </div>
</template>
<script>
export default {
    name:'cascaderItem',
    props:{
        sourceItem:{
            type: Object
        }
    }
}
</script>
<style lang="scss" scoped>

</style>



