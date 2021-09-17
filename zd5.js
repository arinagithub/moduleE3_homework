const pow = (x, n) => Math.pow(x, n)
console.log(pow(2, -1))

// без библиотеки Math
const pow2 = (x, n) => {
    let s = x
    for(let i = 1; i < n; i+=1){
        s *= x
    }
    console.log(s)
}
pow2(3, 3)
