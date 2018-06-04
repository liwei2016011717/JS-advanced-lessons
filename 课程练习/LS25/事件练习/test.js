window.onload=function(e){
    //console.log("window.load");
    var div1=document.getElementById("div1")
    var div2=document.getElementById("div2")
//     div1.onclick=function(e){
//         console.log(e);
//         console.log(e.clientX,e.clientY);
//        console.log(e.target);
//        console.log(this);
//       console.log(e.type);
//        console.log(e);
//        console.log(e.__proto__);
//        console.log(e.__proto__.__proto__);
//        console.log(e.__proto__.__proto__.__proto__);
//        console.log(e.__proto__.__proto__.__proto__.__proto__);
//    }


    //DOM0级事件监听
        //    function clickHandler(e){
        //        console.log(e.target);
        //    }

        //     div1.onclick=clickHandler;
        //     div2.onclick=clickHandler;
        //     div2.onclick=function(){
        //     console.log(123);
        //  }


    //DOM2级事件监听
        // function clickHandler(e){
        //     console.log(e.target);
        // }
        // div1.addEventListener("click",clickHandler);
        // div2.addEventListener("click",clickHandler);
        // document.addEventListener("click",clickHandler);
        // window.addEventListener("click",clickHandler);


    //事件流
    div1.addEventListener("click",function (e) {
        console.log("div1 click",this,e.target);
        e.stopPropagation();
    },false);//第3个参数可以不写，默认为false

    div2.addEventListener("click",function (e) {
        console.log("div2 click",this,e.target);
    },false);

    document.addEventListener("click",function (e) {
        console.log("document click",this,e.target);
    },false);

    document.body.addEventListener("click",function (e) {
        console.log("body click",this,e.target);
    },true); //依次输出b 1 2 d
}//target(触发的最精确的节点)和thisc