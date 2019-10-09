module.exports = function zeros(expression) {
  let array = expression.split('*');
  let countFives = 0;
  let allNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes('!!')) {
      let counter = parseInt(array[i]);
      while (counter > 1) {
        allNumbers.push(counter);
        counter -= 2;
      }

    } else {
      let counter = parseInt(array[i]);
      while (counter > 1) {
        allNumbers.push(counter);
        counter--;
      }
    }
  }

  if (allNumbers.includes(2)) {
    for (let item of allNumbers) {
      while (item % 5 === 0) {
        countFives++;
        item /= 5;
      }
    }
  } else {
    countFives = 0;
  }
  
  return countFives;
}