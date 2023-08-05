


window.onscroll = () => {
    const sections = document.querySelectorAll("section");
var a = document.getElementById("about-section");
const navLi = document.querySelectorAll(".collapse ul li a");
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};