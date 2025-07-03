var jmlAngkot = 10
var angkotBeroperasi = 6

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi && noAngkot !== 5 && noAngkot !== 3) {
        console.log(`Angkot No. ${noAngkot} sedang beroperasi dengan baik.`)
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5 || noAngkot === 3) {
        console.log(`Angkot No. ${noAngkot} sedang lembur.`)
    } else {
        console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi dengan baik.`)
    }
} 

// mengunakan operator logika 
// && AND
// || OR
// !==

// Angkot No. 1 sedang beroperasi dengan baik.
// angkot6.js:6 Angkot No. 2 sedang beroperasi dengan baik.
// angkot6.js:6 Angkot No. 3 sedang beroperasi dengan baik.
// angkot6.js:6 Angkot No. 4 sedang beroperasi dengan baik.
// angkot6.js:8 Angkot No. 5 sedang lembur.
// angkot6.js:6 Angkot No. 6 sedang beroperasi dengan baik.
// angkot6.js:10 Angkot No. 7 sedang tidak beroperasi dengan baik.
// angkot6.js:8 Angkot No. 8 sedang lembur.
// angkot6.js:10 Angkot No. 9 sedang tidak beroperasi dengan baik.
// angkot6.js:8 Angkot No. 10 sedang lembur.