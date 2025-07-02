var star = ''

for(var i = 0; i<5; i++){
    for(var j = 0; j<5; j++)
    star += "*"
    star += '\n'
}
console.log (star)

// output 1 : star += '*'
// *****

// output 2 : star += '*' star += '\n'
// *
// *
// *
// *
// *

// 3 : 
// for(var i = 0; i<5; i++){
//     for(var j = 0; j<5; j++)
//     star += "*"
//     star += '\n'
// }
// console.log (star)

// output 3:
// *****
// *****
// *****
// *****
// *****


// star += '*' sama saja dengan star = star + '*'