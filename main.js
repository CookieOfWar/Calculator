const calc = document.querySelector("#calc");
const result = document.querySelector("#result");

calc.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = eval(
    `${e.target.first_op.value} ${e.target.op.value} ${e.target.second_op.value}`
  );
});
