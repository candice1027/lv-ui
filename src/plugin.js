import Toast from './toast'
export default {
    install(Vue,options) {
        console.log('我是toast')
        Vue.prototype.$toast = function(message) {
           let Constructor = Vue.extend(Toast);
           let toast = new Constructor();
        //    let body = document.body;
           toast.$slots.default = [message]; 
           toast.$mount(); 
           document.body.appendChild(toast.$el)
        }
    }
}