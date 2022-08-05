function y() {
  alert("Hooray!");
}
let x = document.querySelector("#special-button");
x.addEventListener("click", y);
function showPassword(event) {
    event.preventDefault();
    let passwordInput = document.querySelector("#password-input");
    alert(`Your super secret password is ${passwordInput.value}`);
  }
  let password = document.querySelector("#password-form");
  password.addEventListener = ("submit", showPassword);
  function allMail() {
    let email = document.querySelector("#email-input");
    let userName = document.querySelector("#username-input");
    alert(`Your email is ${email.value}`);
    alert(`Your userName is ${userName.value}`);
  }
  let mail = document.querySelector("#signup-form");
  mail.addEventListener = ("submit", allMail);