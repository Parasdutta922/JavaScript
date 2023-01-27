/*In JavaScript, an array is an object. And, the indices of arrays are objects keys.
Since arrays are objects, the array elements are stored by reference. Hence, when an array value is copied,
 any change in the copied array will also reflect in the original array.*/

 let arr = ['h','e'];
 let arr1 = arr;
 arr1.push('l');

 console.log(arr);
 console.log(arr1);

 //You can also store values by passing a named key in an array.

 arr.name = 'john';

 console.log(arr);
 console.log(arr.name);
 console.log(arr['name']);

/*1.-----------------------------------------------------------------------------------------------------------------*/
//A multidimensional array is an array that contains another array.

// two ways of creating multidimensional array
//1. adding arrays inside an array
let studata = [['jack',24],['sara',23],['peter',24]];
console.log(studata);

//2. way

let stu1 = ['jack',24];
let stu2 = ['Sara',23];
let stu3 = ['peter',24];

let studata2 = [stu1,stu2,stu3];
console.log(studata2);

/*2.-----------------------------------------------------------------------------------------------------------------*/

//Access Elements of an Array
//You can access the elements of a multidimensional array using indices (0, 1, 2 …).
// first [] represents first element of an array second [] represents elements inside of that element.
console.log(studata[0][0],studata[1][0],studata[2][0]);

/*3.-----------------------------------------------------------------------------------------------------------------*/
//Adding Element to an Multidimensional Array

//Adding Element to the Outer Array
studata.push(['Pan',18]);
studata[4] = ['Zoro',20];
console.log(studata);

//Adding Element to the inner array 
studata[1].push('perfect');
studata[0][2] = 'good';
console.log(studata);

//By using splice() method 
studata.splice(5,0,['PeterPan',25]);
console.log(studata);
/*4.-----------------------------------------------------------------------------------------------------------------*/
//Remove an Element from a Multidimensional Array
//pop() method also works the same as push 

//using splice() method
studata.splice(0,1);
console.log(studata);

/*5.-----------------------------------------------------------------------------------------------------------------*/
//Iterating over Multidimensional Array
//You can iterate over a multidimensional array using the Array's forEach() method to iterate over the multidimensional array.

studata.forEach((student) => {
    student.forEach((data) => {
        console.log(data);
    })
    
});

//You can also use the for...of loop to iterate over the multidimensional array
for(let i of studata){
    for(let j of i){
      console.log(j);
    }
}
