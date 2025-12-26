// transitions.js - Page transition effects

class PageTransitions {
  constructor() {
    this.init();
  }
  
  init() {
    // Add fade-in animation to body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 100);
    });
    
    // Handle internal link clicks for smooth transitions
    this.setupLinkTransitions();
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      this.fadeOut();
    });
  }
  
  setupLinkTransitions() {
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
      // Skip external links, mailto, tel, and anchors
      if (link.target === '_blank' || 
          link.href.includes('mailto:') || 
          link.href.includes('tel:') ||
          link.href.includes('#')) {
        return;
      }
      
      // Skip if href is empty or javascript
      if (!link.href || link.href.includes('javascript:')) {
        return;
      }
      
      // Check if link is internal
      const isInternal = link.hostname === window.location.hostname || 
                         !link.hostname;
      
      if (isInternal) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = link.getAttribute('href');
          
          // Don't transition if clicking the same page
          if (href === window.location.pathname.split('/').pop()) {
            return;
          }
          
          // Fade out and navigate
          this.fadeOut(() => {
            window.location.href = href;
          });
        });
      }
    });
  }
  
  fadeOut(callback) {
    document.body.style.opacity = '0';
    
    setTimeout(() => {
      if (callback) callback();
    }, 500);
  }
  
  fadeIn() {
    document.body.style.opacity = '1';
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PageTransitions();
});