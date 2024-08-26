const textoEntrada = document.querySelector(".texto-entrada");
const textoSaida = document.querySelector(".texto-saida");
const botaoCopiar = document.querySelector(".botao-copiar");

function exibirBotaoCopiar() {
    botaoCopiar.style.display = "block"; 
}

function habilitarTextoEntrada() {
    textoEntrada.disabled = false;
    textoEntrada.focus(); // Dá foco ao textarea assim que habilitado
}

function botaoCriptografar() {
    if (textoEntrada.value.trim() !== "") {
        const textoCriptado = criptografar(textoEntrada.value);
        textoSaida.style.backgroundImage = "none";  // Remove a imagem se o texto for inserido
        textoSaida.value = textoCriptado;
        textoEntrada.value = "";
        exibirBotaoCopiar();
    } else {
        alert("Por favor, insira um texto antes de criptografar.");
    }
}

function botaoDescriptografar() {
    if (textoEntrada.value.trim() !== "") {
        const textoDescriptografado = descriptografar(textoEntrada.value);
        textoSaida.style.backgroundImage = "none";  // Remove a imagem se o texto for inserido
        textoSaida.value = textoDescriptografado;
        textoEntrada.value = "";
        exibirBotaoCopiar();
    } else {
        alert("Por favor, insira um texto antes de descriptografar.");
    }
}

function criptografar(scriptCriptografada) {
    let codigoPrincipal = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    scriptCriptografada = scriptCriptografada.toLowerCase();

    for (let i = 0; i < codigoPrincipal.length; i++) {
        if (scriptCriptografada.includes(codigoPrincipal[i][0])) {
            scriptCriptografada = scriptCriptografada.replaceAll(codigoPrincipal[i][0], codigoPrincipal[i][1]);
        }
    }

    return scriptCriptografada;
}

function descriptografar(scriptDescriptografada) {
    let codigoPrincipal = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    scriptDescriptografada = scriptDescriptografada.toLowerCase();

    for (let i = 0; i < codigoPrincipal.length; i++) {
        if (scriptDescriptografada.includes(codigoPrincipal[i][1])) {
            scriptDescriptografada = scriptDescriptografada.replaceAll(codigoPrincipal[i][1], codigoPrincipal[i][0]);
        }
    }

    return scriptDescriptografada;
}

botaoCopiar.addEventListener("click", function() {
    const textoParaCopiar = textoSaida.value;

    if (textoParaCopiar) {
        navigator.clipboard.writeText(textoParaCopiar)
            .then(() => {
                alert("Texto copiado com sucesso!");
            })
            .catch(err => {
                console.error("Falha ao copiar o texto: ", err);
            });
    } else {
        alert("Não há texto para copiar!");
    }
});

