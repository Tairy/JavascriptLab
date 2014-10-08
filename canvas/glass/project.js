function $( id ) {
	return document.getElementById( id );
}

var Glass = {
	bind: function ( imgId, zRat ) {
		var self = this;
		this.canvas = document.createElement("canvas");
		this.canvas.style.display = "none";
		this.canvas.style.position = "absolute";
		this.ctx = this.canvas.getContext("2d");
		this.canvas.width = 100;
		this.canvas.height = 100;
		this.hEle = $( imgId );
		//设置放大比例
		this.zRat = zRat | 2;
		//设置鼠标按下事件
		document.body.appendChild(this.canvas);
		document.body.onmousedown = function(e) {
			//e.srcElement 在IE下使用 e.target  在Firefox下使用
			if(e.target.id == imgId) {
				e.preventDefault(); //阻止元素发生默认的行为
				function draw(e){
					//get mouse position
					var x = e.pageX, y = e.pageY;
					//get relative position of pic
					var exOff = x - self.hEle.offsetLeft,
							eyOff = y - self.hEle.offsetTop;

					var rLen = 50/self.zRat;
					self.copyImg(exOff-rLen, eyOff-rLen, rLen*2, rLen*2);
					self.show(x-50, y-50);
				}
				draw(e);
				document.body.onmousemove = draw;
				// document.body.onmouseup = function() {
				// 	self.hide();
				// 	document.body.onmousemove = null;
				// };
			}
		};
	},
	copyImg: function ( x, y, w, h) {
		this.ctx.arc(50, 50, 50, 0, Math.PI*2, true);
		this.ctx.clip();
		this.ctx.drawImage(this.hEle, x, y, w, h, 0, 0, 100, 100);
	},
	show: function ( x, y ) {
		console.log(x);
		console.log(y);
		this.canvas.style.display = "block";
		this.canvas.style.left = x + "px";
		this.canvas.style.top = y + "px";
	},
	hide: function () {
		this.canvas.style.display = "none";
	}
};
Glass.bind("test_img");