const inputSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputSizeControl.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  text.style.fontSize = `${event.target.value}px`;
}
