function encriptar() {
    let texto = document.getElementById ("texto").value;
    let tituloResultado = document.getElementById ("titulo-mensaje");
    let restablecerTextarea = document.getElementById ("texto");
    let quitarParrafo = document.getElementById("parrafo")

    let textoCifrado = texto        
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

if (texto.length != 0) {
    document.getElementById("mensaje").value = textoCifrado;
    tituloResultado.textContent = "Mensaje encriptado con éxito"
    restablecerTextarea.value = '';
    quitarParrafo.value = '';
    }
}

function desencriptar() {
    let texto = document.getElementById ("texto").value;
    let tituloResultado = document.getElementById ("titulo-mensaje");
    let restablecerTextarea = document.getElementById ("texto");
    /* let parrafo = document.getElementsById ("parrafo-resultado"); */

    let textoCifrado = texto        
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

if (texto.length != 0) {
    document.getElementById("mensaje").value = textoCifrado;
    tituloResultado.textContent = "Mensaje desencriptado con éxito"
    restablecerTextarea.value = '';
    /* parrafo.textContent = "" */
    }
}

function copiarTexto() {
    document.getElementById("mensaje").value.select()
}

function copiarAlPortapapeles() {
    navigator.clipboard.writeText(document.getElementById ("mensaje").value)
  }