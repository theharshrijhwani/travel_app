const signInButtton = document.getElementById("sign-in");
const signUpButtton = document.getElementById("sign-up");

const signInForm = document.getElementById("sign-in-form");
const signUpForm = document.getElementById("sign-up-form");

signInButtton.addEventListener("click", () => {
  signInButtton.classList.add("link-current");
  signUpForm.classList.add("form-hide");
  signInForm.classList.remove("form-hide");
});

signUpButtton.addEventListener("click", () => {
  signInButtton.classList.remove("link-current");
  signUpButtton.classList.add("link-current");
  signInForm.classList.add("form-hide");
  signUpForm.classList.remove("form-hide");
});
