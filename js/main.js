$(document).ready(function () {

    let swiperSlider = $('.js-swiper-slider'),
        partnersSlider = $('.js-partners-slider'),
        moreServices = $('.js-more-services'),
        swiperServices = $('.js-swiper-services');


    swiperSlider.each(function () {
        let $this = $(this);

        new Swiper($this.get(0), {
            loop: true,
            navigation: {
                nextEl: $this.siblings('.swiper-button-next'),
                prevEl: $this.siblings('.swiper-button-prev'),
            },
        });
    });

    swiperServices.each(function () {
        let $this = $(this);

        new Swiper($this.get(0), {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 1,
            pagination: {
                el: $this.siblings('.swiper-pagination'),
                clickable: true,
            },

            navigation: {
                nextEl: $this.siblings('.swiper-button-next'),
                prevEl: $this.siblings('.swiper-button-prev'),
            },
            breakpointsInverse: true,
            breakpoints: {
                767: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                }
            }
        });
    });


    moreServices.each(function () {
        let $this = $(this);

        new Swiper($this.get(0), {
            pagination: {
                el: $this.siblings('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: $this.siblings('.swiper-button-next'),
                prevEl: $this.siblings('.swiper-button-prev'),
            },
        });
    });

    partnersSlider.each(function () {
        let $this = $(this);

        new Swiper($this.get(0), {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: $this.siblings('.swiper-pagination'),
                clickable: true,
            },

            navigation: {
                nextEl: $this.siblings('.swiper-button-next'),
                prevEl: $this.siblings('.swiper-button-prev'),
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },

                768: {
                    slidesPerView: 3,
                },
                0: {
                    slidesPerView: 1,
                }
            }
        });
    });


    jQuery(function ($) {
        $('.date').mask('99/99/9999');
        $('.phonemask').mask('+7 (999) 999-99-99');
        $('.phoneext').mask("(999) 999-9999? x99999");
        $(".tin").mask("99-9999999");
        $(".ssn").mask("999-99-9999");
        $(".product").mask("a*-999-a999");
        $(".eyescript").mask("~9.99 ~9.99 999");
    });

    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
});