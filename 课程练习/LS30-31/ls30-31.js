//LS30  对函数的扩展
//箭头函数
  //1.语法：参数=>函数体 或 (参数)=>（函数体）
  //如果箭头函数没有参数或需要多个参数时，就是用一个圆括号代表参数部分
//使用箭头函数，上述代码等效如下,只有一个参数和一条语句
var f = v => v + 1; //单参数可以不用（），单语句可以不用return关键字
//var f = (v) => {return v + 1;};
f(2);//返回3

//2.箭头函数可以与变量解构结合使用
const full=({first,last})=>last +'' +first;
full({first:"Ming",last:"Li"});

//3.注意：函数内的this是与函数定义时所在的对象绑定，而不是使用时所在的对象（避免this缺陷）
       //大括号被解释为代码块，所以如果箭头函数直接返回一个对象，需要在对象外面加上括号

//4.箭头函数的使用注意点：
//（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
//（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
//（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
//（4）不可以使用yield命令，因此箭头函数不能用作Generator函数


//不能用箭头函数实例化一个对象
//不可以使用arguments对象

//5.例:
function foo() {
    setTimeout(function(){
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });// id: 21


function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });// id: 42
//箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以输出的是42

//6.其实箭头函数里面没有自己的this，而是引用外层的this
//所以不能用call()、apply()、bind()这些方法去改变this的指向
function foo() {
    return () => {
        return () => {
            return () => {
                console.log('id:', this.id);
            };
        };
    };
}
var f = foo.call({id: 1});
var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4});//id:1

//7.由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上小括号
var getTempItem = itemId => ({ id: itemId, name: "Temp" });
//getTempItem(23);

//等效于
var getTempItem = function (itemId) {
    return { id: itemId, name: "Temp" }
};
//getTempItem(23);


function a(x,y){
	console.log(x,y);
}
a.call({},1,2)
//1 2

a.apply({},[1,2])
//1 2




//8.函数参数默认值的实现方法
  //ES5不能直接为函数的参数指定默认值，需要通过||来实现

//9.函数参数默认值注意：
  //带默认值的参数变量是默认声明的，所以函数体内不能再用let或const重复声明
  //参数一般有顺序，有默认值的参数应该是尾参数，
  //这样可以使有默认值的用默认值,没有默认值的用传递的值
  function f(x = 1,y) {
    return [x,y];
}
f();//[1,undefined]
f(2);//[2,undefined]
//f(,3);//报错，无法使x用1，y用3


//10.ES6中的rest与spread操作符
 //...rest（剩余操作符）
 //主要用在函数参数的声明中，可获得隐含的实参，取代ES5中函数隐藏变量arguments
 //...rest比arguments更灵活
 function f(x,...y){
    console.log(x,y);
}//y（是一个变量）是把所有变量封装到一个数组里
f("a","b","c");//"a",["b","c"]

function test(){
	console.log(Array.from(arguments));
}
test("a","b","c");
(3) ["a", "b", "c"]
undefined
function test(){
	console.log(...(arguments));
}
test("a","b","c");
//a b c

//...spread扩展操作符  相当于解数组为分散的参数，主要用于函数调用时，...Rest的逆运算
function f(x,...y){
    console.log(x,y);
}
f("a",...["b","c"]);//等价于f("a","b","c");
f("a");//输出 "a",[]
f();//输出 undefined,[]






//LS31 新增的数据类型和数据结构
//1.symbol属于基本数据类型  不能使用new关键字
  //基本数据类型，表示独一无二的值，通过Symbol函数生成
  //Symbol函数可以接受一个字符串作为参数，用于区分变量


//2.注意，Symbol函数的参数只是表示对当前Symbol值的描述，因此相同参数的Symbol函数的返回值是不相等的。
// 没有参数的情况
var s1 = Symbol();
var s2 = Symbol();
s1 === s2 // false
// 有参数的情况
var s1 = Symbol("foo");
var s2 = Symbol("foo");
s1 === s2 // false

//3.如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值

const obj = {
    toString() {
        return 'abc';
    }
};
const sym = Symbol(obj);
sym // Symbol(abc)

var a={};
"toString" in a;
//true


//4.Symbol值不能与其他类型的值进行运算，会报错
var sym=Symbol('My symbol');
//"your symbol is"+sym; 报错
//但是，Symbol值可以显式转为字符串。
var sym = Symbol('My symbol');
String(sym); // 'Symbol(My symbol)'
sym.toString(); // 'Symbol(My symbol)'

//5.作为属性名的Symbol
//由于每一个Symbol值都是不相等的，这意味着Symbol值可以作为标识符
//用于对象的属性名，
//使用Symbol是用[]，而不是用点操作符
//三种写法：
var mySymbol=Symbol();
//①
 var a={};
 a[mySymbol]='Hello';//注意:中括号内不加引号
//②
 var a={
     [mySymbol]:'Hello'
 }
//③
 var a={};
 Object.defineProperty(a,mySymbol,{value:'Hello'})
//输出都为'Hello'


var aSymbol = Symbol("abc");
var obj = {
    [aSymbol]: 'Hello!'
};
Object.defineProperty(obj, Symbol("abc"), { value: 'World!' });
console.log(obj);//obj对象有两个属性  
                 //{Symbol(abc): "Hello!", Symbol(abc): "World!"}


var mySymbol = Symbol();
var a = {};
a.mySymbol = 'Hello!';
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"
//上面代码中，因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，导致a的属性名实际上是一个字符串，而不是一个
//Symbol值。


//同理，在对象的内部，使用Symbol值定义属性时，Symbol值必须放在方括号之中
// 如果不用[]的话相当于使用s对应的字符串定义属性
let s = Symbol();
let obj = {
    [s]: function (arg) {console.log("xx");}
};
obj[s](123);
// 上面代码中，如果s不放在方括号中，该属性的键名就是字符串s，而不是s所代表的那个Symbol值。


//与Symbol变量复用相关的静态方法
//Symbol.for()与Symbol()这两种写法，都会生成新的Symbol。
// 它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
// Symbol.for()不会每次调用就返回一个新的Symbol类型的值，而是会先检查给定的key是否已经存在，
// 如果不存在才会新建一个值。比如，如果你调用Symbol.for("cat")30次，每次都会返回同一个Symbol值，
// 但是调用Symbol("cat")30次，会返回30个不同的Symbol值。
//例：
console.log(Symbol.for("bar") === Symbol.for("bar"));// true
console.log(Symbol("bar") === Symbol("bar"));// false
console.log(Symbol.for("bar") === Symbol("bar"));// false
//解释：
Symbol.for("bar")//里面没有的话自动创建一个
Symbol("bar");//不管里面有没有都创建一个

//Symbol作为属性名遍历特性
//思考：
var s3 = Symbol(Symbol.keyFor(s1));
console.log(s1 === s3);
console.log(s2 === s3);
var s4 = Symbol.for(Symbol.keyFor(s1));
console.log(s1 === s4);
console.log(s2 === s4);


var obj={};
var s1=Symbol();
var s2=Symbol();
obj[s1]=123;
obj[s2]=345;
obj['s1']=678;
obj.s2=910;
for(var k in obj){
	console.log(k,typeof k);
}
//s1 string
// s2 string
Object.getOwnPropertySymbols(obj).forEach((v)=>{console.log(obj[v])});

// 123
// 345
Object.getOwnPropertySymbols(obj).forEach(function(v){console.log(obj[v])});
// 123
// 345
Object.getOwnPropertySymbols(obj).forEach(function(v){console.log(v)});
//2 Symbol()


//新增数据结构set
//通过new实例化set对象
//通过add方法向set结构里添加成员，但不会添加重复成员
//实现数组去重
var set=new Set([1,2,3,3,3,4,4]);
console.log([...set]);//数组散列开再封装成一个完整的数组
//(4) [1, 2, 3, 4]

//set的原型属性和方法
//区分基本类型和引用（对象）类型，两个对象总是不相等的
var set = new Set();
set.add({});
console.log(set.size); // 1
set.add({});
console.log(set.size); // 2

s.add(1).add(2).add(2);
// 注意2被加入了两次
s.size // 2
s.has(1); // true
s.has(2); // true
s.has(3); // false
s.delete(2);
s.has(2); // false

//将Set结构转为数组
//第一种：
var items = new Set([1, 2, 3, 4, 5]);
var array = Array.from(items);
//第二种：
console.log([...(new Set([1, 2, 3, 4, 5]))]);
//如果不加[]就是散列的元素
console.log(...(new Set([1, 2, 3, 4, 5])));//1, 2, 3, 4, 5


// set应用案例 并集、交集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}