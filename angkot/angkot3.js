var jmlAngkot = 10
var angkotBeroperasi = 6
// for if else
for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log(`Angkot No. ${noAngkot} sedang beroperasi dengan baik.`)
    } else {
        console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi dengan baik.`)
    }
}