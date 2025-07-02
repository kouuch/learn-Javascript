var star = ''

for (var i = 5; i >= 1; i--) {
    for (spaci = 5; spaci > i; spaci--) {
        star += ' '
    }
    for (var j = 0; j < i; j++) {
        star += '*'
    }
    star += '\n'
}
console.log(star)

/*
output :
*****
 ****
  ***
   **
    *

 */