const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.exist
    })
    describe('props',()=>{
        const Constructor = Vue.extend(Input)
        let vm;
        afterEach(()=>{
            vm.$destroy();
        })
        it('接收value', () => {
            vm = new Constructor({
            propsData: {
                value: '李四',
            }
            }).$mount()
            let InputElement = vm.$el.querySelector('input')
            let attr = InputElement.value;
            expect(attr).to.equal('李四')
        })
        it('接收 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true,
                }
            }).$mount()
            let InputElement = vm.$el.querySelector('input')
            let attr = InputElement.disabled;
            expect(attr).to.equal(true)
        })
        it('接收 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true,
                }
            }).$mount()
            let InputElement = vm.$el.querySelector('input')
            let attr = InputElement.readOnly;
            expect(attr).to.equal(true)
        })
        it('接收 error', () => {
            vm = new Constructor({
                propsData: {
                    error: '错误信息',
                }
            }).$mount()
            let useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.eq('#i-info');
            let errorMessage = vm.$el.querySelector('.error-message');
            expect(errorMessage.innerText).to.eq('错误信息')
        })
    })
    describe('事件', ()=>{
        const Constructor = Vue.extend(Input)
        let vm;
        afterEach(()=>{
            vm.$destroy();
        })
        it('支持 change/input/focus/blur 事件',() =>{
            ['change','input','focus','blur'].forEach((eventName) =>{
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(eventName,callback);

                let event = new Event(eventName);
                Object.defineProperty(
                    event, 
                    'target',
                    {value: {value: 'hi'}, enumerable: true}
                )
                let inputElement = vm.$el.querySelector('input');
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith('hi');
            }) 
        })       
    })  
})