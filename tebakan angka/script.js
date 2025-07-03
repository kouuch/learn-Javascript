let kesempatan = 3
// angka rendom 1-10
const angka = Math.floor(Math.random() * 10) + 1
while (kesempatan > 0) {
// tangkap inputan player
    let tebakan = prompt(`Tebak angka dari 1-10. \n kamu mempunya ${kesempatan} kesempatan lagi`)
    // validasi tanpa mengurangi kesempatan
    if(isNaN(tebakan) || tebakan < 1 || tebakan >10){
        alert(`Masukan angka yang valid 1-10`)
        continue
    }
// tangkap piliham angka
// pilihan 1-10
    if(tebakan == angka){
        alert(`Selamat anda menabak angka denga benar \n angka : ${angka}`)
        break
    } else if(tebakan < angka){
        alert(`Angka yang anda pilih terlalu kecil, coba lagi`)
    } else {
        alert(`Angka yang anda masukan terlalu besar, coba lagi`)
    }
    
    kesempatan--
}
// menentukan Hasil
if(kesempatan === 0 ){
    alert(`Kesempatan anda Habis ! Angka Yang benar adalah  ${angka} `)
}

alert(`Terima Kasih Sudah Bermain`)