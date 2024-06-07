let a = [1,2,3,4,54,67]
for( let i = 0 ; i<a.length ; i++){
    console.log(a[i]);
}

// some JS array methods are given as:
console.log(a.length);
console.log(a.pop() , a); // Removes the last element of the array
console.log(a.push(48) , a); // Add elements in the array and return the length
console.log(a.shift() ,a); // Returns the first element of the array
console.log(a.unshift(22) , a); // Add element to the beginning of the array and return the length
console.log(a.unshift(22) , a); // Add element to the beginning of the array and return the length
console.log(a.slice(1,3)); // Its returns the element when we give the locations 
console.log(a.splice(4,1,44,4434), a); // removes and add element from the array by specifying the location
console.log(a.sort()); // It only arranges the number alphabetically not nummerically MCQS
//Keep in mind only sort is used to sort numbers alphabetically so to arrange the numbers form assending decending order we use compare function as given below:
const compare = (a,b)=>{
    return a - b;
}




let b = ["hassan", "HNT"]
console.log(a.concat(b)); // This method combines the two arrays 






