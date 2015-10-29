window.onload=function() {
	var canvas=document.getElementById("canvas"),
		ctx=canvas.getContext("2d"),
		width=canvas.width=window.innerWidth,
		height=canvas.height=window.innerHeight;

	var centerY=height*0.5,
		centerX=width*0.5,
		xRad=100;
		yRad=100;
		d=xRad/4;
		speed=0.015,
		angle=0;

	render();

	function render() {
		var y1= centerY+Math.sin(angle)*yRad;
		var x1= centerX+Math.cos(angle)*xRad;

		var y2= centerY+-Math.sin(angle)*yRad;
		var x2= centerX+-Math.cos(angle)*xRad;

		var d1=10+d+d*compoundCurve2(1.5*-(angle-Math.PI)),
			d2=20+d+d*compoundCurve2(2/3*angle);

		var start1=Math.sin(angle)*5,
			start2=-compoundCurve1(angle)*6.2,
			end1=Math.PI+Math.sin(angle)*5,
			end2=Math.PI-compoundCurve1(angle)*6.2;

		var outerD=d1+50-compoundCurve3(angle+100)*10,
			outerStart=compoundCurve3(angle)*5-(Math.sin(angle)*Math.PI/4),
			outerEnd=Math.PI+compoundCurve3(angle)*5+(Math.sin(angle)*Math.PI/4);
		
		var k=25;
		ctx.clearRect(0,0,width,height);

		ctx.lineWidth="1";
		ctx.strokeStyle="black";
		// ctx.beginPath();
		// ctx.moveTo(x1,y1);
		// ctx.lineTo(x2, y2);
		// ctx.stroke();

		// ctx.strokeStyle="green";
		// ctx.beginPath();
		// ctx.moveTo(x1+outerD*Math.cos(outerStart), y1+outerD*Math.sin(outerStart));
		// ctx.lineTo(x2+d2*Math.cos(start2), y2+d2*Math.sin(start2));
		// ctx.stroke();

		// ctx.beginPath();
		// ctx.moveTo(x1+outerD*Math.cos(outerEnd), y1+outerD*Math.sin(outerEnd));
		// ctx.lineTo(x2+d2*Math.cos(end2), y2+d2*Math.sin(end2));
		// ctx.stroke();

		// ctx.strokeStyle="green";
		// ctx.beginPath();
		// ctx.moveTo(x1+outerD*Math.cos(outerStart), y1+outerD*Math.sin(outerStart));
		// ctx.lineTo(x2, y2);
		// ctx.stroke();

		// ctx.beginPath();
		// ctx.moveTo(x1+outerD*Math.cos(outerEnd), y1+outerD*Math.sin(outerEnd));
		// ctx.lineTo(x2, y2);
		// ctx.stroke();

		// ctx.strokeStyle="purple";
		// ctx.beginPath();
		// ctx.moveTo(x1+d1*Math.cos(end1), y1+d1*Math.sin(end1));
		// ctx.lineTo(x2+(d2+25)*Math.cos(end2), y2+(d2+25)*Math.sin(end2));
		// ctx.stroke();

		// ctx.beginPath();
		// ctx.moveTo(x1+d1*Math.cos(start1), y1+d1*Math.sin(start1));
		// ctx.lineTo(x2+(d2+25)*Math.cos(start2), y2+(d2+25)*Math.sin(start2));
		// ctx.stroke();

		// ctx.beginPath();
		// ctx.moveTo(x1+d1*Math.cos(end1), y1+d1*Math.sin(end1));
		// ctx.lineTo(x2+(d2-25)*Math.cos(end2), y2+(d2-25)*Math.sin(end2));
		// ctx.stroke();

		// ctx.beginPath();
		// ctx.moveTo(x1+d1*Math.cos(start1), y1+d1*Math.sin(start1));
		// ctx.lineTo(x2+(d2-25)*Math.cos(start2), y2+(d2-25)*Math.sin(start2));
		// ctx.stroke();

		ctx.lineWidth="1.5";
		ctx.beginPath();
		ctx.moveTo(x1+outerD*Math.cos(outerEnd), y1+outerD*Math.sin(outerEnd));
		ctx.lineTo(x2+(d2+k/2)*Math.cos(end2), y2+(d2+k/2)*Math.sin(end2));
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(x1+outerD*Math.cos(outerStart), y1+outerD*Math.sin(outerStart));
		ctx.lineTo(x2+(d2+k/2)*Math.cos(start2), y2+(d2+k/2)*Math.sin(start2));
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(x1+outerD*Math.cos(outerEnd), y1+outerD*Math.sin(outerEnd));
		ctx.lineTo(x2+(d2-k/2)*Math.cos(end2), y2+(d2-k/2)*Math.sin(end2));
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(x1+outerD*Math.cos(outerStart), y1+outerD*Math.sin(outerStart));
		ctx.lineTo(x2+(d2-k/2)*Math.cos(start2), y2+(d2-k/2)*Math.sin(start2));
		ctx.stroke();

		ctx.strokeStyle="black";
		ctx.lineWidth="3";
		ctx.beginPath();
		ctx.arc(x1, y1, outerD, outerStart, outerEnd, false);
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(x1, y1, d1, start1, end1, false);
		ctx.fill();

		ctx.strokeStyle="black";
		ctx.lineWidth=""+k;
		ctx.beginPath();
		ctx.arc(x2, y2, d2, start2, end2, false);
		ctx.stroke();

		ctx.strokeStyle="black";
		ctx.lineWidth=""+k;
		ctx.beginPath();
		ctx.arc(x2, y2, 10, 0, 2 * Math.PI, false);
		ctx.fill();

		xRad+=Math.sin(angle);
		yRad+=Math.sin(angle);

		angle+=speed;
		requestAnimationFrame(render);

	}
	function compoundCurve1(x){
		return 1/3*(Math.sin(x)+Math.sin(2*x)+Math.cos(x/Math.PI));
	}

	function compoundCurve2(x){
		return 1/4*(2*Math.sin(x/2+Math.PI/6)+0.5*Math.sin(3/2*x-Math.PI/4)+Math.sin(x/3)+Math.sin(2*x-Math.PI));
	}
	function compoundCurve3(x){
		return 1/2*(Math.sin(1/2*x)+3/2*Math.cos(3/2*x));
	}

}