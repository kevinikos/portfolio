function navigator() {
  const sidebar = document.querySelector(".sidebar");
  const aboutMe = document.querySelector(".about-me");
  const skills = document.querySelector(".skills");
  const projects = document.querySelector(".portfolio");
  const aboutMeButtons = document.querySelectorAll(".about-me-btn");
  const skillsButtons = document.querySelectorAll(".skills-btn");
  const projectsButtons = document.querySelectorAll(".projects-btn");

  aboutMeButtons.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      window.scrollTo({
        top: aboutMe.offsetTop,
        behavior: "smooth"
      });
      sidebar.classList.remove("show");
    });
  });

  skillsButtons.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      window.scrollTo({
        top: skills.offsetTop,
        behavior: "smooth"
      });
      sidebar.classList.remove("show");
    });
  });

  projectsButtons.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      window.scrollTo({
        top: projects.offsetTop,
        behavior: "smooth"
      });
      sidebar.classList.remove("show");
    });
  });
}

document.addEventListener("DOMContentLoaded", navigator);
