/*
* @Author: l
* @Date:   2017-05-17 23:13:36
* @Last Modified by:   l
* @Last Modified time: 2017-05-17 23:13:41
*/

//使用HTML5 web存储的sessionStorage方式进行编写一个web页面.
    //功能是一个简易的web留言板，留言板信息可以永久保存。并能清除留言板内容。
    //添加留言信息的功能
    function addInfo(){
        var info=document.getElementById("t1");
        var LStorage=window.localStorage;//获取localStorage对象
        if(LStorage.myBoard){
            var date=new Date();
            //获取原先键所对应的值再加上文本框中所输入的留言信息，也就是说，键所对应的值做累加
            LStorage.myBoard+=t1.value+"\n发表时间:"+date.toLocaleString()+"\n";

        }else{
            var date=new Date();
            //获取原先键所对应的值再加上文本框中所输入的留言信息，也就是说，键所对应的值做累加
            LStorage.myBoard=t1.value+"\n发表时间:"+date.toLocaleString()+"\n";
        }
        upInfo();
    }
    //取出键所对应的 值显示在多行文本框中
    function upInfo(){
        var LStorage=window.localStorage;
        var show=document.getElementById("show");
        if(window.localStorage.myBoard){
            show.value=window.localStorage.getItem("myBoard");
        }else{
            show.value="还没有留言";
        }
    }
     function cleanInfo(){
        window.localStorage.removeItem("myBoard");
        upInfo();
    }
