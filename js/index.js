
// 导航栏
function nav(){
	var  navBox = $('.navBox')[0];
	var str = '';
	var data = oData.index.nav.lis;
	for(var att in data ){
		str += '<li><a href="'+data[att].link+'" class="'+data[att].liclass+'">'+data[att].title+'</a>'
		str +=	'</li>'
	}
	navBox.innerHTML = str;
	var lis = $('li',navBox);
	for(var i=0;i<lis.length;i++){
		
		if(i>0 && i<3){
			lis[i].innerHTML = lis[i].innerHTML +'<div class="'+data[i+1].bigbox.bigclass+'">'+
			'<div class="'+data[i+1].bigbox.boxone.oneclass+'">'+
				'<p><span class="'+data[i+1].bigbox.boxone.onep.span.spclass+'">'+data[i+1].bigbox.boxone.onep.span.spcont+'</span>'+data[i+1].bigbox.boxone.onep.content+'</p>'+
				'<p><span class="'+data[i+1].bigbox.boxone.twop.span.spclass+'">'+data[i+1].bigbox.boxone.twop.span.spcont+'</span>'+data[i+1].bigbox.boxone.twop.content+'</p>'+
				'</div>'+'<span class = "ospan">X</span>'
			'</div>';
			bind(lis[i],'click',function(ev){
				var divs = $('div',this)[0];
				// divs.style.display = 'block';
				
				// var ospan = $('.ospan',divs)[0];
				// bind(ospan,'click',function(){
				// 	console.log(divs.style.display)
				// 	if(divs.style.display == 'block')
				// 	this.parentNode.style.display = 'none';
				// 	
				// })
					// console.log(divs.style.display)
					if(divs.style.display == 'block'){
						divs.style.display = 'none';
					}else{
						divs.style.display = 'block';
					}
			})
		}
	}
	
	
	// var ospan = $('.ospan',navBox);
	// foreach(ospan,function(el,i){
	// 	console.log(el)
	// 	bind(el,'click',function(){
	// 		console.log(this.parentNode,this.parentNode.style.display)
	// 		if(this.parentNode.style.display == 'block'){
	// 			this.parentNode.style.display = 'none';
	// 			this.parentNode.style.color = 'red';
	// 		}
	// 		
	// 	})
	// })
	
	// console.log(lis)
	
	
}

nav()
function  yolkRotation(){
	var data = oData.Rotation_chart;
	var str = '';
	var swiper = $('.yolkRotation')[0];//获取标签
	for(var attr in data){//循环data【data为对象所以用for  in  循环】
	console.log(data[attr].src)
			str += '<div class="'+data[attr].Ro_class+'" >'+
						'<a href="'+data[attr].link+'"><img src="'+data[attr].src+'" alt=""></a>'+
					'</div>';
	}
	swiper.innerHTML = str;
}

yolkRotation()

window.onload =  function (){
	var mySwiper = new Swiper ('.swiper-container', {
	  // direction: 'vertical', // 垂直切换选项
	  loop: true, // 循环模式选项
	  
	  // 如果需要分页器
	  pagination: {
	    el: '.swiper-pagination',
	  },
	  
	  // 如果需要前进后退按钮
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	  
	  // 如果需要滚动条
	  // scrollbar: {
	  //   el: '.swiper-scrollbar',
	  // },
				effect : 'coverflow',
				slidesPerView: 3,
				centeredSlides: true,
				autoplay: {
				    delay: 2000,
				    stopOnLastSlide: false,
				    disableOnInteraction: true,
				    },
					speed:3000,
	})        
}