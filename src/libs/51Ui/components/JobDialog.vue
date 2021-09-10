<template>
    <transition name="dialog" enter-active-class="dialogEnter" leave-active-class="dialogLeave">
        <div class="job-dialog" @click.self="dialogClose" v-show="dialog_toggle">
            <div class="job-dialog-container">
                <div class="job-dialog-header">
                    <div class="dialog-header-title" v-if="$slots.title"><slot name="dialogtitle">工资列表</slot></div>
                    <div class="dialog-header-close" @click="dialogClose"></div>
                </div>
                <div class="job-dialog-content">
                    <slot></slot>
                </div>
                <div class="job-dialog-bottom" v-if="$slots.button">
                    <slot name="button"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name:'JobDialog',
    props:{
        dialog_toggle:Boolean
    },
    methods:{
        dialogClose(){
            this.$emit("update:dialog_toggle",false)
        }
    }
    
}
</script>

<style scoped>
.job-dialog{
    position: fixed;
    top: 0;left: 0;right: 0;bottom: 0px;
    background: rgba(0,0,0,0.32);
}
.job-dialog-container{
    min-width: 400px;min-height: 220px;
    border-radius: 5px;
    background: #fff;
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    animation: dialogContent 0.25s ease-in-out forwards;
}
.dialogLeave .job-dialog-container{
    animation: leaveDialog 0.25s linear forwards;
}

@keyframes dialogContent {
    0%{transform: translate(-50%,-60%);}
    100%{transform: translate(-50%,-50%);}
}
@keyframes leaveDialog {
    0%{transform: translate(-50%,-50%);}
    100%{transform: translate(-50%,-60%);}
}

.job-dialog-header{
    height: 50px;
    position: relative;
}
.job-dialog-header::before{
    content: "";
    display: block;
    width: 98%;height: 1px;
    position: absolute;
    bottom: 0;left: 50%;
    transform: translateX(-50%) scaleY(0.6);
    background: #ccc;
}
.job-dialog-content{
    flex: 1 1;
}

/* 底部点击按钮的父级样式 */
.job-dialog-bottom{
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding-right: 13px;
    padding-top: 2px;
}

/* 关闭图标按钮 */
.dialog-header-close{
    position: absolute;
    top: 50%;right: 6px;
    transform: translateY(-50%);
    height: 40px;
    width: 40px;
    cursor: pointer;
}
.dialog-header-close::before,
.dialog-header-close::after{
    content: "";
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%,-50%);
    display: inline-block;
    width: 21px;
    height: 5px;
    border-radius: 3px;
    background: rgb(61, 61, 61);
    transition: all 0.2s linear;
}
.dialog-header-close:hover::before,
.dialog-header-close:hover::after{
    width: 25px;
    height: 2px;
}
.dialog-header-close:hover::before{
    background: orange;
    transform: translate(-50%,-50%) rotate(45deg);
}

.dialog-header-close:hover::after{
    background: orange;
    transform: translate(-50%,-50%) rotate(-45deg);
}

.dialog-header-title{
    height: 100%;
    margin-right: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 15px;
    font-weight: bold;
}

.dialogEnter{
    animation: dialog 0.25s linear;
}
.dialogLeave{
    animation: dialog 0.25s linear reverse;
}
@keyframes dialog {
    0%{opacity: 0;}
    100%{opacity: 1;}
}


</style>