/**
/**
 * Created by ��� on 2017/3/22.
 */
window.onload=function() {
    var timer1 = null;
    var oTop = document.getElementById("top");
    var oPic = document.getElementById("pic");
    var oDv = document.getElementById("nav");
    var oRound = oDv.getElementsByTagName("div");
    var oWidth = parseInt((oTop.clientWidth) / 5);
    var client = parseInt((oDv.offsetWidth) / 6);
    var oBody = document.getElementsByTagName("body");
    var oDvRight1 = getByClass(oTop, "navRight1")[0];
    var oDvRight2 = getByClass(oTop, "navRight2")[0];
    var oBtn1 = document.getElementById("btn1");
    var oBtn2 = document.getElementById("btn2");
    oBtn2.style.display = "block";
    oBtn1.style.display = "none";
    var oUl = oDvRight2.getElementsByTagName("ul")[0];
    var oUl2 = oDvRight1.getElementsByTagName("ul")[0];
    var aLi = oUl.getElementsByTagName("li");
    var aLi2 = oUl2.getElementsByTagName("li");
    var oMain = document.getElementById("main");
    var oMid = document.getElementById("mid");
    var oLeftTop = document.getElementById("left-top");
    var oInnerlefttop1 = getByClass(oLeftTop, "inner-left-top1")[0];
    var gundong1 =document.getElementById("gundong1");
    var gundong2=document.getElementById("gundong2");
    var changegd1 =document.getElementById("changegd1");
    var changegd2=document.getElementById("changegd2");
    var oLeftTop2 = document.getElementById("left-top2");
    var oRightTop=document.getElementById("right-top");
    var oRightTop2=document.getElementById("right-top2");
    var oLeftBottom=document.getElementById("left-bottom");
    var oLeftBottom2=document.getElementById("left-bottom2");
    var oRightBottom=document.getElementById("right-bottom");
    var oRightBottom2=document.getElementById("right-bottom2");
    var oInnerrightbottom1=getByClass(oRightBottom,'inner-left-top2')[0];
    var oInnerrighttop1=getByClass(oRightTop,'inner-left-top2')[0];
    var oInnerleftbottom1=getByClass(oLeftBottom,'inner-left-top1')[0];
    oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
    oUl2.style.height = 2 * aLi2[1].offsetHeight * aLi2.length;
    oUl.style.width = 2 * aLi[1].offsetWidth * aLi.length;
    var timer3 = null;
    var timer4 = null;
    function shortmove() {
        timer4 = setInterval(function () {
            var speed = -3;
            oUl2.style.top = oUl2.offsetTop + speed + "px";
            if (oUl2.offsetTop < -oUl2.offsetHeight / 2) {
                oUl2.style.Top = 0 + "px";
            }
            else if (oUl2.offsetTop > 0) {
                oUl2.style.Top = -oUl2.offsetHeight / 2 + "px";
            }
        }, 30);
    }
    shortmove();
    function longmove() {
        var speed = -1;
        timer3 = setInterval(function () {

            oUl.style.left = oUl.offsetLeft + speed + "px";
            if (oUl.offsetLeft < -oUl.offsetWidth / 2) {
                oUl.style.left = "0";
            }
            else if (oUl.offsetLeft > 0) {
                oUl.style.left = -oUl.offsetWidth / 2;
            }
        }, 25);
    }

    longmove();
    oDvRight2.onmouseover = function () {
        clearInterval(timer3);
    }
    oDvRight2.onmouseout = function () {
        longmove();
    }
    oInnerlefttop1.onmouseover =oLeftTop2.onmouseover= function () {
        move(oLeftTop2, 0, "top");
    }
    oRightTop2.onmouseover=oInnerrighttop1.onmouseover=function(){
        move(oRightTop2,0,"top");
    }
    oLeftBottom2.onmouseover=oInnerleftbottom1.onmouseover=function(){
        move(oLeftBottom2,0,"top");
    }
    oRightBottom2.onmouseover=oInnerrightbottom1.onmouseover=function(){
        move(oRightBottom2,0,"top");
    }
    oLeftTop2.onmouseout= function () {
        move(oLeftTop2, -600, "top");
    }
    oRightTop2.onmouseout = function () {
        move(oRightTop2, -600, "top");
    }
    oLeftBottom.onmouseout=function(){
        move(oLeftBottom2,-600,'top');
    }
    oRightBottom.onmouseout=function(){
        move(oRightBottom2,-600,'top');
    }
    /* oDvRight1.style.display=none;
     oDvRight2.style.display=block;*/
    oBtn2.onclick = function () {
        for (var i = 0; i < oRound.length; i++) {
            oRound[i].className = "round7";
            move(oRound[i], i * client, "left");
        }
        oBtn2.style.display = "none";
        oBtn1.style.display = "block";
        move(oDvRight2, oWidth, "width", function () {
            oDvRight2.style.display = "none";
            oDvRight1.style.display = "block";
        });
    }
    oBtn1.onclick = function () {
        clearTimeout(timer1);
        for (var i = 0; i < oRound.length; i++) {
            oRound[i].style.left = 0;
            oRound[i].className = "round" + (i + 1);
        }
        oBtn1.style.display = "none";
        oBtn2.style.display = "block";
        oDvRight2.style.display = "block";
        move(oDvRight2, 4 * oWidth, "width", function () {
            oDvRight1.style.display = "none";
        });
    }
    move2(oPic, 720, "top");
    function  allgundong(obj0,obj1,obj2,obj3){
        obj1.onmousedown = function (e) {
            var L = obj2.offsetHeight - obj1.offsetHeight;
            var e = e || window.event;//window.event兼容IE,当事件发生时有效
            var diffY = e.clientY - obj1.offsetTop;//获取鼠标点击的位置到所选对象的边框的水平距离
            //var diffY = e.clientY - changegd.offsetTop;
            document.onmousemove = function (e) { //需设为document对象才能作用于整个文档，这个过程是在oDiv点下鼠标的前提下的；
                var e = e || window.event;
                obj1.style.top = e.clientY - diffY + 'px';//style.left表示所选对象的边框到浏览器左侧距离
                // oDiv.style.top = e.clientY - diffY + 'px';
                if (obj1.offsetTop < 0) {
                    obj1.style.top = "0";
                }
                else if (obj1.offsetTop > L) {
                   obj1.style.top = L + "px";
                }
                   obj0.style.top = -obj1.offsetTop / L * (obj0.offsetHeight - obj3.offsetHeight) + "px";
                document.onmouseup = function () {
                    document.onmousemove = null;//清除鼠标释放时的对象移动方法
                    document.onmouseup = null;
                };
            };
        }
    }
   changegd1.onmousedown=function(){allgundong(oInnerlefttop1,changegd1,gundong1,oLeftTop);}
    changegd2.onmousedown=function(){allgundong(oInnerrighttop1,changegd2,gundong2,oRightTop);}
    changegd3.onmousedown=function(){allgundong(oInnerleftbottom1,changegd3,gundong3,oLeftBottom);}
    changegd4.onmousedown=function(){allgundong(oInnerrightbottom1,changegd4,gundong4,oRightBottom);}
    return false;
}
function shortmove(){
    timer4=setInterval(function(){
        var speed=-1;
        oUl2.style.top = oUl2.offsetTop + speed  + "px";
        if (oUl2.offsetTop < -oUl2.offsetHeight / 2) {
            oUl2.style.Top = 0;
        }
        else if (oUl2.offsetTop > 0) {
            oUl2.style.Top = -oUl2.offsetHeight / 2;
        }
    },30);
}
function getByClass(oParent,sClass)//ͨ������������
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
        if (attr == "opacity")//?��????????????????
        {
            cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);//????100???????????��??
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
                obj.style.opacity = (cur + speed) / 100;//?????????????100?????????????��???100??opacity:x???????
            }
            else {
                obj.style[attr] = cur + speed + "px";
            }
        }
    },10);
}
function move2(obj,iTarget,attr,fn) {
    var timer = null;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //var obj=document.getElementById("obj");
        var cur = 0;
        if (attr == "opacity")//?��????????????????
        {
            cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);//????100???????????��??
        }
        else {
            cur = parseInt(getStyle(obj, attr));
        }
        var speed = (iTarget - cur) /50;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (cur == iTarget) {
            clearInterval(obj.timer);
            if (fn)fn();
        }
        else {
            if (attr == "opacity") {
                //obj.style.filter="alpha(opacity:"+cur+speed+")";//alpha(opcity:x)????
                obj.style.opacity = (cur + speed) / 100;//?????????????100?????????????��???100??opacity:x???????
            }
            else {
                obj.style[attr] = cur + speed + "px";
            }
        }
    },10);
}
function stopBubble(e){
    if(e&& e.stopPropation){
        e.stopPropation();
    }
    else{
        window.event.cancelBubble=true;
    }
}
function acrollFunc(e)
{
    var eventCompat = function (event) {
        var e = event || window.event;
        var type = event.type;
        if (type == 'DOMMousescroll' || type == 'mousewhell') {
            event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
        }

        if (!event.preventDefault && event.returnValue !== undefined) {
            event.preventDefault = function () {
                event.returnValue = false;
            };
        }
        return event;
    }
}