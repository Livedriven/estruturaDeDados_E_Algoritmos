const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

numbers.reverse()

function compare(a,b){
    if(a < b){
        return -1;
    }
    if (a > b){
        return 1;
    }
    // considerando que são iguais
    return 0;
}

numbers.sort(compare);

console.log(numbers)