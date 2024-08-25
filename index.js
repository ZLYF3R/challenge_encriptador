function encriptar() {
    let texto = document.getElementById ("texto").value;
    let tituloResultado = document.getElementById ("titulo-mensaje");

    let textoCifrado = texto        
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloResultado.textContent = "Mensaje encriptado con éxito"
    }
}

function desencriptar() {
    let texto = document.getElementById ("texto").value;
    let tituloResultado = document.getElementById ("titulo-mensaje");
    /* let parrafo = document.getElementsById ("parrafo-resultado"); */

    let textoCifrado = texto        
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloResultado.textContent = "Mensaje desencriptado con éxito"
    /* parrafo.textContent = "" */
    }
}

function copiarTexto() {
    document.getElementById("texto").value.select()
}

function copiarAlPortapapeles(texto) {
    navigator.clipboard.writeText(document.getElementById ("texto").value)
  }