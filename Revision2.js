//******Part 2 Advance JavaScript Concepts******


//Callbacks
// function sum(a,b)
// {
//     console.log(a+b);
// }
// function calculator(a,b,sumCalc){
//     sumCalc(a,b);
// }
// calculator(10,20,sum);



// // callback hell
// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data id:",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// };
// // Now if we want the data of 1 2 3 4 id
// // the code looks like
// getData(1,()=>{
//     console.log("getting data 2..");
//     getData(2,()=>{
//         console.log("getting data 3...");
//         getData(3,()=>{
//             console.log("getting data 4..");
//             getData(4);
//         })
//     });
// })

//promises
// let promise=new Promise((resolve,reject)=>{
//     console.log("hello promise");
// })


// function getData(dataId,getNextData)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data:",dataId);
//             resolve("Success"); 
//             // reject("network error");
//             if(getNextData)
//                 {
//                     getNextData();
//                 }
//         },5000);
//     })
// }

// // let finalAns=getData(123);
// // console.log(finalAns);


// let promise=getData(123);
// promise.then((res)=>{
//     console.log("hey promise id resolved",res);
// });
// promise.catch((err)=>{
//     console.log("hey there is some error:",err);
// });
// setTimeout(()=>{
//     console.log(promise);
// },6000);


//Promise chaining

//Async Await
// async return promises
// awaits pauses the surrounding async function while the promise id fullfilled
// function api(dataId)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("dataID:",dataId);
//         if(dataId%2==0)
//         resolve(200);
//         else
//         reject(404);
//         },2000);
//     });
// }
// //now our api function is an async call so we use await in front of it await is always used with the async
// async function getData()
// {
//     await api(200);    
//     await api(400);
// } 

 // getData();