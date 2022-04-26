/*
🧠 Exercício 1 - Mostrando números pares de um array
Crie uma função, que utilize Looping For, onde recebe um array de números positivos, e retorna somente os números pares

Resultado esperado da função:

const arr = [5, 4, 7, 30, 16, 89]
pares(arr) // resultado esperado = 4, 30, 16
*/

/*
function retornarPar () {                    // Iniciar um function com ou sem parametros isso vai do exercicio
  const arr = [5, 4, 7, 30, 16, 89]         // Declarar um array com os valores pedidos no exercicio
  const output = []                          // Declarar uma variavel para armazenar o resultado final
  for (i = 0; i < arr.length; i++) {        // Declarar o loop seguindo as condições do I I I
    if (arr[i] % 2 === 0) {                 // Condição do loop para percorrer o array
      output.push(arr[i])                  // Nome da variavel de armazenamento de resultado + push (para adicionar ao armazenamento)
    }                                       // dentro dos parenteses do push vai de onde você pega o resultado para armazenar = arr[i]
  }
  console.log(output)                      // Console.log ou return fora do loop for
}
retornarPar()                                // Chamar a função fora dela para ativar o código
*/
/*
function retornaImpar () {
  const arr = [-10, -13, -27, -35, -42]
  const output = []
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2  !== 0) {
      output.push(arr[i])
    }
  }
  return output
}
retornaImpar()
*/
/*
🧠 Exercício 2 - Somando números de um array
Crie uma função, que some todos os valores de um array, mas caso o valor esteja em tipo string, deve ser convertido em number, para que a soma fique correta

soma([1, '4', 9, 18]) // resultado esperado = 32
Para converter a string em um number você pode utilizar o método parseInt


function somarValores () {
  const arr = [1, "4", 9, 18]
  let output = 0
  
  for (i = 0; i < arr.length; i++) {
    output += parseInt(arr[i])
  }
  return output
}
somarValores()
*/