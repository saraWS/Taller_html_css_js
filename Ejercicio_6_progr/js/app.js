function buscar() {
  var parrafo = document.getElementById("parrafo").value;
  var textoABuscar = document.getElementById("texto-buscar").value;
  var resultado = resaltarCoincidencias(parrafo, textoABuscar);

  document.getElementById("resultado").innerHTML = '"' + resultado + '"';
}

function resaltarCoincidencias(texto, buscar) {
  let regex = new RegExp(buscar, 'gi');
  return texto.replace(regex, match => "<font color=purple>" + match + "</font>");
}

