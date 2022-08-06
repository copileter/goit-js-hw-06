const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector("#ingredients");
const elements = ingredients.map(function el (ingredient) {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = `${ingredient}`;
  return itemEl;
});
ingredientsEl.append(...elements);
