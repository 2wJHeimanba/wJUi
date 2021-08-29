<template>
    <div id="job_input">
        <input type="text" id="job_input_content" 
            :placeholder="job_placeholder" 
            v-model="job_input_content" 
            @input="outputInputContent"
        >
        <span class="job_clean_btn" 
            @click="job_clean_btn" 
            v-show="clearable&&clean_btn_toggle"
        >
            <svg @mouseenter="btn_hover_style='black'" @mouseleave="btn_hover_style='#858585'" t="1629938355476" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2772" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18">
            <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#e8e8e8" p-id="2773"></path>
            <path d="M707.584 272.896L512 456.192 316.416 272.896l-43.52 43.52L456.192 512l-183.296 195.584 43.52 43.52 195.584-183.296 195.584 183.296 43.52-43.52-183.296-195.584 183.296-195.584z" :fill="btn_hover_style" p-id="2774"></path></svg>
        </span>
    </div>
</template>

<script>
export default {
    name:'JobInput',
    props:{
        job_placeholder:{
            type:String,
            default:'请输入内容'
        },
        value:String,
        clearable:{
            type:Boolean,
            default:false
        },
        
    },
    data(){
        return{
            job_input_content:this.value,
            btn_hover_style:'#858585'
        }
    },
    methods:{
        outputInputContent(){
            this.$emit("input",this.job_input_content)
        },
        job_clean_btn(){
            console.log("清空内容")
            this.job_input_content='';
            this.$emit('input',this.job_input_content)
        }
    },
    computed:{
        clean_btn_toggle(){
            return this.job_input_content.length!==0?true:false
        }
    },
    // watch:{
    //     job_input_content(newVal,oldVal){
    //         return newVla.length!==0?true:false
    //     }
    // }
    
}
</script>

<style scoped>
#job_input{
    display: inline-block;
    position: relative;
}
#job_input>input{
    width: 215px;
    height: 46px;
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
    font-size: 14px;
}
#job_input>input:focus{
    border: 1px solid rgba(250, 102, 2, 0.2);
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


</style>