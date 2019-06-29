import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue({
    el: '#app',
    data:{
        loading1: false
    }
})



//单元测试
import chai from 'chai';
import spies from 'chai-spies'
const expect = chai.expect;
chai.use(spies)

//icon设置
{
    const constructor = Vue.extend(Button);
    const button = new constructor({
        propsData: {
            icon: 'setting',
        }
    });
    button.$mount()
    let useElement = button.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
    button.$el.remove();
    button.$destroy();
}
//loading
{
    const constructor = Vue.extend(Button);
    const button = new constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    });
    button.$mount()
    let useElement = button.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
    button.$el.remove();
    button.$destroy();
}
//按钮是否在右边
{
    const constructor = Vue.extend(Button);
    const button = new constructor({
        propsData: {
            icon: 'setting',
            iconLocate: 'right'
        }
    });
    button.$mount('#test')
    let svg = button.$el.querySelector('svg');
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('2')
}
//button click事件
{
    const constructor = Vue.extend(Button);
    const vButton = new constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vButton.$mount();

    // vButton.$on('click',function(){
    //     expect('1').to.eq('1')
    // })
    // console.log(vButton)
    // let vBtn = vButton.$el;
    // vBtn.click()
    //使用chai-spy改写上面的
    let spy = chai.spy(function(){})
    vButton.$on('click',spy)
    let vBtn = vButton.$el;
    vBtn.click();
    expect(spy).have.been.to.called();
}
