let menuContainer;

window.addEventListener("click", () => {
  menuContainer.innerHTML = "";
});

window.addEventListener("DOMContentLoaded", () => {
  menuContainer = document.querySelector("#search-menu-container");
  let searchInput = document.querySelector("#seach-input");
  let ref;

  menuContainer.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  searchInput.addEventListener("input", (e) => {
    const value = e.target.value;

    if (ref) clearTimeout(ref);

    ref = setTimeout(() => {
      axios
        .get("/users?search=" + value)
        .then((response) => {
          menuContainer.innerHTML = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    }, 1200);
  });
});
