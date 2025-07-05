// forEach metod
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function print(element) {
//     console.log(element)
// }

// number.forEach(print)

// callback

number.forEach(function(el){ //exverison function
    if(el % 2 === 0)
    console.log(el)
})

// map
const numberDoubel = number.map(function(num){
    return num * 2
})


/*
number
(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
numberDoubel
(9) [2, 4, 6, 8, 10, 12, 14, 16, 18]
*/


function perpangkatan(x){ //functio umum
    return x * x //nilaai balik
}

const hasil = perpangkatan(5) //tempata meyimpan nilai dari perpangkatan



//arrow
const perpangkatan = (x) =>{ //parameter    (x)      
    return x * x
}