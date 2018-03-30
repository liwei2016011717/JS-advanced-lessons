//一. 包装对象   基本数据类型包装对象的时候叫装箱
var a = 123;
var b = new Number(a);

console.log(a == b);
console.log(a === b);//b是对象类型
//临时包装对象     临时包装对象使用后立即释放并不影响原始值
var str = "abcde";
console.log(str.length);//输出5
str.length = 1;
console.log(str.length,str);//输出5，"abcde"

var arr = [1,2,3,4];//对象类型
console.log(arr.length);//输出4
arr.length = 1;
console.log(arr.length,arr);//输出1 [1]



//二. 类型转换
//1.转换成Boolean类型:任意对象的布尔值是true
    if(new Boolean(false)){
        console.log("执行");
    }
    if(new Boolean(true)){
        console.log("执行");
    }  //均输出执行
//2.转换成Number类型:parseInt,parseFloat
    console.log(parseFloat("123.345xx"));//123.345
    console.log(parseFloat("32343,345xx"));//32343
    console.log(parseInt("123.345xx"));//123
    console.log(parseInt("32343,345xx"));//32343
//3.隐式类型转换
    //比较运算符 与 隐式类型转换
    var a = 3;
    var b = 4;
    console.log(typeof (a>b),a>b);//输出Boolean  false

    //算数运算符 与 隐式类型转换 + -
    var c = "img" + 3 +".jpg";
    var d = "23" - 5;
    console.log(c,d);//输出img3.jpg  18



//三.  Number类型方法
var n1 = 12345.6789;
console.log(n1.toFixed(2));//输出12345.68  把数字转换成字符串，保留两位小数输出
console.log(n1.toPrecision(2));//输出1.2e+4   把数字格式化为指定的长度
console.log(n1.toString());//输出12345.6789 把数字转换为字符串，使用指定的基数
console.log(n1.toExponential(2));//输出1.23e+4  把对象的值转换为指数计数法

console.log(NaN === NaN);//输出false 不是一块内存空间
console.log(isNaN("12,3"));//输出true 
console.log(Math.floor(3.8));//向下取整
console.log(Math.floor(-3.8));//输出-4
console.log(Math.ceil(3.2));//向上取整4
console.log(Math.ceil(-3.2));//输出-3
console.log(Math.round(-3.2));//把数四舍五入为最接近的整数
console.log(Math.round(-3.5));
console.log(Math.round(-3.8));
//四. String类型方法
    //字符串链接
    var a = "abc";
    var b = "def";
    var c = a+b;//输出abcdef
    //字符串常用方法
        //①切片
        var str2 = "abcdef";
        console.log(str2.slice(2));
        //②把一个字符串分割成字符串数组
        var arr = "abcdef";
        console.log(arr.split("c",1));//输出"ab"
//五.Boolean类型方法
    //所有对象都是真值


