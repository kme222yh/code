// 読み込み時、DOMの初期化処理など

onload = function(){
    
    
    var scroll = new SmoothScroll('a[href*="#"]');
    
    
    
    $('main>section:nth-child(16)>ul>li>div').click(function(){
        if($(this).next('p').hasClass("hide")){
            $(this).children('i').removeClass('fa-angle-down');
            $(this).children('i').addClass('fa-angle-up');
        }
        else{
            $(this).children('i').addClass('fa-angle-down');
            $(this).children('i').removeClass('fa-angle-up');
        }
        $(this).next('p').toggleClass("hide");
    });
    
    
    
    
    
    setInterval(function(){
        if($(window).scrollTop() > 400)
            $('#footer-page-top').removeClass('hide');
        else
            $('#footer-page-top').addClass('hide');
    }, 100);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
};