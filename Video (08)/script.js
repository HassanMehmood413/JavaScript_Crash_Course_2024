//Guess the number

let number  = Math.floor(Math.random()*101);
let p = prompt("Enter any guess");
let guess = 0;
while(p != number){

    if(p > number){
        console.log("Your guess is greater than number", p);
        guess++;
    }
    
    if(p < number){
        console.log("Your Guess is smaller than number", p , "Options left" , guess);
        guess++;
    }
}
console.log("Congratulations BRO" +(100-guess))















// let n=Math.floor(Math.random()*100)
// let m=prompt("enter the nuber")
// let c=0
// while(m!=n){
//   if(m>n){
//     m=prompt("enter lesser number")
//     c++
//   }
//   if(m<n){
//     m=prompt("enter greater number")
//     c++
//   }
// }
// console.log("your score is "+(100-c))
