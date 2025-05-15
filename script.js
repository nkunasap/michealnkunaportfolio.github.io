// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (document.querySelector('nav').classList.contains('active')) {
                document.querySelector('nav').classList.remove('active');
            }
        }
    });
});
// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For this example, we'll just show an alert
    alert(`Thank you for your message, ${name}! I'll get back to you soon at ${email}.`);
 // Reset the form
 this.reset();
});

// Intersection Observer for scroll animations
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});
// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle (if you add a mobile menu button)
const mobileMenuButton = document.createElement('button');
mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
mobileMenuButton.classList.add('mobile-menu-button');
mobileMenuButton.addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

document.querySelector('header .container').appendChild(mobileMenuButton);

