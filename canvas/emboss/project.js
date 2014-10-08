function $(id) {
	return document.getElementById(id);
}

function init() {
	$("go").onclick = function(){
		can1.width = img1.width;
		can1.height = img1.height;
		var ctx = can1.getContext("2d");
		ctx.drawImage(img1, 0, 0, can1.width, can1.height);
		var imgData = ctx.getImageData(0, 0, can1.width, can1.height);
		var iData = imgData.data;

		for(var i = 0; i < img1.height - 1; i++) {
			for(var j = 0; j < img1.width - 1; j++) {
				var start = (i*img1.width+j) << 2;
				var r = iData[start] - iData[start+4] + 128,
						g = iData[start+1] - iData[start+5] + 128,
						b = iData[start+2] - iData[start+6] + 128;

				//越界处理
				r = (r<0) ? 0 : (r>255)? 255:r;
				g = (g<0) ? 0 : (g>255)? 255:g;
				b = (b<0) ? 0 : (b>255)? 255:b;

				//转换灰度
				var g = (r*30+g*59+b*11+50)*0.01;
				iData[start] = g;
				iData[start+1] = g;
				iData[start+2] = g;
			}
		}
		ctx.putImageData(imgData, 0, 0);
	}
}
init();