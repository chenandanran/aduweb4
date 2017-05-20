/**
 * Created by ¿ÓΩı on 2017/5/10.
 */
$(function(){
   var l=$('.left').left();
   $('.left').mouseover(function(){
         $(this).animate('left','0');
   }).mouseout(function(){
      $(this).animate('left','0');
   });
});