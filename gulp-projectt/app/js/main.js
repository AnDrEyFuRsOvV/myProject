$(function () {


    $('.dropdown__btn').on('click', function(){
        $('.dopdown__content').toggleClass('disabled');
    });

    $('.menu__btn').on('click', function(){
        $('.header__nav').toggleClass('active');
        
    });
    

    $('.close-btn').on('click', function(){
        $('.menu').removeClass('active');
    });
});

        
        
