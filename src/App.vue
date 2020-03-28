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
    // 在这里拉取一次user数据即可，不要在navHeader中拉取，因为不一定用到
    this.getUser();
    this.getCartCount();
  },
  methods: {
    getUser(){
      this.axios.get('/user').then(()=>{
        // 保存到vuex里面
        
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then(()=>{
        // 保存到vuex里面
        
      })
      
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
