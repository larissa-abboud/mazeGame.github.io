var you_win = true;
window.onload=function(){
let m = document.getElementById("start");
let m1 = document.getElementsByClassName("boundary");
let m2 = document.getElementById("end");
let m3 = document.getElementById("game");
var change = document.getElementById("boundary1");

// start game
/**
 * mouse hover over start, 
 * if mouse out then mouse over end 
 * if mouse out th
 */

/////////////change color , alert, status

 m.addEventListener("mouseover", function (){
  m3.addEventListener("mouseleave",function(){
    console.log("cheating");
  
  });
  
  for (var i = 0 ; i < m1.length; i++) {
    
    m1[i].addEventListener("mouseover", function(){
       you_win = false;
       console.log(you_win);
      change.style.color = "red";
      if (you_win == false){
    console.log("l");


      
     } }) ;//change

  }
  
  m2.addEventListener("mouseover",function (){
    if (you_win == true){
    //update status
    console.log("win");
  }
  you_win = true;});
  

  

  //flag_begin = true;
  //counter++;
  //console.log("start") ;// use counter and use if mouse out condion
  //return flag_begin
  
  
 
  
 });
 


 


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

    
    }

    m2.addEventListener("mouseover",M_over_end);
    
    if(flag_end){
      for (var i = 0 ; i < m1.length; i++) {
        m1[i].removeEventListener("mouseover", M_end_event) ;
      
    }
  }
  }
}

