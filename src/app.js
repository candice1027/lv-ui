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
Vue.use(Plugin)
new Vue({
    el: '#app',
    data:{
        loading1: false,
        message:'',
    },
    created() {
        this.$toast();
    },
    methods: {
        inputchange(e) {
            console.log(e)

        }
    }
})




