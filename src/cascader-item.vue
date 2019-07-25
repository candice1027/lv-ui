<template>
<div class="item">
    {{sourceItem.name}}
    <cascader-item 
        v-for="(item,index) in sourceItem.children"
        :key="index"
        :source-item="item"
        v-if="sourceItem.children" 
    ></cascader-item>
</div>   
</template>
<script>
export default {
    name:"cascader-item",
    props: {
        sourceItem: {
            type: Object
        }
    }
}
</script>
<style lang="scss" scoped>
.item {
    border: 1px solid red;
    margin: 10px;
}

</style>


