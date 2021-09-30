<template>
  <div class="wj-mb-carousel">
      <div class="mb-carousel-show"></div>
      <div class="mb-carousel-dot"></div>
  </div>
</template>

<script>
export default {
    name:'mb-carousel',
    data(){
        return{
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
        }
    }
}
</script>

<style>
    .wj-mb-carousel{
        color: #fff;
        width: 100%;
        height: 320px;
        border: 2px solid #fff;
        position: relative;
    }
    .mb-carousel-show{
        position: absolute;
        top: 0;bottom: 0;left: 0;right: 0;
        
    }   
    .mb-carousel-dot{

    }
</style>