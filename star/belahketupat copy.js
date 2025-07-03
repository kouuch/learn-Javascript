var n = 5
var star = ''

for (var i = 1; i <= n; i++) {
    star += ' '.repeat(n - i)
    star += '*'.repeat(2 * i - 1)
    star += '\n'
}

for (var i = n - 1; i >= 1; i--) {
    star += ' '.repeat(n - i)
    star += '*'.repeat(2 * i - 1)
    star += '\n'
}

console.log(star)


/*
menggunakan repeat
star += '*'.repeat(2 * i - 1);
Mengulang bintang (2 * i - 1) kali
*/


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