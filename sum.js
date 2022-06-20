function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}


function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const encode = (string) => {

  const arrayString = string.split('');

  for (let element in arrayString) {

    if (arrayString[element] === 'a') {
      arrayString[element] = 1;
    } else if (arrayString[element] === 'e') {
      arrayString[element] = 2;
    } else if (arrayString[element] === 'i') {
      arrayString[element] = 3;
    } else if (arrayString[element] === 'o') {
      arrayString[element] = 4;
    } else if (arrayString[element] === 'u') {
      arrayString[element] = 5;
    }
  }

  const stringCodify = arrayString.toString().replace(/,/g, "");

  return stringCodify;
}


const decode = (string) => {

  const arrayString = string.split('');


  for (let element in arrayString) {

    if (arrayString[element] === '1') {
      arrayString[element] = 'a';
    } else if (arrayString[element] === '2') {
      arrayString[element] = 'e';
    } else if (arrayString[element] === '3') {
      arrayString[element] = 'i';
    } else if (arrayString[element] === '4') {
      arrayString[element] = 'o';
    } else if (arrayString[element] === '5') {
      arrayString[element] = 'u';
    }
  }


  const stringDecodify = arrayString.toString().replace(/,/g, "");

  return stringDecodify;
}

const techList = (array, string) => {

  const ordenedArray = array.sort();
  const arrayResult = [];
  
  if(array.length === 0){
    return 'Vazio!'
  }

  for(let tech of ordenedArray){
    arrayResult.push({tech: tech, name: string})
  }

  return arrayResult
}

module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList};