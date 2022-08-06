'use strict'

const categoriesEl = document.querySelector('#categories')
console.log("Number of categories: ", categoriesEl.children.length);


const itemsEl = categoriesEl.querySelectorAll(".item");

itemsEl.forEach(function (elements) {
  console.log("Category:", elements.firstElementChild.textContent);
  console.log("Elements:", elements.lastElementChild.children.length);
});