document.entrada.addEventListener('submit', leFormulario);

function leFormulario(event) {
    event.preventDefault();
    const quantidade = document.entrada.quantidade.value;
    const fruta = document.entrada.fruta.value;
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;

    console.log(`${origem} doa ${quantidade} ${fruta} para ${destino}`);
    // document.entrada.submit();
}