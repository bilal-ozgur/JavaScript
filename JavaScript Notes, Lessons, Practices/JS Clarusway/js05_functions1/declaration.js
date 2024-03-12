// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC DECLARATION **");

//* EXAMPLE-01:
//*****************************************/

//! Declaration (Fonksiyonun tanimlanmasi)
function printHello() {
  // alert("Hello world")
  console.log("Hello world");
}

printHello(); //! invoke, call
printHello(); //! invoke, call
printHello(); //! invoke, call

//* EXAMPLE-02:
//*****************************************/

//! Parametre listesi (argüman listesi)
function printParametr(message, name = "world") {
  console.log(message, name);
}
printParametr("Hello", "FS15");
printParametr("Salut", "FS16");
printParametr("Hola", "FS17");
printParametr(12.4, true);

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki name
//! parametresi icin default değer olarak 'Hello' atanmistir.

printParametr("Hallo");
printParametr("Ehlen");
printParametr();

//* Example 03:
//******************************************/
console.log(new Date()); //? Sistem tarihi ve saatini verir.

function calculate(name, yob) {
  const age = new Date().getFullYear() - yob;
  // console.log(`${name} is ${age} years old`)
  return age;
}

console.log(calculate("Mike", 1990));
const DanielAge = calculate("Tom", 1890);
console.log("Daniel's Age:", DanielAge);

//* Example 04:
//******************************************/

function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

function addShort(num1, num2) {
  return (num1 + num2) / (num1 * num2);
}

const result1 = add(3, 5);
const result2 = add(5, 9);
const result3 = addShort(5, 9);

console.log(result1, result2);
console.log(result3);

//* Example 05:
//*******************************************/

// Write the code with functions that calculates whether a number entered in the console is odd or even and returns the result to the main program.

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
}
//? alternative
function isEvenOrOdd(num) {
  let result;
  if (num % 2 === 0) {
    result = "EVEN";
  } else {
    result = "ODD";
  }
  return result;
}

//? Second alternative
function isEvenOrOdd(num) {
  return num % 2 === 0 ? "EVEN" : "ODD";
}

const num = prompt("Please enter a number:");
console.log(`${num} is ${isEvenOrOdd(num)}`);
