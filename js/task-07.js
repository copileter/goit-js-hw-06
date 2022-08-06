const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
inputEl.addEventListener("input", onInputEl);
function onInputEl(px) {
  spanEl.style.fontSize = px.target.value + "px";
}
