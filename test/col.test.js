const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.be.ok
    })
    // it('接收span属性.', () => {
    //     const div = document.createElement('div');
    //     document.body.appendChild(div);
    //     const Constructor = Vue.extend(Col)
    //     const vm = new Constructor({
    //         propsData: {
    //             span: 1
    //         }
    //     }).$mount(div)
    //     const element = vm.$el;
    //     expect(vm.$el.classList.contains('col-1')).to.eq(true)
    //     vm.$destroy()
    // })
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

})