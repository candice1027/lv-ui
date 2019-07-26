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
            <span class="name">{{item.name}}</span>
            <span class="icons">
                <template v-if="item.name === loadingItem.name">
                    <gIcon class="icon loading" iconName="loading"></gIcon>
                </template>
                <template v-else>
                    <gIcon v-if="rightArrowVisible(item)" class="icon" iconName="right"></gIcon>
                </template> 
            </span>
        </div>
        </div>
    <div class="right" v-if="rightItems">
        <cascader-items 
            :items="rightItems"
            :height="height"
            :level="level+1"
            :selected="selected"
            @update:selected="onUpdateSelected"
            :loadData="loadData"
            :loading-item = loadingItem
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
        },
        loadData: {
            type: Function
        },
        loadingItem: {
            type: Object,
            default: ()=>({})
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
        },
        rightArrowVisible(item) {
            return this.loadData ? !item.isLeaf : item.children
        },
    },
    computed: { 
        rightItems() {
            if (this.selected[this.level]) {
                let selected = this.items.filter((item) => item.name === this.selected[this.level].name);
                if (selected && selected[0].children && selected[0].children.length > 0) {
                    return selected[0].children
                }
            }
        }
    },
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
        // padding: .3em 0;  
        overflow: auto;  
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
        color: #666;
        white-space: nowrap;
        &:hover {
            background-color: #ccc;
            cursor: pointer;
            color: #333;
        }
        > .name {
            margin-right: 1em;
            user-select: none;
        }
        .icons {
            margin-left: auto;
            .loading {
                animation: spin 2s infinite linear;
            }
        }
    }
}

</style>


