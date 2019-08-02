function navigator() {
  const wrapperMenu = document.querySelector(".wrapper-menu");
  const sidebar = document.querySelector(".sidebar");
  const scrollUpButton = document.querySelector(".scroll-up");
  const aboutMeSection = document.querySelector(".about-me");
  const skillsSection = document.querySelector(".skills");
  const projectsSection = document.querySelector(".portfolio");
  // Header/sidebar menu list items
  const startBtns = document.querySelectorAll(".start-btn");
  const aboutMeBtns = document.querySelectorAll(".about-me-btn");
  const skillsBtns = document.querySelectorAll(".skills-btn");
  const projectsBtns = document.querySelectorAll(".projects-btn");
  const scrollElm = document.scrollingElement;

  const scrollStart = () => {
    if (scrollElm.scrollTop != 0) {
      sidebar.classList.remove("show");
      wrapperMenu.classList.remove("open");
      scrollUpButton.classList.add("show");
    } else {
      scrollUpButton.classList.remove("show");
    }
  };

  const scrollToSection = section => {
    window.scrollTo({
      top: section,
      behavior: "smooth"
    });
  };

  document.addEventListener("scroll", scrollStart);

  startBtns.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      scrollToSection(0);
    });
  });

  aboutMeBtns.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      scrollToSection(aboutMeSection.offsetTop);
    });
  });

  skillsBtns.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      scrollToSection(skillsSection.offsetTop);
    });
  });

  projectsBtns.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      scrollToSection(projectsSection.offsetTop);
    });
  });
}

document.addEventListener("DOMContentLoaded", navigator);
