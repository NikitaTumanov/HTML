$(".accordeon > li > a").click(function (e) {
    e.preventDefault();

    var menu = $(this).closest('.accordeon');

    if (false === $(this).next().is(':visible')) {
        menu.find('li').removeClass('slide active');
        menu.find('ul').slideUp();
    }

    $(this).next().slideToggle();
    $(this).parent().addClass('slide');
});