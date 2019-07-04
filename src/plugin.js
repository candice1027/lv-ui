export default {
    install(Vue,options) {
        console.log('我是toast')
        Vue.prototype.$toast = function() {
            console.log('我是toast')
        }
    }
}