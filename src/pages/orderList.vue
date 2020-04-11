<template>
    <div class="page-order-list">
        <order-header title="订单列表">
            <template v-slot:tip>
                <span>订单列表tip</span>
            </template>
        </order-header>
        <div class="order-body">
            <ul>
                <li v-for="item in list" :key="item.id">
                    {{item.orderNo}}
                </li>
                
            </ul>
            <div class="scroll-more" 
                v-show="showScrollMore"
                v-infinite-scroll="scrollMore" 
                infinite-scroll-disabled="busy" 
                infinite-scroll-distance="210"
                infinite-scroll-immediate-check="false"
            >
                
                <img src="/imgs/loading-svg/loading.svg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    import OrderHeader from './../components/OrderHeader'
    import InfiniteScroll from 'vue-infinite-scroll'
    export default {
        name: 'orderList',
        data(){
            return {
                list: [],
                pageSize: 1,
                pageNum: 1,
                busy: true, // 滚动加载是否触发
                showScrollMore: false,
            }
        },
        directives: {InfiniteScroll},
        components: {
            OrderHeader,
        },
        created () {
        },
        mounted () {
            this.getList()
        },
        methods: {
            changePage(pageNum){
                this.pageNum = pageNum
                this.getOrderList()
            },
            scrollMore: function() {
                this.busy = true
                setTimeout(() => {
                    this.pageNum++;
                    this.getList()
                }, 500);
            },
            // 专门给scrollMore使用
            getList(){
                this.busy = true
                this.showScrollMore = true
                this.axios.get('/orders',{
                    params: {
                        pageSize: this.pageSize,
                        pageNum: this.pageNum
                    }
                }).then((res)=>{
                    this.list = this.list.concat(res.list)
                    if(res.hasNextPage){
                        this.busy = false;
                        this.showScrollMore = true
                    }
                    else{
                        this.busy = true;
                        this.showScrollMore = false
                    }
                })
            },
        }
    }
</script>
<style lang="scss">
    .page-order-list{
        li{
            padding: 300px;
        }
        img{
            width: 100px;
            height: 100px;
        }
    }
</style>