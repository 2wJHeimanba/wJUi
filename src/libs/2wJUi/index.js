

const wJUi={};
const componentPool=[
    Start
];

wJUi.install=function(Vue){
    componentPool.forEach(component=>{
        Vue.component(component.name,component)
    })
}

export default wJUi
