function Validar(){
    var usure = 0;
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    if(num1<0 && num2<0){
        resultado.innerHTML= "Los números "+num1+" y "+ num2+" deben ser positivos";
        usure = 1;
    }
    if(num1%1!=0){
        resultado.innerHTML= "El número "+ num1 + " debe ser entero";
        usure = 1;
    } 
    if(num2%1!=0){
        resultado2.innerHTML= "El número "+ num2 + " debe ser entero";
        usure = 1;
    }
    if (num1<0 && num2>=0){
        resultado.innerHTML= "El número "+num1+" debe ser positivo";
        usure = 1;
    }
    if (num2<0 && num1>=0){
        resultado.innerHTML= "El número "+num2+" debe ser positivo";
        usure = 1;
    }
    if (num1<0 && num1%1!=0){
        resultado.innerHTML= "El número "+num1+" debe ser entero positivo";
        usure = 1;
    }
    if(num2<0 && num2%1!=0){
        resultado.innerHTML= "El número "+num2+" debe ser entero positivo";
        usure = 1;
    }
    if (usure!=1){
        if (num1%num2==0){
            resultado.innerHTML = "El numero " +num1+ " es divisible entre el numero "+num2;
            resultado2.innerHTML ="";
        }else{
            resultado.innerHTML = "El numero " +num1+ " no es divisible entre el numero "+num2;
            resultado2.innerHTML = "";
        }
    }
}
