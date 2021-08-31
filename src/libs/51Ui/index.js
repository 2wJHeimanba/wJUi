
import Start from "./components/Start"
import Carousel from "./components/Carousel"
import DatePicker from "./components/DatePicker"
import NavMenu from "./components/NavMenu"
import JobTopMenu from "./components/JobTopMenu"
import TimePicker from "./components/TimePicker"
import JobSelect from "./components/JobSelect"
import JobInput from "./components/JobInput"
import JobRadio from "./components/JobRadio"
import JobTransfer from "./components/JobTransfer"


const JobUi={};

const componentPool=[
    Start,
    Carousel,
    DatePicker,
    NavMenu,
    JobTopMenu,
    TimePicker,
    JobSelect,
    JobInput,
    JobRadio,
    JobTransfer
];

JobUi.install=function(Vue){
    componentPool.forEach(component=>{
        Vue.component(component.name,component)
    })
}

export default JobUi