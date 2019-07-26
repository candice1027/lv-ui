let callbacks = [];
document.addEventListener('click',function(e){
    let {target} = e;
    callbacks.forEach((item) => {
        if (target === item.el || item.el.contains(target)) {
            return 
        } else {
            item.callback()
        }
    })
})
export default {
    bind: function(el,binding,vnode){
        callbacks.push({el,callback: binding.value})
    }
}