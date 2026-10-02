    // let p1 = new Promise((resolve, reject) => {
    //     // resolve("Promise Resolved");
    //     reject("Promise Rejected");

    // });
    // p1.then((response) => {
    //     console.log("This is in then " + response  );
    // }).catch((response) => {
    //     console.log("This is in catch " + response);
    // });


// let promise = new Promise((resolve, reject) =>{

//     setTimeout(() => {
//         resolve("Promise has been resolved");
//     }, 2000)
// });

// promise.then((response) => {
//     console.log("This is in then " + response);
// }).catch((response) => {
//     console.log("This is in catch " + response);
// });


function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
}

let result = fetchData();

result.then((response) => {
    console.log("This is in then" + response);
}).catch((response) => {
    console.log("This is in catch " + response);
})


console.log("This is after the promise");