let counterValue = 0;
const btnDecrement = document.querySelector("[data-action='decrement']");
const btnIncrement = document.querySelector("[data-action='increment']");

const counter = document.querySelector("#value");

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  return (counter.textContent = counterValue);
});
btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  return (counter.textContent = counterValue);
});
