// 支付宝中转支付页面
<template>
    <div class="page-ali-pay">
        <p>正在跳转支付宝支付...</p>
        <loading></loading>
        <div class="form" v-html="content"></div>
    </div>
</template>
<script>
    import Loading from './../components/Loading'
    export default {
        name: 'aliPay',
        data(){
            return {
                orderId: this.$route.query.orderId,
                content: ''
            }
        },
        mounted () {
            this.paySubmit()  
        },
        components: {
            loading: Loading  
        },
        methods: {
            paySubmit(){
                this.axios.post('/pay',{
                    orderId: this.orderId,
                    orderName: 'vue高仿小米商城', //扫码支付的订单名称
                    amount: 0.01, //单位元
                    payType: 1, //1 支付宝，2 微信
                }).then((res)=>{
                    this.content = res.content
                    setTimeout(()=>{
                        document.forms[0].submit()
                    },100)
                })
            }
        }
    }
</script>
<style lang="scss">
    .page-ali-pay{
        p{
            text-align: center;
            padding: 10px 0;
        }
    }
</style>