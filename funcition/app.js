function ohayo(name) {
    console.log(`hi ${name} selamat pagi`)
}
ohayo('rifky')
//  ohayo parameter
// 'rifky' argument


function tambahan(a, b) {
    const total = a + b
    console.log(total)
}
tambahan(10, 11)

// dadu
function dadu(){
    console.log(Math.floor(Math.random() *6)+1)
}
dadu()

//scope 

let bahasa = 'indonesia';  // Variabel dengan global scope
let bahasaGlobal = 'bakumpai'

function typeBahasa() {
    let bahasa = 'inggris';  // Variabel dengan local scope (hanya bisa diakses dalam fungsi typeBahasa)
    console.log(bahasa);  // Output: inggris (mengakses variabel lokal dalam fungsi)
}

console.log(bahasa);  // Output: indonesia (mengakses variabel global)

typeBahasa();  // Output: inggris (mengakses variabel lokal dalam fungsi)


function typeBahasaGlobal() {
    console.log(bahasaGlobal);  // Mengakses variabel global
}

typeBahasaGlobal();  // Output: indonesia


// scope local
function typeBahasa() {
    let bahasa = 'inggris';  // Local Scope (fungsi)
    console.log(bahasa);  // Mengakses variabel lokal (inggris)
}

typeBahasa();  // Output: inggris


// block scope
if (true) {
    let bahasa = 'perancis';  // Block Scope
    console.log(bahasa);  // Output: perancis
}
console.log(bahasa);  // Error: bahasa is not defined (karena berada di dalam block)