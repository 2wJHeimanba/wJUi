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
                {{item.title}}
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
            default:400
        },
        item_height:{
            type:[Number,String],
            default:80
        },
        dot_distance:{
            type:[Number,String],
            default:2
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
                if(this.active_key>=this.temporaryArr.length-1){
                    this.active_key=0;
                }else{
                    this.active_key++
                }

                if(this.active_key>=this.temporaryArr.length-(this.height/this.item_height-this.dot_distance)){
                    this.dot_move=(this.temporaryArr.length-(this.height/this.item_height))*this.item_height
                }else if(this.active_key<=this.dot_distance){
                    this.dot_move=0;
                }else{
                    this.dot_move=(this.active_key-this.dot_distance)*this.item_height;
                }
            },2000)
        },
        stopTimer(){
            clearInterval(this.timer)
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
    /* overflow-y: auto; */
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
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding-left: 8px;
    background: transparent;
}
.current-title-item{
    color: orange;
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