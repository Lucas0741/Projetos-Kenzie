
/*
🧠 Exercício 1 - O Ganhador
Você trabalha em uma loja e hoje essa loja vai premiar o primeiro cliente do dia, mas somente se em seu carrinho tiver o livro "Vou ser Dev". Execute um teste de condição usando a posição do seu array como verificador. Use os conceitos de funções aprendidos anteriormente para testar de forma dinâmica. No console, sua aplicação deve imprimir se o cliente ganhou ou não.
*/
/*
function testaPosicao(lista, posicao) {
    if (carrinhoDeCompras1[0] === "Vou ser Dev" || carrinhoDeCompras1[1] === "Vou ser Dev" || carrinhoDeCompras1[2] === "Vou ser Dev") {
      console.log("Parabéns Você Ganhou")
    }
   else if (carrinhoDeCompras2[0] === "Vou ser Dev" || carrinhoDeCompras2[1] === "Vou ser Dev" || carrinhoDeCompras2[2] === "Vou ser Dev") {
      console.log("Parabéns Você Ganhou") 
      } 
  else if (carrinhoDeCompras3[0] === "Vou ser Dev" || carrinhoDeCompras3[1] === "Vou ser Dev" || carrinhoDeCompras3[2] === "Vou ser Dev") {
      console.log("Parabéns Você Ganhou")
  				}
        }
    
  let carrinhoDeCompras1 =
  [
   "Funko Pop Kakashin",
   "Dragon Ball Collectionz",
   "Vou ser Herdeiro"
  ]
  
  let carrinhoDeCompras2 =
  [
   "Funko Pop Kakashi",
   "Dragon Ball Collection",
   "Vou ser Agiota"
  ]
  let carrinhoDeCompras3 =
  [
   "Funko Pop Kakashib",
   "Vou ser Dev",
   "Lança a Braba"
  ]
  testaPosicao(carrinhoDeCompras1)
*/

/*
🧠 Exercício 2 - De que tipo é ?
Agora vamos descobrir qual o tipo do item contido em nosso array. Um jovem estudante de programação fez uma lista de elementos com tipos diferentes do JavaScript e agora ele quer quer descobrir se ele adicionou o tipo "number" na lista. O seu objetivo é imprimir se o tipo do elemento da posição indica é number ou não. Podemos seguir a lógica adotada no exercício anterior.
*/
/*
function qualTipoDeElemento(arr, output){
  for(i = 0; i < arr.length; i++){
    if(arr[i] === 10){
      output.push(arr[i])
    }
  }
  return output
}
qualTipoDeElemento([1.5,"String",'true', 10], [])
*/
/*
/*
🧠 Exercício 3 - Ônibus premiado
Você é motorista de um ônibus e vai descobrir que neste ônibus existe uma poltrona com um bilhete de loteria premiado. Seu objetivo é desenvolver uma função que testa valores condicionais. Utilize o código abaixo para gerar um número aleatório que irá representar a poltrona com o bilhete premiado. Só existem 3 opções de acento. Sua função deve receber um array com 3 nomes e imprimir no console o passageiro que encontrou o bilhete. Pense em alguma maneira de tratar o indice 0.
*/
/*
function bilhetao () {
  let arr = ['marcelo','josivaldo','josias']
  let xablau = Math.floor(Math.random() * (4-1) + 1)
  if (xablau === 3) {
    console.log(arr[2])
  }
  if (xablau === 2) {
    console.log(arr[1])
  } else {
    return arr[0]
  }
}
bilhetao()
*/











