// @ts-check
// Dividir por critério (impar/par)
/**
 * @type{number[]}
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * @param {number[]} numbers
 * @returns {{
 *      impar:number[],
 *      par:number[]
 * }}
 */

function divideByParity(numbers) {
    /** @type{number[]} */
    const impar = [];

    /** @type{number[]} */
    const par = [];

    for (const value of numbers) {
        if (value % 2 === 0) {
            par.push(value);
        } else {
            impar.push(value);
        }
    }

    return { impar, par };
}

console.log(divideByParity(numbers));