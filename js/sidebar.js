function sidebar() {
  const wrapperMenu = document.querySelector(".wrapper-menu");
  const sidebar = document.querySelector(".sidenav");

  wrapperMenu.addEventListener("click", function() {
    wrapperMenu.classList.toggle("open");
    sidebar.classList.toggle("show");
  });
}

document.addEventListener("DOMContentLoaded", sidebar);
