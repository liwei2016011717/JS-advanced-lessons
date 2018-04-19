//JS对象
  //1.JS对象是一种复合值：将很多值复合在一起（包括原始类型值、对象、函数）
  //函数作为某一个对象的属性时，称其为该对象的方法
  var obj={
	 num:10,
	 str:"Hi",
	 show:function(){
		 console.log(this.str);
	 } 
  };
  console.log(obj.num);//10
  console.log(obj.str);//Hi
  obj.show();//Hi


  //2.JS对象分类
  //--内置对象() 由ES规范定义的对象或构造对象(数组、函数等)  分为构造器函数对象和非构造器函数对象
  //--宿主对象() window、document
  //--自定对象  运行中的用户自定义JS代码创建的对象
  //对象中构造器是Function    //new Array  Array的类型就是Array
	console.log(new Function() instanceof Function);//true
	console.log(new(new Function()) instanceof Function);//false
	console.log(new(new Function()) instanceof Object);//true
	//new Function()是函数原型的实例化
	
    console.log(typeof Array);//function
	console.log(typeof Function);//function
	console.log(typeof Date);//同上
	console.log(typeof Number);//同上
	console.log(typeof String);//同上
	console.log(typeof Boolean);//同上
	console.log(typeof Math);//Object
	console.log(typeof JSON);//Object

 //3.JS对象的属性
	 //①数据属性，字符串的键到值的映射（包括基本类型数据、对象、函数）
	 //②访问器属性,访问属性的方法, 访问和设置时不加括号
	 //③内置属性不能直接访问
	
	 //访问器属性 只写
	 var o = {
		_x:1.0,
		get x(){
			return this._x;
		},
		set x(val){
			this._x = val;
		}
	};
	console.log(o.x);//1
	o.x = 2;
	console.log(o.x,o._x);//2 2

    //访问器属性 只读
	var o = {
		_x:1.0,
		get x(){
			return this._x;
		}
	};
	console.log(o.x);//1
	o.x = 2;
	console.log(o.x);//1
	
    //对象的key值是字符串类型
    //函数也是对象

	//_x是定义一个内部属性，用get使用   get()的优先级高于数据属性
	//set()优先级高于get() 
	//如果只有getter方法那么是只读属性，
	//如果只有setter方法，则是一个只写属性，读取时返回undefined 
	var p1 = {
		_name:"Jack",
		_age:23,
		set age(val){
			if(val>0&&val<150){
				this._age = val;
			}else{
				console.log("请设置正常年龄");
			}
		},
		get age(){
			return this._age;
		}
	};
	p1.age = 178;
	console.log(p1.age);
	//创建JS对象的方式	
		//通过对象字面量的方式直接创建对象
		//通过Object的create静态方法创建对象
		//通过构造函数的方式创建对象
  //4.
   var o={
	  x:1.0,
   }
   o.__proto__===Object.prototype;//true

   var o2=Object.create(o);
   o2.__proto__===o;//true

   function Person(name,age){
	   this.name=name;
	   this.age=age;
   }
   Person.__proto__===Function.prototype;//true
   
   var p=new Person("abc");
   p.__proto__===Person.prototype;//true

   Person.__proto__.__proto__===Object.prototype;
   Person.__proto__.proto__.__proto__===null;//true  //一切对象的源头都是null








