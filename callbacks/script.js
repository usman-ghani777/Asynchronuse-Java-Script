// callback is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows for asynchronous programming and helps in handling tasks that take time to complete, such as API calls or reading files.
// Example 1
function hod(name,callback) {
    callback(name);
}
hod("John", function(name) {
    console.log("Hello " + name);
});



//Example 2
function calculate(a, b, callback){
    callback(a,b);
}
function sum(a,b){
    console.log(a + b);
}
function multiply(a,b){
    console.log(a * b);
}
function subtract(a,b){
    console.log(a - b);
}
let result = calculate(4,5,multiply);
console.log(result); // Output: 20




// Example 3
console.log("Fetching Data...");
function fetchData(ProcessData) {
    setTimeout(()=>{
        console.log("Data Fetched");
        ProcessData();
    },3000);
}
function ProcessData(){
    console.log("Processing Data...");
}
fetchData(ProcessData);
console.log("some other code is running...");


// Example 4

function getData(data, callback) {
    setTimeout(()=>{
        console.log("Data Fetched");
        callback(data);
    },3000);
}

console.log("Fetching First Data...");
getData('First Data', function(data){
    console.log("Processing First Data: " + data);
    console.log("Fetching Second Data...");
    getData('Second Data', function(data){
        console.log("Processing Second Data: " + data);

    getData('Third Data', function(data){
        console.log("Processing Third Data: " + data);  
    });
});
});