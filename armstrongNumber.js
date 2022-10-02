
function isArmstrongNumber(num){
    let temp = num;
    let n = 0;
    while(temp>0){
        n++;
        temp = Math.trunc(temp/10);
    }
    temp=num;
    let sum =0;
    while(temp>0){
        let rem = temp%10;
        sum += pow(rem,n);
        temp = Math.trunc(temp/10);
    }
    if(sum == num)
        return `${num} is Armstrong number`;
    return `${num} is not Armstrong number`;
}

function pow(n,m){
    let power=1;
    for(let i = 1;i<=m;i++){
        power *= n; 
    }
    return power;
}

console.log(isArmstrongNumber(1634));
