function simularSiembra() {

  let voluntarios = parseInt(document.getElementById("voluntarios").value);

  if (isNaN(voluntarios) || voluntarios <= 0) {
    alert("Por favor ingresa un número válido de voluntarios.");
    return;
  }

  let totalArboles = 0;      
  let detalleTexto = "";

  for (let contador = 1; contador <= voluntarios; contador++) {

    let arbolesSembrados = parseInt(prompt("¿Cuántos árboles sembró el voluntario " + contador + "?"));

    if (isNaN(arbolesSembrados) || arbolesSembrados < 0) {
      arbolesSembrados = 0;
    }

    totalArboles = totalArboles + arbolesSembrados; 

    detalleTexto += "Voluntario " + contador + " sembró " + arbolesSembrados + " árboles<br>";
  }

  let promedio = totalArboles / voluntarios;

  let mensaje = "";
  if (totalArboles >= 100) {
    mensaje = "¡Excelente labor! Esta comunidad está haciendo un gran cambio ambiental.";
  } else if (totalArboles >= 30) {
    mensaje = "Buen trabajo, cada árbol cuenta para el planeta.";
  } else {
    mensaje = "Es un buen comienzo, ¡sigamos sembrando más árboles!";
  }

  document.getElementById("detalle").innerHTML = detalleTexto;
  document.getElementById("total").textContent = "Total de árboles sembrados: " + totalArboles;
  document.getElementById("promedio").textContent = "Promedio por voluntario: " + promedio.toFixed(2);
  document.getElementById("mensaje").textContent = mensaje;

  document.getElementById("resultado").style.display = "block";
}

function pedirNumeroValido(mensaje) {
  let valor = prompt(mensaje);
  while (valor !== null && (isNaN(valor) || valor.trim() === "" || Number(valor) < 0)) {
    valor = prompt(mensaje);
  }
  return valor === null ? null : Number(valor);
}

const btnlimpiar = document.getElementById("btnlimpiar");
btnlimpiar.addEventListener("click", function () {
    document.getElementById("voluntarios").value = "";
    document.getElementById("detalle").innerHTML = "";
    document.getElementById("total").textContent = "";
    document.getElementById("promedio").textContent = "";
    document.getElementById("mensaje").textContent = "";
    document.getElementById("resultado").style.display = "none";
});