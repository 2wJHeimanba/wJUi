<template>
    <div id="job_start">
        <span v-for="number in 5" :key="number" @click="activeStart(number)" @dblclick="active_key===1?active_key=-1:''">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" :width="startSize" :height="startSize"><path d="M684.178 354.079l197.854 33.08c40.52 6.775 55.682 57.072 25.658 85.113l-146.605 136.92a49.564 49.564 0 0 0-15.189 43.558l29.679 198.393c6.078 40.63-37.072 70.593-73.018 50.704l-175.523-97.119a49.565 49.565 0 0 0-46.12-0.985l-179.512 89.534c-36.763 18.336-78.594-13.443-70.786-53.776l38.126-196.944a49.563 49.563 0 0 0-13.315-44.167L114.805 455.33c-28.799-29.298-11.502-78.901 29.27-83.939l199.087-24.599a49.566 49.566 0 0 0 37.891-26.311l92.601-177.948c18.964-36.443 71.485-35.321 88.876 1.899l84.916 181.741a49.569 49.569 0 0 0 36.732 27.906z" :fill="number<=active_key?activeColor:startColor"></path></svg>
        </span>
    </div>
</template>

<script>
export default {
    name:'Start',
    props:{
        nums:{
            type:Number,
            default:0
        },
        startColor:{
            type:String,
            default:"#ccc"
        },
        activeColor:{
            type:String,
            default:"orange"
        },
        startSize:{
            type:Number,
            default:24
        }
    },
    data(){
        return{
            active_key:this.nums
        }
    },
    methods:{
        activeStart(num){
            this.active_key=num;
            this.$emit("getStartNums",this.active_key)
        }
    }
}
</script>

<style scoped>
*{margin: 0;padding: 0;box-sizing: border-box;}

#job_start{
    width: 150px;
    height: 30px;
}
#job_start>span{
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width:28px;
    height: 100%;
}
</style>