let counter  = 0;//global
let flag_begin = false;
window.onload=function(){
let m = document.getElementById("start");
let m1 = document.getElementsByClassName("boundary");
let m2 = document.getElementById("end");
let m3 = document.getElementById("game");

let flag_end = false;
let counter_start = 0;

var result= "none";






// start game
/**
 * mouse hover over start, 
 * if mouse out then mouse over end 
 * if mouse out th
 */



 m.addEventListener("mouseover", M_over)


m.addEventListener("mouseleave",M_leave_start);
console.log(flag_begin)
//console.log(M_over(flag_begin))
if(flag_begin){

 
 
 }

 


}


function M_out(){
  console.log("you lost");
  
}
function M_over(flag_begin) {
  flag_begin = true;
  counter++;
  console.log("start") ;// use counter and use if mouse out condion
  return flag_begin
  
  
 
  }
function M_leave_start(){
  flag_begin = true;
  console.log(flag_begin)

}
function M_over_border() {
  console.log("you lose ") ;
  counter--;

  

  }
function M_over_end(){
  flag_end = true;
  console.log("you win");console.log(flag_end);
  counter++
  console.log(counter)
  
}
function M_end_event(){

  console.log("removed");
  
}

function result_f(result){
  if (counter<1)
 { console.log(counter);}
 else{
  console.log("cont")
 }
}
function play( ){
  if(m3.addEventListener("mouseleave",M_out)){
    alert("Game over")}
    else{
      for (var i = 0 ; i < m1.length; i++) {
      m1[i].addEventListener("mouseover", M_over_border) ;
result_f();

    
    }

    m2.addEventListener("mouseover",M_over_end);
    
    if(flag_end){
      for (var i = 0 ; i < m1.length; i++) {
        m1[i].removeEventListener("mouseover", M_end_event) ;
      
    }
  }
  }
}

