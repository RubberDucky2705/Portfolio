// Simple contact form handler (no backend needed for GitHub Pages)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! (Connect this to Formspree or EmailJS for real delivery)");
});
