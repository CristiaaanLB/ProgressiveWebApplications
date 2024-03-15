//Ejercicios promesas

function sumarUno(numero){

    var prom = new Promise(function(resolve, reject){
        if (numero > 7){
            reject("Numero muy grande");
        }

        setTimeout(function(){
            resolve(numero + 1);
        });
    });

    return prom;
}

// sumarUno(5).then(nuevoValor => {
//     console.log(nuevoValor);
// });

// sumarUno(5).then(nuevoValor => {
//     console.log(nuevoValor);
//     return sumarUno(nuevoValor);
// }).then(nuevoValor => {
//     console.log(nuevoValor);
//     return nuevoValor;
// });

// sumarUno(5).then(nuevoValor => {
//     console.log(nuevoValor);
//     return sumarUno(nuevoValor);
// }).then(nuevoValor => {
//     console.log(nuevoValor);
//     return sumarUno(nuevoValor);
// }).then(nuevoValor => {
//     console.log(nuevoValor);
// });

sumarUno(7)
    .then(sumarUno)
    .then(sumarUno)
    .then(nuevoValor => {
        console.log(nuevoValor);
    }).catch(err => {
        console.log(err);
    });

function sumarLento(numero){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(numero + 1);
            //reject("Sumar Lento tiene falla");
        }, 800);
    });
}

function sumarRapido(numero){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(numero + 1);
        }, 300)
    });
}

// sumarLento(5).then(console.log);
// sumarRapido(10).then(console.log);

// Promise.all([sumarLento(5), sumarRapido(10)])
//     .then(response => {
//         response.forEach(prom => {
//             console.log(prom);
//         })
//     }).catch(console.log)

Promise.race([sumarLento(5), sumarRapido(10)])
    .then(response => {
        console.log(response);
    }).catch(console.log)