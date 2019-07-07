const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Toast).to.be.exist
    })
    describe('属性',()=>{
        it('接收autoClose属性', (done) => {
            const Constructor = Vue.extend(Toast)
            const div = document.createElement('div');
            const vm = new Constructor({
                propsData: {
                    autoClose: 2,
                }
            }).$mount(div)
            document.body.appendChild(div);
            setTimeout(()=>{
                expect(document.body.contains(vm.$el)).to.eq(false)
                vm.$destroy()
                done();
            },1000)   
        }) 
        it('接收closeButton属性', (done) => {
            const callBack = sinon.fake();
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: false,
                    closeButton: {
                        text: '这里是关闭',
                        callBack
                    },
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('这里是关闭')
            setTimeout(() =>{
                closeButton.click()
                expect(callBack).to.have.been.called 
                done();   
            },1000)
        })
        it('接收enableHtml属性', () => {
            const Constructor = Vue.extend(Toast)
            const div = document.createElement('div');
            const vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            })
            vm.$slots.default = ['<strong id="testToast"></strong>']
            vm.$mount(div)
            document.body.appendChild(div)
            let strong = vm.$el.querySelector('#testToast');
            expect(strong).to.exist
            vm.$destroy()
        }) 
        it('接收toastPosition属性', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    toastPosition: 'bottom'
                }
            }).$mount()
            expect(vm.$el.classList.contains('toast-position-bottom'))
            vm.$destroy()
        }) 
    })
})