const randomnumber = Math.trunc (Math.random() * 10) + 1;
console.log(randomnumber);

const input = document.querySelector("input");
const button = document.querySelector("button");
const message = document.querySelector(".message");

button.addEventListener("click", checkvalue);

function checkvalue() {
    const inputvalue = input.value;

    if(inputvalue == randomnumber) {
        message.innerHTML = "Good Work";
    } 
    else if(inputvalue != randomnumber) {
        message.innerHTML = "Not Matched";
    }
};