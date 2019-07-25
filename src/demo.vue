
<template>
<div>
    <div style="padding:10px;">
    <Cascader 
        :source="source" 
        popover-height="200px"
        :selected="selected"
        @update:selected="onUpdateSelected"
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
export default {
    data(){
        return {
            selected:[],
            source:[
            {
                name:'浙江',
                children:[
                    {
                     name: '杭州',
                      children: [
                        {
                            name:'上城区'
                        },
                        {
                            name:'下城区'
                        },
                        {
                            name:'江干区'
                        },
                    ]
                    },
                    {
                        name: '嘉兴',
                        children: [
                            {
                                name:'南湖区'
                            },
                            {
                                name:'秀洲区'
                            },
                            {
                                name:'嘉善县'
                            },
                        ]
                    }
                ]
            },
            {
                name:'福建',
                children:[
                    {
                     name: '福州',
                      children: [
                        {
                            name:'鼓楼区'
                        },
                        {
                            name:'台江区'
                        },
                        {
                            name:'苍山区'
                        },
                    ]
                    },
                ]
            },
            {
                name:'上海',
                children:[
                    {
                     name: '上海',
                      children: [
                        {
                            name:'浦东区'
                        },
                        {
                            name:'徐汇区'
                        },
                        {
                            name:'虹口区'
                        },
                    ]
                    },
                ]
            }
        ]
        }  
    },
    mounted(){
    },
    methods: {
        onUpdateSelected(newSelected) {
            console.log('更新了啊',newSelected)
            this.selected = newSelected
            console.log(this.selected,'this.selected')
        }
    },
    components:{
        Button,
        Cascader,
        CascaderItems
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


