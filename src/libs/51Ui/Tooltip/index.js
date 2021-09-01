import Vue from "vue"
import Tooltip from "./Tooltip.vue"


const TooltipBox=Vue.extend(Tooltip);
function tooltip(title,toggle,dom){
    const tooltipComp=new TooltipBox({
        el:document.createElement('span'),
        data(){
            return{
                title,toggle
            }
        }
    });

    dom.appendChild(tooltipComp.$el);

    setTimeout(()=>{
        // tooltipComp.toggle=false
        dom.removeChild(tooltipComp.$el)
    },3000)
}

function TooltipDom(){
    Vue.prototype.$Tooltip=tooltip
}

export default TooltipDom


