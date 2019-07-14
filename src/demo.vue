
<template>
<div>
    <Button>按钮</Button>
    <Cascader 
        :source="source" 
        popover-height="200px"
        :cascaderSelected="cascaderSelected"
        :level="level"
    >
        这里是级联选择器
    </Cascader>
</div>
    
</template>
<script>
import Button from './button'
import CascaderItem from './cascader-item'
import Cascader from './cascader'
export default {
    data(){
        return {
            level: 0,
            cascaderSelected:[],
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
        this.$on('updated:cascaderSelected',newVal =>{
            this.cascaderSelected = newVal
        })
    },
    components:{
        Button,
        Cascader,
        CascaderItem
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


