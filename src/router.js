import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index  from './pages/index'
// import Product  from './pages/product'
// import Detail  from './pages/detail'
import Order  from './pages/order'
// import OrderConfirm  from './pages/orderConfirm'
// import OrderList  from './pages/orderList'
// import OrderPay  from './pages/orderPay'
// import AliPay  from './pages/aliPay'
// import Cart  from './pages/cart'
// import Login  from './pages/login'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',  
            name: 'home',
            component: Home,
            redirect: '/index', // 默认跳到index
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    component: ()=>import('./pages/product.vue')
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: ()=>import('./pages/detail.vue')
                },
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: ()=>import('./pages/cart.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: ()=>import('./pages/login.vue')
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            redirect: '/order/list',
            children: [
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: ()=>import('./pages/orderConfirm.vue')
                },
                {
                    path: 'list',
                    name: 'order-list',
                    component: ()=>import('./pages/orderList.vue')
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: ()=>import('./pages/orderPay.vue')
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    component: ()=>import('./pages/aliPay.vue')
                }
            ]

        }
    ]
})