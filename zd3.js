function getAdd(arg) {
    return function (arg2 = 4){
        let a = arg + arg2
        alert(a)
    }
}
let func = getAdd(5)
func()