// Coded by Chans
// mainstyle.css 와 연동되는 메인 javascript 파일 입니다.

//메뉴 바 영역입니다
$("document").ready(function() {
    var url = window.location.href; // url주소 값을 찾아내는 변수

    // 사이트 접속시 메뉴바에 최초의 하이라이트바를 생성
    if (url.match(/about/)) {
        $("nav li:nth-child(2) a").addClass("highlightBar");
    } else if (url.match(/contact/)) {
        $("nav li:nth-child(3) a").addClass("highlightBar");
    } else {
        $("nav li:first-child a").addClass("highlightBar");
    }
    // 메뉴바에 마우스 오버시 하이라이트 바 생성
    $("nav li a").on("mouseover", function() {
        $("nav li a").removeClass("highlightBar");
        $(this).addClass("highlightBar");
    });
    // 메뉴바에 마우스 아웃시 하이라이트바가 원상 복귀 됨.
    $("nav li a").on("mouseleave", function() {
        if (url.match(/about/)) {
            $("nav li a").removeClass("highlightBar");
            $("nav li:nth-child(2) a").addClass("highlightBar");
        } else if (url.match(/contact/)) {
            $("nav li a").removeClass("highlightBar");
            $("nav li:nth-child(3) a").addClass("highlightBar");
        } else {
            $("nav li a").removeClass("highlightBar");
            $("nav li:first-child a").addClass("highlightBar");
        }
    });
});

//퍼펙트 스크롤
$("main").perfectScrollbar({});

//textAnimation 코드 영역입니다.
var textArr = ["찬스럽다", "필리핀", "로고덕후", "하면된다"]

$("document").ready(function() {
    var num = 0,
        i = 0,
        letter = "",
        dataLength = textArr.length;

    typeAnimation();

    function typeAnimation() {
        if (i == dataLength) {
            i = 0;
        }
        test();
    }

    function test() {
        var string = textArr[i];
        if (num >= string.length) {
            setTimeout(function() {
                testTwo();
            }, 1300);
            return;
        }

        letter = string.substring(0, num + 1);
        $("#textAnimation").html(letter);
        num++;

        setTimeout(function() {
            test();
        }, 400);
    };

    function testTwo() {
        var string = textArr[i];
        if (num == 0) {
            i++;
            num = 0;
            setTimeout(function() {
                typeAnimation();
            }, 500);
            return;
        }
        letter = string.substring(0, num - 1);
        $("#textAnimation").html(letter);
        num--;

        setTimeout(function() {
            testTwo();
        }, 100);
    }
});
// textAnimation 영역 종료 

// 포트폴리오 영역 시작.

// 포트폴리오 영역 호버 생성
$("#portfolio ul li .inner").on({
    "mouseover": function() {
        $(this).find("dl").css("bottom", "-20px");
        $(this).find("button").css("bottom", "10px");
    },
    "mouseout": function() {
        $(this).find("dl, button").css("bottom", "-300px");
    }
});

//포트폴리오 디테일 영역 옆에서 슬라이드 되는거 생성
$("#portfolio ul li button").click(function(e) {
    e.preventDefault();
    var srcNum = ($(this).val() * 1) + 1;
    //아티클의 hide 값을 없애고 메인의 스크롤 옵션을 제거하며 동시에 아티클에 스크롤 옵션 생성
    $("section:nth-of-type(" + srcNum + ")").removeClass("hide");
    $("section:nth-of-type(" + srcNum + ")").perfectScrollbar();

    // display:none 옵션이 사라지면서 시간차를 두고 오른쪽에서 슬라이딩 되는 옵션 적용
    setTimeout(function() {
        $("section:nth-of-type(" + srcNum + ")").css("right", "0");
        $("body").append('<div class="tBg"></div>')
    }, 100);
    // 아티클이 나타났을때 닫기 버튼에 포커스가 가도록 하는 함수 (?)
    setTimeout(function() {
        $(".pfSlide .close_btn").focus();
        $("main").perfectScrollbar('destroy');
    }, 300);
});
//반대로 디테일 영역이 닫힐 경우에 일어나는 함수들
$(".close_btn, .previews_btn").click(function(e) {
    e.preventDefault();
    //다시 오른쪽으로 들어가고
    $(this).parent().css("right", "-3000px");
    $(".tBg").remove();
    //메인에 스크롤 옵션생성하고 아티클에서는 없앤다.
    $("main").perfectScrollbar();
    $(this).parent().perfectScrollbar('destory');
    //간격을 두고 display:none 옵션을 다시 준다.
    setTimeout(function() {
        $(".pfSlide .close_btn").parent().addClass("hide");
    }, 100);
});

// 포트폴리오 영역 종료

// About 페이지

// 스킬영역 시작
$(document).on('ps-scroll-down', function() {
    var getO = $("#skills").css("opacity");
    if (getO == "0") {
        setTimeout(function() {
            $("#skills").css({
                "opacity": "1",
                "margin-top": "-100px"
            });
        }, 300);
    }
});
//스킬바가 시간차를 두고 애니메이션 실행
var flag = 1;
$("main").scroll(function() {
    var scrollPage = $("main").scrollTop();
    if (flag == 1 && scrollPage >= 150) {
        skillBars();
        flag = 0;
    };
});
// 스킬바 애니메이션
function skillBars() {
    $("#skillbars progress").each(function() {
        var max = $(this).val();
        $(this).val(0).animate({
            value: max
        }, 2000);
    });
};

// 스킬영역 종료

// 연락처 getMyNum 게임

var rNum = 0,
    myNum = "010-4589-0127",
    myMail = "pcswer@gmail.com";

function getMyNum() {
    rNum = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    return rNum + "를 입력하세요!";
}
$(document).ready(function() {
    $("#alert").is(":hidden");
});

$("#contact form").submit(function() {
    var i = $("#rInput").val();
    if (i == 0) {
        $(".alert_top").remove();
        $(this).append('<div class="alert_top"><p class="alert alert-danger">getMyNum 함수로 코드를 구하세요!<p></div>');
    } else if (i == rNum) {
        $(".alert_top").remove();
        $(this).append('<div class="alert_top"><p class="alert alert-success">맞추셨습니다!<p></div>');
        $("#mobileNum, #emailAdd").css("background", "#fff");
        $("#contact_logo").css("opacity", "1");
        $("#mobileNum").html(myNum);
        $("#emailAdd").html(myMail);
    } else {
        $(".alert_top").remove();
        $(this).append('<div class="alert_top"><p class="alert alert-warning">코드가 일치하지 않습니다!<p></div>');
    }
    return false;
});

// 모바일 전용 메뉴 시작
var mobCon = 0;
$(".mob_nav").on("click", function() {
    if (mobCon == 0) {
        $("nav").slideDown("fast");
        mobCon++;
    } else {
        console.log("1");
        $("nav").slideUp("fast");
        mobCon--;
    }
});

// 모바일 전용 메뉴 종료

// 모바일 스크롤 제거

//$(document).on('touchstart', function (e) {
//    if (e.target.nodeName !== 'INPUT') {
//        e.preventDefault();
//    }
//});
//$(document).on('touchmove', function (e) {
//    if (e.target.nodeName == 'INPUT') {
//        e.preventDefault();
//    }
//});

// 위로가기 기능
$("#goTop").on("click", function(e) {
    e.preventDefault();
    $('main').animate({
        scrollTop: 0
    }, 800);
    return false;
});