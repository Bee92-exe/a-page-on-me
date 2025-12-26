// main.js - Complete file with all features

// Typing Effect Variables
const textArray = [
  "Software Engineer",
  "Web Developer", 
  "Poet & Writer",
  "Traveller | Explorer | Foodie"
];

let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

// Typing Functions
function typeText() {
  if (charIndex < textArray[index].length) {
    typingElement.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 1500);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(typeText, 500);
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  
  // ============================================
  // 1. TYPING EFFECT
  // ============================================
  if (typingElement) {
    setTimeout(typeText, 1000); // Start typing after 1 second
  }
  
  // ============================================
  // 2. PHOTO MARQUEE HOVER EFFECT
  // ============================================
  const photoMarquee = document.querySelector('.photo-marquee');
  if (photoMarquee) {
    photoMarquee.addEventListener('mouseenter', function() {
      const tracks = this.querySelectorAll('.photo-track');
      tracks.forEach(track => {
        track.style.animationPlayState = 'paused';
        track.style.filter = 'brightness(70%)';
      });
    });
    
    photoMarquee.addEventListener('mouseleave', function() {
      const tracks = this.querySelectorAll('.photo-track');
      tracks.forEach(track => {
        track.style.animationPlayState = 'running';
        track.style.filter = 'brightness(90%)';
      });
    });
  }
  
  // ============================================
  // 3. SCROLL TO TOP BUTTON
  // ============================================
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
  scrollToTopBtn.className = 'scroll-to-top';
  scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--accent);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    box-shadow: 0 4px 15px rgba(122, 31, 31, 0.3);
  `;
  
  document.body.appendChild(scrollToTopBtn);
  
  // Show/hide scroll to top button
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = 'flex';
      setTimeout(() => {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.transform = 'translateY(0)';
      }, 10);
    } else {
      scrollToTopBtn.style.opacity = '0';
      scrollToTopBtn.style.transform = 'translateY(10px)';
      setTimeout(() => {
        scrollToTopBtn.style.display = 'none';
      }, 300);
    }
  });
  
  // Scroll to top functionality
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // ============================================
  // 4. SMOOTH LINK HOVER EFFECTS
  // ============================================
  const allLinks = document.querySelectorAll('a');
  allLinks.forEach(link => {
    // Skip if link is inside a social-circle (already has hover)
    if (!link.closest('.social-circle')) {
      link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.transition = 'transform 0.2s ease';
      });
      
      link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    }
  });
  
  // ============================================
  // 5. IMAGE LOADING ANIMATIONS
  // ============================================
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // If image is already loaded
    if (img.complete) {
      img.style.opacity = '1';
    } else {
      // Add load event listener
      img.addEventListener('load', function() {
        this.style.opacity = '1';
      });
      
      // Set initial state only if not in photo marquee
      if (!img.closest('.photo-track')) {
        img.style.opacity = '0.8';
        img.style.transition = 'opacity 0.5s ease';
      }
    }
  });
  
  // ============================================
  // 6. UPDATE FOOTER YEAR AUTOMATICALLY
  // ============================================
  const footerParagraph = document.querySelector('footer p');
  if (footerParagraph && footerParagraph.textContent.includes('2025')) {
    const currentYear = new Date().getFullYear();
    footerParagraph.textContent = footerParagraph.textContent.replace('2025', currentYear);
  }
  
  // ============================================
  // 7. ADD ACTIVE CLASS TO CURRENT PAGE IN NAVIGATION
  // ============================================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    // Remove active class from all
    link.classList.remove('active');
    
    // Add active class to current page
    if (linkHref === currentPage) {
      link.classList.add('active');
    }
    // Special case for index.html
    if (currentPage === '' && linkHref === 'index.html') {
      link.classList.add('active');
    }
  });
  
  // ============================================
  // 8. FORM INPUT ANIMATIONS (for contact page)
  // ============================================
  const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
  if (formInputs.length > 0) {
    formInputs.forEach(input => {
      // Set label position based on existing value
      if (input.value) {
        const label = input.previousElementSibling;
        if (label && label.tagName === 'LABEL') {
          label.style.top = '-10px';
          label.style.fontSize = '0.9rem';
          label.style.color = 'var(--accent)';
        }
      }
      
      input.addEventListener('focus', function() {
        const label = this.previousElementSibling;
        if (label && label.tagName === 'LABEL') {
          label.style.top = '-10px';
          label.style.fontSize = '0.9rem';
          label.style.color = 'var(--accent)';
        }
      });
      
      input.addEventListener('blur', function() {
        if (!this.value) {
          const label = this.previousElementSibling;
          if (label && label.tagName === 'LABEL') {
            label.style.top = '15px';
            label.style.fontSize = '1rem';
            label.style.color = 'var(--muted)';
          }
        }
      });
    });
  }
  
  // ============================================
  // 9. CARD HOVER EFFECTS ENHANCEMENT
  // ============================================
  const cards = document.querySelectorAll('.world-card, .stack-category, .project-card, .destination-card, .tip-card, .lang-card, .book-card, .message-card, .info-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 10px 30px rgba(122, 31, 31, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });
  
  // ============================================
  // 10. PAGE LOAD ANIMATION
  // ============================================
  // Fade in the entire page
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
  

  const poetryDropdown = document.querySelector('.dropdown');
  if (poetryDropdown) {
    const dropdownMenu = poetryDropdown.querySelector('.dropdown-menu');
    const dropdownLink = poetryDropdown.querySelector('a');
    
    poetryDropdown.addEventListener('mouseenter', function() {
      dropdownMenu.style.display = 'block';
      dropdownMenu.style.animation = 'fadeIn 0.3s ease';
    });
    
    poetryDropdown.addEventListener('mouseleave', function() {
      dropdownMenu.style.display = 'none';
    });
    
    // For mobile touch devices
    dropdownLink.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
      }
    });
  }
});