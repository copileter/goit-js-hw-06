
const loginFormEl = document.querySelector(".login-form");
loginFormEl.addEventListener("submit", onSubmit);
function onSubmit(el) {
  el.preventDefault();
  const {
    elements: { email, password },
  } = el.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const formData = { email: email.value, password: password.value };
  console.log(formData);
  this.reset();
}
