/*
* @Author: l
* @Date:   2017-05-11 22:09:45
* @Last Modified by:   l
* @Last Modified time: 2017-05-15 21:01:42
*/

$(".box ul li").mouseover(function(){
    var _index=$(this).index();//获取到i的序列号
    $(this).addClass("hover").siblings("li").removeClass("hover");
    //$("#pic a").eq(_index).show().siblings("a").hide();
    $(".container a").eq(_index).fadeIn().siblings("a").fadeOut();
})
