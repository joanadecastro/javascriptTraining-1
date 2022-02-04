/*O método prompt de JavaScript permite pedir um valor ao utilizador:
let valor=prompt("Introduza um valor");
ATENÇÃO QUE OS VALORES RECEBIDOS DE CAMPOS DE FORMULÁRIO SÃO SEMPRE DO TIPO STRING!
O método Math.random() permite gerar um número aleatório entre 0 e 1. Pesquise na Internet como gerar um número
aleatório entre 1 e 10.
Criar um jogo em que inicialmente é gerado, de forma aleatória, um número inteiro entre 1 e 10. O utilizador tem
3 tentativas para acertar no número.
Se acertar, deve aparecer a mensagem "Acertou". Se falhar, deve aparecer a mensagem "Falhou". Quando se acabam as
 três tentativas deverá aparecer a mensagem "Acabou o jogo. Não acertou no número".
Utilize o método alert para mostrar as mensagens. (editado) */

let number = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

console.log(number);

var nome = prompt("Digite um numero de 1 a 10: ");
document.write("acertou", nome);
