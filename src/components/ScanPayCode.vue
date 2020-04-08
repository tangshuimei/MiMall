<template>
    <div class="component-scan-pay-code">
        <div class="mask"></div>
        <div class="img">
            <a href="javascript:;" class="icon-close" @click="close"></a>
            <img :src="img" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'scan-pay-code',
    data(){
        return {
            
        }
    },
    props: ['img'],
    methods: {
        close(){
            this.$emit('close');
        }
    }
}
</script>
<style lang="scss">
    @import './../assets/scss/config.scss';
    @import './../assets/scss/mixin.scss';
    .component-scan-pay-code{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 10;
        .mask{
            @include position(fixed);
            background: $colorI;
            opacity: .5;
        }
        .img{
            position: fixed;
            left: 50%;
            top: 50%;
            width: 300px;
            height: 300px;
            padding: 20px;
            background-color: $colorG;
            transform: translate(-50%,-50%);
            .icon-close{
                @include postionImg(absolute,0,0,20px,20px,'/imgs/icon-close.png');
            }
            img{
                width: 100%;
                border: none;
            }
        }
    }
</style>