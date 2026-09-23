// sync code
// console.log('task 1');
// console.log('task 2');
// for(let i = 0; i < 10000; i++) {
//     console.log('task,i', i);
// }
// console.log('task 3');
// console.log('task 4');
// console.log('task 5');

// async code

// console.log('task 1');

// setTimeout(() => {
//     console.log('async task 2');
// }, 4000);
// console.log('task 3');


async function getData(){
    let result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log('result', await result.json());
}
getData();
console.log('hello world');
console.log('hello world');