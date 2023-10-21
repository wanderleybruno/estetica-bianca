$(document).ready(function(){
    var $carousel = $('.carousel');
    var $prevButton = $('.prev');
    var $nextButton = $('.next');

    $carousel.slick({
        // Configurações do slick-carousel, se necessário
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    // Adicione eventos de clique para os botões "Anterior" e "Próximo"
    $prevButton.click(function(){
        $carousel.slick('slickPrev');
        
    });

    $nextButton.click(function(){
        $carousel.slick('slickNext');
    });
});