const btn=document.querySelector("button");
const body=document.querySelector("body");
// console.log(btn);
// btn.addEventListener('click',()=>{
//     console.log("hi i am coder");
    
// })
btn.addEventListener("click",()=>{
const ischange=confirm("you want to change color");
if(ischange){
    const color=prompt("which color you want to display on screen");
    body.style.background=`${color}`; 
}else{
     body.style.background="black";  
}
})