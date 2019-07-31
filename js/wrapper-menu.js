function main() {
  const wrapperMenu = document.querySelector(".wrapper-menu");

  wrapperMenu.addEventListener("click", function() {
    wrapperMenu.classList.toggle("open");
  });
}

document.addEventListener("DOMContentLoaded", main);
