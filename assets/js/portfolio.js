(function () {
  "use strict";

  var cards = document.querySelectorAll(".roadmap-card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      var descriptionId = card.getAttribute("aria-controls");
      var description = document.getElementById(descriptionId);
      var isExpanded = card.getAttribute("aria-expanded") === "true";

      card.setAttribute("aria-expanded", String(!isExpanded));
      description.hidden = isExpanded;
    });
  });

  document.querySelectorAll(".experience-card").forEach(function (card) {
    card.addEventListener("click", function () {
      var descriptionId = card.getAttribute("aria-controls");
      var description = document.getElementById(descriptionId);
      var isExpanded = card.getAttribute("aria-expanded") === "true";

      card.setAttribute("aria-expanded", String(!isExpanded));
      description.hidden = isExpanded;
    });
  });

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".roadmap-item");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach(function (item) {
      item.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(function (item) {
    observer.observe(item);
  });
})();
