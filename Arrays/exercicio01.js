// @ts-check
//Soma dos elementos

/**
 * @type{number[]}
 */
const numbers = [1,2,3,4,5,6,7,9,10];

/**
 * @param {number[]} values
 * @returns {number}
 */
function sumNumbers(values){
    let total = 0;
    for(const number of numbers){
        total += number;
    }
    return total;
}

console.log(sumNumbers(numbers))
