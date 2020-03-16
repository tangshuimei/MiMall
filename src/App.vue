<template>
  <div id="app">
    <!-- router-view 是视图，承载所有子页面 -->
    <router-view></router-view> 
  </div>
</template>

<script>
import storage from './storage'
export default {
  name: 'App',
  components: {
   
  },
  mounted () {
    storage.setItem('level',{h1: {p: 'txt'}})
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
