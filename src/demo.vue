
<template>
<div>
    <div style="padding:10px;">
    <Cascader 
        :source.sync="source" 
        popover-height="200px"
        :selected.sync="selected"
        @update:selected="onUpdateSelected"
        :loadData="loadData"
    >
        <!-- 这里是级联选择器 -->
    </Cascader>
    <popover>
        <template>
            <button>点我</button>
        </template>
         <template v-slot:content>
            <div>弹出的内容啊啊啊啊</div>
        </template>   
    </popover>
    <Cascader 
        :source.sync="source" 
        popover-height="200px"
        :selected.sync="selected"
        @update:selected="onUpdateSelected"
        :loadData="loadData"
    >
        <!-- 这里是级联选择器 -->
    </Cascader>
    </div>
</div>
    
</template>
<script>
import Button from './button'
import CascaderItems from './cascader-items'
import Cascader from './cascader'
import db from './db'
import Popover from './popover'

function ajax(parentId = 0) {
    return new Promise((resolve,reject) =>{
        //下面这一步的处理 都是用户需要做的处理 
        setTimeout(()=>{
            let result = db.filter(item => item.parent_id == parentId)
            result.forEach(node => {
                if (db.filter(db => db.parent_id === node.id).length > 0) {
                    node.isLeaf = false;//如果有一个数据中的parent_id 与这个item的id 相同，说明这个item下还有数据
                } else {
                    node.isLeaf = true;
                }
            })
            resolve(result)
        },2000)
    })
}
export default {
    data(){
        return {
            selected:[],
            source: [], 
        }  
    },
    mounted(){
        ajax(0).then(data=>{
            this.source = data
            console.log('首次渲染的source',this.source)
        })
    },
    methods: {
        onUpdateSelected(newSelected) {
            ajax(this.selected[0].id).then( result =>{
                let lastLevelSelected = this.source.filter(item=>item.id === this.selected[0].id)[0]
                    this.$set(lastLevelSelected,'children',result)
            })
        },
        loadData(node,updateSource) {
            let {name,id,parent_id} = node;
            ajax(id).then(result =>{
                console.log(result,'如北京市下的所有区')
                updateSource(result)
            })
        }
    },
    components:{
        Button,
        Cascader,
        CascaderItems,
        Popover
    }
    
}
</script>
<style lang="scss" scoped>
*{margin: 0;padding: 0;box-sizing: border-box;}
:root {
    --font-size: 14px;
}
body{
    font-size: var(--font-size)
}

</style>


