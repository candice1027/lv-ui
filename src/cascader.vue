<template>
<div class="cascader" ref="cascader">
    <div class="trigger" @click="toggle">
        <!-- 这是触发器 点击之后弹出浮层-->
        <slot>
            {{result || '&nbsp;'}}
        </slot>
    </div> 
    <div class="popover-wrapper" v-if="popoverVisible">
        <cascader-items 
            :items="source"
            class="popover"
            :height="popoverHeight"
            :selected= selected
            :level="0"
            @update:selected="onUpdateSelected"
            :loadData="loadData"
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
        },
        loadData:{
            type: Function
        }
    },
    components: {
        cascaderItems
    },
    methods: {
        onClickDocument(e) {
            //如果点击的元素在cascader组件里面的话，就不管，如果不在的话，就把cascader这个组件给关闭掉
          let {cascader} = this.$refs
          let {target} = e;
            if (target == cascader || cascader.contains(target)) {
                return 
            } else {
                this.close()
            }
        },
        open() {
            this.popoverVisible = true;
            this.$nextTick(() => {
                document.addEventListener('click',this.onClickDocument)
            })
        },
        close() {
            console.log('close了===')
            this.popoverVisible = false;
            document.removeEventListener('click',this.onClickDocument)
        },
        toggle() {
            if (this.popoverVisible) {
                this.close();
            } else {
                this.open();
            }   
        },
        onUpdateSelected(newSelected) {
            this.$emit('update:selected',newSelected)
            let lastItem = newSelected[newSelected.length -1] //因为点击了某一项会把后面的清空，所以这里用户点击的肯定是数组的最后一项
            let simplest = (children,id)=> {
                return children.filter(item => item.id === id)[0]
            }
            let complex = (children,id) => {
                let noChildren = [];
                let hasChildren = [];
                children.forEach(item =>{
                    if (item.children) {
                        hasChildren.push(item)
                    } else {
                        noChildren.push(item)
                    }
                })
                let found = simplest(noChildren,id)
                if (found) {
                    console.log('found')
                    return found
                } else {
                    found = simplest(hasChildren,id)
                    if (found) {
                        return found
                    } else {
                        for (let i = 0; i < hasChildren.length; i++) {
                            found = complex(hasChildren[i].children,id)
                            if (found) {
                                return found
                            }
                        }
                        return undefined
                    }
                }
            }
            let updateSource = (result) => {
                //传递给用户的回调函数，用户在通过接口获取到数据之后，调用这个方法，将获取到的数据传进来
               let copy = JSON.parse(JSON.stringify(this.source))
               let toUpdate = complex(copy,lastItem.id)
               toUpdate.children = result;
               this.$emit('update:source',copy)
               //拿到result 之后，要更新source下的某一项给他添加children,children的值就是copy
            }
            if (!lastItem.isLeaf) {
               this.loadData && this.loadData(lastItem,updateSource)
               //如果是静态传入的数据，就不需要去调接口去获取了
            }    
        },
    },
    computed: {
        result() {
            if (this.selected) {
                return this.selected.map(item =>item.name).join('/')
            }
        }
    }  
}
</script>
<style lang="scss" scoped>
@import "var";

.cascader {
    border: 1px solid red;
    display: inline-block;
    position: relative;
    .trigger {
        min-width: 10em;
        height: $button-height;
        border: 1px solid $border-color;
        display: inline-flex;
        align-items: center;
        padding: 0 1em;
        border-radius: $border-radius;
    }
    .popover-wrapper {
        display: flex;
        position: absolute;
        top: 100%;
        left: 0;
        background: #fff;
        margin-top: 8px;
        @extend .box-shadow;
        .label {
            white-space: nowrap;
        }
    }

} 

</style>


