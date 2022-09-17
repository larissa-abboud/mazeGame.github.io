window.onload=function(){
let m = document.getElementById("start");
let m1 = document.getElementsByClassName("boundary");
let m2 = document.getElementById("end");
let m3 = document.getElementById("game");
let flag_begin = false;
let flag_end = false;
let counter_start = 0;


// start game
/**
 * mouse hover over start, 
 * if mouse out then mouse over end 
 * if mouse out th
 */



 m.addEventListener("mouseover", M_over)


m.addEventListener("mouseleave",M_leave_start);
if(counter_start == 0){

 
  if(m3.addEventListener("mouseleave",M_out)){
    alert("Game over")}
    else{
      for (var i = 0 ; i < m1.length; i++) {
      m1[i].addEventListener("mouseover", M_over_border) ;
    
    }
    m2.addEventListener("mouseover",M_over_end);
    if(flag_end){
      for (var i = 0 ; i < m1.length; i++) {
        m1[i].removeEventListener("mouseover", M_end_event) ;
      
    }
  }
  } }
  counter_start++;
  flag(counter_start);
  //console.log(counter_start)


/*if ( !isEventListenerActive){
  console.log(flag_begin)
  if(m3.addEventListener("mouseleave",M_out)){
  alert("Game over")}
  else{
    for (var i = 0 ; i < m1.length; i++) {
    m1[i].addEventListener("mouseover", M_over_border) ;
  
  }
  m2.addEventListener("mouseover",M_over_end);
  if(flag_end){
    for (var i = 0 ; i < m1.length; i++) {
      m1[i].removeEventListener("mouseover", M_end_event) ;
    
  }
}
}
}*/



}
function M_out(){
  console.log("you lost");
}
function M_over(flag_begin) {
  flag_begin = true;
  
  console.log("start") ;// use counter and use if mouse out condion
  
 
  }
function M_leave_start(){
  flag_begin = true;

}
function M_over_border() {
  console.log("you lose ") ;

  }
function M_over_end(){
  flag_end = true;
  console.log("you win");console.log(flag_end);
}
function M_end_event(){

  console.log("removed");
  
}
function flag(counter){
  return counter;
}
function begin(  m1 , m2, m3 ,flag_end,counter_start){
  console.log(counter_start)
  flag(counter_start);
  if(counter_start == 0){

 
  if(m3.addEventListener("mouseleave",M_out)){
    alert("Game over")}
    else{
      for (var i = 0 ; i < m1.length; i++) {
      m1[i].addEventListener("mouseover", M_over_border) ;
    
    }
    m2.addEventListener("mouseover",M_over_end);
    if(flag_end){
      for (var i = 0 ; i < m1.length; i++) {
        m1[i].removeEventListener("mouseover", M_end_event) ;
      
    }
  }
  } }
  counter_start++;
  flag(counter_start);
  console.log(counter_start)
}

