//@ts-check
/**
 * @type{number[]}
 */

const numbers = [-1,1,2,2,3];

/**
 * @param {number[]} values
 * @returns {number[]}
 */

function removedDuplicate(values) {
    /**
     * @type {number[]}
     */
    const acceptNumbers = [];
    for(let i = 0; i < values.length; i += 1){
        const item = values[i];
        let existe = false;

        for(let j = 0; j < acceptNumbers.length; j += 1){
            if(item === acceptNumbers[j]){
                existe = true;
                break;
            }
        }
        if(!existe){
            acceptNumbers.push(item);
        }
    }
    return acceptNumbers
}

console.log(removedDuplicate(numbers))