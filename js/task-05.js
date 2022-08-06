const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", onInputEl);
function onInputEl(name) {
  outputEl.textContent = name.currentTarget.value;
  if (name.currentTarget.value === "") {
    outputEl.textContent = "Anonymous";
  }
}
