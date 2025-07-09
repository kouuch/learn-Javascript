const delayColorChange = (color, delay) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
}

delayColorChange('tomato', 1000)
.then(()=> delayColorChange('#3D74B6', 1000))
.then(()=> delayColorChange('#9929EA', 1000))