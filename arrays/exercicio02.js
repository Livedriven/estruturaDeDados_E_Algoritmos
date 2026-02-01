//@ts-check
//Maior e menor valor

/**
 * @type{number[]} 
 */
const values = [1, 2, 3, 4, 5, 6, 7, 9, 10];

/**
 * @param {number[]} numbers
 * @returns {{
 *    maior: { valor: number, indice: number },
 *    menor: { valor: number, indice: number }
 *   }}
 */

function maiorMenorValor(numbers) {
    if (numbers.length === 0) {
        throw new Error('Array não pode estar vazio');
    }

    const maior = { valor: numbers[0], indice: 0 };
    const menor = { valor: numbers[0], indice: 0 };


    for (let i = 1; i < numbers.length; i += 1) {
        if (menor.valor > numbers[i]) {
            menor.valor = numbers[i];
            menor.indice = i;
        }
        if (maior.valor < numbers[i]) {
            maior.valor = numbers[i];
            maior.indice = i;
        }
    }
    return { maior, menor };
}

console.log(maiorMenorValor(values))