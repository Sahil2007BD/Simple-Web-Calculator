const display = document.getElementById("display")
const history = document.getElementById("history")
const buttons = document.querySelectorAll("button")

let expression = ""

buttons.forEach(btn => {

btn.addEventListener("click", () => {

const value = btn.innerText

if(value === "C"){
expression = ""
display.value = ""
history.innerText = ""
return
}

if(value === "="){

try{

let exp = expression
.replace("^","**")
.replace("√","Math.sqrt")

let result = eval(exp)

history.innerText = expression
display.value = result

expression = result.toString()

}catch{
display.value = "Error"
expression = ""
}

return
}

if(value === "√"){
expression += "Math.sqrt("
display.value = expression
return
}

expression += value
display.value = expression

})

})

document.addEventListener("keydown",(e)=>{

const key = e.key

if("0123456789+-*/.%".includes(key)){
expression += key
display.value = expression
}

if(key === "Enter"){
let result = eval(expression)
history.innerText = expression
display.value = result
expression = result.toString()
}

if(key === "Backspace"){
expression = expression.slice(0,-1)
display.value = expression
}
})


document.addEventListener("keydown", function(event) {
  const key = event.key;

  if (!isNaN(key)) appendValue(key);
  if (key === ".") appendValue(".");
  if (key === "+") appendOperator("+");
  if (key === "-") appendOperator("-");
  if (key === "*") appendOperator("*");
  if (key === "/") appendOperator("/");
  if (key === "Enter") calculateResult();
  if (key === "Backspace") deleteLast();
});
