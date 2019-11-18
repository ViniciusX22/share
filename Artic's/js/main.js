let active = false;
function toggleBurguer() {
  if (!active) {
    document.querySelector(".navbar-hidden").classList.add("active");
    document.querySelector("html").classList.add("is-clipped");
  } else {
    document.querySelector(".navbar-hidden").classList.remove("active");
    document.querySelector("html").classList.remove("is-clipped");
  }
  active = !active;
}
