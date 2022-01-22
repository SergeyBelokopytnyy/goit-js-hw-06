const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElement = event.currentTarget.elements;

  const mail = formElement.email.value;
  const password = formElement.password.value;

  if (mail !== "" && password !== "") {
    const formData = {
      mail,
      password,
    };
    console.log(formData);
  } else alert("Все поля должны быть заполнены!");

  event.currentTarget.reset();
}
