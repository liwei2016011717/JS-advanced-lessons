//立即执行表达式IIFE
//1.IIFE的写法
  //①使用小括号的写法
    //(fuction foo(x,y){}(2,3))
    //(function foo(x,y){})(2,3)
    (function max( x,y){
        console.log("the max is",x>y?x:y);
    }(2,3));
    
    (function (x,y){ //可以没有函数名
        console.log("the min is",x<y?x:y);
    })(2,3);
  //②与运算符结合的写法（执行函数、进行运算）
    var i=function(){
        return 10;
    }();

    true && function(a,b){
        return a>b?a:b;
    }(5,9);
    
    !function(x,y){
        return x==y?true:false; // === 返回什么
    }("5",5);
//2.通过IIFE来解决JS缺陷
    //①解决同名变量污染
    var userId = 123;
    document.onclick = function () {
        console.log("userId = ",userId);
        //alert("userId = "+userId);
    };
    (function () {
        var a=2,b=3;
        if(a<b){
            var userId = 234;
        }
    }());

    //②解决文件之间的全局污染
    (function () {  // IIFE开始
        var x = 10;
        document.onclick = function () {
            // console.log("x = ",x);
            alert("x = "+x);
        };
    })();
    //③解决变量共享问题
    function f(){
        var getNumFuncs = [];//函数数组
        for(var i=0;i<10;i++){
            (function (j) {
                getNumFuncs[j] = function(){return j;};
            })(i);
        }
        return getNumFuncs;//设置断点，查看变量共享问题
    }
    var tmp = f();
    tmp[3]();//输出3