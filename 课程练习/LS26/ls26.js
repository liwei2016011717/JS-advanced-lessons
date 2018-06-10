//JS异步
  //1.JS是单线程的,指的是JS引擎解释和执行代码是单线程的
  //2.同步任务：在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务
  //3.异步任务：不进入主线程、而进入“任务队列”的任务
  //4.JS异步的几种形式：①回调函数   ②事件的监听机制  
                     //③发布订阅（观察者模式） ④promise


//JS异步网络数据交互
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function (e) {
        console.log("div1 click");    
    },false);//第3个参数可以不写，默认为false

    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },false);

    document.addEventListener("click",function (e) {
        console.log("document click");
    },true);

    document.body.addEventListener("click",function (e) {
        console.log("body click");
    },true);
}

function Person(name,age) {
    this.name = name;//this指的是实例化出来的对象
    this.age = age;
}
Person.prototype.show = function(){//实例化对象的原型
    console.log("i'm",this.name,",i'm ",this.age,"years old!")
}
module.exports = Person;

var arr1= [1,3,5,7,9];
console.log("arr1:",arr1);
var newArray1 = arr1.map(function (a) {
    return a*a;
});
console.log("newArray1:",newArray1);

var arr2= [1,3,5,7,9];
console.log("arr2:",arr2);
var newArray2 = arr2.filter(function (a) {//产生新数组，新数组的元素是返回为true的那些元素
    return (a>2&&a<8)?true:false;
});
console.log("newArray2:",newArray2);

var LTimeOperation = function(taskID){
    var id = taskID;
    this.go = function(callback){
        console.log('Start LTimeOperation #'+id);
        var delay = parseInt((Math.random() * 10000000) % 5000);
        setTimeout(function(){
            console.log('task #'+id+' cost '+delay+' ms.');
            callback();
        },delay);
    }
};
function f2(){
    console.log('this is f2, i am callback!\n');
}
for(var i = 0;i<5;i++){
    var task = new LTimeOperation(i);
    task.go(f2);
}

var Subject = function(){
    var _observer = [];
    this.attach = function(observer){
        _observer.push(observer);
    };
    this.detach = function(){
        _observer.pop();
    };
    this.notify = function(msg){
        for(var i=0;i<_observer.length;i++){
            _observer[i].update(msg);
        }
    };
    this.print = function(){
        console.log(_observer.length);
        console.log(_observer);
    };
};
var Observer = function(name){
    this.update = function(msg){
        console.log('i am '+name+',and i get the message: '+msg);
    };
};
var sub = new Subject()
sub.attach(new Observer('a'));
sub.attach(new Observer('b'));
sub.notify('hello');
//sub.print();

setTimeout(function(){
    var c = new Observer('c');
    sub.detach();
    sub.attach(c);
    sub.notify('world');
    //sub.print();
},5000);

var fs = require("fs");
var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    var getDataObj = url.parse(req.url,true).query;//parse第二参数决定了是否转成对象
    //console.log(getDataObj);
    var arrayIndex = getDataObj.id-1;
    //console.log(typeof arrayIndex,arrayIndex);
    fs.readFile("./NodeJsonTest.json", function readData(err, data) {
        var jsonArr=JSON.parse(data);
        //console.log("jsonArr:",jsonArr[arrayIndex]);
        
        //res.writeHead(200, {"Content-Type": "text/plain",
        res.writeHead(200, {"Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Methods": "GET, POST"
        });
        
        res.end(JSON.stringify(jsonArr[arrayIndex]));
    });

}).listen(8080,"127.0.0.1");
console.log("start server!");

const a=[];
a.push(1);

const obj={x:1};
obj.x=2;