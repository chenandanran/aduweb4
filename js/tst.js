/**
 * Created by ¿ÓΩı on 2017/5/9.
 */
$(function(){

    var reUstatus=false;
    var rePstatus=false;
    var reNstatus=false;
    var USER_NAME=[];
    var PASS_WORD=[];
    var Uvalue="aaaaaa";
    var Pvalue='000000';
    var Nvalue='00000000000';
    var reUmes='';
    var rePmes='';
    var reNmes='';
    var testU=/[a-z|A-Z]+/g;
    var testP=/[a-z|A-Z|0-9]+/g;
    //var tesetUP=new RegExp('/[a-z|A-Z]+/g');
    var testN=/[0-9]{11}/g;
    $('#reU').val(Uvalue);
    $('#reP').val(Pvalue);
    $('#reN').val(Nvalue);
    $('#reU,#reP,#reN').focus(function(){
        $(this).css('backgroundColor','yellow');
    }).blur(function() {
        $(this).css('backgroundColor', 'white');
    });
    $("#reU").bind('input propertychange',function(){
        reUmes=$('#reU').val();
        if(testU.test(reUmes)&&reUmes.length<7){
            $('.reUtip').stop();
            if(reUmes.length==6){ reUstatus=true;}
            $('.reUtip').slideUp(200);
        }
        else{
            $('.reUtip').stop();
            reUstatus=false;
            $('.reUtip').slideDown(200);
        }
    });
   $('#reP').bind('input propertychange',function(){
        rePmes=$('#reP').val();
        if(testP.test(rePmes)&&rePmes.length<7){
            $('.rePtip').stop();
            if(rePmes.length==6){ rePstatus=true;}
            $('.rePtip').slideUp(200);
        }
        else{
            $('.rePtip').stop();
            rePstatus=false;
            $('.rePtip').slideDown(200);
        }
    });
    $('#reN').blur(function(){
        reNmes=$('#reN').val();
        if(testN.test(reNmes)){
            $('.reNtip').stop();
            reNstatus=true;
            $('.reNtip').slideUp(200);
        }
        else{
            $('.reNtip').stop();
            reNstatus=false;
            $('.reNtip').slideDown(200);
        }
    });
    $('.reset').click(function(){
        $('#reU').val(Uvalue);
        $('#reP').val(Pvalue);
        $('#reN').val(Nvalue);
        $('.reUtip').slideUp(200);
        $('.rePtip').slideUp(200);
        $('.reNtip').slideUp(200);
    });
    $('.sure').click(function(){
        if(reUstatus&&reNstatus&&rePstatus){
        $('.tst').stop();
        $('.suggest').stop();
        $('.suggest').slideDown(500);
        $('.tst').animate({"opacity":'0.5'},500);
        }
        else{
            if(!reUstatus){
                $('.reUtip').stop();
                $('.reUtip').slideDown(200);
            }
            if(!rePstatus){
                $('.rePtip').stop();
                $('.rePtip').slideDown(200);
            }
            if(!reNstatus){
                $('.reNtip').stop();
                $('.reNtip').slideDown(200);
            }
            alert('wrong!!please change you imformation');
        }
    });
    $('.No').click(function(){
        $('.tst').stop();
        $('.suggest').stop();
        $('.tst').fadeTo(500,1);
        $('.suggest').slideUp(500);;
    });
    $('.Yes').click(function(){
        $('.tst').stop();
        $('.suggest').stop();
        $('.tst').fadeTo(500,1);
        $('.suggest').slideUp(500);
        USER_NAME.push(reUmes);
        PASS_WORD.push(rePmes);
    });



    var lUstatus=false;
    var lPstatus=false;
    var lUvalue="aaaaaa";
    var lPvalue='000000';
    var lUmes='';
    var lPmes='';
    var testlU=/[a-z|A-Z]+/g;
    var testlP=/[a-z|A-Z|0-9]+/g;
    //var tesetUP=new RegExp('/[a-z|A-Z]+/g');
    $('#lUsn').val(lUvalue);
    $('#lPas').val(lPvalue);
    $('#lUsn,#lPas').focus(function(){
        $(this).css('backgroundColor','yellow');
    }).blur(function() {
        $(this).css('backgroundColor', 'white');
    });
    $("#lUsn").bind('input propertychange',function(){
        lUmes=$('#lUsn').val();
        if(testlU.test(lUmes)&&lUmes.length<7){
            $('#uTip').stop();
            if(lUmes.length==6){ lUstatus=true;}
            $('#uTip').slideUp(200);
        }
        else{
            $('#uTip').stop();
            lUstatus=false;
            $('#uTip').slideDown(200);
        }
    });
    $('#lPas').bind('input propertychange',function(){
        lPmes=$('#lPas').val();
        if(testlP.test(lPmes)&&lPmes.length<7){
            $('#pTip').stop();
            if(lPmes.length==6){ lPstatus=true;}
            $('#pTip').slideUp(200);
        }
        else{
            $('#pTip').stop();
            lPstatus=false;
            $('#pTip').slideDown(200);
        }
    });
    $('#queding').click(function(){
        if(lUstatus&&lPstatus){
            for(var i= 0,j=0;i<USER_NAME.length,j<PASS_WORD.length;i++,j++)
            {
                if(lUmes==USER_NAME[i]&&lPmes==PASS_WORD[j])
                {
                    alert('succeed to sign,you can go to sign in');
                   $("#queding").children().filter('a').unbind('click').bind('click',function(){
                       $.load('../Html/13.html'
                       );
                   });
                    break;
                }
                if(i==USER_NAME.length-1||j==PASS_WORD.length-1){
                    alert('lose to sign');
                    break;
                }
            }
        }
      else{
            if(!lUstatus){
                $('#uTip').stop();
                $('#uTip').slideDown(200);
            }
            if(!lPstatus){
                $('#pTip').stop();
                $('#pTip').slideDown(200);
            }
            alert('wrong!!please change you imformation');
        }
    });




});