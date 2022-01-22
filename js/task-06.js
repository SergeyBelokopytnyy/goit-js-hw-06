const inputEl = document.querySelector("#validation-input");
const dataLength = Number(inputEl.dataset.length);

const inputBlur = inputEl.addEventListener("blur", characterCountCheck);

function characterCountCheck(event) {
  const lengthInput = event.target.value.split("").length;
  inputEl.classList.add("invalid");
  if (lengthInput === dataLength) {
    inputEl.classList.replace("invalid", "valid");
  } else inputEl.classList.replace("valid", "invalid");
}
