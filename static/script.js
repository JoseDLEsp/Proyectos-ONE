
$(document).ready(function () {
    $("#botonCopiar").click(function () {

        $("#botonCopiar").toggle();
    });

});

function encriptar() {
    var textoEntrado = document.getElementById("inputBox").value;
    const regex = new RegExp('^([a-z ])+$');
     
    if (regex.test(textoEntrado)) {
        console.log(textoEntrado);

        var textoEncriptado = "";
        for (n = 0; n < textoEntrado.length; n++) {
            switch(textoEntrado[n]){
                case 'a':
                    textoEncriptado += 'ai';
                    break;
                case 'e':
                    textoEncriptado += 'enter';
                    break;
                case 'i':
                    textoEncriptado += 'imes';
                    break;
                case 'o':
                    textoEncriptado += 'ober';
                    break;
                case 'u':
                    textoEncriptado += 'ufat';
                    break;
                default:
                    textoEncriptado += textoEntrado[n];
                    break;
            }

            // if (textoEntrado[n] == "a") {
            //     textoEncriptado += "ai";
            // }
            // else if (textoEntrado[n] == "e") {
            //     textoEncriptado += "enter";
            // }
            // else if (textoEntrado[n] == "i") {
            //     textoEncriptado += "imes";
            // }
            // else if (textoEntrado[n] == "o") {
            //     textoEncriptado += "ober";
            // }
            // else if (textoEntrado[n] == "u") {
            //     textoEncriptado += "ufat";
            // }
            // else {
            //     textoEncriptado += textoEntrado[n];
            // }

        }

        document.getElementById("imagen").style.display = "none";
        document.getElementById("botonCopiar").style.display = "block";
        document.getElementById("outputBox").innerHTML = textoEncriptado;
    }

    else {
        alert("No se aceptan mayusculas, numeros o caracteres especiales");
    }



}


function desencriptar() {
    var textoEntrado = document.getElementById("inputBox").value;
    var textoDesencriptado = textoEntrado;

    textoDesencriptado = textoDesencriptado.replaceAll("ai", "a");
    textoDesencriptado = textoDesencriptado.replaceAll("enter", "e");
    textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
    textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
    textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");

    document.getElementById("outputBox").innerHTML = textoDesencriptado;
}

function copiarTexto() {
    var copyText = document.getElementById("outputBox");
    navigator.clipboard.writeText(copyText.innerHTML);
}