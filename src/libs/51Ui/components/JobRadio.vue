<template>
    <div class="job_radio">
        <input type="checkbox" name="checkbox" class="job_checkbox" id="job_checkout"
            v-model="onOff" 
            @change="outputContent"
            :class="{
                job_radio_mini:size==='mini',
                job_radio_medium:size==='medium',
                job_radio_big:size==='big',
                job_radio_plus:size==='plus'
            }"
        >
        <label for="job_checkout">
            <slot>选项一</slot>
        </label>
    </div>
</template>

<script>
export default {
    name:'JobRadio',
    model:{
        prop:'checked',
        event:'change'
    },
    props:{
        checked:{
            type:Boolean,
            default:false
        },
        size:{
            type:String,
            default:'medium',
            validator:val=>{
                return ['mini','medium','big','plus'].includes(val)
            }
        },
        checked:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            onOff:this.checked
        }
    },
    methods:{
        outputContent(){
            this.$emit('change',this.onOff)
        }
    }

}
</script>

<style scoped>
.job_radio{
    margin-left: 200px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s linear;
}
.job_radio>label{
    user-select: none;
}
.job_radio>.job_checkbox{
    appearance: none;
    border-radius: 50%;
    position: relative;
}
.job_radio_mini{
    width: 12px;height: 12px;margin-right: 3px;
    border: 1px solid #ccc;
}
.job_radio_mini+label{
    font-size: 12px;
}

.job_radio_medium{
    width: 16px;height: 16px;margin-right: 5px;
    border: 1px solid #ccc;
}
.job_radio_medium+label{
    font-size: 14px;
}

.job_radio_big{
    width: 20px;height: 20px;margin-right: 7px;
    border: 1px solid #ccc;
}
.job_radio_big+label{
    font-size: 15px;
}

.job_radio_plus{
    width: 24px;height: 24px;margin-right: 8px;
    border: 2px solid #ccc;
}
.job_radio_plus+label{
    font-size: 16px;
}

.job_checkbox:checked{
    border: 1px solid orange;
}
.job_checkbox:checked+label{
    color: orange;
}

.job_checkbox::before{
    content:"";
    display: inline-block;
    width: 5%;height: 5%;
    border-radius: 50%;
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%,-50%);
    background: #ccc;
}

.job_checkbox:checked::before{
    animation: move 0.2s linear forwards;
}

@keyframes move {
    0%{width: 0;height: 0;}
    50%{width: 60%;height: 60%;}
    60%{width: 50%;height: 50%;}
    85%{width: 90%;height: 90%;}
    100%{
        background: orange;
        width: 70%;height: 70%;
    }
}

</style>