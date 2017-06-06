requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        app: '../app',
        'jquery':'jquery-3.2.0.min'
    }
});
// requirejs(['jquery-3.2.0.min','app/carousel'], //jquery报错
requirejs(['jquery','app/carousel','app/fixed','app/gotop','app/waterfall-lazy'],//不报错
function($,carousel,fixed,gotop,waterfallLazy) {
    new carousel($('.carousel'))
    new fixed($('.nav'))
    new gotop(300,500)
    new waterfallLazy($('.container'))  //传入存储数据的容器
});


//定义模块
// define([
//     'jquery'
// ], function(require, factory) {
//     var a=$('h1');
//     console.log(a)
    
// });