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
    if(this.$cookie.get('userId')){
      // 在这里拉取一次user数据即可，不要在navHeader中拉取，因为不一定用到
      this.getUser();
      this.getCartCount();
    }
  },
  methods: {
    getUser(){
      this.axios.get('/user').then((res = {})=>{
        // 保存到vuex里面
        this.$store.dispatch('saveUserName',res.username);
      })
    },
    getCartCount(){
        this.axios.get('/carts/products/sum').then((res=0)=>{
            // 保存到vuex里面
            this.$store.dispatch('saveCartCount',res);
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
