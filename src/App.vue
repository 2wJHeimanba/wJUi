<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" @click="carousel_toggle=true"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <Carousel :data_list="images_list" v-show="carousel_toggle" :toggle.sync="carousel_toggle" /> -->
    <!-- <DatePicker :date="time"/> -->
    <!-- <div id="nav">
      <NavMenu :nav="nav_content" :current_index="2" />
    </div> -->
    <!-- <div id="top"> -->
      <!-- <JobTopMenu /> -->
    <!-- </div> -->
    <!-- <div id="timepicker">
      <TimePicker/>
    </div> -->
    <!-- <div id="select">
      <JobSelect :select_data="select_data" v-model="test_select" />
    </div> -->
    <!-- <JobRadio :radio_data="radio_data" :direction="false" /> -->

    <!-- <JobInput v-model="input_test" :clearable="true" /> -->

    <!-- <ul :class="['job_ul',{active:toggle}]">
      <li v-for="item in select_data" :key="item.id">
        <input type="text" v-model="item.title">
      </li>
    </ul>

    <button @click="addItem">+1</button>
    <button @click="getResult">获取值</button>
    <p>{{select_data}}</p> -->
    <!-- <JobRadio size="medium" v-model="jobRadio">手机</JobRadio> -->
    <JobTransfer/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import JobSelect from './libs/51Ui/components/JobSelect.vue'
// import create from './utils/create.js'
import JobNotice from './libs/51Ui/components/JobNotice.vue'

export default {
  name: 'App',
  data(){
    return{
      jobRadio:true,
      toggle:false,
      test_select:'双皮奶',
      input_test:'文件夹',
      images_list:[
        {id:'123',url:require('./assets/images/ui-000.jpg')},
        {id:'456',url:require('./assets/images/ui-001.jpg')},
        {id:'798',url:require('./assets/images/ui-002.jpg')},
        {id:'159',url:require('./assets/images/ui-003.jpg')}
      ],
      carousel_toggle:true,
      time:new Date(),
      nav_content:[
        {
          title:"首页",
          id:789789,
          path:"index"            
        },
        {
          title:'工作',
          id:789778,
          childrens:[
            {
              title:'工作列表',
              id:123123,
              path:'work_list'
            }
          ]
        },
        {
          title:'人员',
          id:7878,
          childrens:[
            {
              title:'实习生',
              id:90,
              path:'intern_list'
            },
            {
              title:'员工',
              id:100,
              path:'employees_list'
            }
          ]
        },
        {
          title:'工资',
          id:78899778,
          childrens:[
            {
              title:'工资列表',
              id:1223,
              path:'salary_list'
            }
          ]
        },
        {
          title:'课程',
          id:7891118,
          childrens:[
            {
              title:'课程列表',
              id:120023,
              path:'course'
            }
          ]
        }
      ],
      // select_data:['黄金糕','双皮奶','龙须面','好吃的'],
      select_data:[
        {id:123,title:'黄金糕'},
        {id:456,title:'双皮奶'},
        {id:789,title:'龙须面'},
        {id:753,title:'好吃的'}
      ],
      radio_data:['张学友','刘德华','黎明','郭富城']
    }
  },
  components: {
    HelloWorld
  },
  watch:{
    input_test(newVal,oldVal){
      console.log(newVal)
    },
    test_select(newVal,oldVal){
      console.log(newVal)
    },
    jobRadio(newVal,oldVal){
      console.warn(newVal)
    }
  },
  methods:{
    addItem(){
      // this.select_data.push({id:Math.floor(Math.random()*10000),title:''})
      this.$create({
        title:"输入的内容出错了，请根据提示填写我呢见驾附近的",
        druation:2000,
        type:'error'
      });
      // notice.show()
    },
    getResult(){
      this.$alert({
          title:"提示",
          success:function(){
            console.log("点击了确定")
          },
          cancel:function(){
            console.log("点击了取消")
          }
      })
      // this.select_data.forEach(value=>{
        // console.log(value.title)
        // this.toggle=true
        
      // })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
  height: 100vh;
  width: 100vw;
}
#nav{
  width: 180px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
#top{
  position: fixed;
  top: 0;left: 0;right: 0;
  height: 88px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}
#timepicker{
  /* border: 1px solid red; */
  display: inline-block;
}
#select{
  /* width: 300px; */
  /* border: 1px solid red; */
}
.job_ul{

}
.job_ul>li{
  /* border: 1px solid blue; */
}

.active{
  animation: test_active 2s linear;
}
@keyframes test_active {
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
</style>
