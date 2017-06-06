define([
    'jquery'
], function ($) {
    function waterfallLazy(container) {
        this.$container=container
        this.hasNews = true;//是否有更多信息的标志位
        this.isDataArrive = true //避免数据到来之前发送多余的请求
        this.curPage = 0;
        this.bindEvent();
    }
    waterfallLazy.prototype = {
        //瀑布流
        waterfall: function () {
            var colLength = parseInt(this.$container.width() / this.$container.find('li').width());  ///?????????????????find li?
            var arr = [];
            var _this=this;
            for (var i = 0; i < colLength; i++) {
                arr[i] = 0;
            }
            this.$container.find('li').each(function () {
                var minValue = Math.min.apply(null, arr);
                var minIndex = arr.indexOf(minValue)
                $(this).css({
                    left: $(this).outerWidth(true) * minIndex,
                    top: minValue
                })
                arr[minIndex] += $(this).outerHeight(true)
                var maxValue=Math.max.apply(null,arr)
                _this.$container    .css({height:maxValue})  //避免li元素绝对定位之后脱离文档流，使ul与li元素等高
            })
        },


        //ajax请求获取数据
        bindEvent: function () {
            var _this = this;
            var symbol=$('.symbol')
            $(window).on('scroll', function () {
                if (_this.hasNews&&_this.isDataArrive&&_this.isVisible(symbol)) {
                    _this.isDataArrive = false
                    _this.curPage += 1;
                    _this.ajaxRequest()
                } else {
                    return
                }
            })
        },

        ajaxRequest: function () {
            var _this = this
            this.getData('/Ajax-' + this.curPage, function (result) {
                console.log('success')
                _this.isDataArrive=true;
                _this.appendHtml(result)
                if (result[2].hasNext === false) {
                    
                    var remind = '';
                    remind += '<p class="remind" style="text-align:center;color:#777371">哥，这回真没了</p>';
                    $('.news').append(remind);
                    _this.hasNews = false;
                }
            }, function () {
                console.log('fail')
            })
        },

        getData: function (URL, success, fail) {
            console.log('发送请求了')
            $.ajax({
                url: URL,
                type: 'get',
            }).done(function (ret) {
                success(ret)
            }).fail(function () {
                fail();
            })
        },

        appendHtml: function (data) {
            // console.log(data[1])
            for(var i=0;i<data.length;i++){
                 var news = ''; //每次合成一个li之后都要初始化news;
                news += ' <li>'
                + '   <a href="javascript:void(0)"><img src="' + data[i].jpg + '" alt=""></a>'
                + '  <h4>' + data[i].headline + '</h4>'
                + ' <p>' + data[i].content +'</p > '
                + '</li>';
                $('.container').append(news);
            }
            this.waterfall();  //获取一次数据变进行一次瀑布流排列
        },

        //懒加载，判断标志位是否出现在页面中
        isVisible:function($node){
            var scrollH=$(window).scrollTop(),
               windowH=$(window).height(),
               nodeH=$node.offset().top;
               if(nodeH<=scrollH+windowH){
                   return true
               }else{
                   return false
               }
        }
    }

    return waterfallLazy
});