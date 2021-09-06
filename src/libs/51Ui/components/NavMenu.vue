<template>
    <div id="job_nav">
        <ul>
            <li v-for="(item,index) in navContent" :key="item.id" @click="change_second(index)">
                <div class="job_nav_item" @click="toPage(item)" :class="{active_right:nav_key===index}">                        
                    <span class="nav_fonts">
                        <span v-html="item.icon"></span>
                        <span>{{item.title}}</span>
                    </span>
                    <span class="active_icon" v-if="item.childrens">
                        <svg t="1629556349003" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2718" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"><path d="M322.9 187.7L647 512 323 836.29999999c-17.2 17.3-17.2 45.5 0 62.80000001 17.2 17.3 45.5 17.3 62.7 0l355.4-355.7c17.2-17.3 17.2-45.5 0-62.8L385.7 124.9c-17.2-17.3-45.5-17.3-62.7 0-17.3 17.3-17.3 45.6-0.1 62.8z" fill="#fff" p-id="2719"></path></svg>
                    </span>
                </div>
                <template v-if="item.childrens">
                    <ul class="job_second_nav" :style="{height:nav_key===index?item.childrens.length*45+'px':'0px'}">
                        <li 
                            v-for="(val,i) in item.childrens" 
                            :key="val.id" 
                            @click="toPage(val,i)" 
                            :class="{second_nav_active:queryPath(val)}" 
                        >{{val.title}}</li>
                    </ul>
                </template>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'NavMenu',
    props:{
        nav:{
            type:Array,
            require:true
        },
        current_index:{
            type:Number,
            default:0
        }
    },
    data(){
        return{
            nav_key:this.current_index,
            navContent:this.transformNav(this.nav)
        }
    },
    methods:{
        change_second(val){
            this.nav_key=val
        },
        toPage(val,index){
            if(Object.prototype.toString.call(index).slice(8,-1)==="Number") this.second_nav_key=index;
            if(val.path){
                window.location.href=val.path
            }
        },
        queryPath(val){
            if(window.location.href.includes(val.path)) return true;
            else return false;
        },
        transformNav(navArr){
            return navArr.map(val=>{
                Reflect.set(val,'id',Math.ceil(Math.random()*Math.pow(10,12)).toString(16));
                if(Reflect.has(val,'childrens')){
                    this.transformNav(val.childrens)
                }
                return val
            });
        }
    }
}
</script>

<style>
*{margin: 0;padding: 0;box-sizing: border-box;}
#job_nav{
    padding-top: 100px;
    background: #f47920;
    user-select: none;
    height: 100%;
}
.job_nav_item{
    height: 50px;
    color:rgba(255,255,255,0.75);
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 15px;
    border-radius: 15px;
    margin: 5px;
    padding-right: 15px;
    padding-left: 12px;
    position: relative;
}
.job_nav_item:hover{
    background: rgba(255,255,255,0.05);
}
.nav_fonts{
    display: inline-flex;
    align-items: center;
    flex: 1 1;
    
}
.nav_fonts>span:first-child{
    /* border: 1px solid red; */
    width: 22px;height: 22px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

}
.nav_fonts>span:not(:first-child){
    margin-left: 8px;
}
.active_icon{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    border-radius: 5px;
    background: rgba(255,255,255,0.1);
    transition: all 0.2s linear;
}

/* 二级导航栏 */
.job_second_nav{
    height: 0;
    overflow: hidden;
    transition: height 0.2s linear;
}
.job_second_nav>li{
    background: #f47920aa;
    height: 45px;
    line-height: 45px;
    color: rgba(255,255,255,0.7);
    font-size: 14px;
    text-align: left;
    text-indent: 2em;
    margin: 0 13px;
    list-style-type: none;
}
.job_second_nav>li:hover:last-child{
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
}
.job_second_nav>li:hover:first-child{
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}
.job_second_nav>li:hover{
    background: rgba(255,255,255,0.1);
}
.second_nav_toggle{
    height: 90px;
}
.job_second_nav .second_nav_active{
    color: #fff;
    background: rgba(254,220,189,0.2);
    font-weight: bold;
}
.second_nav_active:first-child{
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}
.second_nav_active:last-child{
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
}

.active_right{
    font-weight: bold;color: #fff;
    background: rgba(255,255,255,0.15);
}
.active_right .active_icon{
    background: rgba(255,255,255,0.25);
    box-shadow: 0 0 3px rgba(255,255,255,0.15);
    transform: rotate(90deg);
}
.active_right>span:nth-child(2){
    color: #fff;
}
</style>