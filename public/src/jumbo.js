console.log('jumbo.js is loaded :))')

// below code was referenced from https://www.bootply.com/103783
let $jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    let $scrolled = $(window).scrollTop();
    $('.bg').css('height', ($jumboHeight-$scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});