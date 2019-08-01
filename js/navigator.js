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

  const scrollStart = () => {
    if (document.documentElement.scrollTop > 500) {
      sidebar.classList.remove("show");
      wrapperMenu.classList.remove("open");
      scrollUp.classList.add("show");
    } else {
      scrollUp.classList.remove("show");
    }
  };

  const scrollToSection = section => {
    window.scrollTo({
      top: section,
      behavior: "smooth"
    });
  };

  // Safari
  document.addEventListener("touchmove", scrollStart);

  // Other browsers
  document.addEventListener("scroll", scrollStart);

  scrollUp.addEventListener("click", e => {
    e.preventDefault();
    scrollToSection(0);
  });

  aboutMeButtons.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      scrollToSection(aboutMe.offsetTop);
    });
  });

  skillsButtons.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      scrollToSection(skills.offsetTop);
    });
  });

  projectsButtons.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      scrollToSection(projects.offsetTop);
    });
  });
}

document.addEventListener("DOMContentLoaded", navigator);
