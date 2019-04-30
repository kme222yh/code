// 読み込み時、DOMの初期化処理など

onload = function(){
    
    var scroll = new SmoothScroll('a[href*="#"]');
    
    
    $("#header-nav-visual").click(function(){
        $("#header-nav-content").toggleClass('hide');
    });
    
    
    
    
    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        dots:false,
        arrows:false,
        fade: true,
        speed: 1500
    });

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
};
// 色々