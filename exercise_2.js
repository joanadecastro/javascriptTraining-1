//Criar duas variáveis, total e desconto (percentual), e apresentar, na consola, o preço final depois de aplicar o desconto.

let total;
let desconto;
let precoFinal = (total * desconto) / 100;

//for:
total = 25;
desconto = 50;

precoFinal = total - (total * desconto) / 100;

console.log(precoFinal + " euros");

//for:
total = 120;
desconto = 25;

precoFinal = total - (total * desconto) / 100;

console.log(precoFinal + " euros");
