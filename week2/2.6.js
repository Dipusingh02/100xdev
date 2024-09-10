// map function arrow function
function sum(a,b){
    return a+b;
}
// arrow function
const sum1= (a,b)=>{
    return a+b;
}
// given an array give me back a new array in which every value is multiplied by 2
const input=[1,2,3,4,5];
const newArray =[];
for (let i = 0; i < input.length; i++) {
newArray.push(input[i]*2);
}
console.log(newArray);
// map(arr,function) other solution
function f(i){
    return i*2;
}
const ans = input.map(f);
console.log(ans);


// const input =[1,2,3,4,5];
// const ans =input.map(function (i){
//     return i*2
// });
// console.log(ans);
