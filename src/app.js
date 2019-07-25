import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Sider from './sider'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
// import CollapseItem from './collapse-item'
// import Cascader from './cascader'
import Plugin from './plugin.js'

Vue.component('g-input',Input)
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-sider',Sider)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)
Vue.component('g-collapse',Collapse)
// Vue.component('g-collapse-item',CollapseItem)
// Vue.component('g-cascader',Cascader)

Vue.use(Plugin)
new Vue({
    el: '#app',
    data:{
        selectedTab: 'entertain',
        loading1: false,
        message:'',
        selectItem: ['1'],
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
    },
    created() {
        // this.$toast();
    },
    methods: {
        showToast() {
            this.$toast('这完',{
                autoClose: false,//autoClose直接传false 或者数字
                // toastPosition: 'top'
                closeButton:{
                    text: '我知道了',
                    callBack: (toast) =>{
                        toast.toast()
                        console.log('用户知道了')
                    }
                }
            })
        },
        inputchange(e) {
            console.log(e)
        }
    }
})




