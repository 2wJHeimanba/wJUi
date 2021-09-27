<template>
  <div class="wj-carousel-box" :style="{height:height+'px'}">
      <transition-group enter-active-class="carousel-enter" leave-active-class="carousel-leave">
        <div class="carousel-shuffling-content" v-for="(item,index) in temporaryArr" :key="index" v-show="index===active_key">
          <img :src="item.href">
        </div>
      </transition-group>
      
      <div class="carousel-shuffling-title" @mouseover="stopTimer" @mouseleave="startTimer">
          <ul class="carousel-title-box" :style="{top:`-${dot_move}px`}" ref="titleBox">
              <div class="carousel-move-box" :style="moveDot"></div>
              <li v-for="(item,index) in temporaryArr" :key="index" 
                :class="[
                    'carousel-title-item',
                    {'current-title-item':index===active_key}
                ]" 
                :style="{height:item_height+'px'}" 
                @mouseover="changeImage(index)"
              >
                <span>{{item.title}}</span>
                <span v-show="index===active_key">{{item.title}}</span>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:"wj-carousel",
    props:{
        height:{
            type:[Number,String],
            default:420
        },
        item_height:{
            type:[Number,String],
            default:60
        },
        dot_distance:{
            type:[Number,String],
            default:(event)=>{
                console.log(this)
                return 3
            }
        },
        duration:{
            type:Number,
            default:2500
        }
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
                {title:'英菲尼迪',href:"http://starcdn.51job.com/TeachIn/2109/134313_984.jpg"},
                {title:'恩斯克空中宣讲会',href:"http://starcdn.51job.com/TeachIn/2109/162350_681.jpg"},
                {title:'凯普生物',href:"http://starcdn.51job.com/TeachIn/2109/225855_905.jpg"}
            ],
            active_key:0,
            dot_move:0,
            current_dot:0
        }
    },
    mounted(){
        this.moveActive()
    },
    computed:{
        moveDot(){
            return {top:this.active_key*this.item_height+'px',height:this.item_height+'px'}
        }
    },
    methods:{
        moveActive(){
            this.timer=setInterval(()=>{
                // 定时
                if(this.active_key>=this.temporaryArr.length-1){
                    this.active_key=0;
                }else{
                    this.active_key++
                }
                // 控制跳转
                if(this.active_key>=this.temporaryArr.length-(this.height/this.item_height-this.dot_distance)){
                    this.dot_move=(this.temporaryArr.length-(this.height/this.item_height))*this.item_height
                }else if(this.active_key<=this.dot_distance){
                    this.dot_move=0;
                }else{
                    this.dot_move=(this.active_key-this.dot_distance)*this.item_height;
                }
            },this.duration)
        },
        stopTimer(){
            clearInterval(this.timer);
            
            this.$refs.titleBox.scrollTop=this.dot_move*this.item_height;
            this.dot_move=0;
        },
        startTimer(){
            this.moveActive()
        },
        changeImage(index){
            clearInterval(this.timer)
            this.active_key=index
        }
    },
    beforeDestroy(){
        clearInterval(this.timer)
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.wj-carousel-box{
    position: relative;
    overflow: hidden;
}
.carousel-shuffling-content{
    position: absolute;
    top: 0;bottom: 0;left: 0;right: 0;
}
.carousel-shuffling-content>img{
    width: 100%; height: 100%;
}
.carousel-enter{
    animation: toggle 0.3s linear forwards;
}
.carousel-leave{
    animation: toggle 0.3s linear forwards reverse;
}
@keyframes toggle {
    from{opacity: 0;}
    to{opacity: 1;}
}

.carousel-shuffling-title{
    position: absolute;
    right: 0;top: 0;bottom: 0;
    width: 210px;
    background: rgba(0,0,0,0.38);
    overflow: hidden;
}
.carousel-move-box{
    height: 80px;
    background: rgba(255,255,255,0.38);
    position: absolute;
    width: 100%;
    transition: all 0.2s linear;
}
.carousel-title-box{
    list-style: none;
    color: #fff;
    position: absolute;
    width: 100%;
    transition: all 0.2s linear;
}
.carousel-title-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 8px;
    background-image: linear-gradient(to right,rgb(252, 117, 7) 0,yellow 100%);
    background-size: 0px 1px;
    background-position: 0% 100%;
    background-repeat: no-repeat;
    
}
.carousel-title-item>span:last-child{
    font-size: 12px;
    margin-top: 3px;
}
.current-title-item{
    color: orange;
}
.carousel-title-item.current-title-item{
    animation: jindu 2.5s linear;
}
@keyframes jindu {
    to{
        background-size: 100% 1px;
    }
}
.carousel-shuffling-title:hover>.carousel-title-box{
    top: none !important;
}
.carousel-shuffling-title:hover{
    overflow-y: auto;
}
.carousel-shuffling-title::-webkit-scrollbar{
    width: 3px;
}
.carousel-shuffling-title::-webkit-scrollbar-thumb{
    background: #fff;
}
.carousel-shuffling-title::-webkit-scrollbar-track{
    background: black;
}
</style>