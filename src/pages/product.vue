<template>
    <div class="product">
        <product-param :title="product.name">
            <template v-slot:buy>
                <button class="btn" @click="buy(product.id)">立即购买</button>
            </template>
        </product-param>
        <div class="micc9-index">
            <div class="section section-title">
                <div class="con">
                    <h1>{{product.name}}</h1>
                    <p class="intro">{{product.subtitle}}</p>
                    <p class="price"><i>{{product.price | currency}}</i><span>元起</span></p>
                </div>
            </div>
            <div class="section section-video">
                <div class="con">
                    <h2>焕然一新的设计 注入温柔与浪漫的新配色</h2>
                    <p>焕然一新的设计 注入温柔与浪漫的新配色</p>
                    <div class="video-bg">
                        <span @click="showSlide='slideDown'"></span>
                    </div>
                    <!-- 不要在video-box添加v-if，否则动画没了 -->
                    <div class="video-box">
                        <div class="overlay" v-if="showSlide == 'slideDown'"></div>
                        <div class="video" :class="showSlide">
                            <span class="icon-close" @click="showSlide='slideUp'"></span>
                            <video src="/imgs/product/video.mp4" controls="controls" muted autoplay></video>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section section-color">
                <div class="con">
                    <h2>焕然一新的设计<br/>注入温柔与浪漫的新配色</h2>
                </div>
            </div>
        </div>
            
    </div>
</template>
<script>
    import ProductParam from './../components/ProductParam'
    export default {
        name: 'product',
        data(){
            return {
                product: {},
                showSlide: ''
            }
        },
        filters: {
            currency(val){
                if(!val) return 0
                return val.toFixed(0) 
            }
        },
        components: {
            ProductParam
        },
        mounted () {
          this.getProductInfo()  
        },
        methods: {
            getProductInfo(){
                let id = this.$route.params.id
                this.axios.get(`/products/${id}`).then(res=>{
                    this.product = res
                })
            },
            buy(id){
                this.$router.push(`/detail/${id}`)
            }
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    .product{
        button{
            margin-left: 10px;
        }
        .micc9-index{
            color: $colorG;
            .section-title{
                text-align: center;
                @include bgImg(100%,815px,'/imgs/product/section-title.jpg');
                .con{
                    padding-top: 78px;
                    h1{
                        font-size: 59px;
                    }
                    .intro{
                        margin-top: 10px;
                        font-size: 21px;
                        line-height: 31px;
                    }
                    .price{
                        color: $colorA;
                        margin-top: 10px;
                        span{
                            display: inline-block;
                            font-size: 13px;
                            line-height: 1em;
                            vertical-align: bottom;
                        }
                        i{
                            display: inline-block;
                            font-size: 28px;
                            line-height: 1em;
                            font-style: normal;
                            vertical-align: bottom;
                        }
                    }
                }
            }
            .section-video{
                text-align: center;
                h2{
                    margin-bottom: 10px;
                }
                p{
                    margin-bottom: 8px;
                }
                .video-bg{
                    position: relative;
                    margin: 0 auto;
                    z-index: 1;
                    @include bgImg(738px,433px,'/imgs/product/video-bg.jpg');
                    span{
                        @include positionCenter();
                        @include bgImg(48px,48px,'/imgs/icon-start.png');
                        opacity: .8;
                        z-index: 10; 
                    }
                }
                .video-box{
                    position: relative;
                    z-index: 10;
                    .overlay{
                        @include position(fixed);
                        background-color: #000000;
                        opacity: .4;
                    }
                    .video{
                        position: fixed;
                        top: -50%;
                        left: 50%;
                        width: 1000px;
                        height: 536px;
                        opacity: 0;
                        transform: translate(-50%,-50%);
                        @keyframes slideDown{
                            from{
                                top: -50%;
                                opacity: 0;
                            }
                            to{
                                top: 50%;
                                opacity: 1;
                            }

                        }
                        @keyframes slideUp{
                            
                            from{
                                top: 50%;
                                opacity: 1;
                            }
                            to{
                                top: -50%;
                                opacity: 0;
                            }
                        }
                        &.slideDown{
                            animation: slideDown .6s linear ;
                            top: 50%;
                            opacity: 1;
                        }
                        &.slideUp{
                            animation: slideUp .6s linear ;
                            top: -50%;
                            opacity: 0;
                        }
                        .icon-close{
                            position: absolute;
                            top: 20px;
                            right: 20px;
                            cursor: pointer;
                            z-index: 11;
                            @include bgImg(20px,20px,'/imgs/icon-close.png');
                        }
                        video{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                }
            }
            .section-color{
                @include bgImg(100%,337px,'/imgs/product/section-color.jpg');
                h2{
                    padding-top: 87px;
                    margin-left: 306px;
                    font-size: 50px;
                }
            }
        }
            
    }
</style>