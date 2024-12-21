// 1st way
// const element=document.getElementById("counter")
// const Decrease= document.getElementById("Decrease")
// const Reset= document.getElementById("Reset")
// const Increase = document.getElementById("Increase")
//  let counterValue=0
//  function upDatecounter(){
//     element.innerHTML=counterValue
//  }
//  Decrease.addEventListener("click",()=>{
//     counterValue--
//     upDatecounter()
//  })
// Increase.addEventListener("click",()=>{
//     counterValue++
//     upDatecounter()
//  })
// Reset.addEventListener("click",()=>{
//     counterValue=0
//     upDatecounter()
//  })
// 2nd Way
// let count=0;
// const value=document.querySelector("value");
// const btns=document.querySelectorAll(".btn");

// btns.forEach( function(btn) {
//    btn.addEventListener("click",function(e){
// const styles=e.currentTarget.classlist;
// if(styles.contains("decrease")){
//    count--;
//    value.textContent=count;
// }
// else if(styles.contains("increase")){
//    count++;
//    value.textContent=count;
// }
// else{
//    count=0;
//    value.textContent=count;
// }
// if(count>0){
//    value.style.color="green"
// }
// else if(count<0){
// value.style.color="red"
// }
// if(count===0){
//    value.style.color="#222"
// }
// value.textContent=count;
//    });
   
// });


