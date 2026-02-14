//@ts-check
//Subarray crescente
/**
 * @type{number[]}
 */

const numbers = [1, 2, 3, 4, 5];
const numbersTwo = [1, 3, 1, 2];
const numbersTree = [1, 4, 3, 2, 3, 4];

/**
 * @param {number[]} values
 * @returns {number[] | null}
 */
// retorna um subarray que contenha no minimo 3 elementos em ordem crescente
function getIncreasingSubarray(values) {
  if (values.length < 3) {
    return null;
  }
  let startIndex = 0;
  let bestStart = 0;
  let bestLength = 0;

  for (let i = 1; i < values.length; i++) {
    if (values[i] <= values[i - 1]) {
      startIndex = i;
      continue;
    }

    const currentLength = i - startIndex + 1;
    if (currentLength >= 3 && currentLength > bestLength) {
      bestStart = startIndex;
      bestLength = currentLength;
    }
  }
  return bestLength > 0
    ? values.slice(bestStart, bestStart + bestLength)
    : null;
}

console.log(getIncreasingSubarray(numbers));
console.log(getIncreasingSubarray(numbersTwo));
console.log(getIncreasingSubarray(numbersTree));
