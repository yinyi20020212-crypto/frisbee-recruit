const form = document.querySelector(".signup-form");
const note = document.querySelector(".form-note");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name")?.toString().trim() || "同学";

  note.textContent = `${name}，报名信息已收到！训练通知会尽快发给你。`;
  form.reset();
});
