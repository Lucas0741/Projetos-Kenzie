// ENTREGA SNAPCRACKLE

function snapCrackle(maxValue) {
    let output = ""
    for (let i = 1; i <= maxValue; i++) {
      if (i % 2 !== 0 && i % 5 === 0) {
        output += "SnapCrackle, "
      }
      else if (i % 2 !== 0) {
        output += "Snap, "
      }
      else if (i % 5 === 0) {
        output += "Crackle, "
      }
      else if (i % 2 === 0 && i % 5 !== 0) {
        output += i + ", "
      }
    }
    return output
  }
  snapCrackle(10)
  
  // ENTREGA EXTRA 
  
  function numberPrime(num){
    for(let i = 2; i < num; i++){ 
      if(num % i === 0){
       return false
      }
    } return num > 1
  }
  numberPrime(2)
  
  function snapCracklePrime(maxValeu) {
    let output = ""
    for (i = 1; i <= maxValeu; i++) {
      if (i % 2 !== 0 && i % 5 === 0 && numberPrime(i)) {
        output += "SnapCracklePrime, "
      }
      else if (i % 2 !== 0 && i % 5 === 0) {
        output += "SnapCrackle, "
      }
      else if (i % 2 !== 0 && numberPrime(i)) {
        output += "SnapPrime, "
      }
      else if (i % 2 !== 0) {
        output += " Snap, "
      }
      else if (i % 5 === 0) {
        output += "Crackle, "
      }
      
      else if (numberPrime(i)) {
        output += "Prime, "
      }
      else if (i % 2 === 0 && i % 5 !== 0) {
        output += i + ", "
      }
    }
    return output
  }
  snapCracklePrime(20)