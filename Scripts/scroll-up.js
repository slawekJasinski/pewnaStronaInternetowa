jQuery(function($)
{
    //zresetuj scrolla
    $.scrollTo(0);
    
    $('.scrollup').click(function() { $.scrollTo($('body')); });
}
);

//pokaż podczas przewijania
$(window).scroll(function()
{
    if($(this).scrollTop()>300) $('.scrollup').fadeIn();
    else $('.scrollup').fadeOut();		
}
);