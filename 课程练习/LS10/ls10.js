//JS作用域(词法作用域)
  //JS采用的是词法作用域（静态性）
  //词法作用域从哪里调用等因素影响，与调用形式无关（体现了静态性）

  //1.词法作用域 作用于全局，与调用形式无关
    //例1
    var name = "Jack";
    function echo() {
        console.log(name);
    }
    function foo() {
        var name = "Bill";
        echo();
    }
    foo();//Jack
    //例2
    var name = "Jack";
    function echo() {
        console.log(name);
    }
    function foo() {
        var name = "Bill";
        function fee(){
            var name = "Lucy";
            echo();
        }
        fee();
    }
    foo();//Jack

 //2.通过new Function创建的函数对象不一定遵从静态词法作用域
    //当函数作用域里有scope值时，function调用局部，new Function创建的函数可以作用于全局
    
 var scope = "g";
 function foo(){
     var scope = "l";
     return function()
     {
         return scope;
     };
 }//l
 console.log(foo()());

 var scope = "g";
 function foo(){
     var scope = "l";
     return new Function("console.log(scope);")
 }
 console.log(foo()());//g
  
  //3.ES5采用的是函数级作用域无块作用域
    {
        var a = 4;
    }
    console.log(a);//正常输出4

    //无块作用域会造成变量污染、变量共享问题
    //例
    var userId = 123;
    document.onclick = function () {
        console.log("userId = ",userId);
    };
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }//会输出234，userId重复定义

    var userId = 123;
    document.onclick = function () {
        console.log("userId = ",userId);
    };
    (function(){
        var a=2,b=3;
        if(a<b){
            var userId = 234;
        }
    }());//会输出123，用函数把下边的语句封装起来
    var userId = 123;
    document.onclick = function () {
        console.log("userId = ",userId);
    };
    (function(){
        var a=2,b=3;
        if(a<b){
            userId = 234;
        }
    }());//输出234，是改变userId的值


//执行上下文
  //执行上下文指代码执行时的上下文环境（包括局部变量、相关的函数、相关自由变量等）

//调用栈
//代码执行时JS引擎会以栈的方式来处理和追踪函数调用（函数调用栈 Call Stack）
//栈底对应的是全局上下文环境，栈顶对应的是当前正在执行的上下文环境
