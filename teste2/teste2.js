function fibonacci(num) {
    let a = 0, b = 1, temp;
    
    if (num === 0) return true;
    
    while (b <= num) {
        if (b === num) return true;
        temp = a + b;
        a = b;
        b = temp;
    }
    
    return false;
}

function checkFibonacci(num) {
    if (fibonacci(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}


let numeroInformado = 21; 
checkFibonacci(numeroInformado);
