<template>
    <div>
        <order-header :title="title">
            <template v-slot:tip>
                <span>{{tip}}</span>
            </template>
        </order-header>
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    import OrderHeader from './../components/OrderHeader'
    import ServiceBar from './../components/ServiceBar'
    import NavFooter from './../components/NavFooter'
    
    export default {
        name: 'order',
        components: {
            OrderHeader,
            ServiceBar,
            NavFooter,
        },
        data(){
            return {
                title: '',
                tip: ''
            }
        },
        mounted () {
            let path = this.$route.path 
            switch(path){
                case '/order/list': 
                    this.title = '订单列表';
                    this.tip = '订单列表tip';
                    break;
                case '/order/comfirm': 
                    this.title = '订单确认';
                    this.tip = '订单确认tip';
                    break;
                case '/order/pay': 
                    this.title = '订单支付';
                    this.tip = '订单paytip';
                    break;
                default:
                    this.title = '订单列表';
                    this.tip = '订单列表tip';
            }
        }
    }
</script>