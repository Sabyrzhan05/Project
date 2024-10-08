document.getElementById("burger2").addEventListener("click", function () {
div.addEventListener("click", (event) => {
    event.preventDefault();
    calculus("/");
});

function calculateTrig(operation) {
  const angle = parseFloat(document.getElementById('angle').value);
  const radians = angle * (Math.PI / 180);
  let result;

  switch (operation) {
      case 'sin':
          result = Math.sin(radians);
          break;
      case 'cos':
          result = Math.cos(radians);
          break;
      case 'tan':
          result = Math.tan(radians);
          break;
      case 'cot':
          result = Math.tan(radians) !== 0 ? 1 / Math.tan(radians) : 'undefined';
          break;
  }

  document.getElementById('trigResult').textContent = result.toFixed(2);
}    document.querySelector(".navbar").classList.toggle("open")
})

const plus = document.getElementById("butplus");
const minus = document.getElementById("butminus");
const mult = document.getElementById("butmult");
const div = document.getElementById("butdiv");

let first = document.getElementById("first"); 
let second = document.getElementById("second");

const result = document.getElementById("result1"); 

let res = 0;

function calculus(mark) {
    const num1 = parseFloat(first.value) || 0;
    const num2 = parseFloat(second.value) || 0;
    switch (mark) {
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            res = num2 !== 0 ? num1 / num2 : "error";
            break;
    }
    result.textContent = res;
}

plus.addEventListener("click", (event) => {
    event.preventDefault();
    calculus("+");
});

minus.addEventListener("click", (event) => {
    event.preventDefault();
    calculus("-");
});

mult.addEventListener("click", (event) => {
    event.preventDefault();
    calculus("*");
});


