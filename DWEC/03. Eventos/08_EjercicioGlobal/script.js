var imagen = document.getElementById("imagen");
var combo = document.getElementById("combo");
var serie = document.getElementById("serie");
var labelSerie = document.getElementById("labelSerie");
var labelDescripcion = document.getElementById("labelDescripcion");
var enviar = document.getElementById("enviar");
var mostrarDescripcion = document.getElementById("mostrarDescripcion");
var capaError = document.getElementById("capaError");
var fDescripcion = document.getElementById("fDescripcion");

combo.addEventListener("change", function (ev) {
  imagen.setAttribute("src", `img/${combo.value}.jpg`);
  labelSerie.removeAttribute("class");
  serie.removeAttribute("class");
});
enviar.addEventListener("click", function (ev) {
  if (/^[0-9]{3}[A-Z]{4}[12A]$/.test(serie.value) == false) {
    ev.preventDefault();
    capaError.textContent = "Código no válido";
    labelSerie.classList.add("error");
    serie.classList.add("error");
  }
});
serie.addEventListener("focus", function (ev) {
  capaError.textContent = "";
  labelSerie.classList.remove("error");
  serie.classList.remove("error");
});
mostrarDescripcion.addEventListener("click", function (ev) {
  fDescripcion.style.display = "inline-block";
  this.style.display = "none";
});
