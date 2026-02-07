//@ts-check
//Segundo maior elemento
/**
 * @type{number[]}
 */

const numbers = [1,1];

/**
 * @param {number[]} values
 * @returns {number | null}
 */

function findSecondLargest(values) {
    if (values.length < 2) {
        throw new Error("Um array com menos de 2 elementos não tem segundo maior");
    }

    let largest = values[0];
    /**
     * @type{number | null}
     */
    let secondLargest = null;

    for (let i = 0; i < values.length; i += 1) {
        const currentValue = values[i];
        if (currentValue > largest) {
            secondLargest = largest;
            largest = currentValue;
        }
        else if (currentValue < largest && (secondLargest === null || currentValue > secondLargest)) {
            secondLargest = currentValue;
        }
    }
    if(secondLargest === null){
        throw new Error("Não existe segundo maior")
    }
    return secondLargest;
}

console.log(findSecondLargest(numbers))