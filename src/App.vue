<template>
  <div id="app">
    <!-- router-view 是视图，承载所有子页面 -->
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      res: {},
    }
  },
  components: {
   
  },
  mounted () {
    // 本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json',(res)=>{
    //   this.res = res
    // })
    // 通过easy-mock平台实现数据mock
    // this.axios.get('/user/login',(res)=>{
    //   this.res = res
    // })
    // 本地集成mockjs实现数据mock
    this.axios.get('/user/login').then(res=>{
      // res获取到的是data的数据，因此没有status
      
      this.res = res
    })
  },
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
