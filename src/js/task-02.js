const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("ul#ingredients");
const newItemList = ingredients.map((element) => {
  const newItem = document.createElement("li");
  newItem.textContent = element;
  newItem.classList.add("item");

  return newItem;
});
ingredientsList.append(...newItemList);
