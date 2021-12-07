canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
if((keyPressed>=97 && keyPressed<=122)|| (keyPressed>=65 &&keyPressed<=90)){
aplhabetkey();

}
if(keyPressed>=48 && keyPressed<=57) {
	numberkey();
	
	}
	if(keyPressed>=37 && keyPressed<=40) {
		arrowkey();
		}
}	
function aplhabetkey(){
	img_image="Alpkey.png";
add();

}
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg;  
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

function numberkey()
{	img_image="numkey.png";
add();

	
}
function arrowkey()
{	img_image="Arrkey.png";
add();

}
function specialkey()
{	img_image="spkey.png";
add();

	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
