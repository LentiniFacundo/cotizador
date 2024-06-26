let contador = 0;
let cantidadDePrestamos = parseInt(prompt("Cuantos prestamos quieres pedir?"));
if(cantidadDePrestamos === 0) alert("Sin prestamos a cotizar");
const calcTotalAPagar = (saldoSolicitado, interes, cuotas) => {
    let intereses = saldoSolicitado * interes / 100;
    let total = saldoSolicitado + intereses;
    return {totIntereses: intereses, totalPagar: total, totXMes: total / cuotas};
};

while (cantidadDePrestamos > contador) {
    let saldoSolicitado = parseInt(prompt("Cantidad de dinero solicitado"));
    let cuotas = parseInt(prompt("Cantidad de cuotas"));
    let interes;

    if(cuotas < 13) interes = 20;
    if(cuotas <= 24 && cuotas > 12) interes = 28;
    if(cuotas > 24) interes = 37;

    let totalDetalles = calcTotalAPagar(saldoSolicitado, interes, cuotas);
    console.log(`Detalle de prestamo\n
    Dinero Solicitado: ${saldoSolicitado}\n
    Cuotas: ${cuotas}\nInteres: ${totalDetalles.totIntereses}\n
    Total por mes: ${totalDetalles.totXMes}\n
    Total a pagar: ${totalDetalles.totalPagar}`);
    contador++;
}
