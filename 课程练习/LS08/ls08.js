//函数对象












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
console.log("输出：",obj.fun3());//输出什么
console.log("输出：",obj.fun3()());//输出什么
console.log("输出：",obj.fun4());//输出什么