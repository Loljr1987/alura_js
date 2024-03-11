console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Pará`,
    `Maranhão`,
    `Amazonas`
);

const idadeComprador = 17;
const estaAcompanhada = true;

console.log("Possíveis Destinos:");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade")
    listaDeDestinos.splice(2, 1); //renovendo item
} else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado")
    listaDeDestinos.splice(2, 1); //removendo item
} else {
    console.log("Não é maior de idade, então não posso vender");
}



console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);