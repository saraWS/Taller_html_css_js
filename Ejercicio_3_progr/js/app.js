function verificar() {
  var nombre = document.getElementById("nombre").value;
  var edad = document.getElementById("edad").value;

  if (edad >= 18) {
    document.getElementById('area').value = "Hola " + nombre + ", eres mayor de edad";
  } else if (edad == 0 || edad < 0) {
    document.getElementById('area').value = "La edad no es valida, prueba otra cifra";
  } else {
    document.getElementById('area').value = "Hola " + nombre + ", eres menor de edad";
  }
}