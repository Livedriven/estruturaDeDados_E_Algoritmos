//@ts-check
//Contar pares

/**
 * @type{number[]}
 */
const numberList = [1,2,3,4,5,6,7,8,9,10];

/**
 * Conta quantos números pares existem em um array.
 * @param {number[]} numbersArray
 * @returns {number} Quantidade de valores pares
 */

function countEvens(numbersArray){
    let evens = 0;
    for(const item of numbersArray){
        if(item % 2 === 0){
            evens += 1;
        }
    }
    return evens;
}

console.log(countEvens(numberList));