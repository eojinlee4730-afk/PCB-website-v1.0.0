const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector("#primary-nav");

navToggle?.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

primaryNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement && primaryNav.classList.contains("is-open")) {
    primaryNav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".product-image").forEach((image) => {
  image.addEventListener("error", () => {
    image.hidden = true;
  });
});
