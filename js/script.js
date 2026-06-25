const sections = document.querySelectorAll(".section");
const navItems = document.querySelectorAll(".nav_item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        navItems.forEach((item) => {
          item.classList.remove("active");
        });

        const activeLink = document.querySelector(
          `.nav_item a[href="#${id}"]`
        );

        if (activeLink) {
          activeLink.parentElement.classList.add("active");
        }
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => observer.observe(section));