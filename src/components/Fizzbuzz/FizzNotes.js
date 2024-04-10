console.log("for numbers 1 to 100 run them through fizzbuzz");
// for numbers 1 to 100 run them through fizzbuzz
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("Fizz Buzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}


console.log("create an array of numbers and loop through array fizzbuzz");
//create an array of numbers and loop through array fizzbuzz
let arr = ['1', '2', '3', '4', '5', '6'];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);



for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0 && arr[i] % 3 === 0) {
        console.log("Fizz Buzz");
    }
    else if (arr[i] % 3 === 0) {
        console.log("Fizz");
    }
    else if (arr[i] % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(arr[i]);
    }
}


console.log("create an array and loop backwards through array fizzbuzz");
//create an array and loop backwards through array fizzbuzz
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);

for (let i = arr.length - 1; i >=0; i--) {
    console.log;
    if (arr[i] % 5 === 0 && arr[i] % 3 === 0) {
        console.log("Fizz Buzz");
    }
    else if (arr[i] % 3 === 0) {
        console.log("Fizz");
    }
    else if (arr[i] % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(arr[i]);
    }
}


for (let i = 1; i <= 100; i++) {

    let output ="";

    if (i % 3 == 0) { output += "Fizz"; }
    if (i % 5 == 0) { output += "Buzz"; }

    if (output == "") { output = i; }

    console.log(output);

const newP = document.createElement("p");
newP.textContent = output += "";
document.getElementById("fizzDiv").appendChild(newP);

const newP2 = document.createElement("p");
newP2.textContent = "";
document.getElementById("buzzDiv").appendChild(newP2);

const newP3 = document.createElement("p");
newP3.textContent = "";
document.getElementById("fizzbuzzDiv").appendChild(newP3);

}



function Submit() {
    document.getElementById("submit").value++
}