/**
 * Created by Wunworld on 2017/5/3.
 */
$(function() {
    //baidu code
    var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?d5dc35962b72bbfff63c80f734bc682b";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();

    (function() {
        if (!/*@cc_on!@*/0) return;
        var e = "abbr, article, aside, audio, canvas, datalist, details, dialog, eventsource, figure, footer, header, hgroup, mark, menu, meter, nav, output, progress, section, time, video".split(', ');
        var i= e.length;
        while (i--){
            document.createElement(e[i])
        }
    })();
    (function() {
        // 页面头部
        var a = ['section', 'article', 'nav', 'header', 'footer','aside' /* 其他HTML5元素 */];
        for (var i = 0, j = a.length; i < j; i++) {
            document.createElement(a[i]);
        }
    })();
    //header erWeiCode hover
    ~(function(){
        $(".navHover").each(function(index) {
            $(this).hover(function() {
                $(this).find(".navCode").stop().fadeIn(200);
                $(this).stop().children("span").removeClass("angle").addClass("angle1");
            },function() {
                $(this).find(".navCode").stop().fadeOut(200);
                $(this).stop().children("span").removeClass("angle1").addClass("angle");
            });
        });
    })();
    //footer center erWeiCode hover
    ~(function(){
        $(".FooterHover").each(function(index) {
            $(this).hover(function() {
                $(".FooterCode").eq(index).stop().fadeIn(200);
            },function() {
                $(".FooterCode").stop().fadeOut(200);
            });
        });
    })();
    //floatRight erWeiCode hover
    ~(function(){
        $(".floatItem").each(function(index) {
            $(this).hover(function() {
                //alert(index);
                $(this).children(".floatIcon").hide();
                $(this).children(".floatItemHide").show();
                if(index == 2) {
                    $(".floatImgBox").show().children("img").attr("src","img/floatWX.jpg").end().show().children("img").attr("src","../../img/floatWX.jpg");
                }else if(index == 3) {
                    $(".floatImgBox").show().children("img").attr("src","img/floatQQ1.jpg").end().show().children("img").attr("src","../../img/floatQQ1.jpg");
                }
            },function() {
                $(this).children(".floatIcon").show();
                $(this).children(".floatItemHide").hide();
                $(".floatImgBox").hide();
            });
        });
    })();
    //go to top
    ~(function(){
        $(".goTop").click(function(){
            $('body,html').animate({scrollTop:0},1000);
            return false;
        });
    })();
    //market item hover
    ~(function(){
        $(".marketItem").each(function(index) {
            $(this).hover(function() {
                $(".marketItem").find("a").children(".marketPro:first-child").eq(index).stop(true,true).hide().next().show();
            },function() {
                $(".marketItem").find("a").children(".marketPro:first-child").eq(index).stop(true,true).show().next().hide();
            });
        });
    })();
    // random QQ service click
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
    //unionCulture hover
    /*~(function() {
        $(".infoProduct").each(function(index) {
            $(this).hover(function() {
                $(this).find(".infoProItem:nth-of-type(2)").css({"border":"3px solid #bbebf8","borderLeft": "none"});
            },function() {
                $(this).find(".infoProItem:nth-of-type(2)").css({"border":"3px solid #e6e6e6","borderLeft": "none"});
            });
        });
    })();*/
    //infoProItemDetails hover
    /*~(function() {
        $(".infoProItemDetails").each(function(index) {
            $(this).hover(function() {
                $(this).find("span").css({"borderColor":"#33adee"});
                $(this).find("span a").css({"color":"#33adee"});
            },function() {
                $(this).find("span").css({"borderColor":"#c7c7c7"});
                $(this).find("span a").css({"color":"#666"});
            });
        });
    })();*/
    //informs infoItems hover
    ~(function() {
        var arr = ["culture1","suspect1","personer1","protect1"];
        var arr1 = ["culture","suspect","personer","protect"];
        $(".infoItems").each(function(index) {
            $(this).hover(function() {
                $(this).find("a").stop().addClass("bounceMove");
                $(this).find("a").children(".infoCircle").css({"border":"3px solid #cbe7b7"});
                $(this).find("a .infoCircle").children("img").attr("src","img/"+arr[index]+".jpg");
            },function() {
                $(this).find("a").stop().removeClass("bounceMove");
                $(this).find("a").children(".infoCircle").css({"border":"1px solid #33adee"});
                $(this).find("a .infoCircle").children("img").attr("src","img/"+arr1[index]+".jpg");
            });
        });
    })();
    //index banner swipe
    /*~(function() {
        var $banner = $(".banner");
        var timer = setInterval(autoSwipe,3000);
        var tag = 1;
        //$banner.find("a").eq(0).children("img").addClass("activeA");
        function autoSwipe(){
            if(tag == 8){
                $banner.css({'margin-left':'0px'});
                tag = 1;
            }
            $banner.animate({'margin-left':-tag*1920},1000);
            $('.banActive>li>p').removeClass('bannerActive');
            $('.banActive>li').eq(tag%7).find("p").addClass('bannerActive');
            tag++;
        }
        $('.banActive>li>p').on({'mouseover':hoverSwipe });
        function hoverSwipe() {
            clearInterval(timer);
            $('.banActive>li>p').removeClass('bannerActive');
            $(this).stop().addClass('bannerActive');
            tag = $(this).parent().index();
            $banner.stop().animate({ 'margin-left':-tag*1920},2000);
            timer = setInterval(autoSwipe,3000);
        }
    })();*/
    //swipe2
    ~(function() {
        var arr = ["img/indexBanner1.jpg", "img/indexBanner.jpg", "img/indexBanner1.jpg", "img/indexBanner.jpg", "img/indexBanner1.jpg", "img/indexBanner.jpg", "img/indexBanner1.jpg"];
        var arr1 = ["index.html", "img/indexBanner.jpg", "https://www.baidu.com/", "img/indexBanner.jpg", "https://www.baidu.com/", "img/indexBanner.jpg", "https://www.baidu.com/"];
        $(".banner a .bannerImg").attr("src", arr[0]);
        $(".banner a").attr("href", arr1[0]);

        var index = 0;
        var timer = null;
        $(".indexBanner").hover(function() {
            clearInterval(timer);
        },function() {
            autoSwipe();
        });
        $(".bannerItem").hover(function() {
            clearInterval(timer);
            index = $(this).index();
            //alert(index);
            $('.banActive>li>p').removeClass('bannerActive');
            $(this).find(".bannerItemCon").addClass("bannerActive");
            $(".bannerImg").attr("src", arr[index]).css('opacity', 0).animate({
                "-webkitTransition":"0.6s ease","-mozTransition":"0.6s ease","-oTransition":"0.6s ease","-msTransition":"0.6s ease","-transition":"0.6s ease","opacity": 1
            }, 800);
        }, function() {
            autoSwipe();
        });
        autoSwipe();
        function autoSwipe() {
            timer = setInterval(function() {
                index++;
                if (index > 6) {
                    index = 0;
                }
                $('.banActive>li>p').removeClass('bannerActive');
                $('.banActive>li').eq(index).find("p").addClass('bannerActive');
                $(".bannerImg").attr("src", arr[index]).css('opacity', 0).animate({
                    "-webkitTransition":"0.6s ease","-mozTransition":"0.6s ease","-oTransition":"0.6s ease","-msTransition":"0.6s ease","-transition":"0.6s ease","opacity": 1
                }, 800);
            }, 2500);
        }
    })();
//mineCulture rank&buyRecord toggle js 排行榜 购买记录切换
    ~(function() {
        var $nav = $(".uS_proRank").children();
        var $con = $(".uS_proRankCont");
        $nav.each(function(index) {
            $con.hide().eq(0).show();
            $(this).click(function() {
                $(this).siblings().removeClass("uS_rankActive").end().addClass("uS_rankActive");
                $con.hide().eq(index).show();
            });
        });
    })();
//mineCulture project&&.. toggle js 项目描述&合作单位&相关图片&产品介绍 切换
    ~(function() {
        var $nav = $(".uS_contNav").children();
        var $con = $(".uS_contInfo");
        var $active =  $("<div class='uS_navActive posAb'><span class='us_navBorderTop posAb'></span><span class='us_navAngel posAb'></span></div>");
        $nav.each(function(index) {
            $nav.eq(0).append($active).css({"background":"#fff"});
            $con.hide().eq(0).show();
            $(this).click(function() {
                $active.appendTo($(this));
                $(this).css({"background":"#fff"}).siblings().css({"background":"#ededed"});
                $con.hide().eq(index).show();
            });
        });
    })();
// payMoney hoverTips js
    ~(function() {
        $(".pM_question").hover(function() {$(".pM_hoverTips").fadeIn();},function() {$(".pM_hoverTips").fadeOut()});
    })();
//payWays click add active
    ~(function() {
        var $payWays = $(".pM_payWayItem");
        $payWays.click(function() {
            if($(this).hasClass("pM_active")) {
                $(this).removeClass("pM_active");
            }else{
                $(this).addClass("pM_active");
            }
        });
    })();
//alertBox1 js
~(function() {
        //alertBox1("项目总额为272000元，共养殖为联合销售");
        function alertBox1(str) {
            var $alert1 = $("<article class='alertBox1 pC_accSetItemListMask posAb'>\
            <section class='uS_tipsCon posAb'>\
                <span class='uS_tipsClose maskClose fr'></span>\
                <div class='uS_tipsContentBox lineH'>\
                <span class='uS_tipsIcon displayIB fl'></span><p class='uS_tipsContent font18'>"+str+"</p>\
                </div>\
                <div class='uS_atOncePay txtCenter back33'><a class='colorW font18' href='javascript:void(0);'>确定</a></div>\
                </section>\
                </article>");
            $alert1.appendTo("body");
            var $close = $(".maskClose");
            var $ensure = $(".uS_atOncePay");
            $(document.body).css({"overflow-y":"hidden"});
            $close.click(function() {
                $(".alertBox1").hide();
                $(document.body).css({"overflow-y":"auto"});
            });
            $ensure.click(function() {
                $(".alertBox1").hide();
                $(document.body).css({"overflow-y":"auto"});
            });
        }
    })();

    //alertBox2 js
    ~(function() {
        //alertBox2("强哥",function fn(){alert("强哥是大哥大");});
        function alertBox2(str,fn) {
            var $alert1 = $("<article class='alertBox1 pC_accSetItemListMask posAb'>\
            <section class='uS_tipsCon posAb'>\
                <span class='uS_tipsClose maskClose fr'></span>\
                <div class='uS_tipsContentBox lineH'>\
                <span class='uS_tipsIcon displayIB fl'></span><p class='uS_tipsContent font18'>"+str+"</p>\
                </div>\
                <div class='uS_atOncePay txtCenter back33'><a class='colorW font18' href='javascript:void(0);'>确定</a></div>\
                </section>\
                </article>");
            $alert1.appendTo("body");
            var $close = $(".maskClose");
            var $ensure = $(".uS_atOncePay");
            $(document.body).css({"overflow-y":"hidden"});
            $close.click(function() {
                $(".alertBox1").hide();
                $(document.body).css({"overflow-y":"auto"});
            });
            $ensure.click(function() {
                fn();
            });
        }
    })();
//    alertBox3
    ~(function() {
        function alertBox3(str) {
            var $alert1 = $("<section class='uS_tipsCon posAb'>\
                <span class='uS_tipsClose maskClose fr'></span>\
                <div class='uS_tipsContentBox lineH'>\
                <span class='uS_tipsIcon displayIB fl'></span><p class='uS_tipsContent font18'>"+str+"</p>\
                </div>\
                <div class='uS_atOncePay txtCenter back33'><a class='colorW font18' href='javascript:void(0);'>确定</a></div>\
                </section>");
            $alert1.appendTo("body");
            var $close = $(".maskClose");
            var $ensure = $(".uS_atOncePay");
            $(document.body).css({"overflow-y":"hidden"});
            $close.click(function() {
                $(".alertBox1").hide();
                $(document.body).css({"overflow-y":"auto"});
            });
            $ensure.click(function() {
                fn();
            });
        }
    })();
//    video js
    ~(function() {
        var $video = $("#video");
        $(".lV_itemList").each(function(index) {
            $(this).click(function() {
                $(document.body).css({"overflow-y":"hidden"}).animate({scrollTop: 0},200);
                document.documentElement.scrollTop = document.body.scrollTop =0;
                $(".lV_video").show();
                //$video.get(0).attr("src","../../video/sdkc1.mov")
            });
            $(".maskClose").click(function() {
                $(".lV_video").hide();
                $(document.body).css({"overflow-y":"auto"});
                $video.get(0).pause();
            })
        });
        //click play
        $video.on("click",function(){
            if($video.get(0).paused){
                $video.get(0).play();
            }else{
                $video.get(0).pause();
            }
        });
    })();
    //   personerCenter js
    ~(function() {
        var $hover = $(".pC_headerItem").children("span");
        $hover.children().hide();
        //console.log($hover);
        $hover.each(function(index) {
            $(this).hover(function() {
                $(this).children().show();
            },function() {
                $(this).children().hide();
            });
        });
    })();
//personerCenter rightDown js
    ~(function() {
        var $hover = $(".pC_accCircle");
        $hover.each(function(index) {
            $(this).hover(function() {
                $(this).siblings(".pC_accHover").show();
            },function() {
                $(this).siblings(".pC_accHover").hide();
            });
        })
    })();
//new newsList computer js
    ~(function() {
        var $compute = $("#mL_compute");
        var $remove = $("#mL_remove");

        $compute.click(function() {
            var $money = $("input[name=money]").val();
            var $cycle = $("select[name=cycle] option:selected").text();
            var $rate = $("select[name=rate] option:selected").text();
            var $getWay = $("select[name=getWay] option:selected").text();

            var $rateMonthMoney = ($money*$cycle*$rate/1200/$cycle).toFixed(2);
            var rateYearMoney = ($money*$cycle*$rate/1200).toFixed(2);
            var allMoney = ( parseFloat($money)+parseFloat(rateYearMoney) ).toFixed(2);
            if($money.substring(0,1) == "0"){
                if( $money <= 1 && Math.floor( $money) == 0) {
                    addNum();
                }else{
                    alertBox1("您输入的金额有误！请您输入有效的金额！");
                }
            }
            if(!isNaN(allMoney)) {
                addNum();
            }else{
                alertBox1("您输入的金额有误！请您重新输入正确的金额！");
            }
            function addNum() {
                $(".mL_computerItem:first span:last").text($money);
                $(".mL_computerItem:last span:last").text(allMoney);
                if("一次性返还" == $getWay) {
                    $(".mL_computerItem:nth-of-type(2) span:first").text("应收利息");
                    $(".mL_computerItem:nth-of-type(2) span:last").text(rateYearMoney);
                }else if("按月返还" == $getWay) {
                    $(".mL_computerItem:nth-of-type(2) span:first").text("月收利息");
                    $(".mL_computerItem:nth-of-type(2) span:last").text($rateMonthMoney);
                }
            }
        });

        $remove.click(function() {
            $("input[name=money]").val("").focus();
            $(".mL_computerItem span:nth-of-type(2)").text("0.00");
        });
    })();
    //alertBox1 js
    function alertBox1(str) {
        var $alert1 = $("<article class='alertBox1 pC_accSetItemListMask posAb'>\
        <section class='uS_tipsCon posAb'>\
            <span class='uS_tipsClose maskClose fr'></span>\
            <div class='uS_tipsContentBox lineH'>\
            <span class='uS_tipsIcon displayIB fl'></span><p class='uS_tipsContent font18'>"+str+"</p>\
            </div>\
            <div class='uS_atOncePay txtCenter back33'><a class='colorW font18' href='javascript:void(0);'>确定</a></div>\
            </section>\
            </article>");
        $alert1.appendTo("body");
        var $close = $(".maskClose");
        var $ensure = $(".uS_atOncePay");
        $('html,body').animate({scrollTop:0},100);
        $(document.body).css({"overflow-y":"hidden","paddingRight":"17px"});
        $close.click(function() {
            $(".alertBox1").remove();
            $(document.body).css({"overflow-y":"auto","paddingRight":"0px"});
        });
        $ensure.click(function() {
            $(".alertBox1").remove();
            $(document.body).css({"overflow-y":"auto","paddingRight":"0px"});
        });
    }

    $(function() {
        //swipe section
        /*~(function () {
            var swiper = new Swiper('.oRD_swipeBox', {
                pagination: '.swiper-pagination',
                slidesPerView: 1,
                paginationClickable: true,
                spaceBetween: 0,
                centeredSlides: true,
                autoplay: 2500,
                speed: 1000,
                loop: true,
                autoplayDisableOnInteraction: false
            });
        })();*/
        //数据加载变化js
        ~(function() {
            var $sales = $(".oRD_con");
            var $height = 300;
            var flag = true;
            var $num1 = $("#num1").text();
            var $num2 = $("#num2").text();
            var $num3 = $("#num3").text();
            var $num4 = $("#num4").text();
            $(window).scroll(function() {
                var winHeight = $(window).scrollTop();
                if(winHeight > $height) {
                    if(flag) {
                        $sales.one("trigger",LoadData1($num1,"#num1",100));
                        $sales.one("trigger",LoadData1($num2,"#num2",4000));
                        $sales.one("trigger",LoadData1($num3,"#num3",100));
                        $sales.one("trigger",LoadData1($num4,"#num4",3000));
                        flag = !flag;
                    }
                }else{
                    flag = true;
                }
            });
            function LoadData1(obj,elem,thisNum) {
                var $num = 0;
                var loadingTimer = null;
                loadingTimer = setInterval(function() {
                    $num = $num + thisNum;
                    $(elem).text($num);
                    if($num === obj) {
                        clearInterval(loadingTimer);
                    }
                    setTimeout(function() {
                        $(elem).text(obj);
                        clearInterval(loadingTimer);
                    },2000)
                },1);
            }
        })();
    });
//newIndex top nav js
    ~(function(){
        var sc=$(document);
        $(window).scroll(function() {
            if(sc.scrollTop() >= 153) {
                $(".indexHeader").fadeOut(100);
                $(".newHeader").fadeIn(100);
            }else{
                $(".indexHeader").fadeIn(100);
                $(".newHeader").fadeOut(100);
            }
        });
    })();




});


































