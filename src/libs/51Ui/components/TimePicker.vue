<template>
    <div id="job_timePicker" v-outside>
        <input type="text" id="job_time_picker" autocomplete="off" placeholder="请选择时间" :value="selected_time">
        <transition name="fade">
            <div id="job_time_content" v-if="time_content_toggle">
                <ul>
                    <li 
                        v-for="nums in 24" :key="nums" 
                        @click="getHour(String(nums-1).padStart(2,'0'))" 
                        :class="{job_time_active:String(nums-1).padStart(2,'0')===job_hour}"
                    >
                        {{String(nums-1).padStart(2,'0')}}
                    </li>
                </ul>
                <ul>
                    <li 
                        v-for="nums in 60" :key="nums" 
                        @click="getMinute(String(nums-1).padStart(2,'0'))" 
                        :class="{job_time_active:String(nums-1).padStart(2,'0')===job_minute}"
                    >
                        {{String(nums-1).padStart(2,'0')}}
                    </li>
                </ul>
                <ul>
                    <li 
                        v-for="nums in 60" :key="nums" 
                        @click="getSeconds(String(nums-1).padStart(2,'0'))" 
                        :class="{job_time_active:String(nums-1).padStart(2,'0')===job_seconds}"
                    >
                        {{String(nums-1).padStart(2,'0')}}
                    </li>
                </ul>
                <div class="job_content_operate" ref="job_resume">确定</div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name:'TimePicker',
    data(){
        return{
            select_time:"",
            job_hour:'00',
            job_minute:'00',
            job_seconds:'00',
            time_content_toggle:false
        }
    },
    computed:{
        selected_time(){
            if(this.job_hour==='00'&&this.job_minute==='00'&&this.job_seconds==='00'){
                return ""
            }else{
                return `${this.job_hour}:${this.job_minute}:${this.job_seconds}`
            }
        }
    },
    directives:{
        outside:{
            bind(el,binding,vnode){
                el.handler=(e)=>{
                    if(e.target===vnode.context.$refs.job_resume){
                        vnode.context.time_content_off()
                    }else{
                        if(el.contains(e.target)) !vnode.context.time_content_toggle&&vnode.context.time_content_on();
                        else vnode.context.time_content_toggle&&vnode.context.time_content_off();
                    }
                    
                }
                document.addEventListener('click',el.handler)
            },
            unbind(el,binding,vnode){
                document.removeEventListener('click',el.handler)
            }
        }
    },
    methods:{
        getHour(time){
            this.job_hour=time
        },
        getMinute(time){
            this.job_minute=time
        },
        getSeconds(time){
            this.job_seconds=time
        },
        time_content_on(){
            this.time_content_toggle=true
        },
        time_content_off(){
            this.time_content_toggle=false
        }
    }
}
</script>

<style>
#job_timePicker{
    display: inline-block;
    position: relative;
}
#job_time_picker{
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
    width: 200px;
}
#job_time_content{
    width: 220px;
    height: 235px;
    border-radius: 4px;
    background-color: #fff;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15)) drop-shadow(0 0 1px rgba(0,0,0,0.15));
    position: absolute;
    top: 125%;
    left: 0px;
    display: flex;
    padding: 10px;
    padding-bottom: 35px;
}
#job_time_content::before{
    content: "";
    display: inline-block;
    position: absolute;
    left: 30px;top: -16px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    width: 0;height: 0;
}
#job_time_content>ul{
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    flex: 1 1;
    list-style: none;
    overflow: auto;
}
#job_time_content>ul::-webkit-scrollbar{
    width: 6px;
}
#job_time_content>ul::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.08);
    background: rgba(77, 76, 76, 0.08);
}
#job_time_content>ul::-webkit-scrollbar-track {
    border-radius: 0;
}
#job_time_content>ul>li{
    font-size: 14px;
    margin: 8px 0;
    cursor: pointer;
    user-select: none;
}
.job_content_operate{
    width: 60px;
    height: 25px;
    border-radius: 5px;
    position: absolute;
    bottom: 5px;
    right: 10px;
    line-height: 25px;
    font-size: 12px;
    cursor: pointer;
    color: #409eff;
    font-weight: 600;
    text-align: right;
    user-select: none;
}
.job_time_active{
    color: #409eff;
    font-weight: 600;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>