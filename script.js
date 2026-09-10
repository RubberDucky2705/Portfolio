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

// Cycle through images using side arrow buttons
function cycleImage(event, btnElem, direction) {
  event.stopPropagation(); // Stop lightbox from opening when clicking arrows
  
  const container = btnElem.closest('.card-image');
  const imgElem = container.querySelector('img');
  const indicator = container.querySelector('.media-indicator');
  
  const images = JSON.parse(container.getAttribute('data-images') || '[]');
  const captions = JSON.parse(container.getAttribute('data-captions') || '[]');
  if (images.length <= 1) return;

  let currentIndex = parseInt(container.getAttribute('data-current-index') || '0');
  currentIndex = (currentIndex + direction + images.length) % images.length;
  
  container.setAttribute('data-current-index', currentIndex);
  
  imgElem.style.opacity = '0';
  setTimeout(() => {
    imgElem.src = images[currentIndex];
    if (captions[currentIndex]) {
      imgElem.alt = captions[currentIndex];
    }
    imgElem.style.opacity = '1';
  }, 150);

  if (indicator) {
    indicator.textContent = `${currentIndex + 1}/${images.length}`;
  }
}

// Lightbox modal controls
function openLightbox(imgElem) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  
  lightbox.style.display = 'flex';
  lightboxImg.src = imgElem.src;
  lightboxCaption.textContent = imgElem.alt;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});
