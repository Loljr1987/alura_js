console.log(`Trabalhando com listas`);
// const para = `Pará`;
// const maranhao = `Maranhão`;
// const amazonas = `Amazonas`;

const listaDeDestinos = new Array(
    `Pará`,
    `Maranhão`,
    `Amazonas`
);

listaDeDestinos.push(`Acre`) // adicionando itens a lista após ela já está declacrada

console.log("Possíveis Destinos:");
// console.log(para, Mmaranhao, amazonas);
console.log(listaDeDestinos);

listaDeDestinos.splice(2,1);
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]);