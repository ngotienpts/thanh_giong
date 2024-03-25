document.addEventListener("DOMContentLoaded", function () {
    var windowWidth = window.innerWidth;

    var bodyEle = document.querySelector("body");

    // slide
    var threeSlide = document.querySelector(".js__swiperThreeContainer");
    var fourSlide = document.querySelector(".js__swiperFourContainer");

    const app = {
        // su ly cac su kien
        handleEvent: function () {
            const _this = this;
        },
        // slider three item
        sliderThreeItems: function () {
            var slider = threeSlide.querySelector(".js__swiperThree");
            var next = threeSlide.querySelector(".swiper-button-next");
            var prev = threeSlide.querySelector(".swiper-button-prev");
            new Swiper(slider, {
                slidesPerView: 3,
                spaceBetween: 20,
                navigation: {
                    nextEl: next || null,
                    prevEl: prev || null,
                },
            });
        },
        // slider four item
        sliderFourItems: function () {
            var slider = fourSlide.querySelector(".js__swiperFour");
            var next = fourSlide.querySelector(".swiper-button-next");
            var prev = fourSlide.querySelector(".swiper-button-prev");
            new Swiper(slider, {
                slidesPerView: 4,
                spaceBetween: 35,
                navigation: {
                    nextEl: next || null,
                    prevEl: prev || null,
                },
            });
        },
        // scroll top
        scrollFunc: function () {
            const scrollY = window.scrollY;
        },

        // window scroll
        windowScroll: function () {
            var _this = this;
            window.onscroll = function () {
                // scroll top
                _this.scrollFunc();
            };
        },

        // khoi tao function start
        start: function () {
            // su ly cac su kien
            this.handleEvent();
            // slider one item
            this.sliderThreeItems();
            // slider four item
            this.sliderFourItems();
            // window scroll
            this.windowScroll();
        },
    };

    app.start();
});
