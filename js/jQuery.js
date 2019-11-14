//封装一个求数组的函数,参数必须是数组
function sum(name){
	var num = 0;
	for(var i=0;i<name.length;i++){
		num += name[i];
	}
	return num;
}


//封装一个求元素的函数
// 方法一
function $(nam){
	var con = document.querySelectorAll(nam);
	return con;
}
// var a = $('li');
// console.log(a);


// 方法二
function $(name1,parent){
	parent = parent || document;
	var cont = parent.querySelectorAll(name1);
	return cont;
}
var b = $('li',$('.list')[0]);
// console.log(b)


//函数调用函数
	// 作用:给元素添加事件				
	function bind(name,event,fn){
		name['on'+event] = fn
	}
	
//封装一个for循环
	
		function foreach(obj,fn){
			for(var i=0;i<obj.length;i++){
				fn(obj[i],i)
				// console.log(obj[i],i);
			}
		}
		
//封装一个一个判断所有input是否全选的函数
	function checkd(obj){
		var onoff = true;
		foreach(obj,function(el){
			if(el.checked == false){
				onoff = false;
			}
		})
		return onoff;
		// console.log(onoff);
	}

//封装一个兼容获取样式的函数
	function getCss(obj,arrt){
		if(obj.currentStyle){//判断谷歌打开的值是否为undifined如果是则为ie浏览器
			return obj.currentStyle[arrt];  //返回obj元素的arrt样式
		}else{
			return getComputedStyle(obj)[arrt]; //返回obj元素的arrt样式
		}
	}
			
			