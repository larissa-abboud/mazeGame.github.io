
window.onload=function(){
let m = document.getElementById("start");
let m1 = document.getElementsByClassName("boundary");
let m2 = document.getElementById("end");
let m3 = document.getElementById("game");
let change = document.getElementById("boundary1");
let result = document.getElementsByClassName("boundary example");
var you_win = true;
// start game
/**
 * mouse hover over start, 
 * if mouse out then mouse over end 
 * if mouse out th
 */

/////////////change color , alert, status

 m.addEventListener("mouseover", function (){
 
  
  for (var i = 0 ; i < m1.length; i++) {
    
    m1[i].addEventListener("mouseover", function(){
       you_win = false;
      change.style.color = "red";
      
      
      console.log(you_win)
      
      result[0].innerHTML =" you lost";

      
     } )} 
     if ( result[0].innerHTML == "you lost"){
      alert("u lost!")

     }
    else{
      m2.addEventListener("mouseover",function (){
    
    //update status
    console.log("win");
    alert("you win!")
    result[0].innerHTML =" you win";
  you_win = true;});

    }}) ;//lost

    
    m.addEventListener("click",function(){
      //reset game
      result[0].innerHTML = "";
    })

  
  
  
  

  


 
 
 


 


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

