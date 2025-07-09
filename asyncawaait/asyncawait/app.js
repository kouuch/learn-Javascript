const hello = async () => { //jadi promise
    // return 'Hello Cuyyy' //data yang akan di kirim
    throw 'Gak mau cuy' // ini seperti try catch, data yang dikirim
}

hello().then((res) => { //untuk proses selanjutnya
    console.log('response', res)
}).catch((err) => {//catch
    console.log('error', err)
})