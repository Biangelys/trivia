let correctas_dos = [2, 2, 3, 3];
let opcion_elegida_dos = [];
let cantidad_correctas_dos = 0;
let cantidad_incorrectas_dos = 0;
let incorrectas_dos = [];

function respuesta_dos(num_pregunta_dos, seleccionada_dos) {
  console.log(num_pregunta_dos, seleccionada_dos)
  opcion_elegida_dos[num_pregunta_dos] = seleccionada_dos.value;
  //armo el id para seleccionar el section correspondiente
  let id = "p" + num_pregunta_dos;
  console.log(opcion_elegida_dos)
  labels = document.getElementById(id).childNodes;
  //doy el color a label seleccionado
  seleccionada_dos.parentNode.style.backgroundColor = "#FFFFFF80";
}

function siguiente() {
  console.log("siguiente")
  cantidad_correctas_dos = 0;
  for (i = 0; i < correctas_dos.length; i++) {
    if (correctas_dos[i] == opcion_elegida_dos[i]) {
      cantidad_correctas_dos++;
      cantidad_incorrectas_dos = 4 - cantidad_correctas_dos;
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
  
  document.getElementById("fallida2").innerHTML = cantidad_incorrectas_dos;
  document.getElementById("resultado2").innerHTML = cantidad_correctas_dos;
  console.log(cantidad_correctas_dos)
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