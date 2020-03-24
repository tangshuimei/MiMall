<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
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
                <div class="category-nav">
                    <ul>
                        <li class="nav-item" v-for="item in subList" :key="item.id">
                            <div class="nav-item-txt">
                                <span class="txt">{{item.name}}</span>
                                <span class="icon-arrow"></span>
                            </div>
                            <div class="children">
                                <ul>
                                    <li class="sub-nav-item" v-for="subItem in item.list" :key="subItem.id">
                                        <a :href="'/#/product/' + subItem.id">
                                            <div class="img">
                                                <img :src="subItem.img" alt="">
                                            </div>
                                            <div class="name">{{subItem.name}}</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                    
            </div>
            <div class="ads-box"></div>
            <div class="banner"></div>
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
                    // autoplay:true,
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
                    // {
                    //     id: 42,
                    //     img: '/imgs/slider/pro1.jpg'
                    // },
                    // {
                    //     id: 45,
                    //     img: '/imgs/slider/pro2.jpg'
                    // },
                    // {
                    //     id: 46,
                    //     img: '/imgs/slider/pro3.jpg'
                    // },
                ],
                subList: []
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
        mounted() {
            this.axios.get('/index').then(res=>{
                this.sliderList = res.sliderList;
                this.subList = res.subList;
            })
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    .index{
        .swiper-box{
            position: relative;
            .swiper-container{
                height: 451px;
                img{
                    width: 100%;
                }
            }
            .category-nav{
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 262px;
                // overflow: hidden;
                background-color: rgba(0,0,0,.5);
                z-index: 10;
                ul{
                    padding: 20px 0;
                }
                .nav-item{
                    height: 50px;
                    padding: 0 20px;
                    box-sizing: border-box;
                    .nav-item-txt{
                        @include flex();
                        height: 100%;
                        font-size: 18px;
                        color: #fff;
                        .icon-arrow{
                            @include bgImg(12px,12px,'/imgs/icon-arrow-down.png');
                            transform: rotateZ(-90deg);
                        }
                    }
                    &:hover{
                        .children{
                            display: block;
                        }
                    }
                    .children{
                        display: none;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        right: 0;
                        left: 262px;
                        // width: 964px;
                        width: 970px;
                        box-sizing: border-box;
                        overflow: hidden;
                        ul{
                            height: 100%;
                            background-color: #fff;
                            .sub-nav-item{
                                display: inline-block;
                                width: 24.9%;
                                margin-bottom: 10px;
                                a{
                                    @include flex(stretch,flex-start);
                                    padding: 0 10px;
                                    color: #666;
                                    box-sizing: border-box;
                                    .img{
                                        display: inline-block;
                                        width: 40px;
                                        height: 40px;
                                        img{
                                            width: 100%;
                                        }
                                    }
                                    .name{
                                        display: inline-block;
                                        padding-top: 10px;
                                        box-sizing: border-box;
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