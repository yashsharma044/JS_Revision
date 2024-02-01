//******Part 1 JavaScript Basics******

// 1. var vs let
//The major difference is that var is global scope variable value can be redeclared and updated any time and let is a local scope variable not redeclared but updated. let and const help to make JavaScript more predictable and less error-prone.

// 2. Datatypes in js
//Primitive -> Number,Boolean,String,Null,undefined,Symbol,BigInt
//Non-Primitive(Referenced Datatypes)
//Array,Object,Function

//3.Loops in js
//-->Simple for loop
// for(let i=0;i<n;i++){..}

//-->for-of,for-in loops(no need of initialization and termination)
//the above loops help to iterate over special datatypes

// 1.for-of loop->it helps to iterate over array and strings
//e.g -->
// let strName="JavaScript";
// let len=0;
// for(let val of strName)
// {
//     //val dynamically work as iterartor initilizor and terminator
//     console.log("val=",val.toUpperCase());
//     len++;
// }
// console.log(len);

// 2.for-in loop->it helps to iterate over objects and array
//create an object
// let student={
//     name:"yash",
//     rollNo:123,
//     isPass:true
// };
// for(let val in student)
// {
//     //the val here is iterate over the key of the object
//     console.log("val=",val,"value=",student[val]);
// }

// 4.Template literals in js
//it is a way to have string embedded in js by using string interpolation(to create stings by doing substitution of placeholder)(``,backticks used for it)
// let str="JavaScript";
// let output=`i love to program ${str}`;//placeholder substitution called string interpolation
// console.log(output);

// 5.String method in js
// let str="i love javaScript";
//str.toUpperCase()-->convert str to capital letters
// console.log(str.toUpperCase());

//str.toLowerCase()-->converts str to small letters
// console.log(str.toLowerCase());

//str.trim()-->remove all whitespace from the string 
// let str1="     hello India   "
// console.log(str1.length);
// let nstr=str1.trim();
// console.log(str1.trim());
// console.log(nstr);
// console.log(nstr.length);
//it removes whitespaces from starting and end of the string
//length is the property of the string while other are the method of the string they used to return the new values as output

//str.concat()-->combine two strings into one
// let str2=" with typeScript"
// let res=str.concat(str2);
// console.log(res);
// console.log(str+str2);
//both the above are the method are used for concatination

//str.replace(searchVal,newVal)-->used to replace first searchVal with newVal and all searchVal to replace then use replaceAll()
// let rstr="hellollollo";
// let res=rstr.replace("llo","m");
// console.log(res);
// //to replace all llo we use replaceAll
// let res1=rstr.replaceAll("llo","m");
// console.log(res1); 

// 6.Arrays in js 
//Array is a special type of object and a collection of items in linear way
// let arr=[1,2,3,4,5];
// let fruitArr=["mango","kiwi","litchi"];
//but to store different datatype items in array is not a good practice 
// let mixArr=[1,"tax",true,"grammer"];
//they are referenced datatypes pass with their orginal referenced address

//Looping over array
//here for-of is more preferable 
// let arr=[10,20,30,40,50]
// let sum=0;
// for(let val of arr)
// {
//     console.log(val);
//     sum+=val;
// }
// console.log(sum);

//Array Method(all change takes place in the original array)
//arr.push()-->at items at the end
// let arr=[10,20,30,40,50];
// arr.push(60);
// console.log(arr);

//arr.pop()-->delete element from the end
// arr.pop();
// console.log(arr);

//arr.toSting()-->change all elements in string
// arr.toString();
// console.log(arr);

//arr.concat(arr1)-->combining two array into one
// let mhero=["spiderman","thor","hulk"];
// let dcHero=["superman","batman"];
// console.log(mhero.concat(dcHero));

//arr.unshift()-->add element at the start of the array
// arr.unshift(5);
// console.log(arr);

//arr.shift()-->remove element from the starting of the array
// arr.shift();
// console.log(arr);

//arr.slice(startIdx,endIdx)-->return a pieace of array not affect chane=ges in the original array
// arr.slice(0,3);
// console.log(arr.slice(0,3));//end Idx is excluded

//*** arr.splice-->only method to perfrom add,remove.replace
//provide changes in the original array
// arr.splice(startIdx,delCount,newElemets)
// arr.splice(2,2,101,102);//here from 2 index delete 2 elements from it and replece it with new elements
// console.log(arr);
//only addition of element
// arr.splice(2,0,102);//here 2 is the position where to add and delete count 0 and after that the new value to added in the array
// console.log(arr);
//only delete
// arr.splice(3,1);//3 idx elements to be deleted
// console.log(arr);
// only replace
// arr.splice(3,1,101);
// console.log(arr);
//if we pass only single value in splice method from  that index all value to be deleted
// arr.splice(3);
// console.log(arr);

// 7.Functions and Method in JS
//Functions are the block of code that performs a specific task,can be invoked whenever needed
// let newStr="abc".toUpperCase();
// console.log(newStr);

//Defining function and calling
// function changeName(abc)//abc is a parameter
// {
//     console.log(abc.toUpperCase());
// }
// //calling of function
// changeName("yash");

//***** Arrow functions -->it is a compact way of writing a function
//it is come with concise body syntax.It is a part of modern js.It is also used for small piece of code
// in arrow function we store the value of function in an variable
// function sum(a,b)
// {
//     return a+b;
// }
// console.log(sum(10,20));
// //Now in arrow function
// const nSum=(a,b)=>{
//     return a+b;
// }
// console.log(nSum(10,20));
// console.log(nSum);

//forEach loop in array
//It is only bind with the arrays
// The forEach loop is a method in JavaScript that allows you to iterate over an array and perform an operation on each element of the array. It takes a callback function as an argument and applies it to each element of the array.
//callBack function is a function passed as an argument for an another function.It is a HOF
// let arr=[10,20,30,40,50];
// let sum=0;
// arr.forEach((val)=>{
//     console.log(val);
//     sum+=val;
// });
// console.log(sum)
//If we want to work on every array element than we use forEach
//It takes 3 parameters 
// let stArr=["a","b","c","d","e"];
// stArr.forEach((val,idx,stArr)=>{
//     console.log(val.toUpperCase(),idx,stArr[idx]);
// })
//It is Higher order function as it takes function as an argument

// 8.Some HOF
//1 Map-->it is similar to forEach but the main difference is that in forEach some operation perform on the orginal array but in map a new array is created and performed operations are stored in it as well
//arr.map((val,idx,arr)=>{..})
// let arr=[10,20,30,40,50];
// let newArr=arr.map((val)=>{
//   return val*10;
// })
// console.log(arr);
// console.log(newArr);
//simply we can also it 
// let arr=[10,20,30,40,50];
// arr.map((val)=>{
//     console.log(val*8);
// })

//2 Filter-->creates a new array that give true for a conditon/filter element
// let arr=[10,20,30,40,50,60,70,80,90,100];
// let newArr=arr.filter((val)=>{
//     return val%3===0;
// })
// console.log(newArr);

//3 Reduce -->performs some operations and reduce the array into a single value.it returns a single value
// let arr=[10,20,30,40,50];
// const answer=arr.reduce((res,cur)=>{
//     return res+cur;
// })
// //here res it the previous val and cur is the next val to res
// //in start res=10,cur=20 -->res=res+cur=30
// //res=30,cur=30-->res=res+cur=60
// //res=60,cur=40-->res=res+cur=100
// //res=100,cur=50 and loops end after this
// //so res=res+cur=100+50=150 and return to the answer
// console.log(answer)