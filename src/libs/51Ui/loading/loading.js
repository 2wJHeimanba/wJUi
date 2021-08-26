
import Vue from "vue"
import loading from "./loading.vue"

const loadingDirective={
    inserted(el,binding){
        // console.log(el)
        // console.log(binding)
        const loadingBox=Vue.extend(loading)
        const loadingComp=new loadingBox().$mount()
        el.instance=loadingComp
        // console.log(loadingComp.$el)
        // console.log(binding.value)
        if(binding.value){
            append(el)
        }
    },
    update(el,binding){
        if(binding.value!==binding.oldValue){
            binding.value?append(el):remove(el)
        }
    }

}

function append(el){
    el.appendChild(el.instance.$el)
}

function remove(el){
    el.removeChild(el.instance.$el)
}

export default loadingDirective