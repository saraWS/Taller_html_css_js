function validar() {
    var texto = document.getElementById('texto').value;

    if (texto == "") {
        document.getElementById('area').value = "campo en blanco";
        document.getElementById('texto').style.borderColor = "blue";
    } else if (!isNaN("texto")) {
        document.getElementById('area').value = "No puedes introducir numeros :(";
        document.getElementById('texto').style.borderColor = "yellow";
        document.getElementById('texto').style.backgroundColor = "gray";
    } else {
        procesar(texto);
    }
}

function procesar(texto) {
    document.getElementById('area').value = 'El texto "' + texto + '" contiene ' + texto.length + ' caracteres';
}