<template>
    <div class="page-order-pay">
        <order-header title="订单支付">
            <template v-slot:tip>
                <span>订单支付tip</span>
            </template>
        </order-header>
        <div class="order-body">
            {{orderId}}
            <div class="btns">
                <a href="javascript:;" @click="paySubmit(1)">支付宝</a>
                <a href="javascript:;" @click="paySubmit(2)">微信</a>
            </div>
        </div>
       
        
        <scan-pay-code 
            :img="payImg"
            @close='closePay'
            v-if="showPay"
        ></scan-pay-code>
        <modal 
            title="支付确认"
            btnType="3"    
            :showModal="showPayModal"
            sureText="查看订单"
            cancelText="未支付"
            @cancel="showPayModal = false"
            @submit="goOrderList"
        >
            <template v-slot:body>您确认是否已完成支付</template>
        </modal>
    </div>
</template>
<script>
    import QRCode from 'qrcode';
    import OrderHeader from './../components/OrderHeader'
    import ScanPayCode from './../components/ScanPayCode';
    import Modal from './../components/Modal';
    export default {
        name: 'orderPay',
        data(){
            return {
                orderId: this.$route.query.orderNo,
                payImg: '',
                showPay: false,
                showPayModal: false, //是否显示二次支付弹窗
                T: ''
            }
        },
        mounted () {
        },
        components: {
            OrderHeader,
            ScanPayCode,
            Modal
        },
        methods: {
            paySubmit(payType){
                this.axios.post('/pay',{
                    orderId: this.orderId,
                    orderName: 'vue高仿小米商城', //扫码支付的订单名称
                    amount: 0.01, //单位元
                    payType: 2, //1 支付宝，2 微信
                }).then((res)=>{
                    if(payType == 1){
                        window.open('/#/order/alipay?orderId='+ this.orderId,'_blank')
                    }
                    else{
                        QRCode.toDataURL(res.content).then(res=>{
                            this.payImg = res
                            this.showPay = true
                            this.loopOrderState()
                        })
                    }
                })
            },
            closePay(){
                this.showPay = false
                this.showPayModal = true
                clearInterval(this.T)
            },
            goOrderList(){
                this.$router.push('/order/list')
            },
            // 轮询订单状态
            loopOrderState(){
                // socket 或者是 setTime
                this.T = setInterval(()=>{
                    this.axios.get(`/orders/${this.orderId}`).then((res)=>{
                        if(res.status == 20){
                            clearInterval(this.T);
                            this.goOrderList();
                        }
                    })
                },1000)
            }
        }
    }
</script>