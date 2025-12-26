// contact.js - Form handling for contact page

document.addEventListener('DOMContentLoaded', function() {
  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  const commentForm = document.getElementById('commentForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
      
      // In a real application, you would send this data to a server
      // For now, we'll simulate a successful submission
      
      // Show success message
      showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
      
      // Reset form
      contactForm.reset();
      
      // Reset labels position
      const labels = contactForm.querySelectorAll('label');
      labels.forEach(label => {
        label.style.top = '15px';
        label.style.fontSize = '1rem';
        label.style.color = 'var(--muted)';
      });
    });
  }
  
  // Comment Form Submission
  if (commentForm) {
    commentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const comment = document.getElementById('comment').value;
      const commentType = document.querySelector('input[name="commentType"]:checked').value;
      const isPublic = document.getElementById('publicComment').checked;
      
      if (!comment.trim()) {
        showMessage('Please write a comment before posting.', 'error');
        return;
      }
      
      // Simulate posting to server
      if (isPublic) {
        showMessage('Comment posted publicly! Thank you for sharing.', 'success');
        
        // In a real app, this would add to the messages section
        // For demo, we'll just show a message
      } else {
        showMessage('Comment sent privately. Thank you for your feedback!', 'success');
      }
      
      // Reset form
      commentForm.reset();
      
      // Reset radio to default
      document.querySelector('input[name="commentType"][value="feedback"]').checked = true;
      document.getElementById('publicComment').checked = true;
    });
  }
  
  // Circular Social Button Animations
  const socialCircles = document.querySelectorAll('.social-circle');
  
  socialCircles.forEach(circle => {
    circle.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.social-icon');
      icon.style.transform = 'scale(1.1) rotate(15deg)';
    });
    
    circle.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.social-icon');
      icon.style.transform = 'scale(1) rotate(0deg)';
    });
    
    // Add click animation
    circle.addEventListener('click', function(e) {
      // Only prevent default for demo if href is "#"
      if (this.getAttribute('href') === '#') {
        e.preventDefault();
        const platform = this.querySelector('.social-name').textContent;
        showMessage(`Redirecting to ${platform}... (This is a demo link)`, 'info');
      }
    });
  });
  
  // Form input animations
  const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
  
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
  
  // CTA Button hover effects
  const ctaButtons = document.querySelectorAll('.cta-btn');
  
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      if (this.classList.contains('primary')) {
        this.style.boxShadow = '0 15px 35px rgba(122, 31, 31, 0.4)';
      } else {
        this.style.boxShadow = '0 15px 35px rgba(255, 255, 255, 0.1)';
      }
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.boxShadow = '';
    });
  });
  
  // Helper function to show messages
  function showMessage(message, type = 'info') {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }
    
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type}`;
    messageEl.innerHTML = `
      <span>${message}</span>
      <button class="close-message">&times;</button>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .form-message {
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--bg);
        border: 1px solid;
        border-radius: 10px;
        padding: 15px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        max-width: 400px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      }
      
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      .form-message.success {
        border-color: #2ecc71;
        background: rgba(46, 204, 113, 0.1);
        color: #2ecc71;
      }
      
      .form-message.error {
        border-color: #e74c3c;
        background: rgba(231, 76, 60, 0.1);
        color: #e74c3c;
      }
      
      .form-message.info {
        border-color: var(--accent);
        background: rgba(122, 31, 31, 0.1);
        color: var(--accent);
      }
      
      .close-message {
        background: none;
        border: none;
        color: inherit;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
      }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(messageEl);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      messageEl.style.animation = 'slideOut 0.3s ease forwards';
      setTimeout(() => messageEl.remove(), 300);
    }, 5000);
    
    // Close button functionality
    messageEl.querySelector('.close-message').addEventListener('click', () => {
      messageEl.style.animation = 'slideOut 0.3s ease forwards';
      setTimeout(() => messageEl.remove(), 300);
    });
    
    // Add slideOut animation
    const slideOutStyle = document.createElement('style');
    slideOutStyle.textContent = `
      @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
    `;
    document.head.appendChild(slideOutStyle);
  }
  
  // Simulate loading of messages with animation
  const messageCards = document.querySelectorAll('.message-card');
  messageCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 100 + (index * 100));
  });
});