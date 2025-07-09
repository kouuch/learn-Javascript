const delayColorChange = (color, delay) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
}

// delayColorChange('tomato', 1000)
// .then(()=> delayColorChange('#3D74B6', 1000))
// .then(()=> delayColorChange('#9929EA', 1000))

const changeColor = async () => { //Arrow Function
    await delayColorChange('#3D74B6', 1000);
    await delayColorChange('#9929EA', 1000);
    return 'Done Cuy';
}
/*
Digunakan ketika ingin sintaksis lebih ringkas dan tidak membutuhkan akses ke this atau arguments
*/

// const changeColor = async function() { //function expression
//     await delayColorChange('#3D74B6', 1000);
//     await delayColorChange('#9929EA', 1000);
//     return 'Done Cuy';
// }

/*
Digunakan ketika fungsi harus disimpan dalam variabel, misalnya dalam callback atau event handler
*/

// async function changeColor(){ //Function Declaration
//     await delayColorChange('#3D74B6', 1000)
//     await delayColorChange('#9929EA', 1000)
//     return 'Done Cuy'
// }

/*
Digunakan ketika fungsi akan dipanggil di seluruh lingkup atau di awal kode
*/

changeColor().then((res)=> alert(res))