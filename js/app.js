// =====================================
// GV SANITARIOS - APP PRINCIPAL
// =====================================

document.addEventListener("DOMContentLoaded", iniciarApp);


// =============================
// INICIO GENERAL
// =============================
function iniciarApp() {

    console.log("GV Sanitarios iniciado ✅");

    iniciarWhatsapp();
    iniciarHorarios();
}


// =============================
// WHATSAPP
// =============================
function iniciarWhatsapp() {

    const telefono = "5491132065090";

    const boton = document.getElementById("btnWhatsapp");

    if (!boton) return;

    boton.addEventListener("click", function () {

        const mensaje =
            "Hola! Estoy viendo la web de GV Sanitarios y quiero hacer una consulta.";

        const url =
            "https://wa.me/" +
            telefono +
            "?text=" +
            encodeURIComponent(mensaje);

        window.open(url, "_blank");
    });
}


// =============================
// DETECTAR HORARIO
// =============================
function iniciarHorarios() {

    const boton = document.getElementById("btnHorarios");
    const horarios = document.getElementById("horarios");

    boton.addEventListener("click", function () {

        if (horarios.style.display === "block") {
            horarios.style.display = "none";
        } else {
            horarios.style.display = "block";
        }

    });
}