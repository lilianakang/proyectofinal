function calcularConsumo() {

  let personas = parseFloat(document.getElementById("personas").value);
  let litros = parseFloat(document.getElementById("litros").value);

  if (isNaN(personas) || isNaN(litros)) {
    alert("Por favor ingresa números válidos.");
    return;
  }

  let consumoDiario = personas * litros;
  let consumoSemanal = consumoDiario * 7;
  let consumoMensual = consumoDiario * 30;

  let recomendacion = "";
  if (consumoDiario < 300) {
    recomendacion = "Tu consumo es bajo. ¡Buen trabajo cuidando el agua!";
  } else if (consumoDiario < 800) {
    recomendacion = "Tu consumo es moderado. Podrías ahorrar un poco más.";
  } else {
    recomendacion = "Tu consumo es alto. Te recomendamos reducir el uso de agua.";
  }

  document.getElementById("diario").innerHTML = "Consumo diario total: " + consumoDiario.toFixed(2) + " litros";
  document.getElementById("semanal").innerHTML = "Consumo semanal: " + consumoSemanal.toFixed(2) + " litros";
  document.getElementById("mensual").innerHTML = "Consumo mensual: " + consumoMensual.toFixed(2) + " litros";
  document.getElementById("recomendacion").innerHTML = recomendacion;

  document.getElementById("resultado").style.display = "block";
}

const btnlimpiar = document.getElementById("btnlimpiar");
btnlimpiar.addEventListener("click", function () {
    document.getElementById("personas").value = "";
    document.getElementById("litros").value = "";
    document.getElementById("diario").innerHTML = "";
    document.getElementById("semanal").innerHTML = "";
    document.getElementById("mensual").innerHTML = "";
    document.getElementById("recomendacion").innerHTML = "";

    document.getElementById("resultado").style.display = "none";
});
