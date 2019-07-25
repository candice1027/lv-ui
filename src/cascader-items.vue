<template>
<div class="item" :style="{height:height}">
    <!-- <div>selected:{{selected}},level:{{level}}</div> -->
    <div class="left">
        <div 
            class="label"
            v-for="(item,index) in items" 
            :key="index" 
            @click="onClickLabel(item)"
        >
            {{item.name}}
            <gIcon v-if="item.children" class="icon" iconName="right"></gIcon>
        </div>
        </div>
    <div class="right" v-if="rightItems">
        <cascader-items 
            :items="rightItems"
            :height="height"
            :level="level+1"
            :selected="selected"
            @update:selected="onUpdateSelected"
       ></cascader-items>
    </div>
</div>   
</template>
<script>
import gIcon from './icon'
export default {
    name:"cascader-items",
    props: {
        items: {
            type: Array
        },
        height: {
            type: String
        },
        selected: {
            type: Array,
            default: ()=> {
                return []
            }
        },
        level: {
            type: Number,
            default: 0
        }
    },
    components: {
        gIcon
    },
    data() {
        return {
            // leftSelected: null
        }
    },
    methods: {
        onClickLabel(item) {
            let copy = JSON.parse(JSON.stringify(this.selected))
            copy[this.level] = item;
            copy.splice(this.level+1)
            this.$emit('update:selected',copy)
        },
        onUpdateSelected(newSelected) {
            this.$emit('update:selected',newSelected)
        }
    },
    computed: {
        rightItems() {
            let currentSelected = this.selected[this.level]
            if (currentSelected && currentSelected.children) {
                return currentSelected.children
            } else {
                return null
            }
        }
    },
    watch: {
        selected:function() {
            console.log('selected更新了啊')
        }
    }
}
</script>
<style lang="scss" scoped>
@import 'var';
.item {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100px;
    .left {
        height: 100%;
        padding: .3em 0;    
    }
    .right{
        height: 100%;
        margin-top: -1px;
        border-left: 1px solid $border-color-light;
    }
    .label {
        padding: .3em 1em;
        display: flex;
        align-items: center;
        .icon {
            margin-left: .3em;
        }
    }
}

</style>


