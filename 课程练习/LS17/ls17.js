//JS继承
  //JS对象与对象的原型继承  多个对象继承于一个原型时，存在原型共享
     //例 通过Object.create静态方法创建的对象的原型共享问题
     var superObj = {
        x:1,
        y:2
    };
    var subObj_First = Object.create(superObj);
    var subObj_Second = Object.create(superObj);
    subObj_First.__proto__.x = 5;
    console.log(subObj_Second.x);//输出5
    
    //通过构造函数实现的对象与对象的原型继承的原型共享
    function Person(name){
        this.name = name;
    }
    Person.prototype.age = 22;
    Person.prototype.showName = function(){console.log(this.name);};
    function Student(id){
        this.id = id;
    }
    //var p1 = new Person("Mike");Student.prototype = p1;
    Student.prototype = new Person("Mike");
    var s1 = new Student(2017001);
    var s2 = new Student(2017002);

    //类继承的形式一
    function Person(name,age){
        this.name = name;
        this.age = age;
    };
    Person.prototype.showName = function(){console.log(this.name);};
    function Student(name,age,id){
        Person.call(this,name,age);//等效于this.name=name;this.age=age;
        this.id = id;
    }
    Student.prototype.__proto__ = Person.prototype;
    var s1 = new Student("xxx",22,2017001);//s1的原型的原型指向Person
    var s2 = new Student("www",23,2017002);


    //JS实现继承的形式 二
    function Person(name,age){
        this.name = name;
        this.age = age;
    };
    Person.prototype.showName = function(){
        console.log(this.name);
    };
    function Student(name,age,id){
        Person.call(this,name,age);
        this.id = id;
    }
    Student.prototype = Object.create(Person.prototype);
    // console.log(Person.prototype.constructor); //
    // console.log(Student.prototype.constructor); //
    Student.prototype.constructor = Student;
    var s1 = new Student("xxx",22,2017001);
    var s2 = new Student("www",23,2017002);


    //静态方法与原型方法的区别
    //静态方法是构造器函数对象（类）的属性，原型方法是实例化对象（对象）的原型属性

    var BaseClass = function() {};
    BaseClass.prototype.f2 = function () {
        console.log("This is a prototype method ");
    };
    BaseClass.f1 = function(){//定义静态方法
        console.log("This is a static method ");
    };
    BaseClass.f1();//静态方法
    var instance1 = new BaseClass();
    instance1.f2();//原型方法

    //对象原型的constructor属性
     //可以通过constructor得到实例的构造函数
     //确定对象的构造函数名、创建相似对象、constructor可用于指定构造函数
     //1. 确定对象的构造函数名
        function foo(){}
        var f=new foo();
        console.log(f.constructor.name);
     //2. 创建相似对象
       function Constr(name){
           this.name=name;
       }
       var x=new Constr("Jack");
       var y=new x.constructor("Mike");
       console.log(y);
       console.log(y instanceof Constr);
     //3. constructor可用于指定构造函数
        function Person(area){
            this.type = 'person';
            this.area = area;
        }
        Person.prototype.sayArea = function(){
            console.log(this.area);
        };
        var Father = function(age){
            this.age = age;
        };
        Father.prototype = new Person('Beijin');
        console.log(Person.prototype.constructor); //function person()
        console.log(Father.prototype.constructor); //function person()
        Father.prototype.constructor = Father;     //修正constructor指向
        console.log(Father.prototype.constructor); //function father()
        var one = new Father(25);
        Function.__proto__=Function.prototype;