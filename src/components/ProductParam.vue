<template>
    <div class="component-product-params" :class="{'is_fixed':isFixed}">
        <div class="container">
            <div class="pro-title">{{title}}</div>
            <div class="pro-param">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'product-params',
        props: {
            title: String
        },
        data(){
            return{
                isFixed: false
            }
        },
        mounted () {
          window.addEventListener('scroll',this.initHeight,false)  
        },
        destroyed () {
          window.removeEventListener('scroll',this.initHeight,false)  
        },
        methods: {
            initHeight(){
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                this.isFixed = scrollTop>152?true:false;

            }
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/config.scss';
    @import './../assets/scss/mixin.scss';
    .component-product-params{
        height: 70px;
        line-height: 70px;
        border-top: 1px solid $colorH;
        background-color: $colorG; 
        z-index: 10;
        &.is_fixed{
            position: fixed;
            width: 100%;
            top: 0;
            box-shadow: 0 5px 5px #cccccc;
        }
        .container{
            @include flex();
            .pro-title{
                color: $colorB;
                font-size: $fontH;
                font-weight: bold;
            }
            .pro-param{
                font-size: $fontJ;
                span{
                    @include sepSpan(10px)
                }
                a{
                    color: $colorC;
                }
            }
        }
    }
</style>