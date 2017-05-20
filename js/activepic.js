$(function() {
    var innerGroup = $(".innerwraper");
    var leftArrow = $(".left-arrow");
    var rightArrow = $(".right-arrow");
    var spanGroup = $(".pagination span");
    var imgWidth=0;
    var t;
    imgWidth=$(window).width()*0.7;
    $('.innerwraper img').width(imgWidth);
   setInterval(function(){imgWidth = ($(window).width())*0.7;},10);
   innerGroup.width(imgWidth);
    var _index = 0;
    var timer = null;
    var flag = true;
    rightArrow.click(function () {
        //�Ҽ�ͷ
        flag = false;
        clearInterval(timer);
        _index++;
        selectPic(_index);
    });
    leftArrow.click(function () {
        //���ͷ
        flag = false;
        clearInterval(timer);
        if (_index == 0) {
            _index = innerGroup.length - 1;
            $(".inner").css("left", -(innerGroup.length - 1) * imgWidth);
        }
        _index--;
        selectPic(_index);
    });
    spanGroup.click(function () {
        //�����л�
        _index = spanGroup.index($(this));
        selectPic(_index);
    });

    $(".container").hover(function () {
        //�������
        clearInterval(timer);
        flag = false;
    }, function () {
        flag = true;
        timer = setInterval(go, 6000);
    });

    function autoGo(bol) {
        //�Զ�����
        if (bol) {
            timer = setInterval(go, 6000);
        }
    }

    autoGo(flag);

    function go() {
        //��ʱ���ĺ���
        _index++;
        selectPic(_index);
    }

    function selectPic(num) {
        $(".pagination span").eq(num).addClass("active").siblings().removeClass("active");
        $(".inner").animate({
            left: -num * imgWidth,
        }, 1000, function () {
            //����Ƿ����һ��
            if (_index == innerGroup.length - 1) {
                _index %= 8;
                $(".inner").css("left", "0px");
                $(".pagination span").eq(0).addClass("active").siblings().removeClass("active");
            }
        })
    }
    var $div= $('div.innerwraper');
    $.each($div,function(){
        $(this).mouseover(function(){
            $(this).children().filter("div").stop();
            $(this).children().filter("div").slideDown()
        }).mouseout(function(){
            $(this).children().filter("div").stop();
            $(this).children().filter("div").slideUp();
        })
    });
    var t=setInterval(function() {
        $('#txt1').slideDown(1000, function () {
            setTimeout(function () {
                $('#txt1').slideUp(1000, function () {
                    $('#txt2').slideDown(1000, function () {
                        setTimeout(function () {
                            $('#txt2').slideUp(1000, function () {
                                $('#txt3').slideDown(1000, function () {
                                    setTimeout(function () {
                                        $('#txt3').slideUp(1000)
                                    }, 2000)
                                })
                            })
                        }, 2000)
                    })
                })
            }, 2000)
        })
    },12000)
    });