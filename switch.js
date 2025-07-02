var angka = parseInt(prompt('masukan angka 1 : '))

switch (angka) {
    case 1:
        alert('anda memasukan angka 1')
        break;
    case 2:
        alert('anda memasukan angka 2')
        break;
    default:
        alert('anda memasukana angka salah ')
        break;
} 

// switch
// tanpa parseInt case 1 sama dengan string
// bila menggunakana parseInt case1 dan 2 dst akaan jadi integer
// bila tanpa parseInt unutk case 1 dll harus menggnakan case '1' biar nilainya jadi String