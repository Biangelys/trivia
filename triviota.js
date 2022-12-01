
let correctas = [3, 3, 1, 2];
let opcion_elegida = [];
let cantidad_correctas = 0;
let incorrectas = [];
let cantidad_incorrectas = 0;
//función para tomar el numero de la pregunta y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada) {
  //guardamos la respuesta elegida
  opcion_elegida[num_pregunta] = seleccionada.value;
  //armo el id para seleccionar el section correspondiente
  let id = "p" + num_pregunta;

  labels = document.getElementById(id).childNodes;

  //doy el color a label seleccionado
  seleccionada.parentNode.style.backgroundColor = "#FFFFFF80";
}
//funcion para comparar los arrays y saber cuantas estuvieron correctas
function corregir() {
  cantidad_correctas = 0;
  for (i = 0; i < correctas.length; i++) {
    if (correctas[i] == opcion_elegida[i]) {
      cantidad_correctas++;
      cantidad_incorrectas = 4 - cantidad_correctas;


      //dandole colorrrrr//
      let primera_incorrecta = document.getElementById("incorrecta_a");
      primera_incorrecta.style.backgroundColor = "red";
      let seg_incorrecta = document.getElementById("incorrecta_b");
      seg_incorrecta.style.backgroundColor = "red";
      let primera = document.getElementById("correcta1");
      primera.style.backgroundColor = "green";

      let segunda_incorrecta = document.getElementById("incorrecta_c");
      segunda_incorrecta.style.backgroundColor = "red";
      let terc_incorrecta = document.getElementById("incorrecta_d");
      terc_incorrecta.style.backgroundColor = "red";
      let segunda = document.getElementById("correcta2");
      segunda.style.backgroundColor = "green";

      let tercera_incorrecta = document.getElementById("incorrecta_e");
      tercera_incorrecta.style.backgroundColor = "red";
      let cuart_incorrecta = document.getElementById("incorrecta_f");
      cuart_incorrecta.style.backgroundColor = "red";
      let tercera = document.getElementById("correcta3");
      tercera.style.backgroundColor = "green";

      let cuarta_incorrecta = document.getElementById("incorrecta_g");
      cuarta_incorrecta.style.backgroundColor = "red";
      let quint_incorrecta = document.getElementById("incorrecta_h");
      quint_incorrecta.style.backgroundColor = "red";
      let cuarta = document.getElementById("correcta4");
      cuarta.style.backgroundColor = "green";
    }

    document.getElementById("fallida").innerHTML = cantidad_incorrectas;
    document.getElementById("resultado").innerHTML = cantidad_correctas;
    console.log(cantidad_correctas)
  }
}

//temporizador

number = 30;

let timer = setInterval(() => {
  console.log(number);
  number--;
  document.getElementById("tiempo").innerHTML = number;
  if (number == 0) {
    clearInterval(timer);

  }
}, 2000);