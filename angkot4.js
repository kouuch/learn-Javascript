var jmlAngkot = 10
var angkotBeroperasi = 6
// for else if
for(var noAngkot = 1; noAngkot<= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log(`Angkot No. ${noAngkot} sedang beroperasi dengan baik.`)
    } else if (noAngkot === 8){
        console.log(`Angkot No. ${noAngkot} sedang lembur.`)
    } else {
        console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi dengan baik.`)
    }
}

// (== / ===) -> beda kondisi