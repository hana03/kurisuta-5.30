
$('.sp-nav-list').hide();
$('.fa-bars').on('click',function(){
    $(this).next().slideToggle();
})

$('.sp-nav-list').on('click',function(){
    $('sp-nav-list').fadeOut();
})