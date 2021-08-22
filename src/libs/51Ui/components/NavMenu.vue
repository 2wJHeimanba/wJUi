<template>
    <div id="job_nav">
        <ul>
            <li v-for="(item,index) in nav" :key="item.id" @click="change_second(index)">
                <div class="job_nav_item" @click="toPage(item)" :class="{active_right:nav_key===index}">
                    <span>
                        <svg t="1629556514022" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2060" width="18" height="18" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M553.86217486 156.61769104a59.43740844 59.43740844 0 0 0-79.86800372 0L151.037323 463.27823652a29.79286193 29.79286193 0 0 0 39.89685059 44.25361633l5.13542175-4.87586976V822.7208252a59.58572388 59.58572388 0 0 0 59.58572388 59.65988159h173.39942156v-179.38780189a41.95472717 41.95472717 0 0 1 41.9732666-42.01034546h81.59231544a41.95472717 41.95472717 0 0 1 41.9732666 42.01034546v179.38780189h177.51502991a59.58572388 59.58572388 0 0 0 59.6042633-59.6598816V506.56780256c13.2371521 11.97647094 32.01759338 11.06803894 43.03001404-1.20506287a29.79286193 29.79286193 0 0 0-2.15057373-42.08450317L553.86217486 156.63623047Z" fill="#fff" p-id="2061"></path></svg>
                    </span>
                    <span>{{item.title}}</span>
                    <span>
                        <svg v-if="item.childrens" t="1629556349003" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2718" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M322.9 187.7L647 512 323 836.29999999c-17.2 17.3-17.2 45.5 0 62.80000001 17.2 17.3 45.5 17.3 62.7 0l355.4-355.7c17.2-17.3 17.2-45.5 0-62.8L385.7 124.9c-17.2-17.3-45.5-17.3-62.7 0-17.3 17.3-17.3 45.6-0.1 62.8z" fill="#fff" p-id="2719"></path></svg>
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
            nav_key:this.current_index
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
    width: 100%;
    color:rgba(255,255,255,0.75);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
}

.job_nav_item>span:nth-child(1),.job_nav_item>span:nth-child(3){
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    transition: all 0.2s linear;
}
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
}
.job_second_nav>li:hover{
    background: rgba(255,255,255,0.1);
}
.second_nav_toggle{
    height: 90px;
}
.job_second_nav .second_nav_active{
    color: #fff;
    background: rgba(254,220,189,0.5);
    font-weight: bold;
}
.active_right span:nth-child(3){
    transform: rotate(90deg);
}
.active_right>span:nth-child(2){
    color: #fff;
}
</style>