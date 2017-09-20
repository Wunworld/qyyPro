/**
 * Created by Administrator on 2016/11/21.
 * */
 
//var _hmt = _hmt || [];
//(function() {
	//var hm = document.createElement("script");
	//hm.src = "https://hm.baidu.com/hm.js?d5dc35962b72bbfff63c80f734bc682b";
	//var s = document.getElementsByTagName("script")[0];
	//s.parentNode.insertBefore(hm, s);
//})(); 

(function() {
    // 页面头部
    var a = ['section', 'article', 'nav', 'header', 'footer','aside' /* 其他HTML5元素 */];
    for (var i = 0, j = a.length; i < j; i++) {
        document.createElement(a[i]);
    }
})();
//nav top 
~(function() {
	var $nav = $(".head_right").find("li");
	$nav.each(function(index) {
		$(this).click(function() {
			$nav.removeClass("nav_activity");
			$(this).addClass("nav_activity");
		});
	});
})();

//top_wei_code
~(function() {
    $("#top_nav #weiXin").mouseover ( function() {
        $("#top_wei_code").show();
        $("#top_nav #weiXin").css("color","#64b82c");
        $("#top_nav .angel").removeClass("angel").addClass("angel2");
    });
    $("#top_nav #weiXin").mouseout ( function() {
        $("#top_wei_code").hide();
        $("#top_nav .angel2").removeClass("angel2").addClass("angel");
        $("#top_nav #weiXin").css("color","#bababa");
    });
})();
//erWeiCode show && hide
!(function() {
    function ShowHide(opt1,opt2) {
        $(opt1).mouseover(function() {
            $(opt2).show();
        });
        $(opt1).mouseout(function() {
            $(opt2).hide();
        });
    }

    ShowHide(".inter_down img",".big_weiCode");
    ShowHide(".two_weiCode",".hideWeiCode");
    ShowHide("#computer_img .computer_weiCode",".hideWeiXinCode");
    ShowHide("#market_introduce .erWeiCode",".weiCodeHide");
    ShowHide(".weiXinCode",".hide_code");
//    aside float
    ShowHide($("#aside_float .icon-weixin"),$(".hide_icon"));
})();



//鼠标悬停取消动画效果 nav
~(function() {
    function Stop(opt) {
        $(opt).mouseover(function() {
            $(opt).removeClass("title_detail_animate");
        });
        $(opt).mouseout(function() {
            $(opt).addClass("title_detail_animate");
        });
    }

    Stop("#move_fisher .title_detail");
    Stop("#serve_procedure .detail");
})();
//aside js
~(function() {
    var oAside = $("#aside");
    var oHide_weiXin = $(".aside_rig>ul>li:nth-child(2)");
    var oHide_icon = $("#hide_icon");
    oAside.hover(function() {
        $(this).stop().animate({width: 105},200);
    },function() {
        $(this).stop().animate({width: 40},200);
    });
    oHide_weiXin.hover(function() {
        oHide_icon.stop().animate({right: "120"},400);
    },function() {
        oHide_icon.stop().animate({right: "-150"},400);
    });
})();


//nav click go back
!(function() {
    var oFirst = $("#first");
    var oSecond = $("#second");
    var oThird = $("#third");
    var oFourth = $("#fourth");
    var oFive = $("#five");
    oFirst.click ( function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop =0;
        var oBetf_fish = $("#betf_fish");
        var oBetf_right = $("#betf_right");
        oBetf_fish.addClass( "betf_fish l animated bounceInLeft" );
        oBetf_right.addClass( "betf_right l animated rotateInUpRight" );
    });
    oSecond.click ( function() {
        document.body.scrollTop = 610;
        document.documentElement.scrollTop = 610;
        var oTitle = $("#title");
        var oImgLeft = $("#imgLeft");
        var oContent1 = $("#content1");
        var oContent2 = $("#content2");
        var oImgRight = $("#imgRight");
        oTitle.addClass( ".title animated bounceIn" );
        oImgLeft.addClass( ".imgLeft .l animated bounceInLeft" );
        oContent1.addClass( ".l .content1 animated bounceInRight" );
        oContent2.addClass( ".l .content2 animated bounceInLeft" );
        oImgRight.addClass( ".imgRight .l animated bounceInLeft" );
    });
    oThird.click ( function() {
        document.body.scrollTop = 1250;
        document.documentElement.scrollTop = 1250;
        var oInter_title = $("#inter_title");
        var oInter_subtitle = $("#inter_subtitle");
        oInter_title.addClass( "animated bounceIn" );
        oInter_subtitle.addClass( "animated rubberBand" );

    });
    oFourth.click ( function() {
        document.body.scrollTop = 3070;
        document.documentElement.scrollTop = 3070;
        var oLine_title = $("#line_title");
        var oLine_subtitle = $("#line_subtitle");
        oLine_title.addClass( "animated bounceIn" );
        oLine_subtitle.addClass( "line_subtitle animated rubberBand" );

    });
    oFive.click ( function() {
        document.body.scrollTop = 3858;
        document.documentElement.scrollTop = 3858;
        var oMarket_title = $(".market_title");
        oMarket_title.addClass( "media_title animated swing" );
    });
})();

//滚动式的动画
$(window).scroll(function(){
    // c( $(window).scrollTop() );
    if( $(window).scrollTop() >= 620 && $(window).scrollTop() <= 640 ) {
        $("#about_fish .title").toggleClass(".title animated rotateIn");
        $("#about_fish .imgLeft").toggleClass( ".imgLeft .l animated bounceInLeft" );
        $("#about_fish .content1").toggleClass( ".l .content1 animated bounceInRight" );
        $("#about_fish .content2").toggleClass( ".l .content2 animated bounceInLeft" );
        $("#about_fish .imgRight").toggleClass( ".imgRight .l animated bounceInLeft" );
    }else if( $(window).scrollTop() >= 1260 && $(window).scrollTop() <= 1280  ) {
        //a(111);
        $("#internet_fish #inter_title").toggleClass("animated rotateIn");
        $("#internet_fish #inter_subtitle").toggleClass("animated rotateInDownLeft");
        $("#internet_fish .inter_middle p").toggleClass("animated flipInX");
    }else if( $(window).scrollTop() >= 2050 && $(window).scrollTop() <= 2070  ) {
        //a(111);
        $("#move_fisher .title").toggleClass("animated rollIn");
        $("#move_fisher .sub_title").toggleClass("animated rotateInUpRight");
    }else if( $(window).scrollTop() >= 3050 && $(window).scrollTop() <= 3070  ) {
        $("#line_live .line_title").toggleClass("animated rollIn");
        $("#line_live .line_subtitle").toggleClass("animated rotateInUpRight");
    }else if( $(window).scrollTop() >= 3850 && $(window).scrollTop() <= 3870  ) {
        $("#market_introduce .market_title").toggleClass("animated rotateIn");
    } else if( $(window).scrollTop() >= 4650 && $(window).scrollTop() <= 4670  ) {
        $("#platform .platform_pro").toggleClass("animated rotateIn");
        $("#platform p").toggleClass("animated flipInX");
    }else if( $(window).scrollTop() >= 5550 && $(window).scrollTop() <= 5570  ) {
        $("#serve_procedure .title").toggleClass("animated rotateIn");
    }else if( $(window).scrollTop() >= 6450 && $(window).scrollTop() <= 6470  ) {
        $("#media_consult .media_title").toggleClass("animated rotateIn");
        $("#media_consult .media_cont").toggleClass("animated swing");
    }
});
//footer go back
$(function() {
    var oFirst = $(".index");
    var oSecond = $(".aboutUs");
    var oThird = $(".quyangyu");
    var oFourth = $(".online");
    var oFive = $(".marine_market");
    oFirst.click ( function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop =0;
    });
    oSecond.click ( function() {
        document.body.scrollTop = 610;
        document.documentElement.scrollTop = 610;
    });
    oThird.click ( function() {
        document.body.scrollTop = 1250;
        document.documentElement.scrollTop = 1250;
    });
    oFourth.click ( function() {
        document.body.scrollTop = 3070;
        document.documentElement.scrollTop = 3070;
    });
    oFive.click ( function() {
        document.body.scrollTop = 3858;
        document.documentElement.scrollTop = 3858;
    });
});

//go top
~(function() {
    $(".go_top").on("click", function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
})();
//footerFloat js
~(function() {
    var $fF_in_btn = $("#fF_in_btn");
    var $clickCode = $(".clickCode");
    $fF_in_btn.click(function() {
        $clickCode.show();
    });
    $("#myFrame").contents().find("#footer").click(function() {
        $clickCode.hide();
    });
    $(document).click(function() {
        $clickCode.hide();
    });
    $fF_in_btn.click(function(ev) {
        ev.stopPropagation();
    });
    $clickCode.click(function(ev) {
        ev.stopPropagation();
    });
})();
// random QQ service
~(function(){
    var qqs = [];
    qqs[0] = "3457642670";
    qqs[1] = "2712764144";
    qqs[2] = "877366913";
    qqs[3] = "2271374154";
    $("#chat_qq").click(function() {
        var qqNum = Math.floor(Math.random()*4);
        var qqCharStr = "http://wpa.qq.com/msgrd?v=3&uin="+ qqs[qqNum] +"&site=qq&menu=yes";
        $(this).attr('href',qqCharStr);
    });
})();

//activity animation
~(function() {
    var $ac_hover = $(".ac_hover");
    $ac_hover.hover(function () {
        $(this).find(".ac_picMask").stop().delay(50).animate({"bottom":0,opacity:0.9},300);
    },function() {
        $(this).find(".ac_picMask").stop().animate({"bottom":-260,opacity:0},300);
    });
})();
//activity alert erWei Code
~(function() {
    var $Ad_fE_btn = $(".ad_fE_btn");
    var $Ad_fE_erWeiCode = $(".ad_fE_erWeiCode");
    $Ad_fE_btn.click(function() {
        $Ad_fE_erWeiCode.fadeIn(200);
    });
    $("#myFrame").contents().find("#footer").click(function() {
        $Ad_fE_erWeiCode.fadeOut(1000);
    });
    $(document).click(function() {
        $Ad_fE_erWeiCode.fadeOut(1000);
    });
    $Ad_fE_btn.click(function(ev) {
        ev.stopPropagation();
    });
    $Ad_fE_erWeiCode.click(function(ev) {
        ev.stopPropagation();
    });

})();
//activity alert erWei Code invest send telephone free
~(function() {
    var $Ad_fE_btn = $(".acIS_btn");
    var $Ad_fE_erWeiCode = $(".acIS_weiCode");
    $Ad_fE_btn.click(function() {
        $Ad_fE_erWeiCode.fadeIn(200);
    });
    $("#myFrame").contents().find("#footer").click(function() {
        $Ad_fE_erWeiCode.fadeOut(1000);
    });
    $(document).click(function() {
        $Ad_fE_erWeiCode.fadeOut(1000);
    });
    $Ad_fE_btn.click(function(ev) {
        ev.stopPropagation();
    });
    $Ad_fE_erWeiCode.click(function(ev) {
        ev.stopPropagation();
    });

})();
function c(opt) {
    return console.log(opt);
}
function a(opt) {
    return alert(opt);
}