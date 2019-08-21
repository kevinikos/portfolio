function scrollToSection() {
  const wrapperMenu = document.querySelector(".wrapper-menu");
  const navbar = document.querySelector(".navbar");
  const sidebar = document.querySelector(".sidenav");
  const scrollUpBtn = document.querySelector(".scroll-up");
  const introSection = document.querySelector(".introduction");
  const aboutMeSection = document.querySelector(".about-me");
  const skillsSection = document.querySelector(".skills");
  const projectsSection = document.querySelector(".portfolio");
  const footer = document.querySelector("footer");
  // navbar/sidebar menu list items
  const startBtns = document.querySelectorAll(".start-btn");
  const aboutMeBtns = document.querySelectorAll(".about-me-btn");
  const skillsBtns = document.querySelectorAll(".skills-btn");
  const projectsBtns = document.querySelectorAll(".projects-btn");
  const scrollElm = document.scrollingElement;

  const scrollStart = () => {
    sidebar.classList.remove("show");
    wrapperMenu.classList.remove("open");
    if (scrollElm.scrollTop > introSection.offsetHeight * 0.95) {
      navbar.classList.add("active");
      scrollUpBtn.classList.add("show");
    } else {
      navbar.classList.remove("active");
      scrollUpBtn.classList.remove("show");
    }

    scrollUpBtn.style.color = "rgba(0, 0, 0, 0.8)";
    if (
      scrollUpBtn.getBoundingClientRect().top + window.scrollY >
        footer.getBoundingClientRect().top + window.scrollY &&
      window.innerWidth < 1600
    ) {
      scrollUpBtn.style.color = "rgba(255, 255, 255, 0.9)";
    }
  };

  const scrollToSection = section => {
    window.scrollTo({
      top: section - navbar.offsetHeight,
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

document.addEventListener("DOMContentLoaded", scrollToSection);
