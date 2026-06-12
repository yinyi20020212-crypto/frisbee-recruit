const form = document.querySelector(".signup-form");
const note = document.querySelector(".form-note");

form.addEventListener("submit", (event) => {
  const submitButton = form.querySelector("button[type='submit']");

  submitButton.disabled = true;
  submitButton.textContent = "正在提交...";
  note.textContent = "正在提交报名信息，请稍等。";
});
