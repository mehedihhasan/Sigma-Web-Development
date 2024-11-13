let random = math.random()
console.log(random)

let a = prompt("Enter first number: ")
let c = prompt("Enter operation number: ") 
let b = prompt("Enter second number: ")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",

}

if (random > 0.1) {
    console.log(`the result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}
else{
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}