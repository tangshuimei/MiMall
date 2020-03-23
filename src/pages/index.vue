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
    .index{
        .swiper-box{
            .swiper-container{
                height: 451px;
                img{
                    width: 100%;
                }
            }
        }
    }
</style>