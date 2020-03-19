// 数据存储工具箱，设置一些sessionStorage、localStorage、cookie存值取值的规范
const STORAGE_KEY = 'mall'

export default {
    // 存储值
    setItem(key,value,module_name){
        if(module_name){
            let val = this.getItem(module_name)
            val[key] = value
            this.setItem(module_name,val)
        }
        else{
            let val = this.getStorage()
            val[key] = value
            this.setStorage(val)
        }
    },
    // 获取值
    getItem(key,module_name){
        if(module_name){
            let val = this.getItem(module_name)
            if(val) return val[key]
        }
        return this.getStorage()[key]
    },
    // 获取storage
    getStorage(){
        // return (window.sessionStorage) || {}
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)) || {}
    },
    // 设置stroage
    setStorage(value){
        // 虽然sessionStorage是全局变量，但加上window可以被任何上下文识别，避免eslint报错
        // 传入得value在getStorage之后变成了一个json对象，因此在存入sessionStorage需要用JSON.stringify转化为字符串
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(value))
    },
    // 清除某一个值
    clear(key,module_name){
        let val = this.getStorage()
        if(module_name){
            if(!val[module_name])
                return
            delete val[module_name][key]   
        }
        delete val[key]
        this.setStorage(val)
    },
}