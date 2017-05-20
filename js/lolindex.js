$(function(){
	  var screenH=$(window).width();
	$('.menuechoose').children('a').click(function(event){
		event.preventDefault();
	}).end().click(function(){
	});
	    $("li.firstManue:visible").mouseover(function a(){
        $('div.message').stop();
        var secLi=$(this).children().filter('ul.secManue').children();
        var lHeight=secLi.length*30;
        $('div.message').animate({top:lHeight},300);
    }).mouseout(function(){
        $('div.message').stop();
        $('div.message').animate({top:0},300);
    });
    $("li.firstManue").mouseover(function(){
        $(this).children().filter('ul .secManue').stop();
        var secLi=$(this).children().filter('ul.secManue').children();
        var lHeight=secLi.length*32;
        $(this).children().filter('ul .secManue').animate({height:lHeight},500);
    }).mouseout(function(){
        var secLi=$(this).children().filter('ul.secManue').children();
        $(this).children().filter('ul .secManue').stop();
        $(this).children().filter('ul .secManue').animate({height:0},500);

    });
      $(window).resize(function(){
      	 screenH=$(window).width();
      })
    if(screenH<=768){
    	$('li.firstManue').unbind();
    	//$('li.firstManue').bind(mouseover)
        $('.chooseit').accordion({
        collapsible:true,
        active:0,
        heightStyle:'content',
        animate:100,
  });
    $('li.firstManue').accordion({
    	 collapsible:true,
        active:0,
        heightStyle:'content',
        animate:100,
    });  
    }
})
