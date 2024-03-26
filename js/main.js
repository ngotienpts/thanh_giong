document.addEventListener("DOMContentLoaded", function () {
    var windowWidth = window.innerWidth;

    var bodyEle = document.querySelector("body");
    // back top
    var backTop = document.querySelector("#back-top");

    // sub menu
    const subMenus = document.querySelectorAll(".js__subMenuContainer");

    // search pc
    var searchPc = document.querySelector(".js__searchPc");

    // slide
    var threeSlide = document.querySelector(".js__swiperThreeContainer");
    var fourSlide = document.querySelector(".js__swiperFourContainer");
    var sixSlide = document.querySelector(".js__swiperSixContainer");
    var gallerrySlide = document.querySelector(".js__swiperGalleryContainer");

    const app = {
        // su ly cac su kien
        handleEvent: function () {
            const _this = this;

            // when click back top
            if (backTop) {
                backTop.onclick = function () {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                };
            }

            // submenu
            if (subMenus) {
                subMenus.forEach((subMenu) => {
                    var menu = subMenu.querySelector(".js__subMenu");
                    var showSubMenu = subMenu.querySelector(".js__showSubMenu");
                    var closeSubMenu =
                        subMenu.querySelector(".js__closeSubMenu");

                    showSubMenu.onclick = function () {
                        menu.classList.add("active");
                        bodyEle.classList.add("overflow-hidden");
                    };
                    closeSubMenu.onclick = function () {
                        menu.classList.remove("active");
                        bodyEle.classList.remove("overflow-hidden");
                    };
                });
            }

            // search pc
            if (searchPc) {
                var showSearchPc = searchPc.querySelector(".js__showSearchPc");
                var formSearchPc = searchPc.querySelector(
                    ".js__searchContainer"
                );

                showSearchPc.onclick = function () {
                    formSearchPc.classList.toggle("open");
                    this.classList.toggle("active");
                };
            }
        },
        // slider three item
        sliderThreeItems: function () {
            var slider = threeSlide.querySelector(".js__swiperThree");
            var next = threeSlide.querySelector(".swiper-button-next");
            var prev = threeSlide.querySelector(".swiper-button-prev");
            new Swiper(slider, {
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: {
                    nextEl: next || null,
                    prevEl: prev || null,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                },
            });
        },
        // slider four item
        sliderFourItems: function () {
            var slider = fourSlide.querySelector(".js__swiperFour");
            var next = fourSlide.querySelector(".swiper-button-next");
            var prev = fourSlide.querySelector(".swiper-button-prev");
            new Swiper(slider, {
                slidesPerView: 1,
                spaceBetween: 35,
                navigation: {
                    nextEl: next || null,
                    prevEl: prev || null,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                },
            });
        },
        // slider six item
        sliderSixItems: function () {
            var slider = sixSlide.querySelector(".js__swiperSix");
            var next = sixSlide.querySelector(".swiper-button-next");
            var prev = sixSlide.querySelector(".swiper-button-prev");
            new Swiper(slider, {
                slidesPerView: 2,
                spaceBetween: 33,
                navigation: {
                    nextEl: next || null,
                    prevEl: prev || null,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 6,
                    },
                },
            });
        },
        // slider gallery
        sliderGallery: function () {
            var sliderLarge = gallerrySlide.querySelector(
                ".js__swiperGalleryLarge"
            );
            var sliderSmall = gallerrySlide.querySelector(
                ".js__swiperGallerySmall"
            );
            var pagi = gallerrySlide.querySelector(".swiper-pagination");

            var small = new Swiper(sliderSmall, {
                slidesPerView: 2,
                spaceBetween: 20,
                loop: true,
                freeMode: true,
                watchSlidesProgress: true,
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 1.5,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        direction: "horizontal",
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 35,
                        direction: "vertical",
                    },
                },
            });
            var large = new Swiper(sliderLarge, {
                spaceBetween: 10,
                slidesPerView: 1,
                slidesPerGroup: 1,
                loop: true,
                pagination: {
                    el: pagi || null,
                },
                thumbs: {
                    swiper: small,
                },
            });
        },
        // scroll top
        scrollFunc: function () {
            const scrollY = window.scrollY;

            if (backTop) {
                if (
                    document.body.scrollTop > 300 ||
                    document.documentElement.scrollTop > 300
                ) {
                    backTop.style.opacity = 1;
                    backTop.style.visibility = "visible";
                } else {
                    backTop.style.opacity = 0;
                    backTop.style.visibility = "hidden";
                }
            }
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
            // slider six item
            this.sliderSixItems();
            // slider gallery
            this.sliderGallery();
            // window scroll
            this.windowScroll();
        },
    };

    app.start();
});
