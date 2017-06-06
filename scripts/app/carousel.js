define(function () {
    function carousel(carousel) {
        this.carousel = carousel;
        this.init();
        this.bind();
        this.AutoPlay();
    }
    carousel.prototype = {
        init: function () {
            this.ButtonPre = this.carousel.find('.pre');
            this.ButtonNext = this.carousel.find('.next');
            this.carouselImg = this.carousel.find('.carousel-img');
            this.ImgLi = this.carousel.find('.carousel-img li');
            this.pane = this.carousel.find('.pane');
            this.firstImg = this.carouselImg.find('li').first();
            this.lastImg = this.carouselImg.find('li').last();

            this.curIndex = 0;
            this.Animating = false;

            this.carouselImg.css('left', '-1200px');
            this.carouselImg.append(this.firstImg.clone());
            this.carouselImg.prepend(this.lastImg.clone());
            this.carouselImg.width(this.firstImg.width() * this.carouselImg.children().length); 
        },

        bind: function () {
            var _this = this;
            this.ButtonNext.on('click', function (e) {
                _this.StopAuto();
                e.preventDefault();
                _this.PlayNext();
                _this.AutoPlay()
            }),
                this.ButtonPre.on('click', function (e) {
                    _this.StopAuto();
                    e.preventDefault();
                    _this.PlayPre();
                    _this.AutoPlay()
                }),
            this.pane.on('click', 'li', function (e) {
                _this.StopAuto();
                var distance = ($(this).index() - _this.pane.find('li').index($('.active'))) * _this.firstImg.width();
                _this.carouselImg.animate({
                    left: '-=' + distance + 'px'
                })
                _this.curIndex = $(this).index();
                _this.pane.children().removeClass('active');
                $(this).addClass('active');
                _this.AutoPlay()
            })
        },

        PlayNext: function () {
            if (this.Animating) {
                return;
            }
            // console.log(this)
            var _this = this;
            this.Animating = true;
            this.carouselImg.animate({
                left: '-=1200px'
            }, function () {
                _this.curIndex++;
                if (_this.curIndex > _this.ImgLi.length - 1) {
                    _this.carouselImg.css('left', '-1200px');
                    _this.curIndex = 0;
                }
                _this.setPane()
                _this.Animating = false;
            })
        },

        PlayPre: function () {
            if (this.Animating) {
                return;
            }
            var _this = this;
            this.Animating = true;
            this.carouselImg.animate({
                left: '+=1200px'
            }, function () {
                _this.curIndex--;
                if (_this.curIndex < 0) {
                    _this.carouselImg.css('left', -(_this.ImgLi.length * _this.firstImg.width()) + 'px')
                    _this.curIndex = 3;
                }
                _this.setPane()
                _this.Animating = false;
            })
        },

        setPane: function () {
            this.pane.children()
                .removeClass('active')
                .eq(this.curIndex)
                .addClass('active')
        },

        StopAuto: function () {
            clearInterval(this.clock)
        },

        AutoPlay: function () {
            var _this = this;
            this.clock = setInterval(function () {
                _this.PlayNext()
            }, 2000)
        },

    }
    return carousel
});











