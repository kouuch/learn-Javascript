var items = prompt('masukan makan / minuman : \n (contoh : nasi , kentucky, kopi)')

switch (items) {
    case 'nasi':
        alert('nasi tanpa sambal kurang berasa')
        break;
    case 'kentucky':
        alert('kentucky tanpa di geprek kurang mantao')
        break;
    case 'kopi':
        alert('kopi tanpa udut tidak nikmat')
        break;
    default:
        alert('makan / minuman tidak ada di daftar')
        break;
}

// switch memilih makan / minuman case 'nasi' harus menggunakan Single Quote, dan Doubel Quote untuk menghasilkan data String