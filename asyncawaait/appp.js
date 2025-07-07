//callback version
const requestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500
    setTimeout(() => {
        if (delay > 4000) {
            failure(`Error: Connection Timeout`)
        } else {
            success(`Success : ${url} (${delay}ms)`)
        }
    }, delay)
}

// Promise version
const requestPromise = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delay > 4000) {
                reject(`Error: Connection Timeout`)
            } else {
                resolve(`Success : ${url} (${delay}ms)`)
            }
        }, delay)
    })
}

// callback hell
// requestCallback(
//     'movie',
//     function (response) {
//         console.log(`success`, response)
//         requestCallback(
//             'movie',
//             function (response) {
//                 console.log(`success`, response)
//                 requestCallback(
//                     'movie',
//                     function (response) {
//                         console.log(`success`, response)
//                         requestCallback(
//                             'movie',
//                             function (response) {
//                                 console.log(`success`, response)
//                             },
//                             function (err){
//                                 console.log(`Error`, err)
//                             }
//                         )
//                     },
//                     function (err){
//                         console.log(`Error`, err)
//                     }
//                 )
//             },
//             function (err){
//                 console.log(`Error`, err)
//             }
//         )
//     },
    
//     function (err){
//         console.log(`Error`, err)
//     }
// )