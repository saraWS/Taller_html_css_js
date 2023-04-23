function Promedio() {

  var nota1 = document.getElementById("nota1").value;
  var nota2 = document.getElementById("nota2").value;
  var nota3 = document.getElementById("nota3").value;
  var suma = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3));
  var promedio = (suma / 3);

  var nombre = document.getElementById("nombre").value;
  var materia = document.getElementById("materia").value;
  if (promedio < 3.0) {
    document.getElementById('area').value = "Lo siento " + nombre + ", su nota es de: " + promedio + ", no pasaste la materia de " + materia;
  } else {

    document.getElementById('area').value = "Felicitaciones " + nombre + ", su nota es de: " + promedio + ", pasaste la materia " + materia;
  }

}
//parseFloat() analiza un argumento (si es necesario, lo convierte en una cadena) y devuelve un número de coma flotant

