<template>
    <div id="job_select" v-jobSelect>
        <input type="text" placeholder="请选择" autocomplete="off" readonly id="job_select_ipt" v-model="selected_content" :class="{job_ipt_active:select_content}">
        <span class="job_select_icon">
            <svg :style="{transform:select_content?'rotate(-180deg)':''}" t="1629638480589" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2254" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15"><path d="M69.83338667 218.71502222c-51.44689778 0-84.35484445 68.70129778-44.93767112 108.12074667L467.7632 769.73624889c25.40885333 25.3952 63.18307555 25.3952 88.58055111 0L999.23057778 326.84828444c38.41706667-38.42844446 8.45824-108.12074667-44.29596445-108.12074666l-885.10236444-0.01251556z" p-id="2255" fill="#df7e2d"></path></svg>
        </span>
        <div id="job_select_content" v-if="select_content">
            <ul>
                <li 
                    v-for="(item,index) in select_data" 
                    :key="index" 
                    @click="getSelectContent(item)" 
                    :class="{selectedActive:item===selected_content}" 
                >
                    {{item.title}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'JobSelect',
    props:{
        select_data:{
            type:Array,
            require:true
        },
        value:{
            type:String,
            default:''
        },
        select_key:{
            type:String,
            default:'value'
        },
        output_key:{
            type:String,
            default:'value'
        }
    },
    data(){
        return{
            select_content:false,
            selected_content:this.value
        }
    },
    mounted(){
        console.log(this.selected_content)
    },
    directives:{
        jobSelect:{
            bind(el,binding,vnode){
                el.handler=function(e){
                    if(el.contains(e.target)){
                        if(!vnode.context.select_content){
                            vnode.context.select_content=true
                        }
                    }else{
                        if(vnode.context.select_content){
                            vnode.context.select_content=false
                        }
                    }
                }
                document.addEventListener('click',el.handler)
            },
            unbind(el){
                document.removeEventListener('click',el.handler)
            }
        }
    },
    methods:{
        getSelectContent(e){
            this.selected_content=e;
            this.select_content=false;
            this.$emit('input',this.selected_content)
        }
    }
}
</script>

<style>
#job_select{
    position: relative;
    display: inline-block;
}
#job_select_ipt{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 238px;
    font-size: 14px;
    user-select: none;
}
#job_select_content{
    width: 238px;
    border-radius: 4px;
    background-color: #fff;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15)) drop-shadow(0 0 1px rgba(0,0,0,0.15));
    position: absolute;
    top: 125%;
    left: 0px;
    display: flex;
    padding: 10px;
    padding-bottom: 10px;
    animation-name: toggle;
    animation-duration: 0.5s;
    animation-direction: alternate;
}
@keyframes toggle {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
#job_select_content::before{
    content: "";
    display: inline-block;
    position: absolute;
    left: 30px;top: -16px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    width: 0;height: 0;
}
#job_select_content>ul{
    list-style: none;
    width: 100%;
}
#job_select_content>ul>li{
    height: 35px;
    line-height: 35px;
    border-radius: 10px;
    user-select: none;
    cursor: pointer;
    text-align: left;
    padding-left: 25px;
    font-size: 14px;
}
#job_select_content>ul>li:last-child{
    border: none;
}
#job_select_content>ul>li:hover{
    background: rgba(0,0,0,0.05);
}
.selectedActive{
    color: #409eff;
    font-weight: 600;
}
.job_select_icon{
    width: 30px;
    height: 30px;
    position: absolute;
    right: 10px;top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: center center;
}
.job_select_icon>svg{
    transition: all 0.2s linear;
}
.job_ipt_active{
    border: 1px solid #409eff !important;
}
</style>