<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login">登录</a>
                    <a href="javascript:;" v-if="username">我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span> 购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index" class=""></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="item in phoneList" :key="item.id">
                                    <a :href="'/#/product/' + item.id" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>Redmi红米</span>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/pro1.png'" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">￥1790.00元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/pro1.png'" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">￥1790.00元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/pro1.png'" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">￥1790.00元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/pro1.png'" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">￥1790.00元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/pro1.png'" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">￥1790.00元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/pro1.png'" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">￥1790.00元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/pro1.png'" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">￥1790.00元</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
    export default {
        name: 'nav-header',
        data(){
            return {
                username: '',
                phoneList:[]
            }
        },
        mounted () {
           this.getProductList() 
        },
        filters: {
            currency(val){
                if(!val) return 0.00
                return '￥' + val.toFixed(2) + '元'
            }
        },
        methods: {
            getProductList(){
                this.axios.get('/products',{
                    params: {
                       categoryId: '100012'
                    }
                }).then((res)=>{
                    // console.log(Math.max(res.list.length,6))
                    // Math.max(res.list.length,6)>=6?
                    if(res.list.length>=6){
                        this.phoneList = res.list.slice(0,6)
                    }
                })
            },
            goToCart(){
                this.$router.push('/cart')
            },
            login(){
                this.$router.push('/login')
            }
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/base.scss';
    @import './../assets/scss/config.scss';
    @import './../assets/scss/mixin.scss';

    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #B0B0B0;
            .container{
                @include flex();
                a{
                    display: inline-block;
                    color: #B0B0B0;
                    margin-right: 14px; 
                    &:last-child{
                        margin-right: 0;
                    }
                }
                .my-cart{
                    width: 110px;
                    background-color: #FF6600;
                    text-align: center;
                    color: #fff;
                    .icon-cart{
                        margin-right: 4px;
                        @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
                    }
                }
            }
        }
        .nav-header{
            .container{
                position: relative;
                @include flex();
                height: 112px;
                .header-logo{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color: #FF6600;
                    a{
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &:before{
                            content: " ";
                            @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
                            transition: margin .2s;
                        }
                        &:after{
                            content: " ";
                            @include bgImg(55px,55px,'/imgs/home-logo.png',55px);
                        }
                        &:hover::before{
                            margin-left: -55px;
                            transition: margin .2s;
                        }
                    }
                }
                .header-menu{
                    display: inline-block;
                    padding-left: 209px;
                    .item-menu{
                        display: inline-block;
                        margin-right: 20px;
                        color: #333333;
                        font-size: 16px;
                        font-weight: bold;
                        line-height: 112px;
                        span{
                            cursor: pointer;
                        }
                        &:hover{
                            color: $colorA;
                            .children{
                                height: 220px;
                                opacity: 1;
                                transition: all .2s;
                            }
                        }
                        .children{
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            height: 0;
                            border-top: 1px solid #E5E5E5;
                            background-color: #ffffff;
                            opacity: 0;
                            transition: all .2s;
                            box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
                            overflow: hidden;
                            z-index: 10;
                            .product{
                                position: relative;
                                float: left;
                                width: 16.6%;
                                height: 220px;
                                font-size: 12px;
                                text-align: center;
                                line-height: 12px;
                                a{
                                    display: inline-block;
                                }
                                .pro-img{
                                    height: 137px;
                                }
                                img{
                                    width: auto;
                                    height: 110px;
                                    margin-top: 26px;
                                }
                                .pro-name{
                                    margin-top: 19px;
                                    margin-bottom: 8px;
                                    color: $colorB;
                                    font-weight: bold;
                                }
                                .pro-price{
                                    color: $colorA;
                                    font-weight: bold;
                                }
                                &:before{
                                    content: '';
                                    position: absolute;
                                    top: 28px;
                                    right: 0;
                                    height: 100px;
                                    border-right: 1px solid $colorF;
                                }
                                &:last-child:before{
                                    border-right: none;
                                }
                            }
                        }
                    }
                }
                .header-search{
                    width: 319px;
                    .wrapper{
                        display: flex;
                        align-items: center;
                        height: 50px;
                        border: 1px solid #E0E0E0;
                        input{
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;
                            border: none;
                            border-right: 1px solid #E0E0E0;
                            box-sizing: border-box;
                        }
                        a{
                            @include bgImg(18px,18px,'/imgs/icon-search.png');
                            margin-left: 16px;
                        }
                    }
                }
            }
        }
    }
</style>