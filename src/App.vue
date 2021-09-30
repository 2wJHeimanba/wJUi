<template>
  <div id="app">
    <!-- <job-carousel></job-carousel> -->
    <wj-carousel></wj-carousel>
    <mb-carousel></mb-carousel>
    <!-- <img alt="Vue logo" src="./assets/logo.png" @click="carousel_toggle=true"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Carousel :data_list="images_list" v-show="carousel_toggle" :toggle.sync="carousel_toggle" /> -->
    <!-- <DatePicker :date="time"/> -->
    <!-- <div id="nav">
      <NavMenu :nav="nav_content" :current_index="0" />
    </div> -->
    <!-- <button @click="openDialog=true">click me</button> -->
    <!-- <div id="top"> -->
      <!-- <JobTopMenu /> -->
    <!-- </div> -->
    <!-- <div id="timepicker">
      <TimePicker/>
    </div> -->
    <!-- <div id="select">
      <JobSelect :select_data="select_data" v-model="test_select" selectedColor="red" />
    </div> -->

    <!-- <JobRadio :radio_data="radio_data" :direction="false" /> -->

    <!-- input输入框 -->
    <!-- <div class="job_input1">
      <JobInput v-model="input_test" :clearable="true" placeholder="请输入内容" width="400" label="姓名：" marginTop="50" marginBottom="50" />
      <JobInput v-model="input_test" :clearable="true" placeholder="请输入内容" width="400" label="性别：" :check="true"/>
      <JobInput v-model="input_test" :clearable="true" placeholder="请输入爱好" width="300" label="爱好：" :check="true" prompt="请输入爱好"/>
    </div> -->
    
    <!-- <ul :class="['job_ul',{active:toggle}]">
      <li v-for="item in select_data" :key="item.id">
        <input type="text" v-model="item.title">
      </li>
    </ul>
    <button @click="addItem">+1</button>
    <button @click="getResult">获取值</button>
    <p>{{select_data}}</p> -->
    <!-- <JobRadio size="medium" v-model="jobRadio">手机</JobRadio> -->
    <!-- <JobTransfer :Jdata="select_data" :transferToggle.sync="jobRadio"/> -->
    <!-- <div class="tooltip" @click="testTooltip(this)" ref="tooltip">该何去何从</div> -->
    <!-- <Pagination v-model="page" totalPages="6"/> -->
    <!-- <JobDialog :dialog_toggle.sync="openDialog">
      <template v-slot:title><span>人员列表</span></template>
      <div class="test-dialog" @click="testfu">
        <div style="width:200px;height:150px;border:1px solid blue;">文件夹</div>
      </div>
      <template v-slot:button>
        <button class="cancel">取 消</button>
        <button>确 定</button>
      </template>
    </JobDialog> -->
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
      openDialog:false,
      page:2,
      jobRadio:false,
      toggle:false,
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
          path:"index",
          icon:`<svg t="1629556514022" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2060" width="18" height="18" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M553.86217486 156.61769104a59.43740844 59.43740844 0 0 0-79.86800372 0L151.037323 463.27823652a29.79286193 29.79286193 0 0 0 39.89685059 44.25361633l5.13542175-4.87586976V822.7208252a59.58572388 59.58572388 0 0 0 59.58572388 59.65988159h173.39942156v-179.38780189a41.95472717 41.95472717 0 0 1 41.9732666-42.01034546h81.59231544a41.95472717 41.95472717 0 0 1 41.9732666 42.01034546v179.38780189h177.51502991a59.58572388 59.58572388 0 0 0 59.6042633-59.6598816V506.56780256c13.2371521 11.97647094 32.01759338 11.06803894 43.03001404-1.20506287a29.79286193 29.79286193 0 0 0-2.15057373-42.08450317L553.86217486 156.63623047Z" fill="#f2eada" p-id="2061"></path></svg>`
        },
        {
          title:'工作',
          icon:`<svg t="1630892264467" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4282" width="16" height="16"><path d="M243.2 972.8h556.8l-38.4 51.2H268.8l-25.6-51.2z m582.4-422.4l64 236.8c19.2 83.2 12.8 140.8-83.2 140.8h-19.2V601.6h-256l70.4-166.4 25.6-19.2 147.2 32h6.4l6.4 6.4c19.2 32 32 64 38.4 96zM390.4 416l25.6 19.2 76.8 166.4H256v326.4h-38.4c-96 0-102.4-57.6-83.2-140.8l64-236.8c6.4-38.4 25.6-70.4 51.2-96H256V448l134.4-32zM505.6 0c102.4 0 192 89.6 192 192s-83.2 192-192 192-192-89.6-192-192 89.6-192 192-192z" p-id="4283" fill="#f2eada"></path></svg>`,
          childrens:[
            {title:'工作列表',path:'work_list'},
            {title:'实习列表',path:'intern_list'},
            {title:'学习列表',path:'study_list'}
          ]
        },
        {
          title:'人员',
          icon:`<svg t="1630892322030" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5272" width="18" height="18"><path d="M164.445 330.985c0-95.605 79.08-173.103 176.64-173.103 97.606 0 176.687 77.498 176.687 173.103s-79.128 173.102-176.687 173.102-176.64-77.498-176.64-173.102z m242.828 477.37v-11.962c0-88.25 45.987-165.795 115.34-211.503a230.959 230.959 0 0 0-100.492-23.086H274.85c-126.045 0-228.212 100.072-228.212 223.557v14.43c0 50.501 102.167 50.501 228.212 50.501h140.8a101.841 101.841 0 0 1-8.378-41.937z m313.623-532.852c-80.943 0-146.618 64.325-146.618 143.685s65.675 143.686 146.618 143.686c80.99 0 146.618-64.326 146.618-143.686s-65.582-143.685-146.618-143.685z m0 0c-80.943 0-146.618 64.325-146.618 143.685s65.675 143.686 146.618 143.686c80.99 0 146.618-64.326 146.618-143.686s-65.582-143.685-146.618-143.685z m-54.924 335.313c-104.634 0-189.44 83.084-189.44 185.577v11.962c0 41.89 84.806 41.89 189.44 41.89h122.229c104.587 0 189.347-1.535 189.347-41.89v-11.962c0-102.493-84.76-185.577-189.347-185.577H665.972z m0 0" p-id="5273" fill="#f2eada"></path></svg>`,
          childrens:[
            {title:'实习生',path:'intern_list'},
            {title:'员工',path:'employees_list'}
          ]
        },
        {
          title:'工资',
          icon:`<svg t="1630892439398" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6438" width="17" height="17"><path d="M293.78814 89.519849c18.285458 13.071713 38.240953 30.199812 53.588499 52.622498 15.420201 22.37766 43.8763 51.352575 43.8763 51.352575l231.988631 0c0 0 24.487717-25.155936 39.429011-45.073568 14.71105-19.872606 27.270087-38.832424 55.092759-56.601112 23.301705-14.669094 35.30304-51.39146 5.489014-63.199391-25.922393-10.219759-36.484959 10.894118-66.460668 11.449773-29.574572 0.478907-33.710776-24.414039-62.969147-35.340903-29.254278-11.083429-44.989657-1.347694-62.485123 15.346523-17.32969 16.810874-24.00881 17.607006-24.00881 17.607006S486.658845 25.554002 475.214189 12.800537c-11.29423-12.802584-40.863686-17.45658-60.263525-5.288446-24.648376 15.703657-30.058596 27.627221-50.561559 31.914874-23.301705 4.808516-60.107983-23.525809-80.458473-6.915503C263.660982 49.007157 275.501658 76.199473 293.78814 89.519849z" p-id="6439" fill="#ffffff"></path><path d="M767.778454 396.019498c-86.342484-72.505337-132.768862-141.348262-132.768862-141.348262L382.195656 254.671236c0 0-48.496527 72.061222-125.928061 139.199319-88.887446 77.266781-160.90876 200.850447-133.799332 348.947413 24.086581 131.73737 149.457963 281.18203 387.086035 281.18203 230.156913 0 365.15249-123.691113 390.90399-274.816042C931.944397 564.633753 841.231373 457.704396 767.778454 396.019498zM682.30271 810.185285c-7.972579 8.231475-18.334577 12.764721-29.179576 12.764721l-0.417509-0.002047c-4.90573-0.027629-16.763802-0.042979-35.176151-0.042979-19.850094 0-42.960441 0.017396-57.495482 0.029676 0.089028 7.601118 0.176009 16.638959 0.176009 22.988574 0 22.544459-19.707854 46.681182-49.047066 46.682205l-0.713244-0.005117c-30.345122-0.400113-49.690726-17.896602-51.737338-46.802956l-0.016373-0.267083c-0.289596-5.575995-0.384763-14.768355-0.409322-22.580275l-94.189196 0c-10.552333 0-20.774139-4.582365-28.780487-12.901845-9.407254-9.774621-14.94948-23.675212-14.46648-36.279275 0.868787-23.39278 21.078061-43.927465 43.246966-43.927465l94.436836 0 0.10847-45.840024c-25.664519 0.183172-77.956489 0.545422-90.095971 0.545422-23.546276 0-42.060955-17.012466-43.067888-39.571251l-0.010233-0.277316c-0.36225-14.405081 7.795547-33.914414 18.97619-45.378513 7.266497-7.450692 15.601326-11.390421 24.101931-11.390421l90.602507 0 0.047072-6.857175c-29.779234-31.498388-81.874729-86.460164-89.093131-93.542466-17.865903-17.780968-25.892717-47.006593-6.804986-68.600401 7.488555-8.514931 17.774829-13.030781 29.723975-13.030781 18.557658 0 36.427654 10.803044 46.091758 20.052708 11.282974 10.816346 52.92335 53.591569 72.062246 73.296353 21.785166-20.146852 71.670319-66.152652 84.512812-76.861552 10.492982-8.688893 23.118534-13.456476 35.589566-13.456476 13.68979 0 25.913183 5.695722 34.426067 16.040325 11.380188 13.613042 10.907421 26.559912 8.502651 35.027771-2.859118 10.073426-9.92914 20.019962-22.249747 31.302937-16.748453 15.134699-75.544557 74.865081-91.560322 91.170442l0 4.254907 86.636173 0 0.201591 0.00614c30.760584 0.87902 49.546439 32.901341 48.966225 54.56064-0.930185 26.548656-18.887162 42.330084-48.037063 42.332131l-0.77055-0.004093-86.546122 0.23536-0.342808 45.150316 84.47495 0c36.726459 0 50.538023 23.172769 51.218522 44.85765C696.625927 787.176245 691.431625 800.756542 682.30271 810.185285z" p-id="6440" fill="#f2eada"></path></svg>`,
          childrens:[
            {title:'工资列表',path:'salary_list'}
          ]
        },
        {
          title:'课程',
          icon:`<svg t="1630892123305" class="icon" viewBox="0 0 1040 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3119" width="17" height="17"><path d="M4.376 407.063C174.417 519.78 344.468 632.497 514.519 745.215c-1.94 20.408-3.89 40.813-5.83 61.218-104.257-76.264-208.52-152.53-312.78-228.792-7.443-5.421-20.28-8.146-29.048-11.346-1.221 56.74-2.432 113.48-3.644 170.22C270 810.687 376.175 891.906 486.627 960.183c18.402 11.395 36.457 13.01 54.104 0.296 106.894-77.099 213.786-154.199 320.69-231.298V522.207c52.115-33.779 104.24-67.558 156.356-101.338 9.434-6.042 7.399-30.354-1.63-36.525a37701143.122 37701143.122 0 0 0-466.47-322.49c-18.537-12.813-50.832-6.922-68.579 4.496-156.474 100.94-312.96 201.88-469.436 302.814L0.002 385.2c1.46 7.288 2.916 14.575 4.374 21.862z m362.168-168.767l145.762 91.584v-99.257l241.953 158.89-241.953 164.596V452.34L366.544 555.706v-317.41z" p-id="3120" fill="#f2eada"></path></svg>`,
          childrens:[
            {title:'课程列表',path:'course'}
          ]
        }
      ],
      // select_data:['黄金糕','双皮奶','龙须面','好吃的'],
      select_data:[
        {value:123,label:'黄金糕'},
        {value:456,label:'双皮奶'},
        {value:789,label:'龙须面'},
        {value:753,label:'好吃的'}
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
    },
    testTooltip(){
      console.log(this.$refs.tooltip)
      this.$Tooltip('hello world',true,this.$refs.tooltip)
    },
    testfu(){
      console.log("点击了内容去")
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
  /* margin-top: 60px; */
  position: relative;
  height: 100vh;
  width: 100vw;
  background: black;
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

.tooltip{
  position: relative;
  border: 1px solid red;
}

.test-dialog{
  width: 700px;
  height: 520px;
  /* border: 2px solid #ccc; */
  margin: 10px;
}
.cancel{
  background: red;
}
.job_input1{
  width: 600px;
  height: 500px;
  border: 2px solid red;
  border-radius: 5px;
  margin-left: 250px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
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
