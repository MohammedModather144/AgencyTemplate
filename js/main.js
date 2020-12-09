$(function(){
  'user strict'
  // Change navBar Color After Scroll 
  var  ScrollButton = $("#scroll-top");
  $(window).scroll(function(){
    if($(this).scrollTop()>200){
      $('.nav-home').css({
                            'background-color':'#fff',
                            'border-bottom':'1px solid #EEE'
                         });
      $('.nav-home .nav-links >li> a').css('color','#555')
      $(this)+$('.nav-home .logo img').attr('src','images/logo.webp');
      if($(this).scrollTop() >=700){
        ScrollButton.show();
      }
    }else{
      $('.nav-home').css({
                            'background':'none',
                            'border-bottom':'none'
                          });
      $('.nav-home .nav-links >li> a').css('color','white')
      $(this)+$('.nav-home .logo img').attr('src','images/logo-alt.webp');
      ScrollButton.hide();
    }
  });
  // Click Scrool Boutton
  ScrollButton.click(function(){
    $("html,body").animate({ scrollTop:0},1000); 
  });
  // Add Active Linke To Click
  $('.nav-header .nav-links >li> a , .side_menu .list_load li a').on('click',function(){
    $('html,body').animate({
      'scrollTop':$('#'+$(this).data('value')).offset().top
    },800);
    $(this).parent().addClass('active').siblings().removeClass('active');
  });
  // Loading
  $(window).on('load',function(){
    $("html,body").animate({ scrollTop:0},800); 
    $(".loading-overlay .spinner").fadeOut(2000,function(){
      $("body").css("overflow","auto");
      $(this).parent().fadeOut(2000,function(){
        $(this).remove();
      });
    });
  });
  // Show Navbar In Mobile Screen 
  $('.nav-header .btn-menu').on('click',function(){
    $('.nav-header .nav-links ul').slideToggle();
  })

  // Open Collape Menu Mobile
  $(document).on('click','.js-menu_toggle.closed',function(e){
    e.preventDefault(); $('.list_load, .list_item').stop();
    $(this).removeClass('closed').addClass('opened');
  
    $('.side_menu').css({ 'left':'0px' });
  
    var count = $('.list_item').length;
    $('.list_load').slideDown( (count*.6)*100 );
    $('.list_item').each(function(i){
      var thisLI = $(this);
      timeOut = 100*i;
      setTimeout(function(){
        thisLI.css({
          'opacity':'1',
          'margin-left':'0'
        });
      },100*i);
    });
  });
  
  $(document).on('click','.js-menu_toggle.opened',function(e){
    e.preventDefault(); $('.list_load, .list_item').stop();
    $(this).removeClass('opened').addClass('closed');
    $('.side_menu').css({ 'left':'-250px' });
  
    var count = $('.list_item').length;
    $('.list_item').css({
      'opacity':'0',
      'margin-left':'-20px'
    });
    $('.list_load').slideUp(300);
  }); 
});