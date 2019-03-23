var globalSum;

function addNumbers(a, b) {
    globalSum = a + b;
    console.log("addNumbers globalSum = " + globalSum);
    return globalSum;
}

var first = 10;
var second = 5;
var sum = addNumbers(first, second);
console.log("main globalSum = " + globalSum);
console.log("Сумма "  + first + " и " + 
    second + " равна " + sum);