function appearBox() {
  const events = document.querySelectorAll(".event");
  const projects = document.querySelectorAll(".project");
  const scrollElm = document.scrollingElement;

  const startAppearPosition = element => {
    return element.offsetTop - window.outerHeight * 0.8;
  };

  const scrollStart = elements => {
    elements.forEach(element => {
      if (scrollElm.scrollTop > startAppearPosition(element)) {
        element.classList.add("show");
      } else {
        element.classList.remove("show");
      }
    });
  };

  document.addEventListener("scroll", () => {
    scrollStart(events);
    scrollStart(projects);
  });
}

document.addEventListener("DOMContentLoaded", appearBox);
