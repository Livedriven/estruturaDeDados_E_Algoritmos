//@ts-check
//Two Sum
/**
 * @type{number[]}
 */
const numbers = [1, 2, 3, 4, 5, 6, 7];
const target = 9;

/**
 * @param {number[]} values
 * @param {number} target
 * @returns {{ firstIndex: number, secondIndex: number }}
 */

// retorna os indices dos números dentro do array que somados
// levam ao numero desejado
function targetSum(values, target) {
  /**
   * @type{{[key: number]:number}}
   */
  const memoria = {};
  for (let i = 0; i < values.length; i += 1) {
    const currentValue = values[i];
    const missingValue = target - currentValue;
    if (missingValue in memoria) {
      return { firstIndex: memoria[missingValue], secondIndex: i };
    }
    memoria[currentValue] = i;
  }
  throw new Error("Nenhuma combinação encontrada");
}
console.log(targetSum(numbers, target));
