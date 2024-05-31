$(".mobile-menu-icon-hp").click(function() {
    $(".menu-toggle-btn").toggleClass("open");
    $(this).toggleClass("open");
    if ($(".menu-toggle-btn").hasClass("open") == true) {
        $(".menu-text-hp").text("CLOSE");
    } else {
        $(".menu-text-hp").text("MENU");
    }
    $(".navigation").slideToggle();
    $(".overlay-mobile-menu-hp").fadeToggle();
});

$(".inten-url").click(function() {
    if ($(".menu-toggle-btn").hasClass("open") == true) {
        $(".menu-toggle-btn").toggleClass("open");
        $(".menu-text-hp").text("CLOSE");
        $(".navigation").slideToggle();
        $(".overlay-mobile-menu-hp").fadeToggle();
    }
});

$('#gototop').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#gototop').fadeIn();
    } else {
        $('#gototop').fadeOut();
    }
});

$("#gototop").click(function() {
    //1 second of animation time
    //html works for FFX but not Chrome
    //body works for Chrome but not FFX
    //This strange selector seems to work universally
    $("html, body").animate({ scrollTop: 0 }, 1000);
});

$('.member-slider').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    swipe: false,
    draggable: false,
    pauseOnHover: false, 
});

$(function() {
    function loaderSpinner() {
        var loader = $(".loader");
        var wHeight = $(window).height();
        var wWidth = $(window).width();
        var i = 0;
        /*Center loader on half screen */
        loader.css({
            top: wHeight / 2 - 2.5,
            left: wWidth / 2 - 200
        });

        do {
            loader.animate({
                    width: i
                },
                1
            );
            i += 60;
        } while (i <= 400);
        if (i === 420) {
            loader.animate({
                left: 0,
                width: "100%",
                duration: 1
            });
            loader.animate({
                top: "0",
                height: "100vh",
                duration: 1
            });
        }

        /* This line hide loader and show content */
        setTimeout(function() {
            $(".wrapper").fadeIn("slow");
            var owl = $('#main_slider');
            if (owl.length > 0) {
                owl.owlCarousel({
                    loop: true,
                    margin: 0,
                    items: 1,
                    nav: true,
                    dots: true,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                });
                // Listen to owl events:
                owl.on('changed.owl.carousel', function(event) {
                    $('#main_slider .owl-dot').removeClass("nextitem");
                    $('#main_slider .owl-dot.active').next().addClass("nextitem");
                })
                $('#main_slider .owl-dot').each(function() {
                    $(this).children('span').text(parseInt($(this).index() + 1));
                    $('#main_slider .owl-dot.active').next().addClass("nextitem");
                });
            }
            loader.fadeOut("fast");
            /*Set time in milisec */
            $('.banner-text').addClass('text-animation');
            setTimeout(() => {
                $('.banner-text').addClass('end-text-animation');
            }, 2000);

            setTimeout(() => {
                AOS.init({
                    duration: 800,
                    easing: 'ease',
                    once: true,
                });
            }, 500);

            const cur_url = new URL(window.location.href);
            if (cur_url.hash == "#about") {
                setTimeout(() => {
                    $('html, body').animate({ scrollTop: $('#about').position().top }, 'slow');
                    $('.nav-link').removeClass('active');
                    $('.about-nav').addClass('active');
                }, 500);
            }
            if (cur_url.hash == "#service") {
                setTimeout(() => {
                    $('html, body').animate({ scrollTop: ($('#service').position().top - 100) }, 'slow');
                    $('.nav-link').removeClass('active');
                    $('.service-nav').addClass('active');
                }, 500);
            }
            if (cur_url.hash == "#company") {
                setTimeout(() => {
                    $('html, body').animate({ scrollTop: ($('#company').position().top - 100) }, 'slow');
                    $('.nav-link').removeClass('active');
                }, 500);
            }

            window.onscroll = function() { myFunction() };

            var header = document.getElementById("header");
            var sticky = 80;

            function myFunction() {
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                } else {
                    header.classList.remove("sticky");
                }
            }

            // New Javascript
            // Detect request animation frame
            var scroll = window.requestAnimationFrame ||
                function(callback) { window.setTimeout(callback, 1000 / 60) };

            var elementsToShow = document.querySelectorAll('.bg-anim');

            function loop() {
                Array.prototype.forEach.call(elementsToShow, function(element) {
                    if (isElementInViewport(element)) {
                        setTimeout(() => {
                            element.classList.add('is_visible');
                        }, 300);
                    } else {
                        // element.classList.remove('is-visible');
                    }
                });
                scroll(loop);
            }

            // Call the loop for the first time
            loop();

            // Helper function from: http://stackoverflow.com/a/7557433/274826
            function isElementInViewport(el) {
                // special bonus for those using jQuery
                if (typeof jQuery === "function" && el instanceof jQuery) {
                    el = el[0];
                }
                var rect = el.getBoundingClientRect();
                return (
                    (rect.top <= 0 &&
                        rect.bottom >= 0) ||
                    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
                        rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
                    (rect.top >= 0 &&
                        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
                );
            }
        }, 850);
    }

    loaderSpinner();

    $('.inten-url').click(function() {
        setTimeout(() => {
            const cur_url = new URL(window.location.href);
            if (cur_url.hash == "#about") {
                $('.nav-link').removeClass('active');
                $('.about-nav').addClass('active');
            }
            if (cur_url.hash == "#service") {
                $('.nav-link').removeClass('active');
                $('.service-nav').addClass('active');
            }
            if (cur_url.hash == "#company") {
                $('.nav-link').removeClass('active');
            }
        }, 500);
    });
});