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

describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.be.exist
    })
    describe('属性',()=>{
        it('接收name属性', () => { 
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
        propsData: {
            name:'xxx'
        }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
        vm.$destroy()
        })
        it('接收disabled属性', () => { 
            const Constructor = Vue.extend(TabsItem)
            const vm = new Constructor({
            propsData: {
                disabled: true
            }
            }).$mount()
            expect(vm.$el.classList.contains('Disabled')).to.be.true
            const callBack = sinon.fake();
            vm.$on('click',callBack);
            vm.$el.click();
            expect(callBack).to.have.not.been.called
            vm.$destroy()
            })
    })
})