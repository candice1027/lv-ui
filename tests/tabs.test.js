const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tab', () => {
    it('存在.', () => {
        expect(Tabs).to.be.exist
    })
    describe('属性',()=>{
        it('接收selected属性', (done) => {
            const div = document.createElement('div');
            document.body.appendChild(div);
            div.innerHTML = `
            <g-tabs selected="sports" >
            <g-tabs-head>
                <g-tabs-item name="finance">
                    经济
                </g-tabs-item>
                <g-tabs-item name="sports">体育</g-tabs-item>
                <g-tabs-item name="entertain">娱乐</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="finance">经济content</g-tabs-pane>
                <g-tabs-pane name="sports">体育content</g-tabs-pane>
                <g-tabs-pane name="entertain">娱乐content</g-tabs-pane>            </g-tabs-body>
            </g-tabs>  
            `
            let  vm = new Vue({
                el: div,
            })
            vm.$nextTick(()=>{
                // console.log(vm.$el.outerHTML)
                let item = vm.$el.querySelector(`.tabs-item[data-name=sports]`)
                expect(item.classList.contains('isActive')).to.be.true
                done();
            })
        })
    })
})