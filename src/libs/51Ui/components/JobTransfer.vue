<template>
    <div class="job_transfer_container" v-show="transferToggle" @click.self="close">
        <div class="job_transfer">
            <div class="job_transfer_top">{{transferTitle}}</div>
            <div class="job_transfer_content">
                <div class="job_content_origin">
                    <ul>
                        <li v-for="(item,index) in arr" :key="index">
                            <label class="job_transfer_label">
                                <input type="checkbox" name="job_transfer_item" class="job_transfer_item" hidden v-model="temporaryArr" :value="item">
                                <span class="transfer_item_label">{{item.label}}</span>
                                <span class="transfer_box_item">
                                    <svg t="1630476163056" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3894" width="15" height="15"><path d="M347.015 840.994L54.14 539.336l50.764-63.457 236.25 182.556 575.982-468.596 41.004 41.004-611.125 610.153z" p-id="3895" fill="#ffffff"></path></svg>
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="job_content_select">
                    <ul>
                        <li v-for="(item,index) in selectedArr" :key="index">
                            <label class="job_transfer_label">
                                <input type="checkbox" name="job_transfer_item" class="job_transfer_item" hidden v-model="selectArr" :value="item">
                                <span class="transfer_item_label">{{item.label}}</span>
                                <span class="transfer_box_item">
                                    <svg t="1630476163056" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3894" width="15" height="15"><path d="M347.015 840.994L54.14 539.336l50.764-63.457 236.25 182.556 575.982-468.596 41.004 41.004-611.125 610.153z" p-id="3895" fill="#ffffff"></path></svg>
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="job_transfer_btn">
                    <button class="job_btn_add" @click="addIntern">
                        <svg t="1630480748441" class="icon" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4926" width="16" height="16"><path d="M797.6589 486.1384 414.7028 73.6171H238.01538420026444l382.9551 412.5213-382.9551 382.9404h176.68844945769544L797.6589 486.1384zM797.6589 486.1384" fill="#ffffff" p-id="4927"></path></svg>
                    </button>
                    <button class="job_btn_reduce" @click="reduceIntern">
                        <svg t="1630480807193" class="icon" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5117" width="16" height="16"><path d="M226.3411 537.8616L609.2972 950.38290001 785.9846158 950.3829l-382.9551-412.5213 382.9551-382.9404-176.68844946 0L226.3411 537.8616zM226.3411 537.8616" fill="#ffffff" p-id="5118"></path></svg>
                    </button>
                </div>
            </div>
            <div class="job_operate_btn">
                <button @click="outputContent">提交</button>
                <button @click="close">返回</button>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name:'JobTransfer',
    props:{
        transferToggle:{
            type:Boolean,
            default:true
        },
        Jdata:{
            type:Array,
            required:true
        },
        transferTitle:{
            type:String,
            default:"选择实习生"
        }
    },
    data(){
        return{
            arr:this.Jdata,
            temporaryArr:[],
            selectedArr:[],
            selectArr:[]
        }
    },
    methods:{
        close(){
            this.$emit('update:transferToggle',false)
        },
        addIntern(){
            let boxId=[]
            this.temporaryArr.forEach(item=>{
                boxId.push(item.id)
            })
            this.arr=this.arr.filter(val=>!boxId.includes(val.id))
            this.temporaryArr&&this.selectedArr.push(...this.temporaryArr)
            this.temporaryArr=[]
        },
        reduceIntern(){
            let boxId=[]
            this.selectArr.forEach(item=>{
                boxId.push(item.id)
            })
            this.selectedArr=this.selectedArr.filter(val=>!boxId.includes(val.id))
            this.selectArr&&this.arr.push(...this.selectArr)
            this.selectArr=[]
        },
        outputContent(){
            this.$emit('outputContent',this.selectedArr);
            this.close()
        }
    }
}
</script>

<style scoped>
.job_transfer_container{
    position: fixed;
    top: 0;left: 0;right: 0;bottom: 0;
    background: rgba(0,0,0,0.15);
}
.job_transfer{
    width: 480px;
    height: 320px;
    border-radius: 8px;
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,0.15);
}
.job_transfer_top{
    height: 42px;
    background-image: linear-gradient(to right,#ccc 0 100%);
    background-repeat: no-repeat;
    background-size: 95% 1px;
    background-position: center 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15;
    font-weight: 600;
}

.job_transfer_content{
    flex: 1 1;
    padding: 5px 15px;
    display: flex;
    position: relative;
}
.job_transfer_content>div:not(:last-child){
    flex: 1 1;
    height: 230px;
    overflow-y: auto;
}
.job_transfer_content>div:not(:last-child)::-webkit-scrollbar {
  /*滚动条整体样式*/
    width : 5px;
}
.job_transfer_content>div:not(:last-child)::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius   : 10px;
    background-color: skyblue;
    background-image: -webkit-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.2) 75%,
        transparent 75%,
        transparent
    )
}

.job_content_origin{
    margin-right: 30px;
}
.job_content_origin>ul,
.job_content_select>ul{
    list-style: none;
    box-shadow: 0 0 3px rgba(0,0,0,0.15) inset;
    padding: 5px;
}
.job_content_origin>ul>li,
.job_content_select>ul>li{
    display: flex;
    justify-content: flex-start;
    margin: 4px 0;
}
.job_content_origin>ul>li>label,
.job_content_select>ul>li>label{
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 28px;
    user-select: none;
    font-size: 14px;
}
.job_content_select{
    margin-left: 30px;
}
.job_transfer_btn{
    width: 40px;
    height: 45px;
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%,-50%);
}
.job_transfer_btn>button{
    width: 100%;
    height: 50%;
    outline: none;border: none;
    background: #409eff;
    font-size: 12px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.job_transfer_btn>button:last-child{
    background: rgba(64,158,255,0.5);
}
.job_transfer_btn>button:hover{
    box-shadow: 0 0 8px rgba(255,255,255,0.5) inset;
}
.job_transfer_btn>button:active{
    font-weight: bold;
}
.job_btn_add{
    border-radius: 4px 4px 0 0;
}
.job_btn_reduce{
    border-radius: 0 0 4px 4px;
}

.job_operate_btn{
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right,#ccc 0 100%);
    background-repeat: no-repeat;
    background-size: 95% 1px;
    background-position: center 3%;
}
.job_operate_btn>button{
    padding: 1px 15px;
    font-size: 14px;
    margin: 0 8px;
    border-radius: 6px;
    outline: none;
    border: 1px solid #409eff;
    color: #fff;
}
.job_operate_btn>button:first-child{
    background: #409eff;
}
.job_operate_btn>button:last-child{
    background: transparent;
    color: #333;
    border: 1px solid #ccc;
    transition: all 0.2s linear;
}
.job_operate_btn>button:last-child:hover{
    color: #409eff;
    border: 1px solid #409eff;
}
.transfer_item_label{
    display: inline-flex;
    align-items: center;
}
.job_transfer_item:checked~.transfer_item_label{
    color: #409eff;
}
.job_transfer_item:checked~.transfer_box_item{
    background: #409eff;
    border: 2px solid rgba(64,158,255,0.08);
}
.transfer_box_item{
    position: absolute;
    top: 50%;left: 5px;
    transform: translateY(-50%);
    width: 17px;height: 17px;
    border: 1px solid #ccc;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    transition: all 0.2s linear;
}
.transfer_box_item>svg{
    transform-origin: center;
    transform: scale(0.5);
}
.job_transfer_item:checked~.transfer_box_item>svg{
    animation: move 0.2s linear forwards;
}
@keyframes move {
    0%{transform: scale(0.01);}
    50%{transform: scale(0.8);}
    70%{transform: scale(1);}
    85%{transform: scale(1.2);}
    100%{transform: scale(0.9);}
}
</style>