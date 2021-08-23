<template>
    <div id="job_input">
        <input type="text" id="job_input_content" :placeholder="job_placeholder" v-model="job_input_content" @keyup="getInputContent">
    </div>
</template>

<script>
export default {
    name:'JobInput',
    props:{
        job_placeholder:{
            type:String,
            default:'请输入内容'
        }
    },
    data(){
        return{
            job_input_content:""
        }
    },
    methods:{
        getInputContent(){
            this.$emit("getIptContent",this.job_input_content)
        }
    }
}
</script>

<style scoped>
#job_input{
    display: inline-block;
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

</style>