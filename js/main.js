
// navbar
jQuery(window).scroll(function(){
  var $sections = $('section');
  $sections.each(function(i,el){
    var top  = $(el).offset().top-300;
    var bottom = top +$(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');
    if( scroll > top && scroll < bottom){
        $('a.active').removeClass('active');
        $('a[href="#'+id+'"]').addClass('active');
    }
  })
});

$('.it-mobile-menu').on('click', function(){
  $('.it-navbar').addClass('it-navbar_open');
})
$('.it-mobile-close').on('click', function(){
  $('.it-navbar').removeClass('it-navbar_open');
})
$('.it-navbar__link').on('click', function(){
  $('.it-navbar').removeClass('it-navbar_open');
})

$('.it-button_white').on('click', function(){
  $('.modal').addClass('modal--open')
})

$('.modal-close').on('click', function(){
  $('.modal').removeClass('modal--open')
})

$(".it-navbar").on("click","a", function (event) {
 event.preventDefault();
 var id  = $(this).attr('href'),
  top = $(id).offset().top - 200;
 $('body,html').animate({scrollTop: top}, 800);
});

// program slider
let buttons = $('.it-card__list')
let button = buttons.find('span')

let sections = $('.sections')
let section = sections.find('div')

function defaultState() {
   $(button[0]).trigger('click');
}

button.on('click', function(e){
  let content = $(this).data('content')
  button.removeClass('active');
  $(this).addClass('active');
  section.removeClass('-active')
  section.each(function(i,el){
   if (content == $(el).data('section')) { 
      $(el).addClass('-active')
      animation(e, el)
    }
  })
})

let arr = []

function animation(el, sect) {  
  let ev = $(el.target)[0]
  arr.push(sect)

  if(arr.length > 2){
    arr.shift()
  }
  
  button.each(function(i, elm){
    if(ev === elm) {
      if($(arr[0]).data('section') > i) {
        $(arr).removeClass() 
        $(arr[0]).addClass('-rightOut')
        $(arr[1]).addClass('-leftIn')
        console.log('ESQUERDA', arr)
      }

      if($(arr[0]).data('section') < i) {
        $(arr).removeClass()
        $(arr[0]).addClass('-leftOut')
        $(arr[1]).addClass('-rightIn')
        console.log('DIREITA', arr)
      }
    }
  })
}


defaultState();