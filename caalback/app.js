// forEach metod
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function print(element) {
//     console.log(element)
// }

// number.forEach(print)

// callback

number.forEach(function(el){
    if(el % 2 === 0)
    console.log(el)
})