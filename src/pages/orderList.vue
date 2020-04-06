<template>
    <div class="page-order-list">
       
    </div>
</template>
<script>
    export default {
        name: 'orderList'

    }
</script>
<style lang="scss">
    .inner{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 500px;
        border: 1px solid blueviolet;
        .left{
            display: inline-block;
            width: 100px;
            height: 200px;
            background-color: red;
        }
        .mid{
            display: inline-block;
            flex: 1;
            background-color: yellow;
        }
        .right{
            display: inline-block;
            width: 100px;
            height: 200px;
            background-color: green;
        }
    }
</style>