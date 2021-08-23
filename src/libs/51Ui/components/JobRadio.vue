<template>
    <div id="job_radio" :class="{
        job_radio_column:!direction,
        job_radio_row:direction
    }">
        <label v-for="(item,index) in radio_data" :key="index" @click.stop.capture="getJobRadio(item)">
            <input type="radio" name="job_radio" :value="item" v-model="job_radio_content">
            <span>{{item}}</span>
        </label>
    </div>
</template>

<script>
export default {
    name:'JobRadio',
    props:{
        radio_data:{
            type:Array,
            required:true
        },
        direction:{
            type:Boolean,
            default:true
            // true表示横向排列
        }
    },
    data(){
        return{
            job_radio_content:''
        }
    },
    methods:{
        getJobRadio(val){
            this.$emit('getJobRadioContent',this.job_radio_content)
        }
    }
}
</script>

<style scoped>
#job_radio{
    display: flex;
    padding-left: 50px;
}
#job_radio.job_radio_column{
    flex-direction: column;
}
#job_radio.job_radio_row{
    justify-content: flex-start;
}
#job_radio>label{
    display: inline-flex;
    align-items: center;
    margin: 3px 10px;
    cursor: pointer;
}
#job_radio>label>input{
    appearance: none;
    display: inline-block;
    width: 15px;height: 15px;
    border: 1px solid #ccc;
    border-radius: 50%;
    transition: all 0.3s linear;
}
#job_radio>label>input:checked{
   border: 1px solid orange;
   background-image: radial-gradient(orange 50%,#fff 50%,#fff 100%);
}
#job_radio>label>span{
    margin-left: 8px;
}

</style>