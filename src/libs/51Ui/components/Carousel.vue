<template>
<div id="job_carousel_box">
    <div id="job_carousel_bg" @click="carouselClose"></div>
    <div id="job_carousel">
        <div class="carousel_title">{{title}}</div>
        <div class="carousel_close" @click="carouselClose">
            <svg t="1629428672146" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2074" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><path d="M567.881 511.927L865.5 214.747a38.546 38.546 0 0 0 0-54.637l-1.536-1.61a38.62 38.62 0 0 0-54.71 0L511.56 455.68 213.943 158.5a38.62 38.62 0 0 0-54.711 0l-1.61 1.61a38.546 38.546 0 0 0 0 54.637l297.62 297.18-297.62 297.18a38.546 38.546 0 0 0 0 54.637l1.537 1.61a38.766 38.766 0 0 0 54.71 0L511.489 568.1l297.618 297.252a38.766 38.766 0 0 0 54.711 0l1.536-1.609a38.546 38.546 0 0 0 0-54.638l-297.472-297.18z m0 0" p-id="2075" fill="#e98f36"></path></svg>
        </div>
        <div class="job_screen">
            <img :src="carousel_image[current_key].url" alt="大屏展示">
            <ul>
                <li v-for="(item,index) in carousel_image" :key="item.url" :class="index===current_key?'carousel_active':''" @click="activeImage(index)"></li>
            </ul>
        </div>
        <ul>
            <li v-for="(item,index) in carousel_image" :key="item.id" @click="activeImage(index)">
                <img :src="item.url" alt="这是一张图片">
            </li>
        </ul>
        <div class="job_carousel_back" @click="carouselClose">返回</div>
    </div>
    
</div>
</template>

<script>
export default {
    name:'Carousel',
    props:{
        title:{
            type:String,
            default:"图片反馈"
        },
        data_list:{
            type:Array,
            required:true
        },
        toggle:Boolean
    },
    data(){
        return{
            carousel_image:this.data_list,
            current_key:0
        }
    },
    methods:{
        activeImage(i){
            this.current_key=i
        },
        carouselClose(){
            console.log("关闭")
            this.$emit("update:toggle",false)
        }
    }
}
</script>

<style>
*{margin: 0;padding: 0;box-sizing: border-box;}
#job_carousel_bg{
    position: fixed;
    bottom: 0;top: 0;
    left: 0;right: 0;
    background: rgba(1,1,1,0.1);
}
.carousel_title{
    position: absolute;
    top: 15px;left: 50px;
    font-size: 20px;
}
#job_carousel{
    width: 600px;
    height: 600px;
    margin: 20px auto;
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: 15px;
    background: #fff;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
}
#job_carousel>.job_screen{
    width: 500px;
    height: 350px;
    border: 2px solid #ccc;
    border-radius: 10px;
    margin: 10px auto;
    margin-top: 60px;
    overflow: hidden;
    position: relative;
}

#job_carousel>.job_screen>ul{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: rgba(255,255,255,0.3);
    display: flex;
    list-style: none;
}
#job_carousel>.job_screen>ul>li{
    flex: 1 1;
}

#job_carousel>.job_screen>img{
    width: 100%;
    height: 100%;
}
#job_carousel>ul{
    width: 500px;
    height: 100px;
    list-style: none;
    overflow-x: auto;
    overflow-y: none;
    display: flex;
    margin: 5px auto;
    margin-top: 30px;
}

#job_carousel>ul::-webkit-scrollbar {
    height: 5px;
}
#job_carousel>ul::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
#job_carousel>ul::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}

#job_carousel>ul>li{
    min-width: 200px;
    height: 80px;
    margin: 0 3px;
    border-radius: 5px;
    overflow: hidden;
}
#job_carousel>ul>li>img{
    width: 100%;
    height: 100%;
}
.carousel_active{
    background: #fff;
    border-radius: 5px;
}
.carousel_close{
    position: absolute;
    right: 5px;
    top: 5px;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s linear;
}
.carousel_close:hover{
    box-shadow: 0 0 3px rgba(0,0,0,0.3) inset;
    border-radius: 3px;
}
.job_carousel_back{
    position: absolute;
    right: 50px;
    bottom: 15px;
    width: 60px;
    height: 25px;
    font-size: 15px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: #FA6602;
    color: #fff;
    cursor: pointer;
}
</style>