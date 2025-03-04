let listaDeAmigos = [];

function agregarAmigo() {
    const entrada = document.getElementById("amigo");
    const nombre = entrada.value.trim();

    if (nombre === "")
    {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaDeAmigos.push(nombre);
    actualizarLista();
    entrada.value = "";
}

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    listaDeAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0)
    {
        alert("Por favor, agregue al menos un nombre para realizar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);
}