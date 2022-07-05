var x=Math.random();
var n=Math.floor(6*x+1);

var g= "dice" + n + ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",g);

var i=Math.random();
var m=Math.floor(6*i+1);

var h= "dice" + m + ".png";
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",h);

if(m>n)
{
    var win=document.querySelector("h1");
    win.innerHTML="PLAYER 2 WON";
}
if(n>m)
{
    var wi=document.querySelector("h1");
    wi.innerHTML="PLAYER 1 WON";
}
if(m==n){
    var wn=document.querySelector("h1");
    wn.innerHTML="NO ONE WON THE MATCH";
}



//2nd project

for(var i=0;i<7;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",
function () {
    var ravi =this.innerHTML;
    makesound(ravi);


});
}
document.addEventListener("keypress",function(event) {

 makesound(event.key);
});

function makesound(key) {
   switch (key) {

    case "a":
    var tom1=new Audio('tom-1.mp3');
    tom1.play();
    alert("ravi");
   break;

   case "s":
   var tom2=new Audio('tom-4.mp3');
   tom2.play();
   break;

   case "d":
    var tom3=new Audio('tom-2.mp3');
    tom3.play();
    break;

   case "f":
   var tom4=new Audio('tom-3.mp3');
   tom4.play();
  break;

  
 case "j":
 var tom5=new Audio('crash.mp3');
 tom5.play();
 break;

 case "k":
  var tom6=new Audio('snare.mp3');
  tom6.play();
  break;

  case "l":
  var tom7=new Audio('kick-bass.mp3');
  tom7.play();
  break; 

  default:console.log(ravi);

}

 }







