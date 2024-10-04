// input 
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button")
NodeList.prototype.forEach = Array.prototype.forEach;
inputs.forEach((data)=>{
data.style.fontSize="25px";
data.style.border="solid 2px green";
data.width="200px";
data.height = "40px";
data.addEventListener("blur",(e)=>{
  console.log(e.target.value)
})
})

button.addEventListener("cleck",(e)=>{
  inputs.forEach((input)=>{
    console.log(input.value);
  })
})
