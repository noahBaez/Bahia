// Obtener el modal
var modal = document.getElementById("modalReserva");

// Obtener el botón que abre el modal
var btn = document.getElementById("mostrarModal");

// Obtener el elemento de cierre del modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en el botón, abrir el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario haga clic en (x), cerrar el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario haga clic fuera del modal, cerrar el modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
