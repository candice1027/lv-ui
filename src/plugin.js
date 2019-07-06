import Toast from './toast'
export default {
    install(Vue,options) {
        console.log('我是toast')
        Vue.prototype.$toast = function(message,toastoptions) {
           let Constructor = Vue.extend(Toast);
           let toast = new Constructor({
               propsData: toastoptions
               
           });
           toast.$slots.default = [message]; 
           toast.$mount(); 
           document.body.appendChild(toast.$el)
        }
    }
}