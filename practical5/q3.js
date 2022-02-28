let image = document.querySelector("#myImage");

function swapImg() {
	if (image.src.includes("images/image1.gif")) {
		image.src = "images/image2.gif";
	} else {
		image.src = "images/image1.gif";
	}
}

function myScript() {
	image.addEventListener("mouseenter", swapImg);
	image.addEventListener("mouseout", swapImg);	
}

window.onload = myScript;