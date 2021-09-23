<template>
    <div class="job-carousel" @mouseover="stopShuffling" @mouseleave="startShuffling">
        <transition-group name="list" enter-active-class="carousel-image-enter" leave-active-class="carousel-image-leave">
            <div class="job-carousel-image" v-for="(item,index) in temporaryArr" :key="index" v-show="index===active_key">
                <img :src="item.href">
            </div>
        </transition-group>
        
        <div class="job-carousel-title" ref="boxScrollTop">
            <ul ref="ulScrollTop">
                <li v-for="(item,index) in temporaryArr" :key="index" 
                    :class="[{'active-item':index===active_key}]"
                    @mouseover="mouseKeyOver(index)" 
                    :style="{
                        height:height+'px'
                    }"
                >
                    <div class="job-carousel-box-title" >
                        <div>{{item.title}}</div>
                        <div class="active-dot" ref="dotTransition" :style="{top:dot_distance+'px'}"></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'job-carousel',
    props:{
        height:{
            type:[String,Number],
            default:40
        },

    },
    data(){
        return {
            temporaryArr:[
                {title:'赢家时尚集团',href:"http://starcdn.51job.com/TeachIn/2109/170034_510.jpg"},
                {title:'广汽传祺',href:"http://starcdn.51job.com/TeachIn/2109/134846_591.jpg"},
                {title:'飞利浦',href:"http://starcdn.51job.com/TeachIn/2108/165954_658.jpg"},
                {title:'华晨宝马',href:"http://starcdn.51job.com/TeachIn/2109/142313_777.jpg"},
                {title:'雷克萨斯',href:"http://starcdn.51job.com/TeachIn/2109/130001_202.jpg"},
                {title:'凯迪拉克',href:"http://starcdn.51job.com/TeachIn/2108/182016_232.jpg"},
                {title:'奔驰',href:"http://starcdn.51job.com/TeachIn/2108/165954_658.jpg"},
                {title:'北京现代',href:"http://starcdn.51job.com/TeachIn/2109/205122_145.jpg"},
                {title:'福特野马',href:"http://starcdn.51job.com/TeachIn/2109/182546_909.jpg"},
                {title:'英菲尼迪',href:"http://starcdn.51job.com/TeachIn/2109/134313_984.jpg"}
            ],
            active_key:0,
            dot_distance:0,
        }
    },
    watch:{
        active_key(newVal,oldVal){
            if(newVal>2){                
                this.timer_wen=setInterval(function(){test(newVal,oldVal)},10)         
            }else if(newVal===0){
                this.$refs.boxScrollTop.scrollTop=0
            }

            this.dot_distance=newVal*Number(this.height);
            let distance=(Math.abs(newVal-oldVal)*Number(this.height))/20;
            let countdown=200;
            let _this=this;

            function test(nval,oval){
                countdown=countdown-10;
                if(nval>oval){
                    _this.$refs.boxScrollTop.scrollTop=_this.$refs.boxScrollTop.scrollTop+Math.round(distance);
                }else if(nval<oval){
                    _this.$refs.boxScrollTop.scrollTop=_this.$refs.boxScrollTop.scrollTop-Math.round(distance);
                }
                if(countdown<=0){
                    clearInterval(_this.timer_wen)
                }
            }
        }
    },
    mounted(){
        this.shuffling();
    },
    methods:{
        mouseKeyOver(i){
            this.active_key=i;
        },


        shuffling(){
            this.timer=setInterval(()=>{
                if(this.active_key<this.temporaryArr.length-1){
                    this.active_key++
                }else{
                    this.active_key=0
                }
            },2500)
        },


        stopShuffling(){
            clearInterval(this.timer);
            clearInterval(this.timer_wen)
        },
        startShuffling(){
            this.shuffling()
        }
    },
    beforeDestroy(){
        clearInterval(this.timer)
    }
}
</script>

<style scoped>
.job-carousel{
    width: 900px;
    height: 210px;
    margin-left: 180px;
    position: relative;
    overflow: hidden;
}
.job-carousel-image{
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 0;
    background: pink;
}
.job-carousel-image>img{
    width: 100%;
    height: 100%;
}
.carousel-image-enter{
    animation: image-enter 0.39s linear;
}
.carousel-image-leave{
    animation: image-enter 0.38s linear reverse;
}
@keyframes image-enter {
    from{opacity: 0;}
    to{opacity: 1;}
}

.job-carousel-title{
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    width: 13%;
    background: rgba(0,0,0,0.35);
    color: #fff;
    overflow-y: auto;
}
.active-dot{
    position: absolute;
    top: 0;left: 0;
    width: 100%;
    height: 50px;
    background: rgba(0, 0, 0, 0.06);
    z-index: -1;
    transition: all 0.2s ease-in-out;
    border-left: 2px solid #fff;
}

.job-carousel-title::-webkit-scrollbar {
    width: 0px;
}
.job-carousel-title:hover::-webkit-scrollbar {
    width: 3px;
}
.job-carousel-title::-webkit-scrollbar-thumb {
    border-radius:10px;
    background-color: rgb(4, 180, 250);
}
.job-carousel-title::-webkit-scrollbar-track {
    box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2);
    background:#ededed;
}


.job-carousel-title>ul{
    list-style: none;
    position: relative;
    z-index: 1;
}
.job-carousel-title>ul>li>div{
    /* padding: 5px 0; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
}
.job-carousel-title>ul>li.active-item{
    height: 50px !important;
    /* border: 1px solid #fff; */
}
.job-carousel-title>ul>li.active-item>div{
    /* padding: 8px; */
    height: 50px;
    /* border: 2px solid #fff; */
    font-size: 16px;
    background-image: linear-gradient(to bottom,rgb(255, 102, 0),rgb(250, 209, 28));
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 2px rgba(255, 255, 255, 0.28);
}
.job-carousel-box-title{
    width: 100%;height: 100%;
}
</style>