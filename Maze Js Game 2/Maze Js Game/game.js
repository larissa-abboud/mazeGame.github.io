window.onload=function(){
var m = document.getElementById("start");
let flag = true;
m.addEventListener("mouseover", M_over);

var m1 = document.getElementsByClassName("boundary");


for (var i = 0 ; i < m1.length; i++) {
   m1[0].addEventListener("mouseover", M_over_border) ;
 
}


}
function M_over() {
  console.log("Moused over!") ;// use counter and use if mouse out condion
  }
function M_over_border() {
  console.log("game over ") ;

  }