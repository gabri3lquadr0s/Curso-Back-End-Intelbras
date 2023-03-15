function multi(num1, num2){
    console.log(num1 * num2);
}
function soma(num1,num2){
    console.log(num1 + num2);
}
var multiArrow = (num1,num2) => console.log(num1 * num2);
var somaArrow = (num1,num2) => console.log(num1 + num2);

multi(2,2)
soma(4,4)
somaArrow(8,8)
multiArrow(6,6)
