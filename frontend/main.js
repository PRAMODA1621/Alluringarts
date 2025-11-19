/* FULL main.js — Preloader, Parallax, Lightbox, ScrollTop, Animations */

/* PRELOADER */
window.addEventListener("load", () => {
  const pre = document.getElementById("preloader");
  setTimeout(() => pre.classList.add("hidden"), 400);
});

/* MOBILE MENU */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* PARALLAX */
const heroBg = document.getElementById("heroBg");
window.addEventListener("scroll", () => {
  heroBg.style.transform = `translateY(${window.scrollY * 0.05}px)`;
});

/* LIGHTBOX */
const tiles = document.querySelectorAll(".tile img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCap = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

tiles.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxCap.textContent = img.alt;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

function closeLight(){
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
}
lightboxClose.addEventListener("click", closeLight);
lightbox.addEventListener("click", e => { if(e.target===lightbox) closeLight(); });
document.addEventListener("keydown", e => { if(e.key==="Escape") closeLight(); });

/* SCROLL TOP */
const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({top:0, behavior:"smooth"});
});

/* TOAST */
const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  toast.style.display="block";
  setTimeout(()=> toast.style.display="none", 2600);
  form.reset();
});
