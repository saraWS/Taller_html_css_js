function validar() {
    var valor = document.getElementById("valor").value;

    if (valor < 0) {
        document.getElementById('area').value = "Debe ingresar numeros positivos";
    }
    if (valor % 2 === 0) {
        document.getElementById('area').value = "Par";
    } else if (valor % 1 != 0) {
        document.getElementById('area').value = "Debe ingresar numeros enteros";
    } else {
        document.getElementById('area').value = "Impar";
    }
    if (valor < 0 && valor % 1 != 0) {
        document.getElementById('area').value = "Debe ingresar numeros enteros positivos";
    }
}

