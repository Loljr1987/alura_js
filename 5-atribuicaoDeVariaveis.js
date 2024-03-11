console.log("Trabalhando com atribuição de variáveis");
const primeiroNome = "Lucivaldo";
const sobrenome = "Lopes";

/* console.log(nome + sobrenome);
 executou sem o espaço*/

/* console.log(nome, sobrenome);
esse tem  o mesmo efeito do codigo abaixo*/
// console.log(nome + " " + sobrenome);
/* ou dessa forma também
São meneiras de trabalhar com texto*/

console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

let contador = 0;
contador = contador +1

const nomeCompleto = `${primeiroNome} ${sobrenome}`;
console.log(nomeCompleto);
// aqui abaixo irá apresentar erro, pois a variével "const" não muda

let idade; //declarando variável
idade = 26; // atribuindo variável
idade = idade+10;
console.log(idade);