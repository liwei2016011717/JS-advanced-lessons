//1
for(var i=1;i<=3;i++){
    (function(i){	
        setTimeout(function(){
                console.log(i);
            },0)
    }(i));
}//1 2 3


//2.
var foo=1;
(function(){
	console.log(foo);
	var foo=2;
    console.log(foo);
})()//undefined  2

//3.
var tmp =10;
function foo(x){
	var tmp=3;
	return function(y){console.log(x+y+(++tmp));}//静态词法作用域
}
var fee=foo(2);
fee(10);fee(10);fee(10);//16 17 18  x; tmp=3;function(y){console.log(x+y+(++tmp));}形成了一个闭包


//4.
var aa=[1,2,3];
var bb=aa;
bb.shift();
console.log(aa);//2 3 

var aa=[1,2,3];
var bb=aa;
bb.shift();
bb=[2,3,4,5]//新开辟的一块空间
bb.pop();
console.log(aa);//2 3

//5.
//函数也是一个对象
function add(a,b){this(a,b);console.log(a+b);}
function sub(a,b){console.log(a-b);}
var arr=[3,1];
add.apply(sub,arr);//this指代的是sub这个函数对象


//6.
var x=[1];
function foo(y){
	y[0]=2;
}
foo(x);
console.log(x[0]);//2 x,y是引用数据类型 指向同一个空间 y[0]=2,所以最后输出2