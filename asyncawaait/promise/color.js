const delayColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
}

// delayColorChange('tomato', 1000)
// .then(()=> delayColorChange('#3D74B6', 1000))
// .then(()=> delayColorChange('#9929EA', 1000))

const changeColors = async () => { //Arrow Function
    await delayColorChange('tomato', 1000);
    await delayColorChange('#3D74B6', 1000);
    await delayColorChange('#9929EA', 1000);
    return 'Done Cuy';
}
/*
Digunakan ketika ingin sintaksis lebih ringkas dan tidak membutuhkan akses ke this atau arguments
*/

const changeColorss = async function () { //function expression
    await delayColorChange('tomato', 1000);
    await delayColorChange('#3D74B6', 1000);
    await delayColorChange('#9929EA', 1000);
    return 'Done Cuy';
}

/*
Digunakan ketika fungsi harus disimpan dalam variabel, misalnya dalam callback atau event handler
*/

async function changeColor(){ //Function Declaration
    await delayColorChange('tomato', 1000);
    await delayColorChange('#3D74B6', 1000)
    await delayColorChange('#9929EA', 1000)
    return 'Done Cuy'
}

/*
Digunakan ketika fungsi akan dipanggil di seluruh lingkup atau di awal kode
*/

// changeColorss().then((res) => alert(res))

const printRainbow = async () => {
    await changeColor()
    console.log(`done cuyy`)
}
// async bisa digunakan untuk chain method

printRainbow()