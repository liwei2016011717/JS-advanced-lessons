//解构赋值定义：ES6允许按照一定模式。从数组和对象中提取值，对变量进行赋值

//一、数组的解构赋值
//例:
let [a,b,[c],d]=[{x:1},3,[true],"ab"];
console.log(a,b,c,d);

//注意：如果解构不成功，变量的值就等于undefined
var [foo2] = [];
var [bar2, fee2] = [1];
console.log(foo2,fee2);//undefined undefined


//解构赋值
var [a,b]=[1,2];
console.log(a,b);
[a,b]=[b,a];
console.log(a,b);
// 1 2
// 2 1

//解构赋值变量允许有默认值
var [foo3=3]=[]
console.log(foo3);//3
[x3, y3 = 'b'] = ['a']; //x3=a,y3=b
[x4, y4 = 'b'] = ['a',undefined];//x4=a,y4=undefined

// ES6内部使用严格相等运算符（===），判断一个位置是否有值。
// 所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
var [x5 = 1] = [undefined];//x5 为 1
var [x6 = 1] = [null];//x6 为 null

//默认值可以引用解构赋值的其他变量，但该变量必须已经声明
let [m1 = 1, n1 = m1] = []; // m1=1; n1=1
let [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
let [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
//let [m4 = n4, n4 = 1] = []; // 在n4未声明之前使用了，报错
console.log(m1,n1,m2,n2,m3,n3);


//a输出结果为b中的奇数
let a=[];
let b=[1,2,3,4,5];
[a[0],,a[1],,a[2]]=b;
console.log(a);//[1, 3, 5]


//二、对象解构赋值
var { bar2, foo2 } = { foo2: "ccc", bar2: "ddd" };//顺序不同，没关系
console.log(foo2,bar2);//ccc  ddd

//左侧为键值对时,注意键值对赋值时的对应关系
var { foo4: baz4 } = { foo4: 'aaa', bar4: 'bbb' };
console.log(baz4);// "aaa"  键(foo4)只用于匹配，真正赋给的是对应的值
                          //真正被赋值的是变量baz4，而不是模式foo4


let { first, last } = obj1;
//等效为let{first:first,last:last}=obj1;
console.log(first,last);

//和数组一样，解构也可以用于嵌套结构的对象
var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: [x, { y }] } = obj2;//这个可以写成 var {p:[x,{y:z}]}=obj2;
console.log(x); // "Hello"
console.log(y); // "world"


//对象的解构也可以指定默认值。
var {x2 = 3} = {};
console.log(x2); // 3


//三、字符串的解构赋值
//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let {length : len} = 'hello';
console.log(len); // 5

//四、数字的解构赋值
//解构赋值时，如果等号右边是数值和布尔值，则会转为对象
let {toString:s1}=123;
console.log(s1);//s1===Number.prototype.toString ->true

let {toString: s2} = true;
console.log(s2); //
//s2 === Boolean.prototype.toString // true

///五、函数参数的解构赋值
//为变量x和y指定默认值
function move1({x = 0, y = 0} = {}) {
    return [x, y];
}
console.log(move1({x: 3, y: 4})); // [3, 4]
console.log(move1({x: 3})); // [3, 0]
console.log(move1({})); // [0, 0]
console.log(move1()); // [0, 0]

//为函数move的参数指定默认值
function move2({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}
console.log(move2({x: 3, y: 8})); // [3, 8]
console.log(move2({x: 3})); // [3, undefined]
console.log(move2({})); // [undefined, undefined]
console.log(move2()); // [0, 0]


// 返回一个对象,解构所有属性
function example() {
    return {
        foo: 1,
        bar: 2
    };
}
var { foo, bar } = example();
console.log(foo,bar)//1  2


//解构赋值可以方便地将一组参数与变量名对应起来。
// 参数是一组有次序的值
function f([x, y, z]) {
    console.log(x);
    console.log(y);
    console.log(z);
}
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) {
    console.log(x);
    console.log(y);
    console.log(z);
}
f({z: 3, y: 2, x: 1});