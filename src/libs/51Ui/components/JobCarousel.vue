<template>
    <div class="job-carousel">
        <div class="job-carousel-image">
            <img src="http://starcdn.51job.com/TeachIn/2109/222308_169.jpg" alt="" srcset="">
        </div>
        <div class="job-carousel-title">
            <ul>
                <li v-for="(item,index) in temporaryArr" :key="index">{{item.title}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'job-carousel',
    data(){
        return {
            temporaryArr:[
                {title:'东方本田'},
                {title:'广汽传祺'},
                {title:'一起奥迪'},
                {title:'华晨宝马'},
                {title:'雷克萨斯'},
                {title:'凯迪拉克'},
                {title:'奔驰'},
                {title:'北京现代'},
                {title:'福特野马'},
                {title:'英菲尼迪'}
            ]
        }
    }
}
</script>

<style scoped>
.job-carousel{
    width: 900px;
    height: 210px;
    border: 2px solid #ccc;
    /* border-radius: 12px; */
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
.job-carousel-title{
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    width: 13%;
    background: rgba(0,0,0,0.25);
    color: #fff;
    overflow-y: auto;
}
.job-carousel-title::-webkit-scrollbar {
    width : 3px;  
}
.job-carousel-title::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius   : 10px;
    background-color: #fff;
    background-image: -webkit-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.2) 75%,
        transparent 75%,
        transparent
    );
}
.job-carousel-title::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    background   : #ededed;
    border-radius: 10px;
}


.job-carousel-title>ul{
    list-style: none;
    /* border: 1px solid red; */
}
.job-carousel-title>ul>li{
    padding: 5px 0;
}
</style>