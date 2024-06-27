//Filter Method:
let arr = [2,45,43,21]
let a = arr.filter((element)=>{
    return element < 20 
    
})
console.log(a);

//Map method:
let array = [2,45,43,21]
let b = array.map((element)=>{
    return element * element
    
})
console.log(b);

//Map by using function:
function harry(a){
    return a * a;
}
let c = array.map(harry);
console.log(c);

// Reduce by using function:
let arr3 = [1,2,3,4,5,6,7]
function hassan(a,b){
    return a + b;
}
let newar = arr3.reduce(hassan)
console.log(newar);
