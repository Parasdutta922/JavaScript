/*...args this is rest and spread operator*/

//Ex1 spread operator

function sumOne(a, b){
    return a+b;
}
//suppose instead of having 5, 4 as passing arguments we have a array
let myA = [5,4]// this is a array of 5, 4 can we pass on this array as an argument.

//console.log(sumOne(myA));// result is 5,4undefined this is because when the type of data doesn't match it happens

//lets say we pass a another value as an argument 
//console.log(sumOne(5,4,1));// it adds the 5 and 4 but 1 get ignored anything that the function don't understand will get ignored
// same happend in here console.log(sumOne(myA));

//this is the challenge no. 1 when your function expects individual value but your values comes up as a pack or bunch
// right now it is as a array but it can come in different bunches like objects etc.
// in that case if you don't want to change the function definition all you can do use spread operator.
//Ex:
console.log(sumOne(...myA));// now it runs get we get the value 9 

//now we add another value in the array but the function accepts 2 
//Ex:
myA[2] = 2;
//and run the funtion again it will ignore that value because it's not supposed to happen
// the work of '...myA' spread operator is it takes grouped value and converts them into individual values. 

//Ex2 rest operator

function sumTwo(...args){// now whenever you want to take as many value as yuo give so in that case when you are not very sure how many arguments are gonna come in then you put '...args' three dots followed by variable name args is most common variable name but it can be superman too.
//Now what you hv to do is expect this args is gonna be array and we need to loop through the values always expect once you are having this kind of statements ...args in the function that an array is gonna come up.
// so how do we add the values 
//Ex:
      console.log(args)
      let sum = 0;
      for (const arg of args) {
        sum += arg;
      }
      return sum;
}

console.log(sumTwo(1,5,7));// 13 // rest operator converts individual values into grouped(array) values.

//Another thing suppose you want do something with the first two values then add up the rest. You can do that too.

function igr(a, b, ...args){// what happening here is a and b gets treated as individual parameter and the rest goes into ...args 
    console.log(args);
      let multi = a * b;
    let sum = 0;
    for(const arg of args){
        sum += arg;
    }
    return [multi, sum]
}

console.log(igr(2,5,1,1,1));// 2 * 5 => 10 and 1 + 1 + 1 => 3. 
