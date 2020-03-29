// vuex中的actions配置
export default {
    saveUserName(context,username){
        // vuex：2.触发commit
        context.commit('saveUserName',username)
    },
    saveCartCount(context,count){
        context.commit('saveCartCount',count)
    }
}