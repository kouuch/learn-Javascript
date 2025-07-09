const hello = async () => { //jadi promise
    // return 'Hello Cuyyy' //data yang akan di kirim
    throw 'Gak mau cuy'
}

hello().then((res) =>{ //untuk proses selanjutnya
    console.log('response', res)
}).catch((err)=>{
    console.log('error', err)
})