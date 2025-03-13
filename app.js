// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo(){
    const amigo = document.getElementById('amigo');
    const texto = amigo.value.trim();

    if (texto != ''){

        amigos.push(texto);
        amigo.value='';
        mostrarAmigos();
        document.getElementById("amigo").focus();
    } else {
        alert('Por favor, escribe un nombre');
        document.getElementById("amigo").focus();
    }

}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++) {
        const elementoLI = document.createElement('li');
        elementoLI.textContent = amigos[i];
        lista.appendChild(elementoLI);
    }
}

function sortearAmigo(){

    if(amigos.length == 0){
        alert('No hay nombres para sortear');
        return;
    }

    const sorteo = Math.floor(Math.random()*amigos.length);
    const ganador = amigos[sorteo];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${ganador}</li>`; 

}
