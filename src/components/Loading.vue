<template>
    <div class="component-loading">
        <img src="/imgs/loading-svg/loading.svg" alt="">
    </div>
</template>
<script>
export default {
    name: 'loading',
}
</script>
<style lang="scss">
    .component-loading{
        height: 80px;
        padding: 30 0;
        line-height: 80px;
        text-align: center;
        img{
            height: 100%;
        }
    }
</style>