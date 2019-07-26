import chai,{ expect } from 'chai'
import { shallowMount,mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Popover from '@/popover.vue'
import Vue from 'vue'
chai.use(sinonChai)

describe('Popover', () => {
    it('存在Popover', () => {
        expect(Popover).to.exist
    })
    it('接收contentPosition属性',()=> {
        const wrapper = mount(Popover,{
            slots: {
                default: {template: `<button>点我</button>`},
                content: '<div>弹出内容</div>'
            },
            propsData: {
                contentPosition: 'bottom'
            }
        })
        wrapper.find('button').trigger('click');
        let classes = wrapper.find('.content-wrapper').classes();
        console.log('classes',classes)
        expect(classes).to.include('position-bottom')
    })
    it('可以设置trigger事件', () => {
        const wrapper = mount(Popover,{
            slots: {
                default: {template: `<button>点我</button>`},
                content: '<div>弹出内容</div>'
            },
            propsData: {
                contentPosition: 'bottom',
                trigger: 'hover'
            }
        });
        expect(wrapper.find('.content-wrapper').element).to.not.exist
        wrapper.find('.popover').trigger('mouseenter');
        expect(wrapper.find('.content-wrapper').element).to.exist

    })    
})