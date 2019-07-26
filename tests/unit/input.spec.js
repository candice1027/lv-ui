import chai,{ expect } from 'chai'
import { shallowMount,mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Input from '@/input.vue'
import Vue from 'vue'
describe('Input', () => {
    it('存在Input', () => {
        expect(Input).to.exist
    })
    describe('props',()=>{
        it('接收value', () => {
            const wrapper = mount(Input, {
                propsData: {
                    value: '李四',
                } 
            })
            console.log(wrapper.find('input').value,'input')
            
            // let InputElement = vm.$el.querySelector('input')
            // let attr = InputElement.value;
            // expect(attr).to.equal('李四')
        })
        it('接收 disabled', () => {
            const wrapper = mount(Input, {
                propsData: {
                    disabled: true,
                } 
            })
            let attr = wrapper.find('input').attributes();
            expect(attr.disabled).to.eq('disabled')
        })
        it('接收 readonly', () => {
            const wrapper = mount(Input, {
                propsData: {
                    readonly: true,
                } 
            })
            let attr = wrapper.find('input').attributes();
            expect(attr.readonly).to.eq('readonly')
        })
        it('接收 error', () => {
            const wrapper = mount(Input, {
                propsData: {
                    error: '错误信息',
                } 
            })
            let useElementAttr = wrapper.find('use').attributes();
            let errorMessage = wrapper.find('.error-message').text();
            expect(useElementAttr.href).to.eq('#i-info')
            expect(errorMessage).to.eq('错误信息')
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