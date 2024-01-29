// Given a number N, Find the smallest number S such that the product of digits of S is equal to N

let N = 13  ;
let arr = [];

for(let i=9;i>=2;i--){
    while(N%i == 0){
        arr.push(i);
        N = Math.floor(N/i);
        // console.log("The array is",arr);
        // console.log("Value of i is",i);
    }
}
// console.log("value of N is",N)
arr.sort((a,b) => (a-b));
// console.log(arr);
let string = "";
for (let i=0;i<arr.length;i++){
    string = string + arr[i];
}   
// console.log("string is",string);
if(N != 1){
    console.log(-1)
}
else{
    console.log(string);
}