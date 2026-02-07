//@ts-check
//Interseção de arrays
/**
 * @type{number[]}
 */

const A = [1,2,3,4,5];

/**
 * @type{number[]}
 */
const B = [3,4,3,5,6,7];

/**
 * @param {number[]} valuesA
 * @param {number[]} valuesB
 * @returns{number[]}
 */
function intersection(valuesA,valuesB){
    /**
     * @type{number[]}
     */
    const valuesComuns = [];

    for(let i = 0; i < valuesA.length; i += 1){
        const item = valuesA[i];
        let valueComun = false;
        for(let j = 0; j < valuesB.length; j += 1){
            if(item === valuesB[j] && (!valuesComuns.includes(item))){
                valueComun = true;
                break;
            }      
        }
       if(valueComun){
            valuesComuns.push(item)
       }

    }
    return valuesComuns;
}

console.log(intersection(A,B))