let a = 4
let b = 10
const intervalid = setInterval(function (){
    console.log(a+=1)
}, 1000)
setTimeout(function (){
    clearInterval(intervalid)
}, (b - a + 2) * 1000)