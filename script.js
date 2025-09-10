// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Newsletter Form Handler
document.getElementById('newsletter-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  alert(`Thanks for subscribing, ${email}!`);
  this.reset();
});


