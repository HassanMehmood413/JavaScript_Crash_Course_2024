//Loops used in Arrays :
// Four loops:


let ar = [1,2,3,4,5,6]
// for(let i = 0 ; i <ar.length ; i++){
//     console.log(ar[i]);
    
// }

//For Each Loop:
ar.forEach(element => {
    console.log(element * element);
});

//Array from:

let name = "hassan";
let c = Array.from(name)
console.log(c);

//For of loop:

for(let i of ar){
    console.log(i);
}

//For in Loop:   It prints the only array locations 
for(let i in ar){
    console.log(i);
}
