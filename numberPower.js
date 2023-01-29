
function numberToPower(number, power){
    let count = 1
    for (let i = 0; i<power; i++){
      count *= number  
    }
    return count
  }
  
  
    console.log(numberToPower(4, 2))