let c = document.querySelector("#myCanvas");
let ctx = c.getContext("2d");

function drawLine() {
	ctx.beginPath();
	ctx.moveTo(0, c.height);
	ctx.lineTo(c.width, 0);
	ctx.stroke();
}

function drawRectangle() {
	ctx.fillStyle = "#" + Math.floor(Math.random()*16777215).toString(16);
	ctx.fillRect(Math.random()*c.width, Math.random()*c.height, Math.random()*c.width, Math.random()*c.height);
}

function clearRectangle() {
	ctx.clearRect(0, 0, c.width, c.height);
}



function myScript() {
	document.querySelector("#b1").addEventListener("click", drawLine);
	document.querySelector("#b2").addEventListener("click", drawRectangle);
	document.querySelector("#b3").addEventListener("click", clearRectangle);
}

window.onload = myScript;