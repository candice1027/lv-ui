const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'
// import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在Popover', () => {
        expect(Popover).to.be.ok
    })
    it('接收contentPosition属性', (done) => {
        Vue.component('g-popover',Popover)
        // Vue.component('g-button',Button)
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
            <g-popover content-position="bottom" ref="a">
                <template slot="content" slot-scope="xxx">
                   弹出内容
                </template>
            <button>点我上</button>
            </g-popover>
        `
        const vm = new Vue({
            el: div
        })
        document.querySelector('button').click();
        vm.$nextTick( ()=> {
            let { contentWrapper } = vm.$refs.a.$refs;
            expect(contentWrapper.classList.contains('position-bottom')).to.be.true
            done()
        })
      
    })
    // it('可以设置loading.', () => {
    //     const Constructor = Vue.extend(Button)
    //     const vm = new Constructor({
    //     propsData: {
    //         icon: 'settings',
    //         loading: true
    //     }
    //     }).$mount()
    //     const useElements = vm.$el.querySelectorAll('use')
    //     expect(useElements.length).to.equal(1)
    //     expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
    //     vm.$destroy()
    // })
    // it('icon 默认的 order 是 1', () => {
    //     const div = document.createElement('div')
    //     document.body.appendChild(div)
    //     const Constructor = Vue.extend(Button)
    //     const vm = new Constructor({
    //     propsData: {
    //         icon: 'settings',
    //     }
    //     }).$mount(div)
    //     const icon = vm.$el.querySelector('svg')
    //     expect(getComputedStyle(icon).order).to.eq('1')
    //     vm.$el.remove()
    //     vm.$destroy()
    // })
    // it('设置 iconPosition 可以改变 order', () => {
    //     const div = document.createElement('div')
    //     document.body.appendChild(div)
    //     const Constructor = Vue.extend(Button)
    //     const vm = new Constructor({
    //     propsData: {
    //         icon: 'settings',
    //         'iconLocate': 'right'
    //     }
    //     }).$mount(div)
    //     const icon = vm.$el.querySelector('svg')
    //     expect(getComputedStyle(icon).order).to.eq('2')
    //     vm.$el.remove()
    //     vm.$destroy()
    // })
    // it('点击 button 触发 click 事件', () => {
    //     const Constructor = Vue.extend(Button)
    //     const vm = new Constructor({
    //     propsData: {
    //         icon: 'settings',
    //     }
    //     }).$mount()

    //     const callback = sinon.fake();
    //     vm.$on('click', callback)
    //     vm.$el.click()
    //     expect(callback).to.have.been.called

    // })
})