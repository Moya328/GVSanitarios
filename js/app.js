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
    detectarHorario();
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
function detectarHorario() {

    const ahora = new Date();

    const hora = ahora.getHours();
    const dia = ahora.getDay();

    console.log("Día:", dia, "Hora:", hora);

    let abierto = false;

    // Lunes(1) a Sábado(6)
    if (dia >= 1 && dia <= 6 && hora >= 8 && hora < 18) {
        abierto = true;
    }

    if (abierto) {
        console.log("Local ABIERTO 🟢");
    } else {
        console.log("Local CERRADO 🔴");
    }
}