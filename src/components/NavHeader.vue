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
        name: 'nav-header'

    }
</script>
<style lang="scss">
    @import './../assets/scss/base.scss';
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
                            &:hover{
                                
                            }
                        }
                        .children{
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
                        }
                        a{
                            @include bgImg(18px,18px,'/imgs/icon-search.png');
                        }
                    }
                }
            }
        }
    }
</style>