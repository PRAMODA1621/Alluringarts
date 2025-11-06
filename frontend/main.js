const API = 'http://localhost:4000/api'; // later change this to Render link

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
