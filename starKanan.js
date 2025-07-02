var star = '';
for (var i = 1; i <= 5; i++) {
    for (var s = 5; s > i; s--) {
        star += ' ';
    }
    for (var j = 0; j < i; j++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);

/*
output :
    *
   **
  ***
 ****
*****
*/