//@ts-check
//Rotação de array

/**
 * @type{number[]}
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * @param {number[]} values
 * @param {number} k
 */

function rotacao(values, k) {
  const len = values.length;

  k = k % len;
  reverse(values,0,len - 1);
  reverse(values,0, k - 1);
  reverse(values, k, len - 1);

}

/**
 * @param {number[]} arrayNumbers
 * @param {number} start
 * @param {number} end
 */

function reverse(arrayNumbers,start,end){
    while(start < end){
        [arrayNumbers[start],arrayNumbers[end]] = [arrayNumbers[end],arrayNumbers[start]];
        start += 1
        end --
    }
}

rotacao(numbers, 10);

console.log(numbers);
