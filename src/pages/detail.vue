<template>
    <div class="detail">
        <product-param :title="product.name"></product-param>
        <div class="container detail-container">
            <div class="swiper-box">
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="item in sliderList" :key="item.id">
                        <div class="img">
                            <img :src="item.img" alt="">
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="detail-info">
                <h2>{{product.name}}</h2>
                <p class="intro"><span>「6GB+128GB购机赠10000mAh充电宝或半入耳式耳机」</span>前置3200万自拍 / 索尼4800万超广角三摄 / 多色炫彩轻薄机身 / 6.39英寸三星 AMOLED水滴屏 /4030mAh大电量 / 骁龙710处理器 / 屏幕指纹 / NFC功能 / 红外遥控功能 / Game Turbo2.0游戏加速</p>
                <p class="channel">小米自营</p>
                <p class="price">{{product.price | currency}}<span>1999元</span></p>
                <div class="non-sale">
                    <span class="tip">赠完即止</span>
                    赠Redmi充电宝/半入耳式耳机二选一
                </div>
                <div class="pro-choose user-address">
                    <span class="icon-locate"></span>
                    <div class="address-content">
                        <span>北京</span>
                        <span>北京</span>
                        <span>北京</span>
                        <span>北京</span>
                        <a href="javascript:;" class="address-btn">修改</a>
                    </div>
                    <p class="tip">该地区暂时缺货</p>
                </div>
                <div class="pro-choose pro-type">
                    <h3>选择版本</h3>
                    <ul class="item-mid-box">
                        <li class="item-mid" :class="{'ac': version == (index)}" v-for="(item,index) in versionList" :key="item.id" @click="chooseVersion(index)">
                            <span class="name">{{item.name}}</span>
                            <span class="price">{{item.price | currency}}</span>
                        </li>
                    </ul>
                </div>
                <div class="pro-choose pro-color">
                    <h3>选择颜色</h3>
                    <ul class="item-mid-box">
                        <li class="item-mid">
                            <a href="javascript:;">
                                <img src="/imgs/detail/pro-color-1.jpg" alt="">
                                <span>深蓝星球（蓝色）</span>
                            </a>
                           
                        </li>
                        <li class="item-mid">
                            <a href="javascript:;">
                                <img src="/imgs/detail/pro-color-1.jpg" alt="">
                                <span>暗夜王子（深空灰）</span>
                            </a>
                        </li>
                        <li class="item-mid">
                            <a href="javascript:;">
                                <img src="/imgs/detail/pro-color-1.jpg" alt="">
                                <span>白色恋人（白色）</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="pro-choose pro-package">
                    <h3>选择套餐</h3>
                    <ul class="item-mid-box">
                        <li class="item-mid">标配</li>
                        <li class="item-mid">+299得星芒钻幕壳</li>
                    </ul>
                </div>
                <div class="pro-choose pro-otherService">
                    <h3>选择小米提供的意外保护<a href="">了解意外保护 ></a></h3>
                    <ul>
                        <li :class="'item-large ' + (otherServiceId===item.id?'ac':'')" @click="chooseOtherService(item.id)" v-for="item in otherServiceList" :key="item.id">
                            <div class="inner">
                                <span class="icon-checkbox"><em></em></span>
                                <img src="/imgs/icon-service-save.png" alt="">
                                <div class="info">
                                    <h4>{{item.name}}</h4>
                                    <p class="intro">{{item.subTitle}}</p>
                                    <p class="agreement"><span class="click-box"><em></em></span>我已阅读<a href="">服务条款</a><span class="sep">|</span><a href="">常见问题</a></p>
                                </div>
                            </div>
                            <p class="price">{{item.price  | currency}}</p>
                        </li>
                    </ul>
                </div>
                <div class="sum-price">
                    <ul>
                        <li>
                            <p>小米CC9 6GB+128GB 深蓝星球</p>
                            <p>1699 元 <span>1999元</span></p>
                        </li>
                    </ul>
                    <p class="total">总计 ：1847元</p>
                </div>
                <div class="btns">
                    <a href="javascript:;" class="btn btn-hug" @click="addCart">加入购物车</a>
                    <!-- <a href="javascript:;" class="btn btn-default like">
                        <span class="icon-like"></span>
                        喜欢
                    </a> -->
                </div>
                <div class="guarantees">
                    <a href="javascript:;">小米自营</a>
                    <a href="javascript:;">小米发货</a>
                    <a href="javascript:;">小米发货</a>
                    <a href="javascript:;">小米发货</a>
                    <a href="javascript:;">小米发货</a>
                    <a href="javascript:;">小米发货</a>
                    <a href="javascript:;">小米发货</a>
                </div>
            </div>
        </div>
        
        <div class="price-explain">
            <h3 class="container">价格说明</h3>
            <p>
                <img src="/imgs/detail/price-explain.jpeg" alt="">
            </p>
        </div>
        <service-bar></service-bar>    
    </div>
</template>
<script>
    import ProductParam from './../components/ProductParam'
    import ServiceBar from './../components/ServiceBar'
    import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
    export default {
        name: 'product',
        data(){
            return {
                id: this.$route.params.id,
                product: {},
                version: 0,
                versionList:[
                    {
                        id: 0,
                        name: '6GB+128GB',
                        price: 1699
                    },
                    {
                        id: 1,
                        name: '6GB+64GB',
                        price: 1499
                    }
                ],
                otherServiceId: -1,
                otherServiceList:[
                    {
                        id: 1,
                        name: '意外保障服务',
                        subTitle: '手机意外碎屏/进水/碾压等损坏',
                        price: 179
                    },
                    {
                        id: 2,
                        name: '意外保障服务2222',
                        subTitle: '手机意外碎屏/进水/碾压等损坏22222',
                        price: 17999
                    },
                ],
                sliderList: [
                    {
                        id: 42,
                        img: '/imgs/detail/detail-1.jpg'
                    },
                    {
                        id: 45,
                        img: '/imgs/detail/detail-2.jpg'
                    },
                ],
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                        bulletClass : 'my-bullet',
                        bulletActiveClass: 'my-bullet-active',
                        // type : 'custom',
                        // bulletClass : 'my-bullet'
                    },
                    autoplay:true,
                    loop : true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
            }
        },
        filters: {
            currency(val){
                if(!val) return 0
                return val.toFixed(0) + '元'
            }
        },
        components: {
            ProductParam,
            ServiceBar,
            Swiper,
            SwiperSlide
        },
        mounted () {
          this.getProductInfo()  
        },
        methods: {
            getProductInfo(){
                this.axios.get(`/products/${this.id}`).then(res=>{
                    this.product = res
                })
            },
            addCart(){
                this.axios.post('/carts',{
                    productId: this.id,
                    selected: true
                }).then((res={cartTotalQuantity:0})=>{
                    this.$store.dispatch('saveCartCount',res.cartTotalQuantity)
                    this.$router.push('/cart')
                })
            },
            chooseVersion(index){
                this.version = index
            },
            choosePorParams(type,color,_package){
                this.proType = type
                this.proColor = color
                this.proPackage = _package
            },
            chooseOtherService(id){
                this.otherServiceId = id
            }
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    .detail{
        .detail-container{
            display: flex;
            justify-content: space-between;
            .swiper-box{
                position: relative;
                width: 600px;
                height: 600px;
                margin-right: 12px;
                .swiper-container{
                    width: 600px;
                    height: 600px;
                    .img{
                        width: 100%;
                        height: 100%;
                        img{
                            width: 100%;
                        }
                    }
                    .swiper-pagination{
                        height: 10px;
                        .my-bullet{
                            display: inline-block;
                            width: 50px;
                            height: 2px;
                            margin: 0 5px;
                            background-color: #ccc;
                            border-radius: 0;
                            &.my-bullet-active{
                                background-color:#a3a3a3
                            }
                        }
                    }
                    .swiper-button-prev:after{
                        font-size: 30px;
                    }
                    .swiper-button-next:after{
                        font-size: 30px;
                    }
                }
                
            } 
            .detail-info{
                h2{
                    margin-top: 8px;
                    font-size: 24px;
                    font-weight: normal;
                }
                .intro{
                    margin-bottom: 14px;
                    color: #b0b0b0;
                    span{
                        color: $colorA;
                    }
                }
                .channel{
                    margin-bottom: 12px;
                    color: $colorA;
                }
                .price{
                    margin-bottom: 20px;
                    color: $colorA;
                    span{
                        color: #b0b0b0;
                    }
                }
                .non-sale{
                    padding: 10px 0;
                    margin-bottom: 40px;
                    border-top: 1px solid #e0e0e0;
                    border-bottom: 1px solid #e0e0e0;
                    .tip{
                        display: inline-block;
                        width: 80px;
                        margin-right: 5px;
                        color: $colorG;
                        text-align: center;
                        line-height: 25px;
                        background-color: $colorA;
                    }
                }
                .pro-choose{
                    margin-bottom: 40px;
                    &.user-address{
                        position: relative;
                        padding: 30px 40px 30px 50px;
                        border: 1px solid #e0e0e0;
                        box-sizing: border-box;
                        .icon-locate{
                            position: absolute;
                            top: 26px;
                            left: 20px;
                            @include bgImg(20px,30px,'/imgs/icon-locate.png');
                        }
                        .address-content{
                            span{
                                display: inline-block;
                                margin-right: 14px;
                            }
                        }
                        .address-btn{
                            display: inline-block;
                            color: $colorA;
                        }
                        .tip{
                            color: $colorA;
                        }

                    }
                    &.pro-type{
                        span{
                            line-height: 42px;
                        }
                        .name{
                            display: inline-block;
                            text-align: center;
                            width: 170px;
                        }
                        .price{
                            display: inline-block;
                            margin-bottom: 0;
                            color: #b0b0b0;
                        }
                        &.ac{
                            .price{
                                color: #757575;
                            }
                        }
                    }
                    &.pro-color{
                        a{
                            color: #333;
                        }
                        img{
                            display: inline-block;
                            width: 16px;
                            height: 16px;
                            margin-right: 10px;
                            vertical-align: middle;
                        }
                        span{
                            vertical-align: middle;

                        }
                    }
                    &.pro-otherService{
                        h3{
                            @include flex();
                            margin-bottom: 15px;
                            a{
                                color: $colorA;
                                font-size: 14px;
                            }
                        }
                    }

                    h3{
                        font-size: 18px;
                        font-weight: normal;
                    }
                    .item-mid-box{
                        margin-left: -6px;
                    }
                    .item-mid{
                        display: inline-block;
                        width: 298px;
                        margin-top: 15px;
                        margin-left: 6px;
                        font-size: 16px;
                        text-align: center;
                        line-height: 42px;
                        border: 1px solid #e0e0e0; 
                        cursor: pointer;
                        &.ac{
                            color: $colorA;
                            border-color: $colorA;
                        }
                    }
                    .item-large-box{ 

                    }
                    .item-large{
                        position: relative;
                        width: 100%;
                        padding: 30px 0;
                        margin-top: -1px;
                        border: 1px solid #e0e0e0;
                        cursor: pointer;
                        &.ac{
                            border-color: $colorA;
                            .inner{
                                .icon-checkbox{
                                    em{
                                        background-color: $colorA;
                                        border-color: $colorA;
                                    }
                                }
                                .info{
                                    .agreement{
                                        .click-box{
                                            background-color: $colorA;
                                            border-color: $colorA;
                                        }
                                    }
                                }
                            }
                            .price{
                                color: $colorA;
                            }
                            &:after{
                                display: block;
                            }
                        }
                        .inner{
                            .icon-checkbox{
                                display: inline-block;
                                width: 36px;
                                height: 36px;
                                text-align: center;
                                line-height: 36px;
                                margin: 10px 0 0 30px;
                                vertical-align: top;
                                em{
                                    @include bgImg(10px,10px,'/imgs/icon-ok.png');
                                    border: 1px solid #e0e0e0;
                                    border-radius: 10px;
                                }
                            }
                            img{
                                width: 50px;
                                height: 50px;
                                margin: 0 10px 0 15px;
                                vertical-align: top;
                            }
                            .info{
                                display: inline-block;
                                width: 370px;
                                vertical-align: top;
                                h4{
                                    margin-bottom: 5px;
                                    font-size: 18px;
                                    font-weight: normal;
                                }
                                .intro{
                                    color: #b0b0b0;
                                }
                                .agreement{
                                    display: flex;
                                    align-items: flex-end;
                                    color: #757575;
                                    line-height: 1em;
                                    .click-box{
                                        @include bgImg(14px,14px,'/imgs/icon-ok.png');
                                        display: inline-block;
                                        margin-right: 5px;
                                        border: 1px solid #b0b0b0;
                                    }
                                    .sep{  
                                        @include sepSpan();  
                                        margin: 0 5px;
                                        color: #757575;
                                        line-height: 1em;
                                    }
                                    a{
                                        margin-left: 5px;
                                        color: $colorA;
                                        line-height: 1em;
                                    }
                                }
                            }

                        }
                        .price{
                            position: absolute;
                            right: 20px;
                            bottom: 28px;
                            margin-bottom: 0;
                            color: #757575;
                        }
                        &:after{
                            content: '';
                            display: none;
                            position: absolute;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            border-top: 1px solid $colorA;
                        }

                    }
                }
                .sum-price{
                    padding: 30px;
                    background-color: #f9f9fa;
                    box-sizing: border-box;
                    li{
                        @include flex();
                    }
                    .total{
                        padding-top: 20px;
                        font-size: 24px;
                        color: $colorA;
                    }
                }
                .btns{    
                    margin: 10px 0 20px 0;
                    a{
                        display: inline-block;
                        height: 54px;
                        margin-right: 10px;
                        font-size: 16px;
                        line-height: 54px;
                        vertical-align: middle;
                    }
                    .like{
                        width: 142px;
                        span{
                            @include bgImg(22px,22px,'/imgs/icon-like.png');
                            vertical-align: middle;
                        }
                    }
                }
                .guarantees{
                    a{
                        display: inline-block;
                        position: relative;
                        padding-left: 30px;
                        margin-right: 15px;
                        line-height: 30px;
                        color: #b0b0b0;
                        &:before{
                            content: '';
                            position: absolute;
                            top: 50%;
                            left: 0;
                            transform: translateY(-50%);
                            @include bgImg(20px,20px,'/imgs/icon-ok-border.png');
                        }
                    }
                }

            }
        } 
        
        .price-explain{
            background-color: $colorJ;
            h3{
                padding: 22px 0;
                font-weight: normal;
                font-size: 22px;
            }
            p{
                width: 100%;
                img{
                    width: 100%;
                }
            }
        }

    }
</style>