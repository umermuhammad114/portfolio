const header = document.querySelector("header");
const menuButton = document.getElementById("nav-icon");
const navLinks = document.querySelector(".nav-links");
const navLinkItems = document.querySelectorAll(".nav-links-item");

let showMenu = false;

/* Toggle mobile menu */
menuButton.addEventListener("click", () => {
  showMenu = !showMenu;

  navLinks.classList.toggle("show-nav-links", showMenu);
  updateHeader();
  changeIcon();
});

/* Close menu when clicking a nav link */
navLinkItems.forEach(link => {
  link.addEventListener("click", () => {
    showMenu = false;
    navLinks.classList.remove("show-nav-links");
    updateHeader();
    changeIcon();
  });
});

/* Header background on scroll */
window.addEventListener("scroll", updateHeader);

function updateHeader() {
  if (window.scrollY > 10 || showMenu) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

/* Toggle hamburger / close icon */
function changeIcon() {
  menuButton.src = showMenu
    ? "assets/x.svg"
    : "assets/hamburger.svg";
}

const tabBtns = document.querySelectorAll('.tab-btn');
const experiencePanels = document.querySelectorAll('.experience-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    experiencePanels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});
