<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item,i) in menuList" :key="i">
                                    <li v-for="(sub,j) in item" :key="j" >
                                        <a :href="sub?'/#/product/' + sub.id:''">
                                            <img :src="sub?sub.img:'/imgs/item-box-4.png'" alt="">
                                            {{sub?sub.name:'小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插电板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                        </li>
                    </ul>
                </div>
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="item in sliderList" :key="item.id">
                        <a :href="'/#/product/' + item.id">
                            <img :src="item.img" alt="">
                        </a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box">
                <a :href="'/#/product/' + item.id" v-for="(item,index) in adsList" :key="index">
                    <img :src="item.img" alt="">
                </a>
            </div>
            <div class="banner">
                <a href="/#/product/3">
                    <img src="/imgs/banner-1.jpg" alt="">
                </a>
            </div>
        </div>
        
        <div class="product-box">
            <div class="container">
                <h2>手机</h2>
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/#/product/35">
                            <img src="/imgs/product-left.jpg" alt="">
                        </a>
                    </div>
                    <div class="list-box">
                        <div class="list" v-for="(arr,i) in phoneList" :key="i">
                            <div class="item" v-for="(item,j) in arr" :key="j">
                                <span :class="j%2===0?'new-pro':'kill-pro'">{{j%2===0?'新品':'秒杀'}}</span>
                                <div class="item-img">
                                    <img :src="item.mainImage" alt="">
                                </div>
                                <div class="item-info">
                                    <h3>{{item.name}}</h3>
                                    <p>{{item.subtitle}}</p>
                                    <p class="price">{{item.price | currency}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
    </div>
</template>
<script>
    import ServiceBar from './../components/ServiceBar';
    import {Swiper, SwiperSlide} from 'vue-awesome-swiper';
    import 'swiper/css/swiper.css';
    export default {
        name: 'index',
        data(){
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                    },
                    autoplay:true,
                    loop : true,
                    effect : 'cube',
                    cubeEffect: {
                        slideShadows: true,
                        shadow: true,
                        shadowOffset: 100,
                        shadowScale: 0.6
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                sliderList: [
                    {
                        id: 42,
                        img: '/imgs/slider/pro1.jpg'
                    },
                    {
                        id: 45,
                        img: '/imgs/slider/pro2.jpg'
                    },
                    {
                        id: 46,
                        img: '/imgs/slider/pro3.jpg'
                    },
                ],
                menuList: [
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.png',
                            name: 'Redmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.png',
                            name: '移动4G专区'
                        },
                    ],
                    [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                ],
                adsList:[
                    {
                        id: 33,
                        img: '/imgs/ads/ads-1.jpg'
                    },
                    {
                        id: 48,
                        img: '/imgs/ads/ads-2.jpg'
                    },
                    {
                        id: 45,
                        img: '/imgs/ads/ads-3.jpg'
                    },
                    {
                        id: 47,
                        img: '/imgs/ads/ads-1.jpg'
                    },
                ],
                phoneList: []
            }
        },
        components: {
            ServiceBar,
            Swiper,
            SwiperSlide
        },
        filters: {
            currency(val){
                if(!val) return 0.00
                return val.toFixed(2) + '元'
            }
        },
        // computed: {
        //     swiper() {
        //         return this.$refs.mySwiper.$swiper
        //     }
        // },
        mounted() {
           this.init();
        },
        methods: {
            init(){
                this.axios.get('/products',{
                    params: {
                        categoryId: 100012,
                        pageSize: 14
                    }
                }).then(res=>{
                    res.list = res.list.slice(6,14)
                    this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)]
                })
            }
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/config.scss';
    @import './../assets/scss/mixin.scss';
    .index{
        .swiper-box{ 
            position: relative;
            .nav-menu{
                position: absolute;
                width: 264px;
                height: 451px;
                padding: 26px 0;
                background-color: #55585aa1;
                box-sizing: border-box;
                z-index: 9;
                .menu-wrap{
                    .menu-item{
                        height: 50px;
                        line-height: 50px;

                        a{
                            display: block;
                            position: relative;
                            padding-left: 30px;
                            font-size: 16px;
                            color: #ffffff;
                            &:after{
                                content: '';
                                position: absolute;
                                right: 30px;
                                top: 17.5px;
                                @include bgImg(10px,15px,'/imgs/icon-arrow.png')
                            }
                        }
                        &:hover{
                            background-color: $colorA;
                            .children{
                                display: block;
                            }
                        }
                        
                        .children{
                            display: none;
                            position: absolute;
                            top: 0;
                            left: 264px;
                            width: 962px;
                            height: 451px;
                            background-color: $colorG;
                            border: 1px solid $colorH;
                            ul{
                                display: flex;
                                justify-content: space-between;
                                height: 75px;
                                li{
                                    // width: 241px;
                                    flex: 1; // 等价于width: 241px;
                                    height: 75px;
                                    line-height: 75px;
                                    padding-left: 23px;
                                    a{
                                        color: $colorB;
                                        font-size: 14px;
                                        vertical-align: middle;
                                    }
                                    img{
                                        width: 42px;
                                        height: 35px;
                                        vertical-align: middle;
                                    }
                                }
                            }
                        }
                        
                    }
                }
            }
            .swiper-container{
                height: 451px;
                overflow: hidden;
                img{
                    width: 100%;
                }
                .swiper-button-prev{
                    left: 274px;
                }
            }
           
        }
        .ads-box{
            @include flex();
            margin-top: 14px;
            margin-bottom: 31px;
            a{
                width: 296px;
                height: 167px;
            }
        }
        .banner{
            margin-bottom: 50px;
        }
        .product-box{
            padding: 30px 0 50px;
            background-color: $colorJ;
            h2{
               height: 21px; 
               font-size: $fontF;
               line-height: 21px; 
               color: $colorB;
               margin-bottom: 20px;
            }
            .wrapper{
                display: flex;
                .banner-left{
                    img{
                        width: 224px;
                        height: 619px;
                        margin-right: 16px;
                    }
                }
                .list-box{
                    .list{
                        @include flex();
                        width: 986px;
                        margin-bottom: 14px;
                        &:last-child{
                            margin-bottom: 0;
                        }
                        .item{
                            width: 236px;
                            height: 302px;
                            background-color: $colorG;
                            text-align: center;
                            span{
                                display: inline-block;
                                width: 67px;
                                height: 24px;
                                color: $colorG;
                                font-size: 14px;
                                line-height: 24px;
                                &.new-pro{
                                    background-color: #7ECF68;
                                }
                                &.kill-pro{
                                    background-color: #E82626;
                                }
                            }
                            .item-img{
                                img{
                                    height: 195px;
                                }
                                h3{
                                    
                                }
                            }
                            .item-info{
                                h3{
                                    color: $colorB;
                                    font-size: $fontJ;
                                    line-height: $fontJ;
                                    font-weight: bold;
                                }
                                p{
                                    color: $colorD;
                                    line-height: 13px;
                                    margin: 6px auto 13px;
                                }
                                .price{
                                    color: #F20A0A;
                                    font-size: $fontJ;
                                    font-weight: bold;
                                    cursor: pointer;
                                    &:after{
                                        content: '';
                                        margin-left: 5px;
                                        vertical-align: middle;
                                        @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    }
</style>