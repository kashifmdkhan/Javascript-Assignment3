let count = 1;
for(let i=1; i<=4;i++){
    let string = "";
    for(let j=1;j<=i;j++)
    {
        string += count.toString()+" ";
        count++;
    }
    console.log(string);
}