<template>
    <div class="page-cart">
        <order-header title="购物车">
            <template v-slot:tip>
                 <p class="order-header-tip">温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
            </template>
        </order-header>
        <div class="container page-main">
            <div class="cart-goods-list">
                <div class="list-row list-head ">
                    <div class="col col-check" :class="{'checked':allChecked}" @click="toggleAll">
                        <em></em>
                        全选
                    </div>
                    <div class="col col-img"></div>
                    <div class="col col-name">商品名称</div>
                    <div class="col col-price">单价</div>
                    <div class="col col-num">数量</div>
                    <div class="col col-total">小计</div>
                    <div class="col col-opt">操作</div>
                </div>
                <div class="list-row list-body">
                    <div class="row-item" v-for="(item) in list" :key="item.productId" @click="checkItem(item.productId)">
                        <div class="col col-check" :class="{'checked': item.productSelected}">
                            <em></em>
                        </div>
                        <div class="col col-img">
                            <img v-lazy="item.productMainImage" alt="">
                        </div>
                        <div class="col col-name">{{item.productName}}</div>
                        <div class="col col-price">{{item.productPrice | currency}}</div>
                        <div class="col col-num">
                            <div class="col-num-inner">
                                <div class="num-btn" @click.stop="reduceItemNum(item.productId)">-</div>
                                <div class="num-input">
                                    <input type="text" v-model="item.quantity" @click.stop @input="blurItemNum($event)">
                                </div>
                                <div class="num-btn" @click.stop="addItemNum(item.productId)">+</div>
                            </div>
                        </div>
                        <div class="col col-total">
                            {{item.productTotalPrice | currency}}
                        </div>
                        <div class="col col-opt">
                            <span class="icon-close" @click.stop="deleteItem(item.productId)"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart-bar">
                <div class="info">
                    <a href="/index">继续购买</a>
                    <span>共<em>{{list.length}}</em>件商品，已选择<em>{{checkNum}}</em>件</span>
                </div>
                <div class="opt-btn">
                    <div class="price">
                        <p>
                          合计<span>{{cartTotalPrice}}</span>元  
                        </p>
                    </div>
                    <a href="javascript:;" class="btn" @click="order">去结算</a>
                </div>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    import OrderHeader from './../components/OrderHeader'
    import NavFooter from './../components/NavFooter'
    
    export default {
        name: 'cart',
        data(){
            return {
                cartList: [],
                list: [], //购物车数量
                allChecked: false, // 是否全选
                cartTotalPrice: 0, // 商品总金额
                checkNum: 0, // 选中商品数量
                checkedProductIds: [],
            }
        },
        components: {
            OrderHeader,
            NavFooter,
        },
        filters: {
            currency(val){
                if(!val) return 0
                return val.toFixed(0) + '元'
            }
        },
        mounted () {
            this.getCartList()
        },
        methods: {
            getCartList(){
                this.axios.get('/carts').then((res)=>{
                    this.renderData(res)
                })
            },
            toggleAll(){
                let url = this.allChecked?'/carts/unSelectAll':'/carts/selectAll'
                this.axios.put(url).then((res)=>{
                    this.renderData(res)
                })
            },
            renderData(res){
                    this.list = res.cartProductVoList || []
                    this.allChecked = res.selectedAll
                    this.cartTotalPrice = res.cartTotalPrice
                    this.checkNum = res.cartProductVoList.filter(item=>item.productSelected).length
            },
            order(){
                // every 每个都没有选中
                let isCheck = this.list.every(item=>!item.productSelected)
                if(isCheck){
                    alert('请选择一件商品')
                }
                else{
                    this.$router.push('/order/confirm');
                }

            },
            checkItem(id){
                let index = this.checkedProductIds.indexOf(id)
                if(index>-1){
                    this.checkedProductIds.splice(index,1)
                }
                else{
                    this.checkedProductIds.push(id)
                }
            },
            reduceItemNum(id){
                this.cartList.forEach((val)=>{
                    if(val.productId === id)
                        if(val.quantity>1)
                            val.quantity -= 1
                })
                
            },
            addItemNum(id){
                this.cartList.forEach((val)=>{
                    if(val.productId === id)
                        val.quantity += 1
                })

            },
            deleteItem(id){
                let index = this.cartList.map((val,index)=>{
                    if(val.id === id)
                        return index
                })
                let index2 = this.checkedProductIds.indexOf(id)
                this.cartList.splice(index,1)
                if(index2>-1) this.checkedProductIds.splice(index2,1)
                // this.axios.get('/carts/delete').then(res=>{
                //     this.checkedProductIds.splice(index,1)
                // })
            },
            blurItemNum(e){
                let val = e.target.value
                if(typeof val != 'number'){
                    console.log(val.substring(0,val.length-1))
                    e.target.value = val.substring(0,val.length-1)
                }
            }
        }

    }
</script>
<style lang="scss">
    @import './../assets/scss/config.scss';
    @import './../assets/scss/mixin.scss';
    .page-cart{
        background-color: #F5F5F5;
        .order-header-tip{
            display: inline-block;
            color: #757575;
            line-height: 1em;
            vertical-align: bottom;display: inline-block;
            color: #757575;
            line-height: 1em;
            vertical-align: bottom;
        }
        .page-main{
            padding: 38px 0;
            background-color: $colorJ;
            .cart-goods-list{
                margin-bottom: 20px;
                background-color: $colorG;
                .list-head{
                    @include flex();
                    .col{
                        height: 70px;
                        line-height: 70px;
                        &.col-check{
                            cursor: pointer;
                        }
                    }
                    
                }
                .list-row{
                    .row-item{
                        @include flex();
                        padding: 15px 26px 15px 0;
                        border-top: 1px solid #e0e0e0;
                        cursor: pointer;
                    }
                }
                
                .col{

                }
                .col-check{
                    width: 110px;
                    &.checked{
                        em{
                            background-color: $colorA;
                            border-color: $colorA;
                        }
                    }
                    em{
                        @include bgImg(20px,20px,'/imgs/icon-ok.png');
                        margin-left: 20px;
                        margin-right: 15px;
                        vertical-align: middle;
                        border: 1px solid #e0e0e0;
                    }
                }
                .col-img{
                    width: 80px;
                    height: 80px;
                    line-height: 80px;
                    padding-right: 40px;
                    img{
                        display: inline-block;
                        width: 100%;
                        vertical-align: middle;
                    }
                }
                .col-name{
                    width: 380px;
                    color: #424242;
                    font-size: 18px;
                }
                .col-price{
                    width: 140px;
                    padding-right: 18px;
                    color: #424242;
                    text-align: center;
                }
                .col-num{
                    width: 150px;
                    text-align: center;
                    .col-num-inner{
                        width: 150px;
                        @include flex();
                        border: 1px solid #e0e0e0;
                        box-sizing: border-box;
                        .num-btn{
                            flex-shrink: 0;
                            display: inline-block;
                            width: 38px;
                            height: 38px;
                            color: #757575;
                            text-align: center;
                            line-height: 38px;
                            cursor: pointer;
                        }
                        .num-input{
                            flex: 1;
                            input{
                                display: inline-block;
                                width: 100%;
                                height: 100%;
                                height: 38px;
                                text-align: center;
                                line-height: 38px;
                                border: none;
                            }
                        }
                    }
                }
                .col-total{
                    width: 120px;
                    margin-right: 81;
                    text-align: center;
                }
                .col-opt{
                    width: 80px;
                    text-align: center;
                    .icon-close{
                        @include bgImg(16px,16px,'/imgs/icon-close.png');
                        padding: 4px;
                        border-radius: 100%;
                        overflow: hidden;
                        transition: background .4s;
                        &:hover{
                            @include bgImg(16px,16px,'/imgs/icon-close-hover.png',100%);
                            background-color: #e53935;
                        }
                    }
                }
            }
            .cart-bar{
                @include flex();
                .info{
                    a{
                        display: inline-block;  
                        padding-left: 32px; 
                    }
                    span{
                        display: inline-block;
                        margin-left: 16px;
                        padding-left: 16px;
                        border-left: 1px solid #eee;
                        color: #757575;
                        em{
                            color: $colorA;
                        }
                    }
                }
                .opt-btn{
                    display: flex;
                    .price{
                        display: flex;
                        align-items: center;
                        p{
                            line-height: 14px;
                            vertical-align: baseline;
                            span{
                                display: inline-block;
                                font-size: 30px;
                                line-height: 14px;
                                vertical-align: baseline;
                            } 
                        }
                    }
                    a{
                        display: inline-block;
                        width: 200px;
                        height: 48px;
                        line-height: 48px;
                        font-size: 18px;
                        margin-left: 50px;
                    }
                }
            }
        }
    }
</style>