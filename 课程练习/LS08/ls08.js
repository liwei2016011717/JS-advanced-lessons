//1.函数对象
//函数对象对应的类型是Function（类似于数组对象对应于Array、日期对象对应于Date）
//如果变量是函数（函数对象）时，typeof此对象，返回function，而非object 
//内置的函数对象（Array、Function、Date等），内置的非函数对象（Math、JSON）
console.log(typeof new Function());// function 
console.log(typeof new Array());	 //object
console.log(typeof new Date());	 // object

//2.函数对象的属性及方法
//(1)length 表示输出函数的形参的个数 arguments.length 表示输出函数实参的个数
function checkVarCount(a, b) {
    if (checkVarCount.length !== arguments.length) {
        alert("The count of the parameters you passed into the function doesn't match the function definition.");
    }else{
        alert("Successfully call the function");
    }

}
checkVarCount(1, 2);
//Successfully call the function
checkVarCount(1);
//The count of the parameters you passed into the function doesn't match the function definition.


//（2）caller和callee
//caller 获取调用当前函数的函数  caller属性只有当函数正在执行时才被定义
var obj = {
    foo1:function(){
        console.log(this.foo1.caller);
    },
    foo2:function abc(){
        this.foo1();
    }
};
obj.foo1();
obj.foo2();

//callee 返回正被执行的 Function 对象，
//即指定的 Function 对象的正文
//callee 属性是 arguments 对象的一个成员
//该属性仅当相关函数正在执行时才可用。通常这个属性被用来递归调用匿名函数
var func = function(n){
    if (n <= 0)
        return 1;
    else
        return n * func(n - 1);
        //return n * arguments.callee(n - 1);
};
console.log(func(4));

//优点，可以是匿名函数
(function(n){
    if (n <= 0)
        return 1;
    else
        return n * arguments.callee(n - 1);
}(4));

//(3)函数对象属性之 prototype
//获取对象的原型。每一个构造函数都有一个prototype属性，指向另一个对象。
//这个对象的所有属性和方法，都会被构造函数的实例继承

//(4)函数对象方法之 bind 硬绑定
//在绑定功能中，this对象解析为传入的对象。
// 返回一个与 function 函数相同的新函数，只不过函数中的this对象和参数不同
var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo.bind(this)();
		foo();
    }
};
obj.test();
// 23
//45   //返回的是函数对象，绑定的一个函数

var obj1={
	x:12,
	foo:function(y){
		console.log(this.x,y);
	}
}
var obj2={
	x:34,
}
var fee=obj1.foo.blind(obj2);
fee();

//3.高阶函数
//定义：函数作为参数被传递（最常见的形式：回调函数）
//     函数作为返回值输出（与闭包有紧密联系)
var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
	console.log("this1",this);
    return function fun2() {
		console.log("this2",this);
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());//未调用fun(1)
console.log("输出：",obj.fun3()());
console.log("输出：",obj.fun4());