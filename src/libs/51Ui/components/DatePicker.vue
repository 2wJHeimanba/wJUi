<template>
	<div id="dataPicker" v-outside>
		<input type="text" name="date" id="date" placeholder="请选择日期" :value="formatDate(job_date)" />
		<div class="date_toggle" v-if="data_toggle">
			<div class="date_top">
				<span @click="prevYear">&lt;&lt;</span>
				<span @click="prevMonth">&lt;</span>
				<span>{{job_date|formatYear}}</span>
				<span>{{job_date|formatMonth}}</span>
				<span @click="nextMonth">&gt;</span>
				<span @click="nextYear">&gt;&gt;</span>
			</div>
			<div class="date_weeks">
				<span v-for="nums in 7" :key="nums">{{weeks[nums-1]}}</span>
			</div>
			<div class="date_content" v-for="m in 6" :key="m">
				<span v-for="n in 7" :key="n" 
					@click="getDateInfo(getVisibleDays[(m-1)*7+(n-1)])"
					:class="{
						'isCurrentMonth':!currentMonth(getVisibleDays[(m-1)*7+(n-1)]),
						'isCurrentDay':currentDay(getVisibleDays[(m-1)*7+(n-1)]),
						'isSelectDate':selectDate(getVisibleDays[(m-1)*7+(n-1)])
					}"
				>{{getVisibleDays[(m-1)*7+(n-1)].getDate()}}</span>
			</div>
		</div>
	</div>
</template>

<script>
import * as utils from '../tools/utils.js'
export default{
    name:'DatePicker',
	props:{
		date:{
			type:Date,
			default:new Date()
		}
	},
	data(){
		return{
			job_date:this.date,
			data_toggle:false,
			weeks:['日','一','二','三','四','五','六'],
			currentSelect:this.date
		}
	},
	computed:{
		getVisibleDays(){
			let {year,month}=utils.formatTime(this.job_date)
			let firstDay=new Date(year,month,1)
			let weeks=firstDay.getDay()
			if(weeks===0) weeks=7;
			let firstDate=firstDay-weeks*24*60*60*1000
			let arr=[]
			for(let i=0;i<42;i++){
				arr.push(new Date(firstDate + i *24*60*60*1000))
			}
			return arr
		}
	},
	filters:{
		formatYear(val){
			let {year}=utils.formatTime(val)
			return `${year}年`
		},
		formatMonth(val){
			let {month}=utils.formatTime(val)
			return `${month+1}月`
		}
	},
	directives:{
		outside:{
			bind(el,binding,vnode){
				el.handler=function(e){
					if(el.contains(e.target))!vnode.context.data_toggle&&vnode.context.date_on();
					else vnode.context.data_toggle&&vnode.context.date_off();
				}
				document.addEventListener("click",el.handler)
			},
			unbind(el){
				document.removeEventListener('click',el.handler)
			}
		}
	},
	methods:{
		date_on(){
			this.data_toggle = true
		},
		date_off(){
			this.data_toggle = false
		},
		formatDate(t){
			let {year,month,day} = utils.formatTime(t)
			return `${year}-${(month+1).toString().padStart(2,'0')}-${day.toString().padStart(2,'0')}`
		},
		currentMonth(value){
			let {year,month}=utils.formatTime(value)
			let {year:y,month:m}=utils.formatTime(this.job_date)
			return y===year&&m===month
		},
		currentDay(val){
			let {year,month,day}=utils.formatTime(val)
			let {year:y,month:m,day:d}=utils.formatTime(new Date())
			return year===y&&month===m&&day===d
		},
		
		// 点击事件区域
		nextMonth(){
			let {year,month}=utils.formatTime(this.job_date)
			this.job_date=new Date(year,month+1)
		},
		prevMonth(){
			let {year,month}=utils.formatTime(this.job_date)
			this.job_date=new Date(year,month-1)
		},
		prevYear(){
			let {year,month}=utils.formatTime(this.job_date)
			this.job_date=new Date(year-1,month)
		},
		nextYear(){
			let {year,month}=utils.formatTime(this.job_date)
			this.job_date=new Date(year+1,month)
		},
		
		
		getDateInfo(time){
			this.job_date=time;
			this.currentSelect=time;
			this.data_toggle=false;
			this.$emit("getSelectDate",this.time)
		},
		selectDate(time){
			let {year,month,day}=utils.formatTime(time)
			let {year:y,month:m,day:d}=utils.formatTime(this.currentSelect)
			return year===y&&month===m&&day===d
		}
	}
}
</script>

<style scoped>
    #dataPicker{
        display: inline-block;
    }
	#date{
		-webkit-appearance: none;
		background-color: #fff;
		background-image: none;
		border-radius: 4px;
		border: 1px solid #dcdfe6;
		box-sizing: border-box;
		color: #606266;
		display: inline-block;
		height: 30px;
		line-height: 30px;
		outline: none;
		padding: 0 15px;
		cursor: pointer;
	}
	.date_toggle{
		position: absolute;
		width: 323px;height: 300px;
		color: #606266;border: 1px solid #e4e7ed;
		box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
		background: #fff;
		border-radius: 4px;
		line-height: 30px;
		margin: 5px 0;
	}
	.date_top{
		margin-top: 10px;
		display: flex;
		justify-content: space-around;
		cursor: pointer;
	}
	.date_top>span:hover{
		color: #0066CC;
		user-select: none;
	}

	.date_weeks{
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #ccc;
		font-size: 14px;
		margin-bottom: 10px;
	}
	.date_content{
		display: flex;
		justify-content: space-around;
	}
	.date_content>span{
		width: 30px;
		text-align: center;
		font-size: 14px;
		cursor: pointer;
        user-select: none;
	}
	.date_content>span:hover{
		color: #0066CC;
	}
	.isCurrentMonth{
		color: #ccc;
	}
	.isCurrentDay{
		color: blue;
		font-weight: bold;
	}
	.isSelectDate{
		background: #0066CC;
		color: #fff;
		border-radius: 50%;
		box-shadow: 0 0 3px rgba(100,149,237,0.3);
	}
	
</style>
