let num = prompt('введите число')
num = +num
function isPrime(){
    for (let i = 2; i < Math.sqrt(num) + 1; i++){
        if (num % i === 0) {
            console.log('это число составное')
            return
        }
        else {
            console.log('Это число простое')
            return
        }
    }
}
if (typeof num === 'number'){
    if(num > 1000){
        console.log('вы ввели число большее 1000')
    }
    else if(num < 2){
        console.log('можно вводить только числа, большие единицы')
    }
    else {
        isPrime()
    }
}
else {
    console.log('вы ввели не число')
}
