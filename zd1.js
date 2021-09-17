let arr = [1, 1, 1, null, false, true, 0, 0, 2, 10];
let even_number = 0;
let odd_number = 0;
let num_zero = 0
function check_elem_in_arrange(arr, even_number, odd_number, num_zero){
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != "number") {

        }
        else if(arr[i] == 0) {
            num_zero += 1
        }
        else if (arr[i] % 2 === 0) {
            even_number += 1
        }
        else if (arr[i] % 2 === 1) {
            odd_number += 1
        }
    }
    console.log(`четных чисел ${even_number}, нечетных - ${odd_number}, нулей - ${num_zero}`)
}
check_elem_in_arrange(arr, even_number, odd_number, num_zero)