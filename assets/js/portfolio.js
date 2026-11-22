(function () {
  var targets = document.querySelectorAll(".section-heading, .section-body, .skill-card, .project-card, .journey-copy, .contact-section");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  targets.forEach(function (target) {
    target.setAttribute("data-reveal", "");
  });

  var observer = new IntersectionObserver(function (entries, currentObserver) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(function (target) {
    observer.observe(target);
  });
}());
