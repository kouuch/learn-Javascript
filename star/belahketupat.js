var star = ''
for (var i = 1; i <= 5; i++) {
    for (var s = 5; s > i; s--) {
        star += ' '
    }
    for (var j = 0; j < (2 * i - 1); j++) {
        star += '*'
    }
    star += '\n'
}
for (var i = 5; i >= 1; i--) {
    for (var s = 5; s > i; s--) {
        star += ' '
    }
    for (var j = 0 ; j < (2 * i - 1); j++) {
        star += '*'
    }
    star += '\n'
}
console.log(star);

/*
outout:
    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
*/