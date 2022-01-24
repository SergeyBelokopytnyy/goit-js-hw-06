function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const btnChangeColor = bodyEl.querySelector("button.change-color");
const valueChangeColor = bodyEl.querySelector("span.color");

function onChangeColorBody() {
  const color = (bodyEl.style.backgroundColor = getRandomHexColor());
  valueChangeColor.textContent = color;
}
btnChangeColor.addEventListener("click", onChangeColorBody);
