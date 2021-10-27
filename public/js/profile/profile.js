window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#profile-form");
  const inputAvatar = document.querySelector("#input-avatar");

  form.addEventListener("click", () => {
    inputAvatar.click();
  });

  inputAvatar.addEventListener("change", () => {
    form.submit();
  });
});
