<template>
    <div class="page-order-pay">
        {{orderNo}}
        <div class="btns">
            <a href="javascript:;" @click="paySubmit(1)">支付宝</a>
            <a href="javascript:;" @click="paySubmit(2)">微信</a>
        </div>
        
    </div>
</template>
<script>
    export default {
        name: 'orderPay',
        data(){
            return {
                orderNo: this.$route.query.orderNo,
                orderName: '',
                amount: '0.01',
            }
        },
        mounted () {
            this.getOrderDetail()
        },
        methods: {
            getOrderDetail(){
                this.axios.get(`/orders/${this.orderNo}`).then(()=>{
                })
            },
            paySubmit(payType){
                this.axios.post('/pay',{
                    orderId: this.orderNo,
                    orderName: this.orderName, //扫码支付的订单名称
                    amount: this.amount, //单位元
                    payType: payType, //1 支付宝，2 微信
                }).then(()=>{
                    if(payType == 1){
                        window.open('/#/order/alipay?orderId='+ this.orderNo,'_blank')
                    }
                })
            },

        }
    }
</script>