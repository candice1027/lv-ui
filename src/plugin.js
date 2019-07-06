import Toast from './toast'
let currentToast;
export default {
    install(Vue,options) {
        console.log('我是toast')
        Vue.prototype.$toast = function(message,toastoptions) {
            if (currentToast) {
                currentToast.closeToast();
            }
            currentToast = createToast({
                Vue,
                message,
                propsData:toastoptions,
                onClose: () =>{currentToast = null;}
            })
        }
    }
}

function createToast({Vue,message,propsData,onClose}) {
    let Constructor = Vue.extend(Toast);
    let toast = new Constructor({
        propsData
        
    });
    toast.$slots.default = [message]; 
    toast.$mount(); 
    toast.$on('close',onClose)
    document.body.appendChild(toast.$el)
    return toast;
}