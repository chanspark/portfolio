// Coded by Chans
// mainstyle.css 와 연동되는 메인 javascript 파일 입니다.


//$("nav li a").on("mouseenter mouseleave", function () {
//    $(this).toggleClass("highlightBar")
//});


//텍스트 애니메이션 

//for문 무한반복으로 사용하였다가 실패 ㅠㅠ
//var textArr = ["찬스럽다", "필리핀", "퍼블리셔", "디자이너", "단데기"]
//
//$(document).ready(function () {
//    var i;
//    for (i = 0; i < textArr.length; i++) {
//        var typoVal = $("#textAnimation").text();
//        var typoLength = typoVal.length;
//        console.log("okay" + i + typoVal + typoLength + textArr[i])
//        if (typoLength == 0) {
//            if (i == textArr.length) {
//                i = 0;
////                break;
//            } else {
//            $("#textAnimation").append(textArr[i])
//            console.log(true)
//            }
//        } else {
//            $("#textAnimation").empty()
//            i--;
//            console.log(i)
//        }
//    }
//});

//var textArr = ["찬스럽다", "필리핀", "퍼블리셔", "디자이너", "단데기"]
// for 문은 결국 작동하지 않는것인가!!
//    $(document).ready(function () {
//        var a = textArr[0];
//        var t = $("#textAnimation")
//        var typing = ""
//            // 찬스럽다가 뜸
////        console.log(a.length);
//        // 4가 뜸 "찬스럽다" = 4개
//    //        setInterval(function(){
//        for (var j = 0; j < a.length; j++) {
//            setTimeout(function () {
////                for (var k = 0; k < 1; k++) {
//                    var b = a.substring(j, j + 1);
//                    
////                    typing += b;
//                    t.append(b);
////                }
//                 console.log(typing);
////            t.text(typing);    
//            }, 2000)
//            
//           
//        }
//        //        }, 2000)
//    
//    
//    });

// codepen에서 가져온 소스로 작업해보았지만 원리를 팍악할 수 없어서 실패
//var counter = 0;
//var timeTwo = setInterval(function () {
//    var a = textArr[0];
//    var t = $("#textAnimation");
//    var typing = ""
//
//    for (var j = 0; j < a.length; j++) {
//        var counterTwo = 0;
////        var timeThree = setInterval(function () {
//
//            for (var k = 0; k < 1; k++) {
//                var b = a.substring(j, j + 1);
//                //                    typing += b;
////                t.append(b)
//                typing += b;
////                console.log(b)
////                counterTwo++;
////                console.log(counterTwo)
////                if (counterTwo == 1) {
////                    clearInterval(timeThree);
////                    break;
////                }
//                t.text(typing);
//                            console.log(typing)
//            }
//                            
////        }, 100)
//        counter++;
//        console.log(counter)
//        if (counter == a.length) {
//            clearInterval(timeTwo);
//        }
//    }
//
//}, 2000);
//
//
//
//
//setInterval, setTimeout등으로 제어하려했는데 실패..
//var counter = 0;
//var timeTwo = setInterval(function () {
//    var a = textArr[0];
//    var t = $("#textAnimation");
//    var typing = ""
//
//    for (var j = 0; j < a.length; j++) {
//        //        var counterTwo = 0;
//        //        var timeThree = setInterval(function () {
//        var b = a.substring(j, j + 1);
//        typing += b;
////        t.text(typing);
//        t.html(typing);
////        for (var k = 0; k < 1; k++) {
//
//            //                console.log(b);
////            counterTwo++;
//            //                console.log(counterTwo);
////            if (counterTwo == 1) {
////                clearInterval(timeThree);
////            }
//        }
//     counter++; if (counter == a.length) {
//    clearInterval(timeTwo);
//}
//
//
//}, 2000);

// 다시다시다시다시다



//for (var i = 0; i < textArr[0].length; i++) {
//    var letter = textArr[0].substring(0, i + 1);
//    console.log(letter);
////    setTimeout(function () {
//    $("#textAnimation").css("display","none");
//    $("#textAnimation").html(letter);
//        $("#textAnimation").animate({
//            display: "block"
//            
//        }, 2000, function(){
////            $("#textAnimation").css("display", "block");
//        });
////    }, 2000);
//    
//};

//$("document").ready(function () {
//
//    var num = 0;
//    var letter = "";
//    textShow();
//
//    for (var i = 0; i < textArr.length; i++) {
//        var word = textArr[i];
//        function textShow() {
//            if (num >= word.length) {
//                return;
//            }
//            letter = string.substring(0, num + 1);
//            $("#textAnimation").html(letter);
//            num++;
//            console.log(letter);
//            setTimeout(function () {
//                textShow();
//            }, 1000);
//        }
//    }
//})
//서희가 만들어준 코드. 쩔어쩔어
//$("document").ready(function () {
//    var num = 0;
//    var letter = "";
//
//    function test() {
//            if (num >= string.length) {
//                return;
//                num = 0;
//            }
//            
//            letter = string.substring(0, num + 1);
//            $("#textAnimation").html(letter);
//            num++;
//            setTimeout(function () {
//                test();
//            }, 1000);
//        }
//
//for (var i = 0; i < textArr.length; i++) {
//    var string = textArr[i];
//    test();
//}
//})
//=================================================================================
// 서희코드에서 배열을 대입, 정상 작동
////배열 하나만 가져오면 작동함. 
//$("document").ready(function () {
//    var num = 0;
//    var letter = "";
//
//    test();
//    
//    function test() {
//        var string = textArr[0];
//            console.log(string.length);
//        if (num >= string.length) {
//            return;
//            num = 0;
//        } 
//        
//        letter = string.substring(0, num + 1);
//        console.log(letter);
//        $("#textAnimation").html(letter);
//        num++;
//        console.log(num);
//        
//        setTimeout(function () {
//            test();
//        }, 500);
//    }
//})
//

//서희 코드에서 배열 -> 데이터 하나를 썼다 지웠다 하도록 설정
//================= 쓰고 지우고 가능
//$("document").ready(function () {
//    var num = 0;
//    var letter = "";
//    var i = 0;
//
//    test();
//
//    function test() {
//        var string = textArr[1];
//        if (num >= string.length) {
//            testTwo();
//            return;
//        }
//
//        letter = string.substring(0, num + 1);
//        $("#textAnimation").html(letter);
//        num++;
//
//        setTimeout(function () {
//            test();
//        }, 500);
//    };
//
//    function testTwo() {
//        var string = textArr[1];
//        if (num == 0) {
//            return;
//            num = 0;
//        }
//        letter = string.substring(0, num - 1);
//        $("#textAnimation").html(letter);
//        num--;
//
//        setTimeout(function () {
//            testTwo();
//        }, 500);
//    }
//});
//================= 배열 전체 쓰고 지우기 가능. 여기서 배열을 다시 처음부터 도는것이 중요함.
//$("document").ready(function () {
//    var num = 0;
//    var letter = "";
//    var i = 0;
//
//    typeAnimation();
//
//    function typeAnimation() {
//        test();      
//    }
//    
//    function test() {
//        var string = textArr[i];
//        if (num >= string.length) {
//            testTwo();
//            return;
//        }
//
//        letter = string.substring(0, num + 1);
//        $("#textAnimation").html(letter);
//        num++;
//
//        setTimeout(function () {
//            test();
//        }, 500);
//    };
//
//    function testTwo() {
//        //        console.log(i)
//        var string = textArr[i];
//        if (num == 0) {
//            i++;
//            num = 0;
//            typeAnimation();
//            return;
//        }
//        letter = string.substring(0, num - 1);
//        $("#textAnimation").html(letter);
//        num--;
//
//        setTimeout(function () {
//            testTwo();
//        }, 500);
//    }
//});
//완성. 배열 다 돌고, 배열 안에 어떤 값이 들어가도 끊임없이 돈다!!!!! 와우!!!!! 진범 & 서희 덕분에 완성함.

//var textArr = ["찬스럽다", "필리핀", "퍼블리셔", "디자이너", "단데기", "헤헤헤"] //배열로 데이터 정리
//
//$("document").ready(function () {
//    var num = 0;
//    var letter = "";
//    var i = 0;
//    var dataLength = textArr.length;
//
//    typeAnimation();
//
//    function typeAnimation() {
//        if(i == dataLength){            
//            i = 0;
//        }
//        test();        
//    }
//
//    function test() {
//        var string = textArr[i];
//        if (num >= string.length) {
//            setTimeout(function () {
//                testTwo();
//            }, 1300);
//            return;
//        }
//
//        letter = string.substring(0, num + 1);
//        $("#textAnimation").html(letter);
//        num++;
//
//        setTimeout(function () {
//            test();
//        }, 400);
//    };
//
//    function testTwo() {
//        //        console.log(i)
//        var string = textArr[i];
//        if (num == 0) {
//            i++;
//            num = 0;
//            setTimeout(function () {
//            typeAnimation();
//                }, 500);
//            return;
//        }
//        letter = string.substring(0, num - 1);
//        $("#textAnimation").html(letter);
//        num--;
//
//        setTimeout(function () {
//            testTwo();
//        }, 100);
//    }
//});



//스크롤 바 실패작
// simplebar 스크롤 시작
//$("main").simplebar();
//$("article").simplebar();
// simplebar 스크롤 종료

//나노 스크롤
//$("main").nanoScroller();

//슬림 스크롤
//$("main").slimScroll({
//    height: 'auto'
//});
//$("article").slimScroll({
//    height: '100%'
//});



//스킬 영역 실패작
//$(function () {
//console.log($("#skillbars progress"));
//$(function () {
//    setInterval(function () {
//        var what = $(document).scrollTop();
////        console.log(what);
//    });
//});
//$(window).on("mousewheel", function(){
//    var what = $(window).scrollTop()
//    console.log(what);
//    if ($(window).scrollTop() + $(window).height() > $('#footer').position().top){    
//        alert("footer visible");
//    }  
//    else{
//        alert("footer invisible");  
//    }
//});
//$("#skills").css("opacity","0");

//$(document).on('ps-y-reach-start', function () {
//
//    if (getO == "1") {
//        console.log("hello");
//        $("#skills").css({
//            "opacity": "0",
//            "margin-top": "100px"
//        });
//    }
//    //    console.log("hello")
//});
//
//$("#skillDown").on("click", function () {
//
//});


//메뉴 바 영역입니다
$("document").ready(function () {
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
    $("nav li a").on("mouseover", function () {
        $("nav li a").removeClass("highlightBar");
        $(this).addClass("highlightBar");
    });
    // 메뉴바에 마우스 아웃시 하이라이트바가 원상 복귀 됨.
    $("nav li a").on("mouseleave", function () {
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
var textArr = ["찬스럽다", "필리핀", "퍼블리셔", "디자이너", "단데기", "하면된다"]

$("document").ready(function () {
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
            setTimeout(function () {
                testTwo();
            }, 1300);
            return;
        }

        letter = string.substring(0, num + 1);
        $("#textAnimation").html(letter);
        num++;

        setTimeout(function () {
            test();
        }, 400);
    };

    function testTwo() {
        var string = textArr[i];
        if (num == 0) {
            i++;
            num = 0;
            setTimeout(function () {
                typeAnimation();
            }, 500);
            return;
        }
        letter = string.substring(0, num - 1);
        $("#textAnimation").html(letter);
        num--;

        setTimeout(function () {
            testTwo();
        }, 100);
    }
});
// textAnimation 영역 종료

// 포트폴리오 영역 시작.

// 어쨌든, 포트폴리오 영역 호버 되는거 생성
$("#portfolio ul li .inner").on({
    "mouseover": function () {
        $(this).find("dl").css("bottom", "-20px");
    },
    "mouseout": function () {
        $(this).find("dl").css("bottom", "-300px");
    }
});


//포트폴리오 디테일 영역 옆에서 슬라이드 되는거 생성
var slideNum = 0;
$("#portfolio ul li a").click(function () {
    event.preventDefault();
    var srcNum = ($(this).attr('href') * 1) + 1;
    slideNum = srcNum - 1;
    //아티클의 hide 값을 없애고 메인의 스크롤 옵션을 제거하며 동시에 아티클에 스크롤 옵션 생성
    $("section:nth-of-type(" + srcNum + ")").removeClass("hide");
    
    $("section:nth-of-type(" + srcNum + ")").perfectScrollbar();
    // display:none 옵션이 사라지면서 시간차를 두고 오른쪽에서 슬라이딩 되는 옵션 적용
    setTimeout(function () {
        $("section:nth-of-type(" + srcNum + ")").css("right", "0");
    }, 100);
    // 아티클이 나타났을때 닫기 버튼에 포커스가 가도록 하는 함수 (?)
    setTimeout(function () {
        $(".pfSlide .close_btn").focus();
        $("main").perfectScrollbar('destroy');
    }, 300);
});
//반대로 디테일 영역이 닫힐 경우에 일어나는 함수들
$(".close_btn, .previews_btn").click(function () {
    event.preventDefault();
//    console.log(slideNum);
    //다시 오른쪽으로 들어가고
    $(this).parent().css("right", "-3000px");
    //메인에 스크롤 옵션생성하고 아티클에서는 없앤다.
    $("main").perfectScrollbar();
    $(this).parent().perfectScrollbar('destory');
    //    $("#portfolio ul li:nth-of-type("+ slideNum +")").children(".view_btn").focus();

    // 이거 해야한다! 그러니까, slideNum 에 맞는 href attr을 가지고 있는 a 태그를 찾아낸 다음에 focus()를 주면 된다.

    //간격을 두고 display:none 옵션을 다시 준다.
    setTimeout(function () {
        $(".pfSlide .close_btn").parent().addClass("hide");
    }, 100);
});

//색상 변경 옵션
//var arrColor = ["#3aa730"];
//
//$(document).ready(function() {
//    
//});



// 포트폴리오 영역 종료


// About 페이지

// 스킬영역 시작
$(document).on('ps-scroll-down', function () {
    var getO = $("#skills").css("opacity");
    if (getO == "0") {
        setTimeout(function () {
            $("#skills").css({
                "opacity": "1",
                "margin-top": "-100px"
            });
        }, 300);
    }
});
//스킬바가 시간차를 두고 애니메이션 실행
var flag = 1;
$("main").scroll(function () {
    var scrollPage = $("main").scrollTop();
    if (flag == 1 && scrollPage >= 150) {
        skillBars();
        flag = 0;
    };
});
// 스킬바 애니메이션
function skillBars() {
    $("#skillbars progress").each(function () {
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
$(document).ready(function () {
    $("#alert").is(":hidden");
});

$("#contact form").submit(function () {
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
$(".mob_nav").on("click", function(){    
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
//$(document).bind('touchmove', function(e) {
//	e.preventDefault();
//});
$(document).on('touchstart', function(e) {
    if (e.target.nodeName !== 'INPUT') {
        e.preventDefault();
    }
});

$(document).on('touchmove', function(e) {
    if (e.target.nodeName == 'INPUT') {
        e.preventDefault();
    }
});



// 위로가기 기능
$("#goTop").on("click", function(){
    event.preventDefault();
    $('main').animate({scrollTop : 0},800);
		return false;
});