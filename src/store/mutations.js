// vuex中的mutations配置
export default {
    saveUserName(state,username){
        // vuex：3.改变状态state
        state.username = username
    },
    saveCartCount(state,count){
        state.cartCount = count
    }
}