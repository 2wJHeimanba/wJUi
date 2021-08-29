import Vue from "vue"
import MessageBox from "../libs/51Ui/components/MessageBox.vue"


export default function messageBox(props,Component=MessageBox){
    const vm=new Vue({
        render(h){
            return h(Component,{props})
        }
    }).$mount()
    document.body.appendChild(vm.$el)
    const comp=vm.$children[0];
    comp.remove=function(){
        vm.$el.classList.add("messageActive")
        setTimeout(function(){messageRemove(comp.$el)},200)
    }
    return comp
}

function messageRemove(dom){
    document.body.removeChild(dom)
}