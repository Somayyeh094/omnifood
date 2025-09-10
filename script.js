// display year in footer
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

//make hamberger menu work
const navEl = document.querySelector(".menu-mobile-nav");
navEl.addEventListener("click", function () {
  document.querySelector(".header").classList.toggle("nav-open");
});

//smooth scrolling behavior
document.body.addEventListener("click", (e) => {
  e.preventDefault();
  const link = e.target.closest("a:link");
  if (!link) return;
  const href = link.getAttribute("href");
  if (href === "#")
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  if (href !== "#" && href.startsWith("#")) {
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }
  if (link.classList.contains("main-nav-link"))
    document.querySelector(".header").classList.toggle("nav-open");
});

//sticky nav
const heroEl = document.querySelector(".section__hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(heroEl);
