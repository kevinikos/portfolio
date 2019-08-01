function navigator() {
  const wrapperMenu = document.querySelector(".wrapper-menu");
  const sidebar = document.querySelector(".sidebar");
  const aboutMe = document.querySelector(".about-me");
  const skills = document.querySelector(".skills");
  const projects = document.querySelector(".portfolio");
  const aboutMeButtons = document.querySelectorAll(".about-me-btn");
  const skillsButtons = document.querySelectorAll(".skills-btn");
  const projectsButtons = document.querySelectorAll(".projects-btn");
  const scrollUp = document.querySelector(".scroll-up");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 500) {
      sidebar.classList.remove("show");
      wrapperMenu.classList.remove("open");
      scrollUp.classList.add("show");
    } else {
      scrollUp.classList.remove("show");
    }
  });

  scrollUp.addEventListener("click", e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  aboutMeButtons.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      window.scrollTo({
        top: aboutMe.offsetTop,
        behavior: "smooth"
      });
    });
  });

  skillsButtons.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      window.scrollTo({
        top: skills.offsetTop,
        behavior: "smooth"
      });
    });
  });

  projectsButtons.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      window.scrollTo({
        top: projects.offsetTop,
        behavior: "smooth"
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", navigator);
