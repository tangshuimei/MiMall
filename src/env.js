let baseURL;

// 针对jsonP和CORS，因为如果是代理，直接改vue.config.js中的前缀
console.log(process.env.NODE_ENV)
switch(process.env.NODE_ENV){
    // Process是Nodejs中的一个进程
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prev':
        baseURL = 'http://prev-mall-pre.springboot.cn/api';
        break;
    case 'production':
        baseURL = 'http://prod-mall-pre.springboot.cn/api';
        break;
    default:
        baseURL = 'http://prod-mall-pre.springboot.cn/api';
        break;
}


export default {
    baseURL
}