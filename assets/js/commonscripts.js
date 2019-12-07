

$("footer h4").click(function(){
	 
  if( $(window).width()< 577){
    $(this).parent().children(".toggleFooter").slideToggle();
  
  
    if ( $(this).hasClass('active') ) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  } 
  
  });

$('#toggleMenu').on('click',function(e){
  $('.topMenu').toggleClass('open-menu');
  //return false;
});

$('#navClose').on('click',function(){
  $('.topMenu').removeClass('open-menu');
});

if( $(window).width()< 577){
  if ($(window).scroll(function() {
    $('.topMenu').removeClass('open-menu');
  }));
}


