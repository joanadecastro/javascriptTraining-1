/*Listar os números pares entre 1 e 20, sem utilizar o operador % -  utilizar um ciclo for ou while.
Investigar a utilização do operador % (resto da divisão de inteiros) e resolver o exercício utilizando este operador.*/

for (let i = 1; i < 21; i++) {
  i = i + 1;
  console.log(i);
}

//com operador %

for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i + " é numero par visto atraves do operador %");
  }
}
