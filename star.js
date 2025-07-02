var star = ''

for(var i = 0; i<5; i++){
    star += '*'
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

// star += '*' sama saja dengan star = star + '*'