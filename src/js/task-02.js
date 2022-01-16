const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("ul#ingredients");

ingredients.forEach((element) => {
  const newItem = document.createElement("li");
  newItem.textContent = element;
  newItem.classList.add("item");
  ingredientsList.append(newItem);
});
