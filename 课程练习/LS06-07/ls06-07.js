// &&与||理解和应用
	// ①运算符两边的操作数都是布尔类型
		// 对于&&来说，除了两侧都为真时为真，其他情况都为假
		// 对于||来说，除了两侧都为假时为假，其他情况都为真
	// ②当逻辑运算符&&和||两侧的操作数不是布尔类型时
		// 首先将左操作数转换成布尔类型，对转换后的左操作数进行逻辑判断，然后根据短路原则返回原始左操作数或原始右操作数

		// 短路原则：对于&&，转换后的左操作数若为true，则直接返回原始右操作数，若为false则直接返回原始左操作数
		// 对于||,转化后的左操作数若为true，则直接返回原始左操作数若为false则直接返回原始右操作数。
		// 通过短路原则，可以用&&和||来实现复杂的条件语句来代替if-else
		
	//例：
		var score = 76;
		if(score>90){
			console.log("优");
		}else if(score>75){
			console.log("良");
		}else if(score>60){
			console.log("及格");
		}else{
			console.log("不及格");
		}
		





		
		//通过&&和||的组合实现如上功能，注：小括号优先级最高
		console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||"不及格");


//函数的定义和调用
	//函数的定义方法
	// 通过函数声明的形式来定义（要有函数名）
	// 通过函数表达式的形式来定义（可以是没有函数名的匿名函数，有名的话方便调用栈追踪）
	// 通过Function构造函数实例化的形式来定义（JS中函数也是对象，函数对象）

	//函数的调用方法
	// 作为函数直接调用（非严格模式下this为全局对象，严格模式下为undefined）
	// 作为方法调用（this为调用此方法的对象）
	// 通过call( )和apply( )间接调用（this为函数对象的call/apply方法的首个参数，移花接木
	// 作为构造函数调用（this为实例化出来的对象）

	
	var x=45;
	var test=function(){
		console.log("输出",this.x);
	}
	var obj={
		x:23
	};
	obj.test=test;
	obj.test();//输出23 主体是test那个函数 this指向obj
	test();//输出45 主体是window

	var x=45;
	var obj={
		x:23,
		test:function(){
			function foo(){
				console.log(this.x);
			}
			foo();
		}
	};
	obj.test();//输出45