import Toast from './toast'
let currentToast;
export default {
    install(Vue,options) {
        console.log('我是toast')
        Vue.prototype.$toast = function(message,toastoptions) {
            if (currentToast) {
                currentToast.closeToast();
            }
            currentToast = createToast({Vue,message,propsData:toastoptions})
        }
    }
}

function createToast({Vue,message,propsData}) {
    let Constructor = Vue.extend(Toast);
    let toast = new Constructor({
        propsData
        
    });
    toast.$slots.default = [message]; 
    toast.$mount(); 
    document.body.appendChild(toast.$el)
    return toast;
}