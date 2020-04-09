<template>
    <div class="component-no-data">
        <img src="/imgs/icon-no-data.png" alt="">
        <p>当前暂无提交的记录</p>
    </div>
</template>
<script>
export default {
    name: 'no-data'
}
</script>
<style lang="scss">
    .component-no-data{
        text-align: center;
        img{
            display: inline-block;
            width: 64px;
            padding-bottom: 10px;
        }
        p{
            padding-bottom: 30px;
        }
    }
</style>