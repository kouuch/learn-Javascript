var jmlAngkot = 10
var angkotBeroperasi = 6
var noAngkot = 1

// while(noAngkot <= angkotBeroperasi){
//     console.log('Angkot No. ' +noAngkot + ' beroperasi dengan baik.')
//     noAngkot++
// }

// for(noAngkot = angkotBeroperasi +1; noAngkot<=jmlAngkot; noAngkot++){
//     console.log('Angkot No. ' +noAngkot + ' todak beroperasi dengan baik.')
// }

// atau
while (noAngkot <= angkotBeroperasi) {
    console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`)
    noAngkot++
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log(`Angkot No. ${noAngkot} tidak beroperasi dengan baik.`)
}