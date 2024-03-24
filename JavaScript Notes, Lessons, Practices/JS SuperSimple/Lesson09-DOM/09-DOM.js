console.log(document.querySelector("button").innerHTML);

document.querySelector("button").innerHTML = "Changed";

console.log(document.querySelector(".js-button"));

const buttonElement = document.querySelector(".js-button");

console.log(buttonElement);

console.log(document.title);
document.title = "changed";

console.log(document.body);
console.log(typeof document.body);

console.log(document.body.innerHTML);
document.body.innerHTML = "<button>Good job!</button>";
