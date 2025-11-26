// document.getElementById("count-el").innerText = 5;

// let count = 0;

// console.log(count);

// let, const & var
// let myAge = 17;

// console.log(myAge); 

// function test () {
//     let nama = "Budi";
//     console.log(nama);
// }

// test();

let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;
function increment() {
    count = count + 1;
    countEl.innerText = count;
    console.log(count);
}

// let count = 0;

// function increment() {
//     count = count + 1;
// }

// increment();
// increment();
// increment();

// console.log(count); // This will log the updated count value

// function decrement() {
//     count = count - 1;
//     countEl.innerText = count;
//     console.log(count);
// }

function decrement() {
    count -= 1;
    countEl.innerText = count;
    console.log(count);
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    console.log(count);
}
let saveEl = document.getElementById("save-el");
console.log(saveEl);    