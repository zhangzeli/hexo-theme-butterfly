(function(){
    if(window.isMobile()){
        return;
    }
    let body = $("body")
    let content=$('#content-outer')
    let divleft = $("<div id='divleft'>广告位招租联系853089986@qq.com</div>")
    let divright = $("<div id='divright'>广告位招租联系微信twobixiaoxin</div>")
    content.append(divleft)
    content.append(divright)
    console.log(content)
    let navHeighe = $('#nav').height();
    console.log(navHeighe)
    $(window).scroll(function(){
        var scrollTopHeighet = $(this).scrollTop()
        if(scrollTopHeighet>=navHeighe){
            divright.css("display","inline")
            divleft.css("display","inline")
            divleft.css("top",(scrollTopHeighet)+"px")
            divright.css("top",(scrollTopHeighet)+"px")
        }else{
            divright.css("display","none")
            divleft.css("display","none")
        }
        // console.log(scrollTopHeighet-navHeighe)
    })
})(window)