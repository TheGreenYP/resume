(function () {
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
  var b = document.querySelector(".burger"),
    n = document.getElementById("nav");
  function set(o) {
    n.classList.toggle("open", o);
    b.setAttribute("aria-expanded", o);
    b.setAttribute("aria-label", o ? "Закрыть меню" : "Открыть меню");
  }
  b.addEventListener("click", function () {
    set(!n.classList.contains("open"));
  });
  n.addEventListener("click", function (e) {
    if (e.target.closest("a")) set(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") set(false);
  });
  var els = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  } else {
    els.forEach(function (el) {
      el.classList.add("in");
    });
  }
})();
