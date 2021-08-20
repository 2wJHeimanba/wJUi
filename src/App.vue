<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="carousel_toggle=true">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Carousel :data_list="images_list" v-show="carousel_toggle" :toggle.sync="carousel_toggle" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return{
      images_list:[
        {id:'123',url:require('./assets/images/ui-000.jpg')},
        {id:'456',url:require('./assets/images/ui-001.jpg')},
        {id:'798',url:require('./assets/images/ui-002.jpg')},
        {id:'159',url:require('./assets/images/ui-003.jpg')}
      ],
      carousel_toggle:true
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    getNums(e){
      console.log(e)
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
}
</style>
