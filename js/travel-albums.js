// travel-albums.js - Complete updated version

document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // 1. ALBUM DATA
  // ============================================
  const albums = {
    kushtia: {
      title: "Kushtia - Land of Lalon Shah",
      date: "January 2023",
      duration: "2 Days",
      photosCount: "12 Photos",
      season: "Winter",
      bestFor: "Spiritual & Cultural Tourism",
      description: `
        Kushtia, the land of Lalon Shah, is where spirituality meets simplicity. 
        Visiting the shrine of Lalon Shah during the winter festival was a surreal experience. 
        The air was filled with Baul songs, and people from all walks of life gathered in harmony. 
        The rural landscape, with its mustard fields and quiet villages, offered a peaceful escape from city life.
      `,
      photos: [
        'assets/images/kushtia1.jpg',
        'assets/images/kushtia2.jpg',
        'assets/images/kushtia3.jpg',
        'assets/images/kushtia4.jpg',
        'assets/images/kushtia5.jpg',
        'assets/images/kushtia6.jpg',
        'assets/images/kushtia7.jpg',
        'assets/images/kushtia8.jpg',
        'assets/images/kushtia9.jpg',
        'assets/images/kushtia10.jpg',
        'assets/images/kushtia11.jpg',
        'assets/images/kushtia12.jpg'
      ],
      memories: [
        "Attended the Lalon Mela (festival) with thousands of devotees",
        "Experienced authentic Baul music performances",
        "Explored the rural villages and mustard fields",
        "Tasted local sweets and traditional Bengali food",
        "Met local artisans preserving traditional crafts"
      ]
    },
    
    jhenaidah: {
      title: "Jhenaidah - Rural Charm",
      date: "March 2022",
      duration: "1 Day",
      photosCount: "15 Photos",
      season: "Spring",
      bestFor: "Rural Exploration",
      description: `
        Jhenaidah offered a glimpse into authentic rural Bangladesh. 
        From ancient historical sites to simple village life, every moment was a lesson in humility and beauty. 
        The Shailkupa Zamindar Bari (landlord house) stood as a testament to Bengal's architectural heritage.
      `,
      photos: [
        'assets/images/jhenaidah1.jpg',
        'assets/images/jhenaidah2.jpg',
        'assets/images/jhenaidah3.jpg',
        'assets/images/jhenaidah4.jpg',
        'assets/images/jhenaidah5.jpg',
        'assets/images/jhenaidah6.jpg',
        'assets/images/jhenaidah7.jpg',
        'assets/images/jhenaidah8.jpg',
        'assets/images/jhenaidah9.jpg',
        'assets/images/jhenaidah10.jpg',
        'assets/images/jhenaidah11.jpg',
        'assets/images/jhenaidah12.jpg',
        'assets/images/jhenaidah13.jpg',
        'assets/images/jhenaidah14.jpg',
        'assets/images/jhenaidah15.jpg'
      ],
      memories: [
        "Visited the historic Shailkupa Zamindar Bari",
        "Explored local markets and village life",
        "Photographed traditional rice farming",
        "Interacted with local school children",
        "Tasted fresh sugarcane juice from roadside vendors"
      ]
    },
    
    khulna: {
      title: "Khulna - Gateway to Sundarbans",
      date: "December 2022",
      duration: "3 Days",
      photosCount: "18 Photos",
      season: "Winter",
      bestFor: "River & Industrial Tourism",
      description: `
        Khulna, the gateway to the Sundarbans, surprised me with its industrial charm 
        and riverine beauty. The Rupsha River at sunset was magical, and the local seafood 
        was some of the best I've ever tasted. The city perfectly blends industrial progress 
        with natural beauty.
      `,
      photos: [
        'assets/images/khulna1.jpg',
        'assets/images/khulna2.jpg',
        'assets/images/khulna3.jpg',
        'assets/images/khulna4.jpg',
        'assets/images/khulna5.jpg',
        'assets/images/khulna6.jpg',
        'assets/images/khulna7.jpg',
        'assets/images/khulna8.jpg',
        'assets/images/khulna9.jpg',
        'assets/images/khulna10.jpg',
        'assets/images/khulna11.jpg',
        'assets/images/khulna12.jpg',
        'assets/images/khulna13.jpg',
        'assets/images/khulna14.jpg',
        'assets/images/khulna15.jpg',
        'assets/images/khulna16.jpg',
        'assets/images/khulna17.jpg',
        'assets/images/khulna18.jpg'
      ],
      memories: [
        "Sunset cruise on Rupsha River",
        "Explored Khulna's jute mills and industrial areas",
        "Tasted fresh hilsha fish from local restaurants",
        "Visited Khan Jahan Ali's Mazar (shrine)",
        "Photographed the Mongla Port area"
      ]
    },
    
    bagerhat: {
      title: "Bagerhat - Historical Marvel",
      date: "November 2021",
      duration: "2 Days",
      photosCount: "20 Photos",
      season: "Autumn",
      bestFor: "Historical & Architectural Tourism",
      description: `
        Bagerhat's Sixty Dome Mosque (Shat Gombuj Masjid) took my breath away. 
        This UNESCO World Heritage site from the 15th century showcases Bengal's 
        magnificent architectural heritage. The terracotta work and the sheer scale 
        of the mosque complex left me in awe of our ancestors' craftsmanship.
      `,
      photos: [
        'assets/images/bagerhat1.jpg',
        'assets/images/bagerhat2.jpg',
        'assets/images/bagerhat3.jpg',
        'assets/images/bagerhat4.jpg',
        'assets/images/bagerhat5.jpg',
        'assets/images/bagerhat6.jpg',
        'assets/images/bagerhat7.jpg',
        'assets/images/bagerhat8.jpg',
        'assets/images/bagerhat9.jpg',
        'assets/images/bagerhat10.jpg',
        'assets/images/bagerhat11.jpg',
        'assets/images/bagerhat12.jpg',
        'assets/images/bagerhat13.jpg',
        'assets/images/bagerhat14.jpg',
        'assets/images/bagerhat15.jpg',
        'assets/images/bagerhat16.jpg',
        'assets/images/bagerhat17.jpg',
        'assets/images/bagerhat18.jpg',
        'assets/images/bagerhat19.jpg',
        'assets/images/bagerhat20.jpg'
      ],
      memories: [
        "Explored Sixty Dome Mosque (UNESCO site)",
        "Visited Khan Jahan Ali's Mausoleum",
        "Studied terracotta architecture details",
        "Local guide shared historical insights",
        "Photographed sunset over the mosque complex"
      ]
    },
    
    rajshahi: {
      title: "Rajshahi - Mango City",
      date: "June 2023",
      duration: "4 Days",
      photosCount: "22 Photos",
      season: "Summer",
      bestFor: "Cultural & Agricultural Tourism",
      description: `
        Rajshahi in mango season is paradise! The city lives up to its name as the 'Mango Capital'. 
        From historical sites like Puthia Temple Complex to the serene Padma River banks, 
        Rajshahi offered a perfect blend of culture, history, and natural beauty.
      `,
      photos: [
        'assets/images/rajshahi1.jpg',
        'assets/images/rajshahi2.jpg',
        'assets/images/rajshahi3.jpg',
        'assets/images/rajshahi4.jpg',
        'assets/images/rajshahi5.jpg',
        'assets/images/rajshahi6.jpg',
        'assets/images/rajshahi7.jpg',
        'assets/images/rajshahi8.jpg',
        'assets/images/rajshahi9.jpg',
        'assets/images/rajshahi10.jpg',
        'assets/images/rajshahi11.jpg',
        'assets/images/rajshahi12.jpg',
        'assets/images/rajshahi13.jpg',
        'assets/images/rajshahi14.jpg',
        'assets/images/rajshahi15.jpg',
        'assets/images/rajshahi16.jpg',
        'assets/images/rajshahi17.jpg',
        'assets/images/rajshahi18.jpg',
        'assets/images/rajshahi19.jpg',
        'assets/images/rajshahi20.jpg',
        'assets/images/rajshahi21.jpg',
        'assets/images/rajshahi22.jpg'
      ],
      memories: [
        "Mango tasting tour at local orchards",
        "Visited Puthia Temple Complex",
        "Sunset photography at Padma River",
        "Explored Varendra Research Museum",
        "Tasted famous Rajshahi silk products"
      ]
    },
    
    dhaka: {
      title: "Dhaka - City of Mosques",
      date: "Living Here",
      duration: "Ongoing",
      photosCount: "25+ Photos",
      season: "All Year",
      bestFor: "Urban & Cultural Exploration",
      description: `
        Dhaka, my home, is a city of contrasts. Ancient mosques stand beside modern skyscrapers, 
        rickshaws navigate through traffic jams, and street food aromas fill every corner. 
        From Old Dhaka's historical lanes to the modern cafes of Gulshan, 
        this city has countless stories in every alley.
      `,
      photos: [
        'assets/images/dhaka1.jpg',
        'assets/images/dhaka2.jpg',
        'assets/images/dhaka3.jpg',
        'assets/images/dhaka4.jpg',
        'assets/images/dhaka5.jpg',
        'assets/images/dhaka6.jpg',
        'assets/images/dhaka7.jpg',
        'assets/images/dhaka8.jpg',
        'assets/images/dhaka9.jpg',
        'assets/images/dhaka10.jpg',
        'assets/images/dhaka11.jpg',
        'assets/images/dhaka12.jpg',
        'assets/images/dhaka13.jpg',
        'assets/images/dhaka14.jpg',
        'assets/images/dhaka15.jpg',
        'assets/images/dhaka16.jpg',
        'assets/images/dhaka17.jpg',
        'assets/images/dhaka18.jpg',
        'assets/images/dhaka19.jpg',
        'assets/images/dhaka20.jpg',
        'assets/images/dhaka21.jpg',
        'assets/images/dhaka22.jpg',
        'assets/images/dhaka23.jpg',
        'assets/images/dhaka24.jpg',
        'assets/images/dhaka25.jpg'
      ],
      memories: [
        "Early morning photography at Lalbagh Fort",
        "Street food tour in Old Dhaka",
        "Rickshaw ride through narrow alleys",
        "Friday prayers at Baitul Mukarram",
        "Sunset from Hatirjheel Lake"
      ]
    },
    
    rangamati: {
      title: "Rangamati-Kaptai - Lake Paradise",
      date: "April 2022",
      duration: "5 Days",
      photosCount: "32 Photos",
      season: "Spring",
      bestFor: "Nature & Tribal Culture",
      description: `
        Rangamati and Kaptai Lake together create paradise on earth. 
        The blue waters surrounded by green hills, tribal villages on hilltops, 
        and the unique Chakma culture made this trip unforgettable. 
        Every sunrise brought new colors to the lake.
      `,
      photos: [
        'assets/images/rangamati1.jpg',
        'assets/images/rangamati2.jpg',
        'assets/images/rangamati3.jpg',
        'assets/images/rangamati4.jpg',
        'assets/images/rangamati5.jpg',
        'assets/images/rangamati7.jpg',
        'assets/images/rangamati8.jpg',
        'assets/images/rangamati9.jpg',
        'assets/images/rangamati10.jpg',
        'assets/images/rangamati11.jpg',
        'assets/images/rangamati12.jpg',
        'assets/images/rangamati13.jpg',
        'assets/images/rangamati14.jpg',
        'assets/images/rangamati15.jpg',
        'assets/images/rangamati16.jpg',
        'assets/images/rangamati17.jpg',
        'assets/images/rangamati18.jpg',
        'assets/images/rangamati19.jpg',
        'assets/images/rangamati20.jpg',
        'assets/images/rangamati21.jpg',
        'assets/images/rangamati22.jpg',
        'assets/images/rangamati23.jpg',
        'assets/images/rangamati24.jpg',
        'assets/images/rangamati25.jpg',
        'assets/images/rangamati26.jpg',
        'assets/images/rangamati27.jpg',
        'assets/images/rangamati28.jpg',
        'assets/images/rangamati29.jpg',
        'assets/images/rangamati30.jpg',
        'assets/images/rangamati31.jpg',
        'assets/images/rangamati32.jpg'
      ],
      memories: [
        "Boat tour on Kaptai Lake",
        "Visited tribal villages and learned about Chakma culture",
        "Hiked to Shuvolong Waterfalls",
        "Stayed in a hillside resort with lake view",
        "Tasted traditional tribal food"
      ]
    },
    
    coxsbazar: {
      title: "Cox's Bazar - Sea Symphony",
      date: "December 2020",
      duration: "7 Days",
      photosCount: "35 Photos",
      season: "Winter",
      bestFor: "Beach & Marine Tourism",
      description: `
        Cox's Bazar, the world's longest natural sea beach, was everything I dreamed of and more. 
        Watching the sunrise over the Bay of Bengal, walking on empty beaches at dawn, 
        and feeling the vastness of the ocean put everything into perspective. 
        The Marine Drive to Himchori was particularly breathtaking.
      `,
      photos: [
        'assets/images/coxsbazar1.jpg',
        'assets/images/coxsbazar2.jpg',
        'assets/images/coxsbazar3.jpg',
        'assets/images/coxsbazar4.jpg',
        'assets/images/coxsbazar5.jpg',
        'assets/images/coxsbazar6.jpg',
        'assets/images/coxsbazar7.jpg',
        'assets/images/coxsbazar8.jpg',
        'assets/images/coxsbazar9.jpg',
        'assets/images/coxsbazar10.jpg',
        'assets/images/coxsbazar11.jpg',
        'assets/images/coxsbazar12.jpg',
        'assets/images/coxsbazar13.jpg',
        'assets/images/coxsbazar14.jpg',
        'assets/images/coxsbazar15.jpg',
        'assets/images/coxsbazar16.jpg',
        'assets/images/coxsbazar17.jpg',
        'assets/images/coxsbazar18.jpg',
        'assets/images/coxsbazar19.jpg',
        'assets/images/coxsbazar20.jpg',
        'assets/images/coxsbazar21.jpg',
        'assets/images/coxsbazar22.jpg',
        'assets/images/coxsbazar23.jpg',
        'assets/images/coxsbazar24.jpg',
        'assets/images/coxsbazar25.jpg',
        'assets/images/coxsbazar26.jpg',
        'assets/images/coxsbazar27.jpg',
        'assets/images/coxsbazar28.jpg',
        'assets/images/coxsbazar29.jpg',
        'assets/images/coxsbazar30.jpg',
        'assets/images/coxsbazar31.jpg',
        'assets/images/coxsbazar32.jpg',
        'assets/images/coxsbazar33.jpg',
        'assets/images/coxsbazar34.jpg',
        'assets/images/coxsbazar35.jpg'
      ],
      memories: [
        "Watched sunrise on world's longest beach",
        "Drove along Marine Drive to Himchori",
        "Visited Saint Martin's Island",
        "Tasted fresh seafood daily",
        "Collected seashells from different beaches"
      ]
    },
    
    sitakunda: {
      title: "Sitakunda-Mirshorai - Hill & Coast",
      date: "October 2021",
      duration: "2 Days",
      photosCount: "15 Photos",
      season: "Autumn",
      bestFor: "Hill & Coastal Adventure",
      description: `
        Sitakunda's hills and Mirshorai's coastline offered the perfect weekend escape. 
        Chandranath Temple atop the hill provided panoramic views, while the 
        coastal areas showed a different side of Chittagong. The journey through 
        tea gardens and hill roads was as beautiful as the destinations.
      `,
      photos: [
        'assets/images/sitakunda1.jpg',
        'assets/images/sitakunda2.jpg',
        'assets/images/sitakunda3.jpg',
        'assets/images/sitakunda4.jpg',
        'assets/images/sitakunda5.jpg',
        'assets/images/sitakunda6.jpg',
        'assets/images/sitakunda7.jpg',
        'assets/images/sitakunda8.jpg',
        'assets/images/sitakunda9.jpg',
        'assets/images/sitakunda10.jpg',
        'assets/images/sitakunda11.jpg',
        'assets/images/sitakunda12.jpg',
        'assets/images/sitakunda13.jpg',
        'assets/images/sitakunda14.jpg',
        'assets/images/sitakunda15.jpg'
      ],
      memories: [
        "Hiked to Chandranath Temple",
        "Explored Sitakunda Botanical Garden",
        "Visited coastal areas of Mirshorai",
        "Photographed tea gardens on hill slopes",
        "Tasted local Chittagonian cuisine"
      ]
    }
  };
  
  // ============================================
  // 2. MODAL ELEMENTS
  // ============================================
  const modal = document.getElementById('albumModal');
  const closeModalBtn = document.getElementById('closeModal');
  const albumCarousel = document.getElementById('albumCarousel');
  
  // ============================================
  // 3. OPEN ALBUM MODAL FUNCTION
  // ============================================
  function openAlbumModal(albumId) {
    const album = albums[albumId];
    
    if (!album) return;
    
    // Update modal content
    document.getElementById('modalTitle').textContent = album.title;
    document.getElementById('modalDate').textContent = album.date;
    document.getElementById('modalDescription').textContent = album.description;
    document.getElementById('infoDuration').textContent = album.duration;
    document.getElementById('infoPhotos').textContent = album.photosCount;
    document.getElementById('infoSeason').textContent = album.season;
    document.getElementById('infoBestFor').textContent = album.bestFor;
    
    // Update memories list
    const memoriesList = document.getElementById('memoriesList');
    memoriesList.innerHTML = '';
    album.memories.forEach(memory => {
      const li = document.createElement('li');
      li.textContent = memory;
      memoriesList.appendChild(li);
    });
    
    // Load photos into carousel
    loadCarouselPhotos(album.photos);
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  // ============================================
  // 4. LOAD CAROUSEL PHOTOS FUNCTION
  // ============================================
  function loadCarouselPhotos(photos) {
    // Clear existing slides
    albumCarousel.innerHTML = '';
    
    // Create slides for each photo
    photos.forEach((photo, index) => {
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      
      // Create image with proper attributes
      const img = document.createElement('img');
      img.src = photo;
      img.alt = `Travel Photo ${index + 1}`;
      img.className = 'zoomable';
      img.loading = 'lazy';
      
      // Log image dimensions for debugging
      img.onload = function() {
        console.log(`Photo loaded: ${img.naturalWidth}x${img.naturalHeight}`);
      };
      
      // Add error handling
      img.onerror = function() {
        console.error(`Failed to load: ${photo}`);
        this.src = 'assets/images/placeholder.jpg';
        this.alt = 'Photo not available';
        this.style.border = '2px dashed #7a1f1f';
        this.style.padding = '20px';
        this.style.maxWidth = '300px';
        this.style.maxHeight = '300px';
      };
      
      // Enhanced click to zoom functionality
      img.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (this.classList.contains('zoomed')) {
          this.classList.remove('zoomed');
          this.style.cursor = 'zoom-in';
          this.style.transform = 'scale(1)';
        } else {
          // Remove zoom from all other images first
          document.querySelectorAll('.carousel-slide img.zoomed').forEach(img => {
            img.classList.remove('zoomed');
            img.style.transform = 'scale(1)';
          });
          this.classList.add('zoomed');
          this.style.cursor = 'zoom-out';
          this.style.transform = 'scale(1.5)';
        }
      });
      
      slide.appendChild(img);
      albumCarousel.appendChild(slide);
    });
    
    // Initialize slick carousel with adaptive height
    if (photos.length > 0) {
      setTimeout(() => {
        $('#albumCarousel').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true, // Adjusts height based on current slide
          autoplay: false,
          prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
          nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                dots: true,
                adaptiveHeight: true
              }
            }
          ]
        });
      }, 100);
    }
  }
  
  // ============================================
  // 5. CLOSE MODAL FUNCTION
  // ============================================
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Destroy slick carousel to prevent conflicts
    if ($('#albumCarousel').hasClass('slick-initialized')) {
      $('#albumCarousel').slick('unslick');
    }
    
    // Remove zoom from all images
    document.querySelectorAll('.carousel-slide img.zoomed').forEach(img => {
      img.classList.remove('zoomed');
      img.style.transform = 'scale(1)';
    });
  }
  
  // ============================================
  // 6. EVENT LISTENERS
  // ============================================
  
  // Album card click handlers
  const albumCards = document.querySelectorAll('.album-card');
  
  albumCards.forEach(card => {
    card.addEventListener('click', function() {
      const albumId = this.getAttribute('data-album');
      openAlbumModal(albumId);
    });
  });
  
  // Close modal button
  closeModalBtn.addEventListener('click', closeModal);
  
  // Close modal on background click
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
  
  // ============================================
  // 7. ANIMATED COUNTERS FOR HERO SECTION
  // ============================================
  function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }
  
  // Hero stats counters
  const heroStats = document.querySelectorAll('.hero-stat .stat-count');
  heroStats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-count'));
    animateCounter(stat, target, 1500);
  });
  
  // ============================================
  // 8. HOVER EFFECTS FOR ALBUM CARDS
  // ============================================
  albumCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const overlay = this.querySelector('.album-overlay h3');
      overlay.style.transform = 'translateY(-5px)';
      overlay.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      const overlay = this.querySelector('.album-overlay h3');
      overlay.style.transform = 'translateY(0)';
    });
  });
  
  // ============================================
  // 9. SEASONAL INDICATOR
  // ============================================
  const heroSection = document.querySelector('.travel-hero');
  const month = new Date().getMonth();
  
  if (heroSection) {
    let seasonText = '';
    
    if (month >= 11 || month <= 1) seasonText = '❄️ Winter Travel Stories';
    else if (month >= 2 && month <= 4) seasonText = '🌸 Spring Travel Stories';
    else if (month >= 5 && month <= 7) seasonText = '🌧️ Monsoon Travel Stories';
    else seasonText = '🍂 Autumn Travel Stories';
    
    const seasonElement = document.createElement('div');
    seasonElement.className = 'season-indicator';
    seasonElement.innerHTML = `
      <i class="fas fa-calendar-alt"></i>
      <span>${seasonText}</span>
    `;
    
    heroSection.querySelector('.hero-content').appendChild(seasonElement);
  }
});