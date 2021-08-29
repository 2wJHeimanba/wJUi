<template>
    <div 
        :class="['job_notice',{
            job_message_normal:type==='normal',
            job_message_success:type==='success',
            job_message_warning:type==='warning',
            job_message_error:type==='error'
        }]" 
        :style="{
            top:top+'px'
        }"
    >
        <span>
            <svg v-if="type==='normal'||type==='warning'" t="1630144735709" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2164" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M565.6 594.88c0 32-21.216 58.24-47.04 58.24h-1.92c-25.856 0-47.04-26.24-47.04-58.24V295.488c0-32.064 21.184-58.336 47.04-58.336h1.92c25.824 0 47.04 26.272 47.04 58.336v299.392z m0 140.064c0 25.408-20.8 46.208-46.208 46.208h-3.584c-25.408 0-46.208-20.8-46.208-46.208v-3.584c0-25.472 20.8-46.208 46.208-46.208h3.584c25.408 0 46.208 20.736 46.208 46.208v3.584zM512 0C229.248 0 0 229.184 0 511.968S229.248 1024 511.968 1024C794.752 1024 1024 794.752 1024 511.968 1024 229.184 794.752 0 511.968 0z" p-id="2165" fill="#fba726"></path></svg>
            <svg v-if="type==='success'" t="1630203811803" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2165" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M512 0C229.674667 0 0 229.6832 0 512s229.674667 512 512 512c282.3168 0 512-229.6832 512-512S794.308267 0 512 0z m-46.481067 776.029867c-89.173333-84.5312-179.473067-170.120533-272.7424-258.4832 27.3152-18.466133 47.914667-32.392533 70.664534-47.803734 53.3504 42.461867 105.053867 83.601067 156.987733 124.9024 107.630933-141.329067 252.228267-239.018667 390.784-346.666666l20.002133 26.6752C666.9824 414.208 558.754133 593.28 465.518933 776.029867z" fill="#65f74e" p-id="2166"></path></svg>
            <svg v-if="type==='error'" t="1630204012462" class="icon" viewBox="0 0 1097 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6648" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M476.282308 0C213.271094 0 0.042698 213.431156 0.000011 476.762516s213.132352 476.783859 476.143566 476.901247 476.303639-213.303097 476.431698-476.623786A476.570428 476.570428 0 0 0 476.282308 0.021343z m244.229271 661.401809a43.614657 43.614657 0 0 1-30.947517 74.199342 43.166451 43.166451 0 0 1-30.766101-12.80587L475.866117 538.838968 290.063624 722.165659a43.123765 43.123765 0 0 1-30.55267 12.613782 43.625328 43.625328 0 0 1-30.34991-74.412773l185.813164-183.326691-183.550794-186.026596a43.817416 43.817416 0 1 1 61.895035-62.001751l183.550794 186.015924 185.823836-183.326691a43.817416 43.817416 0 0 1 61.895035 62.001751l-186.752261 184.778023z m0 0" fill="#FF443B" p-id="6649"></path></svg>
        </span>
        <span>{{title}}</span>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:"提醒你啦"
        },
        druation:{
            type:Number,
            default:2000
        },
        top:{
            type:Number,
            default:28
        },
        type:{
            type:String,
            default:'normal'
        }
    },
    data(){
        return{
            isShow:false
        }
    },
    methods:{
        show(){
            this.isShow=true
            setTimeout(this.hide,this.druation)
        },
        hide(){
            this.isShow=false;
            this.remove()
        },
    }
}
</script>

<style scoped>

.job_notice{
    padding: 8px 25px;
    border-radius: 10px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 50%;
    z-index: 1;
    opacity: 1;
    transform: translateX(-50%);
    animation: notice_toggle 0.2s ease;
}
.job_notice::after{
    content: "";
    position: absolute;
    top: 0;left: 0;
    bottom: 0;right: 0;
    display: inline-block;
    background: inherit;
    z-index: -1;
    border-radius: 10px;
}
.job_notice>span:nth-child(1){
    margin: 8px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    animation: svgActive 0.5s linear infinite alternate-reverse;
}
.active{
    animation: toggle 0.2s ease-out forwards;
}


.job_message_normal{
    background: #f1f6fa;
    border: 1px solid #eaf3fc;
    color: #464547;
}
.job_message_success{
    background: #f5fdef;
    border: 1px solid #c9f5aa;
    color: #1d953f;
}
.job_message_warning{
    background: #fcf8ee;
    border: 1px solid #fdefcc;
    color: #fcaf17;
}
.job_message_error{
    background:rgb(255, 245, 244);
    border: 1px solid rgb(247, 187, 187);
    color: #d71345;
}


@keyframes notice_toggle{
    from{
        opacity: 0;
        top: 0px;
    }
}
@keyframes toggle {
    to{
        opacity: 0;
        top: 0px;
    }
}
@keyframes svgActive {
    to{
        transform: scale(1.2);
    }
}

</style>