var total = 17;
var zWin = $(window);
var render = function () {
	var padding =2;
	var winWidth = zWin.width();
	var picWidth = Math.floor((winWidth-padding*3)/4);//Math.floor,四舍五入
	var tmpl='';
	for(var i=1;i<=total;i++){
		var p = padding;
		var imgSrc = 'img/'+i+'.jpg';
		if(i%4==1){
			p = 0;
		}
//image方法。。
		tmpl+='<li data-id="'+i+'" class="animated bounceIn" style="width:'+picWidth+'px;height:'+picWidth+'px;padding-left:'+p+'px;padding-top:'+padding+'px;"><img src="img/'+i+'.jpg"></li>';
		
//canvas方法
		// tmpl +='<li style="width:'+picWidth+'px;height:'+picWidth+'px;padding-top:'+padding+'px;padding-left:'+p+'px"><canvas id="cvs_'+i+'"></canvas></li>';
		// var imageObj = new Image();
		// imageObj.index = i;
		// imageObj.onload = function(){
		// 	var cvs = $('#cvs_'+this.index)[0].getContext('2d');
		// 	cvs.width = this.width;
		// 	cvs.height = this.height;
		// 	cvs.drawImage(this,0,0);
			
		}
		// imageObj.src=imgSrc; 
	$('#container').html(tmpl);
}
render();
var wImage = $('#large_img')
var loadImg = function(id){
	$('#large_container').css({
		width:zWin.width(),
		height:zWin.height()
	}).show();
	var imgSrc = 'img/'+id+'.large.jpg';
	var imageObj = new Image();
	imageObj.onload = function(){
		var w = this.width;
		var h = this.height;
		var winWidth = zWin.width();
		var winHeight = zWin.height();
		var realw = winHeight*w/h;				//实际宽度	h:图片本身高度
		var realh = winWidth*h/w;         //实际高度
		var paddingLeft = parseInt((winWidth-realw)/2);      //与两边的间距
		var paddingTop = parseInt((winHeight-realh)/2);
		if(h/w>1.2){
			wImage.attr('src',imgSrc).css('height',winHeight).css('padding-left',paddingLeft+'px');
		}else{
			wImage.attr('src',imgSrc).css('width',winWidth).css('padding-top',paddingTop+'px');
		}
	}
	imageObj.src = imgSrc;
}

$('#container').delegate('li','tap',function(){
	var _id = $(this).attr('data-id');
	loadImg(_id);
});