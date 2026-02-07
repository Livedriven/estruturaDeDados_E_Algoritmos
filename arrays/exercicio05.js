//@ts-check
//Remover duplicados

/**
 * @type{number[]}
 */
const duplicatedNumbers = [2,1,2,2,3,3,4,5];

/**
 * @param {number[]} inputArray
 * @returns {number[]} um novo array sem duplicatas
 */

function removeDuplicates(inputArray){
    /**
     * @type{number[]}
     */
    const filteredArray = [];
    for(let i = 0; i < inputArray.length; i += 1){
        let existe = false;
        const item = inputArray[i];
        for(let j = 0; j < filteredArray.length;j += 1){
            if(item === filteredArray[j]){
                existe = true;
            }
        }
        if(!existe){
            filteredArray.push(item);
        }
    }
    return filteredArray;
}
console.log(duplicatedNumbers.toString())
console.log(removeDuplicates(duplicatedNumbers).toString())