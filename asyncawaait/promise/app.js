const contohPromise = () => {
    return new Promise((resolve, reject) => {
        resolve(() => { 
            console.log('success')
        })
        // reject(() => { })
    })
}