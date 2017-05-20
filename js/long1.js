/**
 * Created by 李锦 on 2017/4/9.
 */
window.onload=function(){
    var ozhong=document.getElementById("zhong");
    var oMain1=document.getElementById("main1");
    var oMain=document.getElementById("main");
    var oLM=document.getElementById("leftmanue");
    var oRM=document.getElementById("rightmanue");
    var oTM=document.getElementById("topmanue");
    var oBM=document.getElementById("bottommanue");
    var oMain2=document.getElementById("main2");
    var oBtn1=document.getElementById("btn1");
    var oBtn2=document.getElementById("btn2");
    var oBtn3=document.getElementById("btn3");
    var oBtn4=document.getElementById("btn4");
    var oFirst=document.getElementById("first");
    var oLine1=document.getElementById("line");
    var oLine2=document.getElementById("line2");
    var oLine3=document.getElementById("line3");
    var oLine4=document.getElementById("line4");
    var oLine5=document.getElementById("line5");
    var oSecond=document.getElementById("second");
    var oThird=document.getElementById("third");
    var count=2;
    var count2=2;
    var count3=2;
    var count4=2;
    oLine2.style.left=oLine2.offsetLeft-4+"px";
   addEvent(oBtn2,'click',function(){if(count%2==0){move(oLine2,160,'height',function(){oBtn3.style.display="block";move(oLine4,120,'width',function(){oBtn4.style.display="block";})});count++} else {move(oLine2,0,"height");oBtn3.style.display="none";move(oLine3,0,"width");oSecond.style.display="none";count++};move(oLine4,0,"width");oBtn4.style.display="none";move(oLine5,0,"width");oThird.style.display="none";if(count4%2!=0){count4++}},false);
    addEvent(oBtn3,'click',function(){if(count2%2==0){move(oLine3,200,'width',function(){oSecond.style.display="block";});count2++} else {move(oLine3,0,"width");oSecond.style.display="none";count2++};},false);
    addEvent(oBtn4,'click',function(){if(count4%2==0){move(oLine5,180,'width',function(){oThird.style.display="block";});count4++} else {move(oLine5,0,"width");oThird.style.display="none";count4++};},false);
    addEvent(oBtn1,'mouseover',function(){move(oLine1,180,"height",function(){oFirst.style.display="block";if(count4>2){move(oLine5,0,"width");oThird.style.display="none";}})},false);
    addEvent(oBtn1,'mouseout',function(){
        if(count4%2!=0)
        {
        move(oLine5,180,'width',function(){oThird.style.display="block";});}
        oFirst.style.display="none";
        move(oLine1,0,"height");
        },false);
           addEvent(oMain,'mouseover',function(){move(oLM,-260,"left",function(){move(oLine2,0,"height");oBtn3.style.display="none";move(oLine3,0,"width");oSecond.style.display="none";move(oLine4,0,"width");oBtn4.style.display="none";move(oLine5,0,"width");oThird.style.display="none";if(count4%2!=0){count4++}})},false);
        addEvent(oMain1,'mouseover',function(){move(oLM,-260,"left")},false);
        addEvent(oMain2,'mouseover',function(){move(oLM,-180,"left")},false);
        // addEvent(oMain,'mouseover',function(){move(oLM,0.9,"opacity")},false);
        addEvent(oMain,'mouseover',function(){move(oRM,560,"left")},false);
    addEvent(oMain1,'mouseover',function(){move(oRM,560,"left")},false);
    addEvent(oMain2,'mouseover',function(){move(oRM,560,"left")},false);
        addEvent(oMain,'mouseover',function(){move(oTM,-220,'top')},false);
    addEvent(oMain1,'mouseover',function(){move(oTM,-220,'top')},false);
    addEvent(oMain2,'mouseover',function(){move(oTM,-220,'top')},false);
        addEvent(oMain,'mouseover',function(){move(oBM,580,'top')},false);
    addEvent(oMain1,'mouseover',function(){move(oBM,580,'top')},false);
    addEvent(oMain2,'mouseover',function(){move(oBM,580,'top')},false);
    addEvent(oMain,'mouseout',function(){move(oLM,250,"left")},false);
    addEvent(oMain1,'mouseout',function(){move(oLM,250,"left")},false);
    addEvent(oMain2,'mouseout',function(){move(oLM,250,"left")},false);
    addEvent(oMain,'mouseout',function(){move(oRM,250,"left")},false);
    addEvent(oMain1,'mouseout',function(){move(oRM,250,"left")},false);
    addEvent(oMain2,'mouseout',function(){move(oRM,250,"left")},false);
    addEvent(oMain,'mouseout',function(){move(oTM,250,'top')},false);
    addEvent(oMain1,'mouseout',function(){move(oTM,250,'top')},false);
    addEvent(oMain2,'mouseout',function(){move(oTM,250,'top')},false);
    addEvent(oMain,'mouseout',function(){move(oBM,250,'top')},false);
    addEvent(oMain1,'mouseout',function(){move(oBM,250,'top')},false);
    addEvent(oMain2,'mouseout',function(){move(oBM,250,'top')},false);
    //addEvent(oMain,'click',function(){alert("123");},true);
};
function getStyle(obj,name)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[name];
    }
    else
    {
        return getComputedStyle(obj,false)[name];
    }
}
function move(obj,iTarget,attr,fn) {
    var timer = null;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //var obj=document.getElementById("obj");
        var cur = 0;
        if (attr == "opacity")//???????????????????
        {
            cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);//????100???????????????
        }
        else {
            cur = parseInt(getStyle(obj, attr));
        }
        var speed = (iTarget - cur) /10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (cur == iTarget) {
            clearInterval(obj.timer);
            if (fn)fn();
        }
        else {
            if (attr == "opacity") {
                //obj.style.filter="alpha(opacity:"+cur+speed+")";//alpha(opcity:x)????
                obj.style.opacity = (cur + speed) / 100;//?????????????100??????????????????100??opacity:x???????
            }
            else {
                obj.style[attr] = cur + speed + "px";
            }
        }
    },10);
}
function addEvent(event, eType, handle, bol) {
    var event=event||window.event;
    if(event.addEventListener){           //如果支持addEventListener
        event.addEventListener(eType, handle, bol);
    }else if(event.attachEvent){          //如果支持attachEvent
        event.attachEvent("on"+eType, handle);
    }else{                                  //否则使用兼容的onclick绑定
        event["on"+eType] = handle;
    }
}
function removeEvent(element, eType, handle, bol) {
    if(element.addEventListener){
        element.removeEventListener(eType, handle, bol);
    }else if(element.attachEvent){
        element.detachEvent("on"+eType, handle);
    }else{
        element["on"+eType] = null;
    }
}
function getByClass(oParent,sClass)//?????????????
{
    var aResult=[];
    var aEle=oParent.getElementsByTagName('*');
    for(var i=0;i<aEle.length;i++)
    {
        if(aEle[i].className==sClass)
        {
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}