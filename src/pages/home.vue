// home页存在意义:存放header和footer，中间用view-router用于切换中间内容,这样每个具有复用header和footer的页面都少些这2部分的内容,同时,home承载子页面首页和子页面产品页的主视图
<template>
    <div>
        <nav-header></nav-header>
        <view-router></view-router>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    export default {
        name: 'order'

    }
</script>

