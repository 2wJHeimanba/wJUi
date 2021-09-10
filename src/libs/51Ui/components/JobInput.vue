<template>
    <div class="job_input_box" :style="{
        marginTop:marginTop+'px',
        marginBottom:marginBottom+'px'
    }">
        <div class="form_input_title">
            <span>
                <span v-if="check">*</span>
                {{label}}
            </span>
        </div>
        <div class="job_input" :style="{width:width+'px'}">
            <input type="text" autocomplete="off"
                :placeholder="placeholder" 
                v-model="job_input_content" 
                @input="outputInputContent" 
                @blur="checkRule" 
                :style="{border:prompt_toggle?'1px solid red':''}"
            >
            <span class="check_prompt" v-show="prompt_toggle">{{prompt}}</span>
            <span class="job_clean_btn" 
                @click="job_clean_btn" 
                v-show="clearable&&clean_btn_toggle"
            >
                <svg @mouseenter="btn_hover_style='black'" @mouseleave="btn_hover_style='#858585'" t="1629938355476" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2772" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18">
                <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#e8e8e8" p-id="2773"></path>
                <path d="M707.584 272.896L512 456.192 316.416 272.896l-43.52 43.52L456.192 512l-183.296 195.584 43.52 43.52 195.584-183.296 195.584 183.296 43.52-43.52-183.296-195.584 183.296-195.584z" :fill="btn_hover_style" p-id="2774"></path></svg>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name:'JobInput',
    props:{
        placeholder:{
            type:String,
            default:'请输入内容'
        },
        value:String,
        clearable:{
            type:Boolean,
            default:false
        },
        width:[String,Number],
        label:String,
        marginTop:[String,Number],
        marginBottom:[String,Number],
        check:Boolean,
        prompt:{
            type:String,
            default:'此输入框为必填项'
        }
    },
    data(){
        return{
            job_input_content:this.value,//输入框的内容
            btn_hover_style:'#858585',
            prompt_toggle:false,//必填框的提示与隐藏
        }
    },
    methods:{
        outputInputContent(){
            this.$emit("input",this.job_input_content)
        },
        job_clean_btn(){
            this.job_input_content='';
            this.$emit('input',this.job_input_content);
            this.checkRule()
        },
        checkRule(){
            if(this.check){
                if(this.job_input_content.trim().length===0){
                    this.prompt_toggle=true
                }else{
                    this.prompt_toggle=false
                }
            }           
        }
    },
    computed:{
        clean_btn_toggle(){
            return this.job_input_content.length!==0?true:false
        }
    }    
}
</script>

<style scoped>
.job_input{
    display: inline-block;
    position: relative;
    height: 42px;
}
.job_input>input{
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    line-height: 46px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
.job_input>input:focus{
    border: 1px solid rgba(250, 102, 2, 0.5);
}
.job_clean_btn{
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.job_input_box{
    display: inline-flex;
    font-size: 14px;
    margin: 10px 0;
}

.form_input_title{
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    width: 150px;
}
.form_input_title>span{
    position: relative;
}
.form_input_title>span>span:first-child{
    position: absolute;
    top: 2px;left: -9px;
    color: rgb(250, 64, 64);
}
.check_prompt{
    color: rgb(250, 64, 64);;
    font-size: 12px;
    position: absolute;
    top: 99%;
    left: 0px;
    animation: checkPrompt 0.2s linear;
}
@keyframes checkPrompt {
    from{opacity: 0;top: 90%;}
    to{opacity: 1;top: 100%;}
}
</style>