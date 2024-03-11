console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Pará`,
    `Maranhão`,
    `Amazonas`
);

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Possíveis Destinos:");
console.log(listaDeDestinos);


// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(2, 1); //renovendo item
// } else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado")
//     listaDeDestinos.splice(2, 1); //removendo item
// } else {
//     console.log("Não é maior de idade, então não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
        console.log("Boa VIagem!");
        listaDeDestinos.splice(1, 1); //renovendo item
    } else {
        console.log("Não é maior de idade, então não posso vender");
    }

    console.log("Embarque: \n\n");
    if(idadeComprador >= 18 && temPassagemComprada) {
        console.log("Boa Viagem!");
    }else{
        console.log("Você não pode embarcar!");
    }


console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);