// Simple contact form handler (no backend needed for GitHub Pages)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  alert("Message sent! (Connect this to Formspree or EmailJS for real delivery)");
});
// AJAX Formspree submission without page reload
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const data = new FormData(contactForm);
    const response = await fetch(contactForm.action, {
      method: contactForm.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      alert("Thank you! Your message has been sent successfully.");
      contactForm.reset();
    } else {
      alert("Oops! There was a problem submitting your form. Please verify your Formspree ID.");
    }
  });
}
