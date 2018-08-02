var numSquares=6;
var colors = randomColorsArray(numSquares);
var square= document.querySelectorAll(".square");
var picked= pickedColor();

document.querySelector("span").textContent= picked;
var h1= document.querySelector("h1");

var message = document.querySelector("#message");

var easyBtn= document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	numSquares=3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
  colors=randomColorsArray(numSquares);
  picked = pickedColor();
  h1.style.backgroundColor= "steelblue";
document.querySelector("span").textContent= picked;
for(var i=0;i<colors.length;i++){
	square[i].style.backgroundColor=colors[i];
	square[i+3].style.display= "none";
}

});

hardBtn.addEventListener("click", function(){
	numSquares=6;
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colors=randomColorsArray(numSquares);
  picked = pickedColor();
document.querySelector("span").textContent= picked;
h1.style.backgroundColor= "steelblue";
for(var i=0;i<colors.length;i++){
	square[i].style.backgroundColor=colors[i];
	square[i].style.display= "block";
}
});


var reset = document.querySelector("#reset");
reset.addEventListener("click", function(){
    colors = randomColorsArray(numSquares);
    picked=pickedColor();
    message.textContent="";
    this.textContent="New Colors";
document.querySelector("span").textContent= picked;
for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor= colors[i];
}
h1.style.backgroundColor= "steelblue";
});



for(var i=0;i<colors.length;i++){
	square[i].style.backgroundColor = colors[i];

square[i].addEventListener("click" , function(){
      
if(this.style.backgroundColor=== picked){message.textContent="Correct";
changeColors(picked);
h1.style.backgroundColor= picked;
reset.textContent="Play Again";}
else{this.style.backgroundColor = "#232323";
message.textContent="Try again";}

});
}


function changeColors(color){
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor=color;
	}
}


function pickedColor(){
return(colors[	Math.floor(Math.random()*colors.length)] ) ;
}



function randomColorsArray(num){
var rgb= new Array();
for(var i=0;i<num;i++){
  rgb[i]= randomColors();

}
return rgb;}


function randomColors(){
var r= Math.floor( Math.random()*256);
var g= Math.floor( Math.random()*256);
var b= Math.floor( Math.random()*256);
return( "rgb("+ r +", "+ g +", " + b +")" );
}