//@ts-check
//Soma alvo (Two Sum simplificado)
/**
 * @type{number[]}
 */
const numbers = [1,2,3,4,5,6,7];
const target = 5;

/**
 * @param {number[]} values
 * @param {number} target
 * @returns {number[]}
 */
function targetSum(values,target){
    /**
     * @type{{[key: number]:number}}
     */
    const memoria = {};
    for(let i = 0; i < values.length; i += 1){
        const falta = target - values[i];
        if(memoria[falta] !== undefined){
            return [memoria[falta],i];
        }
        memoria[values[i]] = i;
    }
    throw new Error("Nenhuma combinação encontrada");
}
console.log(targetSum(numbers,target))