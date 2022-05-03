function calculateSalary(salarioFixo, vendas){
  
    let salarioTotal = 0
    
    if(vendas <= 1200){
        salarioTotal += salarioFixo +((vendas * 3)/100)
    }else{
          let excedente = vendas - 1200
        salarioTotal += salarioFixo + 36 + ((excedente * 5)/100)
    }
    return salarioTotal
    }
    calculateSalary(5200,780)
    
    function cashMachine(saque, salarioFixo, valorVendas) {
        let salarioTotal = calculateSalary(salarioFixo, valorVendas)
        let restanteDoSalario = salarioTotal - saque
        let erro = ""
        let quantidadeDeNotasDe200 = 0
        let quantidadeDeNotasDe100 = 0
        let quantidadeDeNotasDe50 = 0
        let quantidadeDeNotasDe20 = 0
        let quantidadeDeNotasDe10 = 0
        let quantidadeDeNotasDe5 = 0
        let quantidadeDeNotasDe2 = 0
    
        if (salarioTotal < saque) {
               erro = "Saldo Insuficiente"
          return erro
             }
        
        while (saque > 0) {
             if (saque - 200 >= 0) {
                quantidadeDeNotasDe200++
                saque = saque - 200
    
            } else if (saque - 100 >= 0) {
                quantidadeDeNotasDe100++
                saque = saque - 100
    
            } else if (saque - 50 >= 0) {
                quantidadeDeNotasDe50++
                saque = saque - 50
    
            } else if (saque - 20 >= 0) {
                quantidadeDeNotasDe20++
                saque = saque - 20
    
            } else if (saque - 10 >= 0) {
                quantidadeDeNotasDe10++
                saque = saque - 10
    
            } else if (saque - 5 >= 0) {
                quantidadeDeNotasDe5++
                saque = saque - 5
            } 
                  else if (saque - 2 >= 0) {
                quantidadeDeNotasDe2++
                saque = saque - 2
            } else {
                saque = 0
            }
        }
      
      console.log(quantidadeDeNotasDe200)
      console.log(quantidadeDeNotasDe100)
      console.log(quantidadeDeNotasDe50)
      console.log(quantidadeDeNotasDe20)
      console.log(quantidadeDeNotasDe10)
      console.log(quantidadeDeNotasDe5)
      console.log(quantidadeDeNotasDe2)
      
      return `Notas sacadas: ${quantidadeDeNotasDe200} notas de R$200, ${quantidadeDeNotasDe100} notas de R$100, ${quantidadeDeNotasDe50} notas de R$50, ${quantidadeDeNotasDe20} notas de R$20 ${quantidadeDeNotasDe10} notas de R$10 ${quantidadeDeNotasDe5} notas de R$5, ${quantidadeDeNotasDe2} notas de R$2, Saldo Atual: R$ ${restanteDoSalario}`
    }
    cashMachine(1172, 20000, 780)
    
    
    function calcularEstoque(qtdAtual, qtdMaxima, qtdMinima) {
        let qtdMedia = (qtdMaxima + qtdMinima) / 2;
        if (qtdAtual >= qtdMedia) {
            return 'Não comprar'
        } else {
            return 'Efetuar compra'
        }
    }
    calcularEstoque(5,19,1)
    
    function calcularIdade(anoNascimento) {
        let anos = 2022 - anoNascimento;
        let meses = anos * 12;
        let dias = meses * 30;
        let semanas = meses * 4;
    
        return `anos ${anos} , meses: ${meses} , semanas ${semanas} , dias ${ dias }`;
    }
    
    calcularIdade(calcularIdade(2002))
    
    function getDiagonal(num) {
        let resultDiagonal = [];
        for (let i = 0; i < num.length; i++) {
            for (let j = 0; j < num.length; j++) {
                if (i === j) {
                    resultDiagonal += `${num[ i ][ j ] + ", "}`;
                }
            }
    
        }
        return resultDiagonal;
    }
    getDiagonal([[1, 2, 3] , [4, 5, 6] , [7, 8, 9]])