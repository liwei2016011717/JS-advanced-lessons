//JS事件
//1.JS事件的定义
    //JS事件是浏览器或用户自身执行的某种动作（包括前端中的事件、Node中的事件等）
    //前端事件主要包括BOM或DOM中发生的特定的交互
    //常见事件（load、click、mouseover、keydown、keyup）
//2.JS事件对象
    //事件对象（Event）包含对应事件的相关信息（如触发的元素、坐标信息、键值信息）
    //事件对象的继承关系（如:Event--UIEvent--MouseEvent）
    window.onload=function(e){
        console.log(e);
        var div1=document.getElementById("div1");
        var eventHandler=function(e){
            console.log(e);
            console.log(e.clientX,e.clientY);
        }
        div1.onclick=eventHandler;
    }
//3.事件响应处理
    //事件响应处理方式：
    //①HTML事件响应处理
       //<div id="div1" onclick="div1click()"></div>
       //<div id="div2" ondrag="console.log('drag')"></div>
    
    //②DOM0级事件响应处理（比HTML响应处理的去耦合性要好很多）
           function clickHandler(e){
               console.log(e.target);
           }

            div1.onclick=clickHandler;
            div2.onclick=clickHandler;
            div2.onclick=function(){
             console.log(123);}//执行输出123 上一个被覆盖
            //div1.onclick=null;  取消事件响应

    //③DOM2级事件监听（比DOM0级事件响应处理更强，可以重复，支持自定义事件）
    function clickHandler(e){
        console.log(e.target);
    }
    div1.addEventListener("click",clickHandler);
    div2.addEventListener("click",clickHandler);
    document.addEventListener("click",clickHandler);
    window.addEventListener("click",clickHandler);
    div1.removeEventListener("click",clickHandler);//删除事件
  
    //DOM0级和DOM2级可以添加多个事件处理程序
//4.IE事件处理程序
    //attachEvent("onclick",clickHandler)添加事件 参数只能是两个
    //detachEvent("onclick",clickHandler)删除事件