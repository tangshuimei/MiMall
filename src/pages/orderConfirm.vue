<template>
    <div class="page-order-confirm">
        <div class="address-info">
            <h2>收货地址</h2>
            <div class="list clearfix">
                <div class="item fl" v-for="item in list" :key="item.productId">
                    <p class="name">{{item.receiverName}}</p>
                    <p class="phone">{{item.receiverPhone}}</p>
                    <p class="address">{{item.receiverProvince + item.receiverCity + item.receiverDistrict + item.receiverAddress}}</p>
                    <p class="btns">
                        <a href="javascript:;" class="icon-delete" @click="deleteAddress(item)"></a>
                        <a href="javascript:;" class="icon-edit" @click="editAddress(item)"></a>
                    </p>
                </div>
                <div class="item fl add-btn" @click="openAddressModal">
                    <div class="add-btn-caontain">
                        <img src="/imgs/icon-add.png" alt="">
                        <p>添加新地址</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="cart-list">
            <ul>
                <li v-for="item in cartList" :key="item.id">
                    {{item.productName }} {{item.productPrice}}元x{{item.quantity}}
                </li>
            </ul>
        </div>
        <div class="shipping-box">
            <p>共{{count}}件商品</p>
        </div>
        <modal 
            :title="modalName" 
            btnType="1"
            :showModal="showModal"
            @cancel="showModal = false"
            @submit="submitAddress"
        >
            <template v-slot:body>
                
                <p v-if="userAction == 2">您确认要删除此地址吗？</p>
                <div v-if="userAction == 0" class="edit-wrap">
                    <div class="item">
                        <input type="text" class="input" placeholder="姓名" v-model="checkItem.receiverName">
                        <input type="text" class="input" placeholder="手机号" v-model="checkItem.receiverPhone">
                    </div>
                    <div class="item">
                        <select name="province" id="" v-model="checkItem.receiverProvince">
                            <option value="北京">北京</option>
                            <option value="天津">天津</option>
                            <option value="河北">河北</option>
                        </select>
                        <select name="city" id="" v-model="checkItem.receiverCity">
                            <option value="请选择">请选择</option>
                            <option value="北京">北京</option>
                            <option value="天津">天津</option>
                            <option value="石家庄">石家庄</option>
                        </select>
                        <select name="district" id="" v-model="checkItem.receiverDistrict">
                            <option value="请选择">请选择</option>
                            <option value="昌平区">昌平区</option>
                            <option value="海淀区">海淀区</option>
                            <option value="东城区">东城区</option>
                            <option value="西城区">西城区</option>
                            <option value="顺义区">顺义区</option>
                            <option value="房山区">房山区</option>
                        </select>
                    </div>
                    <div class="item">
                        <textarea name="street" v-model="checkItem.receiverAddress"></textarea>
                    </div>
                    <div class="item">
                        <input type="text" class="input" placeholder="邮编" v-model="checkItem.receiverZip">
                    </div>
                </div>

            </template>
        </modal>
    </div>
</template>
<script>
    import Modal from './../components/Modal'
    export default {
        name: 'orderConfirm',
        data(){
            return {
                list: [], // 收获地址列表
                cartList: [], //购物车中需要结算的商品列表
                cartTotalPrice: 0,
                count: 0,
                checkItem: {}, // 当前选中需要操作的地址
                userAction: '', // 用户行为 0：新增 1：编辑 2：删除
                showModal: false,
                modalName: ''
            }
        },
        components: {
            modal: Modal
        },
        mounted () {
            this.getAddressList()
            this.getCartList()
        },
        methods: {
            getAddressList(){
                this.axios.get('/shippings').then(res=>{
                    this.list = res.list.reverse()
                })
            },
            getCartList(){
                this.axios.get('/carts').then(res=>{
                    let list = res.cartProductVoList
                    this.cartTotalPrice = res.cartTotalPrice //选中商品的总金额
                    this.cartList = list.filter(item=>item.productSelected) //获取购物车中所有商品数据 
                    this.cartList.map(val=>{
                        this.count += val.quantity
                    })
                })
            },
            closeModal(){
                this.modalName = ''
                this.checkItem = {}
                this.userAction = ''
                this.showModal = false
            },
            openAddressModal(){
                // 打开新增地址模框
                this.modalName = '新增地址'
                this.checkItem = {}
                this.userAction = 0
                this.showModal = true
            },
            deleteAddress(item){
                this.modalName = '删除确认'
                this.checkItem = item
                this.userAction = 2
                this.showModal = true
            },
            // 地址删除、编辑、新增功能
            submitAddress(){
                let {checkItem,userAction} = this
                let method,url,params
                if(userAction == 0){
                    // 新增
                    method = 'post', url = '/shippings'
                }
                else if(userAction == 1){
                    method = 'put', url = `/shippings/${checkItem.id}`
                }
                else{
                    method = 'delete', url = `/shippings/${checkItem.id}`
                }
                if(userAction == 0 || userAction == 1){
                    let {receiverName,receiverPhone,receiverProvince,receiverCity,receiverDistrict,receiverAddress,receiverZip} = checkItem
                    let errMsg;
                    if(!receiverName){
                        errMsg = '请输入收货人名称'
                    }
                    else if(!receiverPhone || !/\d{11}/.test(receiverPhone)){
                        errMsg = '请输入正确格式的手机号'
                    }
                    else if(!receiverProvince){
                        errMsg = '请选择省份'
                    }
                    else if(!receiverCity){
                        errMsg = '请选择对应城市'
                    }
                    else if(!receiverDistrict || !receiverAddress){
                        errMsg = '请输入收获地址'
                    }
                    else if(!/\d{6}/.test(receiverZip)){
                        errMsg = '请输入六位邮编'
                    }
                    if(errMsg){
                        this.$message.error(errMsg);
                    }
                    params = {
                        receiverName: receiverName,
                        receiverPhone: receiverPhone,
                        receiverProvince: receiverProvince,
                        receiverCity: receiverCity,
                        receiverDistrict: receiverDistrict,
                        receiverAddress: receiverAddress,
                        receiverZip: receiverZip,
                    }
                }
                this.axios[method](url,params).then(()=>{
                    this.closeModal()
                    this.getAddressList() // 为了防止并发，比如2个人同时登录一个账号操作
                    this.$message.success('操作成功')
                })
            },
            editAddress(){
                
            },
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    .page-order-confirm{
        .address-info{
            h2{
                font-weight: normal;
            }
            .list{
                .item{
                    position: relative;
                    width: 268px;
                    height: 178px;
                    margin-right: 17px;
                    margin-bottom: 20px;
                    padding: 10px;
                    border: 1px solid #e0e0e0;
                    box-sizing: border-box;
                    cursor: pointer;
                    .name{
                        margin-bottom: 10px;
                    }
                    .btns{
                        display: flex;
                        justify-content: space-between;
                        position: absolute;
                        bottom: 0;
                        left: 10px;
                        right: 10px;
                        .icon-delete{
                            padding: 10px;
                            @include bgImg(20px,20px,'/imgs/icon-delete.png',20px);
                        }
                        .icon-edit{
                            padding: 10px;
                            @include bgImg(20px,20px,'/imgs/icon-edit.png',20px);
                        }

                    }
                    &.add-btn{
                        .add-btn-caontain{
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%,-50%);
                            text-align: center;
                            img{
                                display: inline-block;
                                width: 30px;
                                height: 30px;
                                margin-bottom: 8px;
                            }
                        }
                    }
                }
            }
        }
        .edit-wrap{
            color: #999;
            font-size: 14px;
            .item{
                margin-bottom: 15px;
                input{
                    display: inline-block;
                    width: 183px;
                    height: 40px;
                    padding-left: 15px;
                    line-height: 40px;
                    border: 1px solid #e5e5e5;
                    &+.input{
                        margin-left: 14px;
                    }
                }
                select{
                    // width: 100px;
                    height: 40px;
                    margin-right: 15px;
                    line-height: 40px;
                    border: 1px solid #e5e5e5;
                }
                textarea{
                    width: 100%;
                    height: 100%;
                    padding: 13px 15px;
                    box-sizing: border-box;
                }
            }

        }
    }
</style>