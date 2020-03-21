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
                    <a href="javascript:;">登录</a>
                    <a href="javascript:;">注册</a>
                    <a href="javascript:;" class="my-cart"><span class="icon-cart"></span> 购物车</a>
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
                            <div class="container">
                                <div class="item-children">
                                    <div class="img">
                                        <img src="/imgs/pro1.png" alt="">
                                    </div>
                                    <p>小米CC9</p>
                                    <p class="price">￥1779.00元</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>Redmi红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                </div>
                <div class="header-search">

                </div>

            </div>

        </div>
    </div>
</template>
<script>
    export default {
        name: 'nav-header'

    }
</script>
<style lang="scss">
    @import './../assets/scss/base.scss';
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #B0B0B0;
            .container{
                display: flex;
                justify-content: space-between;
                align-items: center;
                a{
                    display: inline-block;
                    color: #B0B0B0;
                    margin-right: 14px; 
                }
                .my-cart{
                    width: 110px;
                    background-color: #FF6600;
                    text-align: center;
                    color: #fff;
                    .icon-cart{
                        display: inline-block;
                        width: 16px;
                        height: 12px;
                        margin-right: 4px;
                        background: url('/imgs/icon-cart-checked.png') no-repeat center;
                        background-size: contain;
                    }
                }
            }
        }
        .nav-header{
            position: relative;
            left: 0;
            top: 0;
            .container{
                display: flex;
                align-items: center;
                justify-content: space-between;
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
                            display: inline-block;
                            width: 55px;
                            height: 55px;
                            background: url('/imgs/mi-logo.png') no-repeat center;
                            background-size: 55px;
                            transition: margin .2s;
                        }
                        &:after{
                            content: " ";
                            display: inline-block;
                            width: 55px;
                            height: 55px;
                            background: url('/imgs/home-logo.png') no-repeat center;
                            background-size: 55px;
                        }
                        &:hover::before{
                            margin-left: -55px;
                            transition: margin .2s;
                        }
                    }
                }
                .header-menu{
                    display: inline-block;
                    width: 200px;
                    padding-left: 209px;
                    .item-menu{
                        display: inline-block;
                        color: #333333;
                        font-size: 16px;
                        font-weight: bold;
                        line-height: 112px;
                        span{
                            cursor: pointer;
                            &:hover{
                                
                            }
                        }
                        .children{
                            position: absolute;
                            left: 0;
                            top: 100%;
                            .container{
                                position: relative;
                                left: 0;
                                top: 0;
                                height: auto;
                                border-top: 1px solid #dddddd;
                                background-color: #ffffff;
                                .item-children{
                                    position: relative;
                                    left: 0;
                                    top: 0;
                                    display: inline-block;
                                    width: 200px;
                                    padding-top: 20px;
                                    text-align: center;
                                    .img{
                                        width: 100%;
                                        img{
                                            display: block;
                                            width: 100%;
                                        }
                                        p{
                                            font-weight: bold;
                                        }
                                        .price{
                                            color: #FF6600;
                                        }
                                    }
                                    p{
                                        line-height: 1em;
                                        margin-top: 10px;
                                    }
                                    .price{
                                        color: #FF6600;
                                    }
                                    &:after{
                                        content: '';
                                        position: absolute;
                                        right: 0;
                                        top: 20px;
                                        height: 100px;
                                        border-right: 1px solid #ddd;
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