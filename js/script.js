$('.btn').on('click', function (e) {
    e.preventDefualt;
    $(this).toggleClass('btn_active');
    $('.menu-nav').toggleClass('menu-nav_active');
});