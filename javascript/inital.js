var canvas = document.getElementById('main-canvas');
var menuBarExport = document.getElementsByClassName('menu-bar-export')[0];
canvas.width = 720;
canvas.height = 720;
var ctx = canvas.getContext('2d');
init();

function init() {
	ctx.fillStyle = '#000000'
	ctx.fillRect(0,0,100,100);
}

function exportCanvas() {
	var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); //Convert image to 'octet-stream' (Just a download, really)
	window.location.href = image;
}

function transparencyGrid() {
}

menuBarExport.addEventListener('click', () => {
	exportCanvas();
});
