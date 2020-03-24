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
            <div class="product-box"></div>
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
                ]
            }
        },
        components: {
            ServiceBar,
            Swiper,
            SwiperSlide
        },
        // computed: {
        //     swiper() {
        //         return this.$refs.mySwiper.$swiper
        //     }
        // },
        // mounted() {
        //     console.log('Current Swiper instance object', this.swiper)
        //     this.swiper.slideTo(3, 1000, false)
        // }
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

    }
</style>