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
   
  },
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
