const sumar = (n1, n2) => n1 + n2;
const restar = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;

// MANEJO CON CALLBACKS

// function dividir(n1, n2, callback) {
//     if (n2 !== 0) {
//         return callback(null, n1 / n2)
//     } else {
//         return callback("N2 es CERO")
//     }
// }

// function verificarDivision(error, exito) {
//     if (error) {
//         console.log("Ocurrió el error: ", error);
//         return error;
//     } else {
//         return exito;
//     }
// }

// function calcular(n1, n2, operacion) {
//     const resultadoOperacion = operacion(n1, n2, verificarDivision);
//     return resultadoOperacion;
// }

// MANEJO CON PROMESAS

function dividir(n1, n2) {
    return new Promise((exito, fracaso) => {
        if (n2 !== 0) {
            return exito(n1 / n2);
        } else {
            return fracaso("N2 es CERO");
        }
    })
}

function calcular(n1, n2, operacion) {
    const resultadoOperacion = operacion(n1, n2);
    return resultadoOperacion;
}

const res1 = calcular(10, 20, sumar);
console.log("Sumar:", res1);
const res2 = calcular(30, 12, restar);
console.log("restar:",res2);
console.log("multiplicar:", calcular(12, 9, multiplicar));

calcular(36, 8, dividir)
    .then(result => console.log(result))
    .catch(error => console.error(error))

calcular(12, 0, dividir)
    .then(result => console.log(result))
    .catch(error => console.error(error));