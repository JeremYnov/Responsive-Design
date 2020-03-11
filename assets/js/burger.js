jQuery(function ($) {

    $('.header-nav-wrapper').on('click', function () {
        if ($('.header-nav-burger').hasClass('is-animate')) {
            setTimeout(function () {
                $('.overlay').removeClass('is-open')
                $('.overlay').toggle();
            }, 500)
            $('html').removeClass('overflow')
            $('.nav-responsive').removeClass('nav-transition')
            $('.header-nav-burger').removeClass('is-animate')
            $('.nav-responsive .header-right-part').removeClass('is-visible')
            $('.nav-responsive .header-single--title').removeClass('is-visible')
            $('.nav-responsive .header-category').removeClass('is-visible')
        }
        else {
            $('.overlay').toggle();

            setTimeout(function () {
                $('.overlay').addClass('is-open')
            }, 200)
            $('html').addClass('overflow')
            $('.nav-responsive').addClass('nav-transition')
            $('.header-nav-burger').addClass('is-animate')
            $('.nav-responsive .header-right-part').addClass('is-visible')
            $('.nav-responsive .header-single--title').addClass('is-visible')
            $('.nav-responsive .header-category').addClass('is-visible')
        }
    })

    $('.overlay').on('click', function () {

        setTimeout(function () {
            $('.overlay').removeClass('is-open')
            $('.overlay').toggle();
        }, 500)

        $('html').removeClass('overflow')
        $('.nav-responsive').removeClass('nav-transition')
        $('.header-nav-burger').removeClass('is-animate')
    })
})