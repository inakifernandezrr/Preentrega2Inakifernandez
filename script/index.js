const criptomonedas = [];

class StockCripto {
    constructor() {
        this.id = criptomonedas.length + 1;
        this.name = prompt('ingrese tipo de cryptomoneda');
        this.price = parseFloat(prompt('ingresa cotizacion'));
        this.quantity = parseInt(prompt('ingrese cantidad circulante'));
    }
};


let opciones = prompt('ingrese 1 para agregar criptomoneda, 2 para ver stock, 0 para salir');

const agregarCripto = () => {
    const newCripto = new StockCripto();
    criptomonedas.push(newCripto);
    console.log(criptomonedas);
}

const mostrarCripto = () => {
    console.log('sus cryptos son:')
    let acumulador = '';
    criptomonedas.forEach((criptomonedas, index) => {
        console.log((index + 1), criptomonedas)
        acumulador += `
        <div class="contenedor">
            <div class="header">
                <h3>${criptomonedas.name}</h3>
            </div>
            <div class="body">
                <p>Cantidad: ${criptomonedas.quantity}</p>
                <p>Precio: ${criptomonedas.price}</p>
            </div>
        </div>
        `
    })
    document.getElementById('container').innerHTML = acumulador;
}


const menu = (opcion) => {
    switch (opcion) {
        case '1':
            agregarCripto();
            break

        case '2':
            mostrarCripto()
            break

        default:
            alert('ingreso un numero incorrecto, intente de nuevo');
            break
    }
    opciones = prompt('ingrese 1 para agregar criptomoneda, 2 para ver stock, 0 para salir');
}



while (opciones !== '0') {
    menu(opciones)
}