<template>
    <transition name="fade">
        <div id="wj_loading">
            <div class="job_dot"></div>
            <div class="job_dot"></div>
            <div class="job_dot"></div>
            <div class="job_dot"></div>
            <div class="job_dot"></div>
        </div>
    </transition>
</template>

<script>
export default {

}
</script>

<style scoped>
#wj_loading{
    height: 100%;
    width: 100%;
    background: rgba(0,139,139,0.15);
    font-size: 35px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;top: 0;
}
#wj_loading>.job_dot{
    margin: 8px;
    width: 25px;height: 25px;
    border-radius: 50%;
    background: #fff;
    user-select: none;
    position: relative;
}
#wj_loading>.job_dot::before{
    content: "";
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%,-50%);
    height: 100%;
    width: 100%;
    background: inherit;
    border-radius: inherit;
    animation: wave 1s ease-in-out infinite;
}

#wj_loading>div:nth-child(1){
    background: #add8e6;
}
#wj_loading>div:nth-child(2){
    background: #87ceeb;
}
#wj_loading>div:nth-child(3){
    background: #00bfff;
}
#wj_loading>div:nth-child(4){
    background: #1e90ff;
}
#wj_loading>div:nth-child(5){
    background: #4169e1;
}

#wj_loading>div:nth-child(1)::before{
    animation-delay: 0s;
}
#wj_loading>div:nth-child(2)::before{
    animation-delay: 0.2s;
}
#wj_loading>div:nth-child(3)::before{
    animation-delay: 0.4s;
}
#wj_loading>div:nth-child(4)::before{
    animation-delay: 0.6s;
}
#wj_loading>div:nth-child(5)::before{
    animation-delay: 0.8s;
}

@keyframes wave{
    50%,70%{
        transform: translate(-50%,-50%) scale(2.5);
    }
    80%,100%{
        opacity: 0;
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>