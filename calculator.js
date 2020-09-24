const num1 = 8
const num2 = 4
const operation = "/"

if (operation == "+") {
    console.log(`${num1} ${operation} ${num2} = ${num1+num2}`)
}else if(operation == "*") {
    console.log(`${num1} ${operation} ${num2} = ${num1*num2}`)
}else if(operation == "-"){
    console.log(`${num1} ${operation} ${num2} = ${num1-num2}`)
}else{
    console.log(`${num1} ${operation} ${num2} = ${num1/num2}`)
}