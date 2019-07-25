<template>
<div class="cascader">
    <div class="trigger" @click="popoverVisible = ! popoverVisible">
        <!-- 这是触发器 点击之后弹出浮层-->
        <slot></slot>
    </div> 
    <div class="popover-wrapper" v-if="popoverVisible">
        <cascader-items 
            :items="source"
            class="popover"
            :height="popoverHeight"
            :selected= selected
            :level="0"
            @update:selected="onUpdateSelected"
        ></cascader-items>
    </div> 
</div>
    
</template>
<script>
import cascaderItems from './cascader-items'
export default {
    name: "cascader",
    data() {
        return {
            popoverVisible: false,
        }
    },
    props: {
        source: {
            type: Array
        },
        popoverHeight: {
            type: String
        },
        selected: {
            type: Array,
            default: ()=>{
                return []
            }
        }
    },
    components: {
        cascaderItems
    },
    methods: {
        onUpdateSelected(newSelected) {
            console.log('newSelected',newSelected)
            this.$emit('update:selected',newSelected)
        }
    }  
}
</script>
<style lang="scss" scoped>
@import "var";

.cascader {
    position: relative;
    .trigger {
        width: 200px;
        height: 32px;
        border: 1px solid red;
    }
    .popover-wrapper {
        display: flex;
        position: absolute;
        top: 100%;
        left: 0;
        background: #fff;
        @extend .box-shadow;
        .label {
            white-space: nowrap;
        }
    }

} 

</style>


