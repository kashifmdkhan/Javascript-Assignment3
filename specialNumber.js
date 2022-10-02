function specialNumber(num){
    let temp = num;
    let sum = 0;
    while(temp>0){
        let rem = temp%10;
        temp = Math.trunc(temp/10);
        sum += factorial(rem)
    }
    if(sum == num)
        return `${num} is special number`;
    return `${num} is not special number`;
}

function factorial(num){
    let fact = 1;
    for(let i = 1;i<=num;i++){
        fact *= i;
    }
    return fact;
}

console.log(specialNumber(146));
console.log(specialNumber(145));