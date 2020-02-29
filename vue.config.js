const webpack = require('webpack')
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 基本路径
    publicPath: './',
    
    // build: {
    //   // 生产环境下面的配置
    //     index: path.resolve(__dirname, '../dist/index.html'),//index编译后生成的位置和名字，根据需要改变后缀，比如index.php
    //     assetsRoot: path.resolve(__dirname, '../dist'),//编译后存放生成环境代码的位置
    //     assetsSubDirectory: 'public',//js,css,images存放文件夹名
    //     assetsPublicPath: './',//发布的根目录，通常本地打包dist后打开文件会报错，此处修改为./。如果是上线的文件，可根据文件存放位置进行更改路径
    //     productionSourceMap: true,
    //     devtool: '#source-map',//①
    //     //unit的gzip命令用来压缩文件，gzip模式下需要压缩的文件的扩展名有js和css
    //     productionGzip: false,
    //     productionGzipExtensions: ['js', 'css'],
    //     bundleAnalyzerReport: process.env.npm_config_report
    // },
    
    // webpack配置
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery'
            })
        ]
    },
    /* 生产环境是否生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,
    /* 代码保存时是否进行eslint检测 */
    lintOnSave: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
        config.entry.app = ["babel-polyfill", resolve('src/main.js')],
        config.resolve.alias
            .set('@', resolve('src'))
    }
}
