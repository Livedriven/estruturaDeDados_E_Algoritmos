//@ts-check
//Inverter array

/**
 * @type{number[]}
 */

const numbersArray = [1,2,3,4,5];

/**
 * Retorna um novo array com os elementos invertidos,
 * sem modificar o array original.
 * @param {number[]} inputArray
 * @returns {number[]}
 */

function reverseArray(inputArray){
    const reversedArray = [];
    
    for(let i = inputArray.length - 1; i >= 0; i -= 1){
        reversedArray.push(inputArray[i]);
    }
    return reversedArray
}
