<template>
    <div class="job_message_box" @click.self="close">
        <div class="job_message_container">
            <span @click="close">
                <svg t="1630208388504" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6791" width="16" height="16" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M567.881 511.927L865.5 214.747a38.546 38.546 0 0 0 0-54.637l-1.536-1.61a38.62 38.62 0 0 0-54.71 0L511.56 455.68 213.943 158.5a38.62 38.62 0 0 0-54.711 0l-1.61 1.61a38.546 38.546 0 0 0 0 54.637l297.62 297.18-297.62 297.18a38.546 38.546 0 0 0 0 54.637l1.537 1.61a38.766 38.766 0 0 0 54.71 0L511.489 568.1l297.618 297.252a38.766 38.766 0 0 0 54.711 0l1.536-1.609a38.546 38.546 0 0 0 0-54.638l-297.472-297.18z m0 0" p-id="6792" fill="#707070"></path></svg>
            </span>
            <p class="job_message_title">{{title}}</p>
            <div class="job_message_content">{{content}}</div>
            <div class="job_message_btn">
                <button class="job_message_btn_sure" @click="confire">确定</button>
                <button class="job_message_btn_cancel" @click="close">返回</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:'标题名称'
        },
        content:{
            type:String,
            default:'这里是内容占位符'
        },
        success:{
            type:Function,
            default:()=>{}
        },
        cancel:{
            type:Function,
            default:function(){}
        }
    },

    methods:{
        close(){
            this.remove()
            this.$create({
                title:"输入的内容出错了，请根据提示填写我呢见驾附近的",
                druation:3000,
                type:'warning'
            });
            // notice.show()
            this.cancel()
        },
        confire(){
            this.remove()
            this.$create({
                title:"你选择了确定",
                druation:2500,
                type:'success'
            });
            // notice.show();
            this.success()
        }
    }

}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.job_message_box{
    position: fixed;
    left: 0;right: 0;top: 0;bottom: 0;
    background: rgba(0,0,0,0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    animation: message_toggle 0.2s linear;
}
.job_message_container{
    background: rgb(239, 242, 250);
    width: 430px;
    border-radius: 4px;
    padding: 8px 15px;
    padding-bottom: 12px;
    position: relative;
    animation: message_content 0.2s linear;
}
.job_message_container>span:nth-child(1){
    position: absolute;
    right: 9px;
    top: 9px;
    cursor: pointer;
    width: 25px;height: 25px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.job_message_container>span:nth-child(1)>svg:hover{
    color: red;
}
.job_message_title{
    font-size: 20px;
}
.job_message_content{
    margin: 16px 0;
    font-size: 14px;
    color: #464547;
}
.job_message_btn{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.job_message_btn>button{
    padding: 3px 15px;
    border-radius: 4px;
    outline: none;
    margin: 0 5px;
    cursor: pointer;
    border: 1px solid orange;
    font-size: 13px;
}
.job_message_btn>button:last-child{
    margin-right: 0;
    border:1px solid #d3d7d4;
    color: #464547;
    background: transparent;
    transition: all 0.2s linear;
}
.job_message_btn_sure{
    background: orange;
    border: none;
    color: #fff;
    
}
.job_message_btn>button:last-child:hover{
    background: rgb(252, 248, 242);
    color: orange;
    border-color: rgb(253, 200, 100);
}

.messageActive{
    animation: message_box 0.2s linear forwards;
}
.messageActive>.job_message_container{
    animation: message_container 0.2s linear;
}

@keyframes message_toggle {
    from{
        opacity: 0;
    }
}

@keyframes message_content {
    from{
        opacity: 0;
        transform: translateY(-30px);
    }
}

@keyframes message_box {
    to{
        opacity: 0;
    }
}

@keyframes message_container {
    to{
        transform: translateY(-30px);
        opacity: 0;
        
    }
}

</style>