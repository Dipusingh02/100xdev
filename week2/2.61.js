// filtering
// what if i tell u given an input array, give me vack all the even values from it
const  arr=[1,2,3,4,5,6,7,8];
const newArray =[];
for (let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
    newArray.push(arr[i])}
}
console.log(newArray);
function fun1(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}
const ans =arr.filter(fun1);
console.log(ans);
