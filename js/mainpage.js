$(function(){
    setInterval(function(){
         var dwidth = $(window).width();
        var mWidth=$('.mLogo').width();
        $('.mLogo').children().width(mWidth);
            $('.hLi img').width($('.hLi').width()).height($('.hLi').height());
        $('.vLi img').width($('.vLi').width()).height($('.vLi').height());
        $('.tLl img').width($('.tLl').width()).height($('.tLl').height()/5);
        $('.tLr img').width($('.tLr').width()).height($('.tLr').height()/5);
        $('.Four').css('background-size','100% 100%');
        $('#pm,#um').css('font-size',($('#pm').width())/4+'px');
        $('#rePm,#reUm,#reNm').css('font-size',($('#pm').width())/4+'px');
        $('#rePtip').css('font-size',($('#rePtip').width())/4+'px');
            $('.inner img').width(dwidth*0.7);
            $(".mM p").css('font-size',$('.hLi').width()/5);
        $(".moveto").children().filter('li a').css('font-size','$(".moveto").children().filter("li").width()/4');
    },1);
   $(document).scroll(function() {
        var sTop=$(document).scrollTop();
        if (sTop > 100) {
            $(".Nav1").hide();
            $(".Nav2").show();
        }
        else
        {
            $(".Nav2").hide();
            $(".Nav").show();
        }
    });
    $('.load').css('background-size','100% 100%');
    $('.tst').css('background-size','100% 100%');
    $("li.firstManue:visible").mouseover(function (){
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
    $('.qxmr').bind('click',function(event){
        event.preventDefault();
    });

    $('#denglu').click(function(){
        $('.load').css('display','block');
        $(".tst").css('display','none');
    });
    $('#zhuce').click(function(){
        $('.load').css('display','none');
        $(".tst").css('display','block');
    });
    $('.tLl,.tLr').children().filter('div').mouseover(function(){
      $(this).addClass('animated swing');
    }).mouseout(function(){
        $(this).removeClass('animated swing');
    });
    $('.vLi').mouseover(function(){
       $(this).stop();
        $(this).addClass('animated pulse');
    }).mouseout(function(){
        $(this).stop();
        $(this).removeClass('animated pulse');
    });
    $('.hLi').mouseover(function(){
       $(this).stop();
        $(this).addClass('animated jello');
    }).mouseout(function(){
        $(this).stop();
        $(this).removeClass('animated jello');
    });
    $('.Ffir').mouseover(function(){
        $(this).stop();
        $(this).animate({'left':'4%'})
    }).mouseout(function(){
        $(this).stop();
        $(this).animate({'left':'18%'})
    });
    $('.Fsec').mouseover(function(){
        $(this).stop();
        $(this).animate({'left':'8%'})
    }).mouseout(function(){
        $(this).stop();
        $(this).animate({'left':'22%'})
    });
    $('.Ftir').mouseover(function(){
        $(this).stop();
        $(this).animate({'left':'12%'})
    }).mouseout(function(){
        $(this).stop();
        $(this).animate({'left':'26%'})
    });
    $('.Fsev').mouseover(function(){
        $(this).stop();
        $(this).animate({'left':'56%'})
    }).mouseout(function(){
        $(this).stop();
        $(this).animate({'left':'42%'})
    });
    $('.Fsix').mouseover(function(){
        $(this).stop();
        $(this).animate({'left':'52%'})
    }).mouseout(function(){
        $(this).stop();
        $(this).animate({'left':'38%'})
    });
    $('.Ffiv').mouseover(function(){
        $(this).stop();
        $(this).animate({'left':'48%'})
    }).mouseout(function(){
        $(this).stop();
        $(this).animate({'left':'34%'})
    });
   /*$.each($(".tLeft>div").children(),function() {
       $(this).mouseover(function () {
            $(this).addClass('active');
        }).mouseout(function () {
            $(this).removeClass("active");
        });
    });*/
});
