<template>
  <div id="app" v-loading="loading">
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
    <div id="select">
      <JobSelect :select_data="select_data" v-model="test_select" />
    </div>
    <!-- <JobRadio :radio_data="radio_data" :direction="false" /> -->
    <!-- <JobInput v-model="input_test" :clearable="true" /> -->
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import JobSelect from './libs/51Ui/components/JobSelect.vue'

export default {
  name: 'App',
  data(){
    return{
      loading:true,
      test_select:'双皮奶',
      input_test:'',
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
    }
  },
  mounted(){
    setTimeout(()=>{
      this.loading=false
    },5000)
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
  border: 2px solid red;
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
</style>
