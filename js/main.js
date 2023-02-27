$(document).ready(function () {
    // header
    $(".search-icon").click(function () {
        $(".searchbar-container").toggle();
    });

    $('.btn-class').click(function () {
        if ($(this).find('.search-icon').text() == 'search') {
            $(this).find('.search-icon').text('close');
        } else {
            $(this).find('.search-icon').text('search');
        }
    });

    $(".menu-icon").click(function () {
        $(".menu-mb-container").toggle("slide");
    });


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".header").addClass("header-background");
        }
    });

    // end header

    // hero
    $('.hero-banner-number').each(function () {
        const This = $(this);
        $({ Count: This.text() }).animate(
            { Count: This.attr('data-count') },
            {
                duration: 2000,
                easing: 'linear',
                step: function () {
                    This.text(Math.floor(this.Count)
                    )
                },
            }
        )
    })
    // end hero


});