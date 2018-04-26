//JS对象
    //使用3种方式来创建对象
    var obj1,obj2,obj3;
    //obj1通过字面量方式创建，并创建自身属性x
    //obj2通过Object静态方法创建，obj2的原型为obj1，并创建自身属性y
    //obj3通过构造函数来创建，构造函数为Obj3

    //通过字面量的方式创建 JS对象
    var obj = {
        num:10,
        str:"Hi",
        show:function(){
            return this.str;
        }
    };
    console.log(obj.num);
    console.log(obj.str);
    console.log(obj.show());

    //通过Object工场方法创建JS对象,注：JS对象是通过原型链的方式实现的对象继承
    var newObj = Object.create(obj);
    newObj.age = 23;
    console.log(newObj.num);
    console.log(newObj.str);
    console.log(newObj.show());
    console.log(newObj.age);//自有属性

    var empty = {};
    var obj2 = Object.create(empty,{
    x:{value:1}, y:{value:2,enumerable:true}
    });
    console.log(obj2);
    console.log(obj2.hasOwnProperty("x"));

    //构造函数的方式创建JS对象  此处略讲，详情参照后续面向对象编程 注：JS对象是通过原型链的方式实现的对象继承
    function Person(name,age){
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayName = function(){
        console.log("hello,i'm",this.name,this.age,"years old");
    };

    var person1 = new Person("Mike",21);
    person1.sayName();


//JS继承方式
  //JS采用的是原型的继承方式，每个对象都有一个原型对象，最原始的原型是null
  //JS的继承是对象-对象的原型继承
  //任何方式创建的对象都有原型对象，可以通过对象的__proto__属性来访问原型对象

  //例：
  var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
  };
  //console.log(obj.__proto__);
  console.log(obj.__proto__ === Object.prototype);//true

    var a={};
    a.__proto__;
    a.__proto__===Object.prototype;//true

    var b=new Object();
    b.__proto__===Object.prototype;//true
    b.__proto__.__proto__===null;//true

 //原型链
    var proObj = {
        z:3
    };

    var obj = Object.create(proObj);
    obj.x = 1;
    obj.y = 2;

    console.log(obj.x);//1
    console.log(obj.y);//2
    console.log(obj.z);//3

    console.log("z" in obj);//true
    console.log(obj.hasOwnProperty("z"));//false
    obj.z = 5;

    console.log(obj.hasOwnProperty("z"));//true
    console.log(obj.z);//5
    console.log(proObj.z);//3

    obj.z = 8;
    console.log(obj.z);//8

    delete obj.z;//true  静默失败
    console.log(obj.z);3

    delete obj.z;//true//
    console.log(obj.z);3

  //基于构造函数实现的原型继承
    //在JS中构造函数也是对象，有一个重要的属性（原型 prototype），该属性与继承相关
    function Person(age,name) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHi = function () {
        console.log("Hi,i'm "+this.name);
    };
    var p1 = new Person(20,"Jack");
    console.log(p1.name);
    console.log(p1.age);
    p1.sayHi();
    Person.__proto__===Function.prototype;//true
    Person.__proto__.__proto__===Object.prototype;//true
    Person.__proto__.__proto__.__proto__===null;//true
