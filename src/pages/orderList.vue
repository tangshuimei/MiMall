<template>
    <div class="page-order-list">
        <order-header title="订单列表">
            <template v-slot:tip>
                <span>订单列表tip</span>
            </template>
        </order-header>
        <div class="order-body">
            <loading v-if="loading"></loading>
            <ul>
                <li v-for="item in list" :key="item.id">
                    {{item.orderNo}}
                </li>
            </ul>
            <el-button type="primary" :loading="loading" @click="loadMore">加载更多</el-button>
            <el-pagination
                v-if="false"
                background
                layout="prev, pager, next"
                :pageSize="pageSize"
                :total="total"
                @current-change="changePage"
                >
            </el-pagination>
            <no-data v-if="!loading && list.length == 0"></no-data>
        </div>
    </div>
</template>
<script>
    import {Pagination,Button} from 'element-ui'
    import OrderHeader from './../components/OrderHeader'
    import Loading from './../components/Loading'
    import NoData from './../components/NoData'
    export default {
        name: 'orderList',
        data(){
            return {
                list: [],
                loading: true,
                pageSize: 2,
                pageNum: 1,
                total: 0
            }
        },
        components: {
            OrderHeader,
            Loading,
            NoData,
            [Pagination.name]: Pagination,
            [Button.name]: Button,
        },
        mounted () {
            this.getOrderList()
        },
        methods: {
            getOrderList(){
                this.loading = true
                this.axios.get('/orders',{
                    params: {
                        pageSize: this.pageSize,
                        pageNum: this.pageNum
                    }
                }).then((res)=>{
                    this.loading = false
                    this.list = this.list.concat(res.list)
                    this.total = res.total
                }).catch(()=>{
                    this.loading = false
                })
            },
            changePage(pageNum){
                this.pageNum = pageNum
                this.getOrderList()
            },
            loadMore(){
                this.pageNum++;
                this.getOrderList()
            }
        }
    }
</script>
<style lang="scss">
    .page-order-list{
        li{
            padding: 500px;
        }
    }
</style>