const API = 'https://alluringarts.onrender.com'; // your backend link

document.getElementById('contactForm').addEventListener('submit', async e => {
  e.preventDefault();
  const name = document.getElementById('cname').value;
  const email = document.getElementById('cemail').value;
  const message = document.getElementById('cmessage').value;

  const res = await fetch(`${API}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  });

  const data = await res.json();
  alert(data.success ? "📩 Message sent successfully!" : "❌ Failed to send message");
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 80) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

const fadeElems = document.querySelectorAll('.fade-section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

fadeElems.forEach(el => observer.observe(el));
