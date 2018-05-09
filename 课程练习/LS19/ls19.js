//Date对象
 //1.通过构造函数创建Date对象的四种形式
 //new Date(year,month,date?,hours?,minutes?,seconds?,milliseconds?)
 //new Date(dateTimeStr) 参数为字符串类型
 //new Date(timeValue) 参数为数字类型
 //new Date()  返回当前时间
   //例：
     var date=new Date(2017,9,18,12,34,1);
     console.log(date);

     var date6 = new Date(NaN);
     console.log(date6);//Invalid Date  无效日期  date6也是Date类型

 //2.Date的方法
    //①静态方法
      Date.now()
      Date.parsedateTimeString()//转成毫秒

      console.log(Date.now());
      console.log((new Date()).getTime());
    //原型方法 getter  setter
    var d=new Date("1978-11-25");
    console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
    console.log(d.getTimezoneOffset());
    d.setDate(11);
    console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
    d.setFullYear(1999,5,3);
    console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());

    var today=new Date();
today.setMonth(6);
console.log(today);
console.log(today.getDay());


