//JS闭包
//1.闭包的概念：① 闭包是由函数和与其相关的引用环境组合而成的实体
               //闭包是词法作用域中的函数和其相关变量的包裹体
    //例：
             function createInc(startValue){
                 return function(step){
                     startValue+=step;
                     return startValue;
                 }
             }
             var inc=createInc(5);
             console.log(inc(1));//6
             console.log(inc(2));//8
             inc =createInc(5);//重新创建了一个闭包
             console.log(inc(1));//6

             function createInc(startValue){
                return function(step){
                    startValue+=step;
                    return startValue;
                }
            }
            var inc=createInc(5);
            console.log(inc(1));//6
            console.log(inc(2));//8
            var inc2 =createInc(5);//又创建了一个闭包
            console.log(inc(1));//9
            console.log(inc2(1));//6
            //②闭包是一个函数外加上该函数创建时所建立的作用域
            function foo(){
                var i=0;
                function bar(){
                    console.log(++i);
                }
                return bar;
            }
            var a=foo();
            var b=foo();
            a();//1  函数bar和其相关词法上下文中的变量i，构成了一个闭包返回的函数bar，依然能够访问到变量i
            a();//2
            b();//1

//2.闭包的常见形式
   //①以函数对象形式返回
   var tmp = 100;//形成的闭包不包含这个变量tmp
   function foo(x) {
        var tmp = 3;
        return function (y) {
            console.log(x + y + (++tmp));
        }
    }
    var fee = foo(2); //fee形成了一个闭包  foo中的tmp调用没有被释放
    fee(10);//16
    fee(10);//17
    fee(10);//18

    function f1(m){
        var z = 100;
        function f2(x) {
            return function (y) {
                console.log(x + y + (++z));
            }
        }
        return f2(m);
    }
    var f3 = f1(2); 
    f3(10);//113 形成了两个闭包 f1和z  f2和x
    f3(10);//114

    function foo(x) {
        var tmp = 3;
        return function (y) {
            x.count = x.count ? x.count + 1 : 1;
            console.log(x + y + tmp,x.count);
        }
    }
    var age = new Number(2);
    var bar = foo(age); //和相关作用域形成了一个闭包
    bar(10); //15 1
    bar(10); //15 2
    bar(10); //15 3
    //②以对象形式返回
        function counter() {
            var n = 0;
            return {
                count:function () {return ++n;},
                reset:function () {n = 0;return n;}
            }
        }
        var c = counter();
        var d = counter();
        console.log(c.count());//1
        console.log(d.count());//1
        console.log(c.reset());//0
        console.log(c.count());//1
        console.log(d.count());//2

//3.闭包的作用
   //可通过闭包来访问隐藏在函数作用域内的局部变量
   //使函数中的变量被保存在内存中不被释放（单例模式）
   
    function f1(){
        var n = 999;
        function f2(){
            console.log(++n);
        }
        return f2;
    }
    var f = f1();
    f();//1000  n在f1调用后并不直接释放
    f();//1001