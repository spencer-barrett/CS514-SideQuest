const form = document.querySelector<HTMLFormElement>("#interest-form");
const button = form?.querySelector<HTMLButtonElement>("button[type='submit']");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  form.reset();
  if (button) {
    button.textContent = "You're in!";
    button.disabled = true;
  }

  // console.log("Submitted!");
});
