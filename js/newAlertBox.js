$(function() {
    //newAlertBox1("hello world,hello world,hello world");
    //newAlertBox2("hello world","https:\\www.baidu.com");
    function newAlertBox1(str) {
        var $alert = $('<article class="newMask posAb">\
                <section class="newMask_tipsBox posAb">\
                <aside class="newMask_tipsTitle"><span class="newMask_tipsTitleLe font18 displayB fl">提示</span><span class="newMask_close displayB fr maskHide cursor"></span></aside>\
                <aside class="newMask_tipsCon lineH">\
                <span class="displayB fl newMask_icon colorW txtCenter font24 back33">!</span><span class="displayB fl newMask_tipsContent lineH">'+str+'</span>\
                </aside>\
                <aside class="newMask_Btn colorW txtCenter back33 posAb font18 maskHide cursor">确定</aside>\
                </section>\
                </article>');
        $alert.appendTo("body");
        $('body,html').animate({scrollTop:0},200);
        $("body").css({"overflowY":"hidden","paddingRight":"15px"});
        $(".maskHide").click(function() {
            $(".newMask").hide();
            $("body").css({"overflowY":"auto","paddingRight":"0px"});
        });
    }
    function newAlertBox2(str,href) {
        var $alert = $('<article class="newMask posAb">\
                <section class="newMask_tipsBox posAb">\
                <aside class="newMask_tipsTitle"><span class="newMask_tipsTitleLe font18 displayB fl">提示</span><span class="newMask_close displayB fr maskHide cursor"></span></aside>\
                <aside class="newMask_tipsCon lineH">\
                <span class="displayB fl newMask_icon colorW txtCenter font24 back33">!</span><span class="displayB fl newMask_tipsContent lineH">'+str+'</span>\
                </aside>\
                <aside class="newMask_Btn colorW txtCenter back33 posAb font18 cursor">确定</aside>\
                </section>\
                </article>');
        $alert.appendTo("body");
        $('body,html').animate({scrollTop:0},200);
        $("body").css({"overflowY":"hidden","paddingRight":"15px"});
        $(".maskHide").click(function() {
            $(".newMask").hide();
            $("body").css({"overflowY":"auto","paddingRight":"0px"});
        });
        $(".newMask_Btn").click(function() {
            window.location.href = href;
        });
    }

    function newAlertBox3(str,fn) {
        var $alert = $('<article class="newMask posAb">\
                <section class="newMask_tipsBox posAb">\
                <aside class="newMask_tipsTitle"><span class="newMask_tipsTitleLe font18 displayB fl">提示</span><span class="newMask_close displayB fr maskHide cursor"></span></aside>\
                <aside class="newMask_tipsCon lineH">\
                <span class="displayB fl newMask_icon colorW txtCenter font24 back33">!</span><span class="displayB fl newMask_tipsContent lineH">'+str+'</span>\
                </aside>\
                <aside class="newMask_Btn colorW txtCenter back33 posAb font18 cursor">确定</aside>\
                </section>\
                </article>');
        $alert.appendTo("body");
        $('body,html').animate({scrollTop:0},200);
        $("body").css({"overflowY":"hidden","paddingRight":"15px"});
        $(".maskHide").click(function() {
            $(".newMask").hide();
            $("body").css({"overflowY":"auto","paddingRight":"0px"});
        });
        $(".newMask_Btn").click(function() {
            fn();
        });
    }
});
