
import Start from "./components/Start"
import Carousel from "./components/Carousel"


const JobUi={};

const componentPool=[
    Start,
    Carousel
];

JobUi.install=function(Vue){
    componentPool.forEach(component=>{
        Vue.component(component.name,component)
    })
}

export default JobUi