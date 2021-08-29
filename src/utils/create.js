
import Vue from "vue"
import JobNotice from "../libs/51Ui/components/JobNotice.vue"


export default function create(props,Component=JobNotice){
    const vm=new Vue({
        render(h){
            return h(Component,{props})
        }
    }).$mount();

    document.body.appendChild(vm.$el)
    const comp=vm.$children[0];
    comp.remove=function(){

        // 通过js方式控制动画
        // let distance=10,
        //     opacityStep=1;
        // let timer=setInterval(function(){
        //     up(vm.$el,distance)
        //     if(distance<0){clearInterval(timer)}
        //     distance=distance-1;
        // },20)

        // let opacityActive=setInterval(function(){
        //     opacity(vm.$el,opacityStep)
        //     if(opacityStep<=0){clearInterval(opacityActive)}
        //     opacityStep=opacityStep-0.025
        // },5)

        // 通过添加class的方式制作动画
        vm.$el.classList.add("active")
        setTimeout(function(){remove(vm)},200)
    }
    return comp
}

function up(dom,step){
    dom.style.top=`${step}px`
}

function opacity(dom,step){
    dom.style.opacity=step
}


function remove(noticeDom){
    document.body.removeChild(noticeDom.$el);
    noticeDom.$destroy()
}