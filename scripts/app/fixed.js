define([
    'jquery'
], function ($) {
    function fixed($node) {
        this.init($node);
        this.bind();
    }
    fixed.prototype = {
        init: function ($node) {
            this.$nav = $node
            this.$navClone = this.$nav.clone().css({ 'visibility': 'hidden', 'display': 'none' }).insertBefore(this.$nav); //clone一个相同的固定导航栏占位，避免导航栏fixed的时候出现跳动;
            this.offsetTop = this.$nav.offset().top; //this.offsetLeft = this.$nav.offset().left;
        },
        bind: function () {
            var _this = this;
            $(window).on('scroll', function () {
                var scrollTop = $(this).scrollTop();
                if (scrollTop >= _this.offsetTop) {
                    if (!_this.isFixed()) {
                        _this.setFixed();
                    }
                } else {
                    if (_this.isFixed()) {
                        _this.unsetFixed();
                    }
                }
            })
        },
        isFixed: function () {
            return this.$nav.data('data-fixed')
        },
        setFixed: function () {
            this.$nav.data('data-fixed', true).css({ 'position': 'fixed', 'top': '0', 'left': '0', 'z-index': '9999', 'width': '100%' });
            this.$navClone.show();
        },
        unsetFixed: function () {
            this.$nav.data('data-fixed', false).removeAttr('style');  //上述.css属性所添加的样式是内联样式,形如<p style="backgroud:red">,removeAttr同样删除内联;
            this.$navClone.hide();
        }
    }
    return fixed
});