import chai,{ expect } from 'chai'
import { mount } from '@vue/test-utils'
import Col from '@/col.vue'

describe('Col', () => {
    it('存在Col', () => {
        expect(Col).to.exist
    })
    it('接收span属性', () => {
        const wrapper = mount(Col,{
            propsData: {
                span: 1
            }
        })
        expect(wrapper.classes()).to.include('col-1')
    })
    it('接收offset属性.', () => {
        const wrapper = mount(Col,{
            propsData: {
                offset: 1
            }
        })
        expect(wrapper.classes()).to.include('offset-1') 
    })
    it('接收pc属性.', () => {
        const wrapper = mount(Col,{
            propsData: {
                pc: {span:1,offset:2}
            }
        })
        expect(wrapper.classes()).to.include('col-pc-1')
        expect(wrapper.classes()).to.include('offset-pc-2')
    })
    it('接收ipad属性.', () => {
        const wrapper = mount(Col,{
            propsData: {
                ipad: {span:1,offset:2}
            }
        })
        expect(wrapper.classes()).to.include('col-ipad-1')
        expect(wrapper.classes()).to.include('offset-ipad-2')
    })
    it('接收narrow属性.', () => {
        const wrapper = mount(Col,{
            propsData: {
                narrow: {span:1,offset:2}
            }
        })
        expect(wrapper.classes()).to.include('col-narrow-1')
        expect(wrapper.classes()).to.include('offset-narrow-2')
    })
    it('接收wide属性.', () => {
        const wrapper = mount(Col,{
            propsData: {
                wide: {span:1,offset:2}
            }
        })
        expect(wrapper.classes()).to.include('col-wide-1')
        expect(wrapper.classes()).to.include('offset-wide-2')
    })
})