function mostrarMision() {
    document.getElementById("mensajeMision").style.display = "block";
    document.getElementById("mensajeVision").style.display = "none";
    document.getElementById("botonMision").disabled = true;
    document.getElementById("botonVision").disabled = false;
}

function mostrarVision() {
    document.getElementById("mensajeMision").style.display = "none";
    document.getElementById("mensajeVision").style.display = "block";
    document.getElementById("botonMision").disabled = false;
    document.getElementById("botonVision").disabled = true;
}

mostrarMision();

document.getElementById("botonMision").addEventListener("click", mostrarMision);
document.getElementById("botonVision").addEventListener("click", mostrarVision);