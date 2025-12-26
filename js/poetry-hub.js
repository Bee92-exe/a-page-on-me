document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // 1. DEFINE UPDATE FUNCTION FIRST
  // ============================================
  function updatePoemCounters() {
    // Fixed: Use numbers without plus sign
    const actualPoemCounts = {
      'english': 7,    
      'bengali': 20,     
      'urdu': 10        
    };
    
    // Find all language cards
    const langCards = document.querySelectorAll('.lang-card');
    
    langCards.forEach(card => {
      const countElement = card.querySelector('.lang-count');
      
      if (countElement) {
        const currentText = countElement.textContent;
        const parts = currentText.split('+');
        
        if (parts.length > 1) {
          // Get the suffix (like " poems", " কবিতা", " sher")
          const suffix = parts[1].trim();
          
          // Determine which language this is
          if (card.classList.contains('english')) {
            countElement.textContent = `${actualPoemCounts.english}+ ${suffix}`;
          } else if (card.classList.contains('bengali')) {
            countElement.textContent = `${actualPoemCounts.bengali}+ ${suffix}`;
          } else if (card.classList.contains('urdu')) {
            countElement.textContent = `${actualPoemCounts.urdu}+ ${suffix}`;
          }
        } else {
          // If no "+" found, just set the number
          if (card.classList.contains('english')) {
            countElement.textContent = `${actualPoemCounts.english}+ poems`;
          } else if (card.classList.contains('bengali')) {
            countElement.textContent = `${actualPoemCounts.bengali}+ কবিতা`;
          } else if (card.classList.contains('urdu')) {
            countElement.textContent = `${actualPoemCounts.urdu}+ sher`;
          }
        }
      }
    });
  }
  
  // ============================================
  // 2. BOOK MODAL FUNCTIONALITY
  // ============================================
  const viewButtons = document.querySelectorAll('.view-btn');
  
  viewButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const bookCard = this.closest('.book-card');
      const bookTitle = bookCard.querySelector('h3').textContent;
      const bookDesc = bookCard.querySelector('.book-desc').textContent;
      
      // Create modal for book viewing
      const modal = document.createElement('div');
      modal.className = 'book-modal';
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close-modal">&times;</span>
          <h2>${bookTitle}</h2>
          <p class="modal-subtitle">${bookDesc}</p>
          <div class="modal-gallery">
            <div class="coming-soon">
              <i class="fas fa-book-open fa-3x"></i>
              <h3>Coming Soon!</h3>
              <p>Scanned pages from this notebook will be displayed here.</p>
              <p>Check back later to see handwritten poems and sketches.</p>
            </div>
          </div>
          <div class="modal-actions">
            <button class="btn-primary">View More Pages</button>
            <button class="btn-secondary">Close</button>
          </div>
        </div>
      `;
      
      document.body.appendChild(modal);
      document.body.style.overflow = 'hidden';
      
      // Close modal function
      const closeModal = () => {
        modal.remove();
        document.body.style.overflow = '';
      };
      
      // Close modal events
      modal.querySelector('.close-modal').addEventListener('click', closeModal);
      modal.querySelector('.btn-secondary').addEventListener('click', closeModal);
      
      // Close on outside click
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal();
        }
      });
      
      // View More Pages button
      modal.querySelector('.btn-primary').addEventListener('click', () => {
        alert('More pages will be available soon!');
      });
      
      // modal styles
      const style = document.createElement('style');
      style.textContent = `
        .book-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 10, 10, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          backdrop-filter: blur(10px);
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .modal-content {
          background: rgba(20, 20, 20, 0.95);
          border: 1px solid #7a1f1f;
          border-radius: 20px;
          padding: 40px;
          max-width: 800px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.4s ease;
        }
        
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .close-modal {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 30px;
          cursor: pointer;
          color: #888;
          transition: color 0.3s;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        
        .close-modal:hover {
          color: #7a1f1f;
          background: rgba(122, 31, 31, 0.1);
        }
        
        .modal-content h2 {
          margin-bottom: 10px;
          color: #7a1f1f;
          font-size: 2rem;
        }
        
        .modal-subtitle {
          color: #aaa;
          margin-bottom: 30px;
          font-style: italic;
        }
        
        .modal-gallery {
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px dashed #333;
          border-radius: 15px;
          padding: 40px;
          margin: 30px 0;
        }
        
        .coming-soon {
          text-align: center;
          color: #888;
        }
        
        .coming-soon i {
          color: #7a1f1f;
          margin-bottom: 20px;
        }
        
        .coming-soon h3 {
          color: #fff;
          margin-bottom: 10px;
        }
        
        .modal-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 30px;
        }
        
        .btn-primary, .btn-secondary {
          padding: 12px 30px;
          border-radius: 25px;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s;
          min-width: 150px;
        }
        
        .btn-primary {
          background: #7a1f1f;
          color: white;
          font-weight: 600;
        }
        
        .btn-primary:hover {
          background: #8b2a2a;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(122, 31, 31, 0.3);
        }
        
        .btn-secondary {
          background: transparent;
          color: #aaa;
          border: 1px solid #444;
        }
        
        .btn-secondary:hover {
          color: #fff;
          border-color: #666;
          background: rgba(255, 255, 255, 0.05);
        }
      `;
      
      document.head.appendChild(style);
    });
  });
  
  // ============================================
  // 3. LANGUAGE CARD HOVER EFFECTS
  // ============================================
  const langCards = document.querySelectorAll('.lang-card');
  
  langCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.lang-icon');
      if (icon) {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        icon.style.transition = 'transform 0.3s ease';
      }
      
      // Add subtle glow effect
      this.style.boxShadow = '0 10px 30px rgba(122, 31, 31, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.lang-icon');
      if (icon) {
        icon.style.transform = 'scale(1) rotate(0deg)';
      }
      
      this.style.boxShadow = '';
    });
  });
  
  // ============================================
  // 4. FEATURED POEM LINK TRACKING
  // ============================================
  const readMoreLinks = document.querySelectorAll('.read-more');
  
  readMoreLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      console.log('Navigating to poem:', this.href);
    });
  });
  
  // ============================================
  // 5. ANIMATE STATS WHEN IN VIEW
  // ============================================
  function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
      // Extract number (remove + if exists)
      const text = stat.textContent;
      const numberText = text.replace('+', '');
      
      // Check if it's infinity
      const isInfinity = text === '∞' || numberText === '∞';
      
      if (!isInfinity && !isNaN(numberText)) {
        const targetValue = parseInt(numberText);
        let current = 0;
        const increment = targetValue / 40; 
        const interval = 50;
        
        const counter = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            stat.textContent = targetValue + '+';
            clearInterval(counter);
          } else {
            stat.textContent = Math.floor(current) + '+';
          }
        }, interval);
      }
    });
  }
  
  // ============================================
  // 6. INITIALIZE EVERYTHING
  // ============================================
  
  // Initial update of poem counters
  updatePoemCounters();
  
  // Animate stats when featured poem section is in view
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStats();
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  const statsSection = document.querySelector('.featured-poem');
  if (statsSection) {
    observer.observe(statsSection);
  }
  
  // ============================================
  // 7. EXPOSE FUNCTION TO UPDATE POEM COUNTS
  // ============================================
  window.updateMyPoemCounts = function(english, bengali, urdu) {
    console.log(`Updating poem counts: English=${english}, Bengali=${bengali}, Urdu=${urdu}`);
    
    // Store in localStorage
    if (typeof Storage !== 'undefined') {
      localStorage.setItem('poemCount_english', english);
      localStorage.setItem('poemCount_bengali', bengali);
      localStorage.setItem('poemCount_urdu', urdu);
    }
    
    // Update the display
    const langCards = document.querySelectorAll('.lang-card');
    
    langCards.forEach(card => {
      const countElement = card.querySelector('.lang-count');
      if (countElement) {
        const currentText = countElement.textContent;
        const parts = currentText.split('+');
        
        if (parts.length > 1) {
          const suffix = parts[1].trim();
          
          if (card.classList.contains('english')) {
            countElement.textContent = `${english}+ ${suffix}`;
          } else if (card.classList.contains('bengali')) {
            countElement.textContent = `${bengali}+ ${suffix}`;
          } else if (card.classList.contains('urdu')) {
            countElement.textContent = `${urdu}+ ${suffix}`;
          }
        }
      }
    });
    
    console.log('Poem counts updated successfully!');
  };
});