//JS对象属性特性
  //1.JS对象属性（数据属性）的特性
	//①属性的值（[value]）,对应属性的值
	//②可写特性（[writable]）,确定属性是否可写性
	//③可配置特性（[configurable]）,确定属性是否能删除和其他特性是否可配置
	//④可枚举特性（[enumerable]）,属性是否枚举
  //2.设置属性的特性  defineProperty方法设置enumerable
	var obj = {
		x:1,
		y:2
	};
	for(var k in obj){
		console.log(k,obj[k]);
	} //x 1  y 2

	var obj = {
		x:1,
		y:2
	};
	Object.defineProperty(obj,"x",{enumerable:false});
	for(var k in obj){
		console.log(k,obj[k]);
	}//y 2  x是不可枚举的

	//例：
	var person = {name:"Jack"};
	Object.defineProperty(person,"name",{
		writable:false,//不可写
		configurable:false,//不可删除
		enumerable:true,//可枚举
		value:"Mike"
	});
	console.log(person.name);//Mike
	person.name = "Lucy";
	console.log(person.name);//Mike
	delete person.name;
	console.log(person.name);//Mike

  //3.给对象添加属性
	 //①直接添加（属性特性默认都为true）
		var obj = {
			x:1,
			y:2
		};
		obj.z = 3;
		for(var k in obj){
			console.log(k,obj[k]);
		} //x 1  y 2  z 3
	 //②通过defineProperty方法添加(除了手动修改的外，其余的默认为false)
		var obj = {
			x:1,
			y:2
		};
		obj.z = 3;
		Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，所以默认为false
		for(var k in obj){
			console.log(k,obj[k]);
		}//x 1 y 2 z 3 遍历不到w
  //4.JS对象访问器（访问器属性）的特性
	     //③可配置特性（[configurable]）,确定属性是否能删除和其他特性是否可配置
		 //④可枚举特性（[enumerable]）,属性是否枚举
		 //③读取属性特性（[get]）,在读取属性时调用的函数，默认是undefined
		 //③写入属性特性（[set]）,在写入属性时调用的函数，默认是undefined
		 
		 //get例：
		 var obj1={
			_name:"Lucy"
		};
		Object.defineProperty(obj1,"name",{
			get:function (){
				return this._name;
			}
		});
		console.log(obj1.name);//"Lucy"
		obj1.name="jack";
		console.log(obj1.name);//"Lucy"
        //set例
		var obj2={
			_name:"Lucy",
			set name(val){this._name = val;},
			get name(){return this._name;}
		};
		Object.defineProperty(obj2,"name",{
			get:function (){
				return this._name+"_hihi";
			},
			set:function (val) {
				this._name = val+"_haha";
			}
		});
		console.log(obj2.name);//Lucy_hihi
		obj2.name="jack";
		console.log(obj2.name);//jack_haha_hihi

		var person = {_name:"Jack"};
		Object.defineProperty(person,"name",{
			configurable:false,//若为true会如何
			enumerable:true,
			set:function(val){this._name = val},
			get:function(){return this._name}
		});
		console.log(person.name);//jack
		person.name = "Lucy";
		console.log(person.name);//Lucy
		delete person.name;
		console.log(person.name);//Lucy
  //5.属性特性描述符
	//-属性特性描述符是一个用来查看对象属性的特性的对象
	//-该对象包含4个属性，对应4个特性，通过getOwnPropertyDescriptor方法获得
	var obj = {x:5};
	Object.defineProperty(obj,"y",{
		configurable:false,
		writable:false,
		enumerable:true,
		value:6
	});
	Object.defineProperty(obj,"z",{
		configurable:false,
		value:7
	});
	Object.getOwnPropertyDescriptor(obj,"x");
	//Object.getOwnPropertyDescriptor(obj,"y");
	//Object.getOwnPropertyDescriptor(obj,"z");
  
	//6.给多个属性设置特性的方法    
	var obj = {_x:1};
	Object.defineProperties(obj,{
		y:{value:2,writable:true,configurable:true,enumerable:true},
		z:{value:2,writable:true,configurable:true,enumerable:true},
		x:{
			get:function(){return this._x;},
			set:function (val) {
				this._x = val;
			}
		}
	});

  //7.JS 对象的扩展、密封及冻结（级别逐渐升高）	
		var obj2=Object.create({x:1});
		obj2.y=2;
		Object.keys(obj2);
		Object.defineProperty(obj2,"z",{value:3});
		Object.getOwnPropertyDescriptor(obj2,"z");
		Object.keys(obj2);
		Object.getOwnPropertyNames(obj2);
		for(var k in obj2){
			console.log(k,obj2[k]);
		}
		//y 2   先输出自身的在输出原型的
		//x 1

		//只要是自身的属性都可以遍历出来

		//如果是冻结的满足前边两个的条件

		//JS对象是否密封 isSealed
		//如果对象不可扩展，且所有属性的可配置特性为false，则该对象为密封的对象

		//JS对象是否冻结 isFrozen
		//如果对象不可扩展，所有属性的可配置特性为false，
		//且所有属性的可写特性为false则该对象为密封的对象
		//一个非空对象默认也是非冻结的.