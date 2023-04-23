function validar() {
  var valor = document.getElementById("valor").value;

  if (isNaN(valor)) {
    document.getElementById('area').value = "Tipo String";
  } else {
    document.getElementById('area').value = "Tipo número";
  }

}