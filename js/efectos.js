$(document).ready(function(){
    $('.menu a').each(function(index , elemento){
       
        $(this).css({
            'top' : '-200px'
        });
       
        $(this).animate({
            top: '0'
        }, 2000 + (index*500));
    });
    
    if($(window).width()>800){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
            
        });
        
        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
            
        },1500);
    }
    
    $('#btn-acerca-de').on('click', function(){
        var acercaDe = $('#acerca-de').offset().top;
        $('html, body').animate({
            scrollTop: acercaDe
        });
    });
    
    $('#btn-menu').on('click', function(){
        var menu = $('#platillos').offset().top;
        $('html, body').animate({
            scrollTop: menu
        });
    });
    
    $('#btn-galeria').on('click', function(){
        var galeria = $('#galeria').offset().top;
        $('html, body').animate({
            scrollTop: galeria
        });
    });
    
    $('#btn-ubicacion').on('click', function(){
        var ubicacion = $('#ubicacion').offset().top;
        $('html, body').animate({
            scrollTop: ubicacion
        });
    });
    
    
});