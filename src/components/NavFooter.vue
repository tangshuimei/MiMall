<template>
    <div class="footer">
        <div class="footer-logo">
            <div class="logo">
                <img src="/imgs/mi-logo.png" alt="">
            </div>
            <p>小米商城</p>
        </div>
        <div class="footer-nav">
            <a href="/product">小米商城</a>
            <a href="">MIUI</a>
            <a href="">米家</a>
        </div>
        <p class="copyright">
            Copyright ©2020 <a href="/#">mi.com</a> All Rights Reserved
        </p>
    </div>
</template>
<script>
    export default {
        name: 'nav-footer'

    }
</script>
<style lang="scss">
    @import './../assets/scss/config.scss';
    .footer{
        padding-bottom: 20px;
        color: #dddddd;
        font-size: 12px;
        line-height: 12px;
        text-align: center;
        background-color: #333;
        .footer-logo{
            padding-top: 40px;
            margin-bottom: 26px;
            .logo{
                width: 60px;
                height: 60px;
                margin: 0 auto 14px;
                background-color: $colorA;
                img{
                    width: 100%;
                }
            }
        }
        .footer-nav{
            a{
                display: inline-block;
                padding: 0 8px;
                margin-bottom: 10px;
                color: #dddddd;
                border-right: 1px solid #dddddd;
            }
            &:last-child{
                border: none;
            }
        }
        .copyright{
            a{
                color: $colorA;
            }
        }
    }
</style>