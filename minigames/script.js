tanya = true
while (tanya) {
    //tangkap pilihan player
    let player = prompt('Pilih : Gunting, Batu, Kertas')

    // tangkap pilihan computer
    // bilangan rendom
    let comp = Math.random()


    if (comp < 0.31) {
        comp = 'Gunting'
    } else if (comp >= 0.31 && comp < 0.63) {
        comp = 'Batu'
    } else {
        comp = 'Kertas'
    }
    console.log(comp)
    // menentukan rules
    let hasil = ''

    if (player == comp) {
        hasil = 'SERI'
    } else if (player == 'Gunting') {
        // if (comp == 'Batu') {
        //     hasil = 'Kalah'
        // } else {
        //     hasil = 'Menang'
        // }
        hasil = (comp == 'Batu') ? 'Kalah' : 'Menang'
    } else if (player == 'Batu') {
        hasil = (comp == 'Gunting') ? 'Menang' : 'Kalah' // operator ternary
    } else if (player == 'Kertas') {
        hasil = (comp == 'Gunting') ? 'Kalah' : 'Menang'
    } else {
        alert('Masukan Pilihan yang Benar')
    }
    // menentukan hasil

    alert(`Kamu Memilih : ${player} dan Komputer Memilih : ${comp}  \n Anda : ${hasil} `)
    tanya = confirm('lagi?')
}
alert(`Terimaka Kasih Sudah Bermain`)