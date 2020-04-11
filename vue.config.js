module.exports = {
    // 本地开发服务器：反向代理，nodejs来启动一个服务
    devServer: {
        host: 'localhost', // 主机
        port: 8080,
        proxy: { 
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }

        }
    },
    // 项目跟路径，已弃用
    // baseUrl: ''
    // 项目如果部署在域名的根目录下，则需要填写对应的子目录路径，否则默认是/，即默认项目在根目录下
    // publicPath: '/app',
    // 打包之后名字，默认是叫dist
    // outputDir: 'dest',
    // 指定输出的根路径的单页面的名称叫什么，默认叫index.html
    // indexPath: 'demo.html',
    // 生成哈希串，解决缓存的问题
    // filenameHashing: true,
    // lint校验
    // lintOnSave:true,
    // 压缩js，生成js.map文件，设置为false则会提高安全性，没有map可提高打包速度
    productionSourceMap: false,

    
}