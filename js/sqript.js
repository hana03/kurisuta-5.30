

// メニュー

$('.sp-nav-list').hide();
$('.fa-bars').on('click', function () {
    $('.sp-nav-list').toggle();
})

$('.sp-nav-list').on('click', function () {
    $('.sp-nav-list').fadeOut();
});

$('.fa-times').on('click', function () {
    $('.sp-nav-list').fadeOut();
});


// スリック

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 2000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
});
