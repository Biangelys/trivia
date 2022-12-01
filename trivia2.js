// esta es la segunda funcion de la segunda pagina
let correctas_uno = [3, 1, 3, 2];
let opcion_elegida_uno = [];
let cantidad_correctas_uno = [];
let incorrectas_uno = 0;
let cantidad_incorrectas_uno = [];

function respuesta(num_pregunta_uno, seleccionada_uno) {
  console.log(num_pregunta_uno, seleccionada_uno)
  opcion_elegida_uno[num_pregunta_uno] = seleccionada_uno.value;
  //armo el id para seleccionar el section correspondiente
  let id = "p" + num_pregunta_uno;
  console.log(opcion_elegida_uno)
  labels = document.getElementById(id).childNodes;
  //doy el color a label seleccionado
  seleccionada_uno.parentNode.style.backgroundColor = "#FFFFFF80";
}

function corregido() {
  console.log(corregido)
  cantidad_correctas_uno = 0;
  for (i = 0; i < correctas_uno.length; i++) {
    if (correctas_uno[i] == opcion_elegida_uno[i]) {
      cantidad_correctas_uno++;
      cantidad_incorrectas_uno = 4 - cantidad_correctas_uno;
    }
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
  document.getElementById("fallidas").innerHTML = cantidad_incorrectas_uno;
  document.getElementById("resultados").innerHTML = cantidad_correctas_uno;
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