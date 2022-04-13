//Você está trabalhando nos bastidores do Maraton Kenzie. Não tem mais hipóteses do cenário mudar além dos três que já lideram a prova, a distância para o quarto colocado já é enorme. Rafael, Manoel e Daniel estão em uma disputa acirrada para conquistar a primeira posição. Daniel tem vantagem, pois, no percurso, conseguiu cumprir a tarefa extra. Desenvolva a função para criarmos o pódio.

//Crie uma função chamada positions, esta função deverá receber como argumento 3 parâmetros; firstPlace, secondPlace, lastPlace

//Você deverá criar uma array composto pelo, os três parâmetros recebidos pela função. A posição em que o parâmetro é inserido no array, é considerado a posição do atleta na corrida.

//O competidor Daniel realizou o desafio extra, e ganhou um bônus. Ele sempre vai subir uma posição. Sendo assim, o Daniel trocará de lugar com quem estiver na posição a frente dele, caso haja.

//Após realizar esta rotina a função deverá imprimir no console o resultado. Deverá seguir o seguinte modelo: 1ª - Colocado "nomeDoCompetidor". Queremos saber a posição de todos os 3 primeiros colocados.

/* SEGUE ABAIXO DUAS VERSÕES DO CÓDIGO UM POR EXTENSO E OUTRA CONCATENADA */

function positions (firstPlace, secondPlace, lastPlace) {
    let arr = [firstPlace, secondPlace, lastPlace]
      console.log("1ª - Colocado " + arr[0])
      console.log("2ª - Colocado " + arr[1])
      console.log("3ª - Colocado " + arr[2])
    if (arr[2] === "Daniel") {
        console.log("1ª - Colocado " + arr[0])
      	console.log("2ª - Colocado " + arr[1])
      	console.log("3ª - Colocado " + arr[2])
    }else if(arr[1] === "Daniel") {
        console.log("1ª - Colocado " + arr[0])
      	console.log("2ª - Colocado " + arr[1])
      	console.log("3ª - Colocado " + arr[2])
    }else {
        console.log("1ª - Colocado " + arr[0])
      	console.log("2ª - Colocado " + arr[1])
      	console.log("3ª - Colocado " + arr[2])
    }
    }
    positions("Daniel", "Rafael", "Manuel")

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    function positions (firstPlace, secondPlace, lastPlace) {
        let arr = [firstPlace, secondPlace, lastPlace]
          console.log("1ª - Colocado " + arr[0])
          console.log("2ª - Colocado " + arr[1])
          console.log("3ª - Colocado " + arr[2])
        if (arr[2] === "Daniel") {
            return("1ª - Colocado " + arr[0] + " 2ª - Colocado " + arr[1] + " 3ª - Colocado " + arr[2])
        }else if(arr[1] === "Daniel") {
            return("1ª - Colocado " + arr[0] + " 2ª - Colocado " + arr[1] + " 3ª - Colocado " + arr[2])
        }else {
            return("1ª - Colocado " + arr[0] + " 2ª - Colocado " + arr[1] + " 3ª - Colocado " + arr[2])
        }
        }
        positions("Daniel", "Rafael", "Manuel")
