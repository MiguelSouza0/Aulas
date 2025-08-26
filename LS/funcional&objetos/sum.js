function sum(numbers) {
  let total = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  
  return total;
}

function sumOdds(numbers) {
  let total = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      total = total + numbers[i];
    }
  }
  
  return total;
}

function product(numbers) {
  let total = 1;
  
  for (let i = 0; i < numbers.length; i++) {
    total = total * numbers[i];
  }
  
  return total;
}
