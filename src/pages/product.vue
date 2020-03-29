<template>
    <div class="product">
        <product-param>
            <template v-slot:buy>
                <button class="btn">立即购买</button>
            </template>
        </product-param>
        <div class="item-video">
            <h2>焕然一新的设计 注入温柔与浪漫的新配色</h2>
            <p>焕然一新的设计 注入温柔与浪漫的新配色</p>
            <div class="video-bg">
                <span @click="showSlide=true"></span>
            </div>
            <!-- 不要在video-box添加v-if，否则动画没了 -->
            <div class="video-box">
                <div class="overlay" v-if="showSlide"></div>
                <div class="video" :class="{'slide': showSlide}">
                    <span class="icon-close" @click="showSlide=false"></span>
                    <video src="/imgs/product/video.mp4" controls="controls" muted autoplay></video>
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
                showSlide: false
            }
        },
        components: {
            ProductParam
        },
        methods: {
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    .product{
        button{
            margin-left: 10px;
        }
        .item-video{
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
                    transition: all .6s;
                    &.slide{
                        top: 50%;
                        opacity: 1;
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
    }
</style>