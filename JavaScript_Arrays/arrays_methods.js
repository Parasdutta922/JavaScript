//In JavaScript, there are various array methods available that make it easier to perform useful calculations.

let ex0 = ['sleep','work','exercise'];
let ex1 = ['eat'];
let age = [12,28,34,47,50,];

//1. sorting element in the alphabetical order using sort() method
ex0.sort();
console.log(ex0);

//2. finding the index position of string 
let position = ex0.indexOf('exercise');
console.log(position);

//3. slicing the array elements
let slicedvalue = ex0.slice(1, 2);
console.log(slicedvalue);

//4. concatenating two arrays
console.log(ex0.concat(ex1));

//5. filter an array

const adult = age.filter(checkadult);
function checkadult(age){
    return age >= 18;
}
console.log(adult);

//6. map a function to an array 
const ages_sqrt = age.map(Math.sqrt);
console.log(ages_sqrt);

//Note: If the element is not in an array, indexOf() gives -1.

