

document.addEventListener('DOMContentLoaded', function() {
  
  const mapElement = document.getElementById('travelMap');
  if (!mapElement) return;
  

  const destinations = {
    kushtia: {
      title: "Kushtia",
      subtitle: "Land of Lalon Shah",
      coordinates: [23.9167, 89.1167], 
      date: "Nov-Dec 2023",
      category: "cultural",
      color: "#7a1f1f"
    },
    jhenaidah: {
      title: "Jhenaidah",
      subtitle: "Rural Charm",
      coordinates: [23.5416, 89.1833],
      date: "December 2023",
      category: "cultural",
      color: "#7a1f1f"
    },
    khulna: {
        title: "Khulna",
        subtitle: "Gateway to Sundarbans",
        coordinates: [22.8456, 89.5403],
        date: "August 2025",
        category: "cultural",  
        color: "#7a1f1f"      
    },
    bagerhat: {
      title: "Bagerhat",
      subtitle: "Historical Marvel",
      coordinates: [22.6516, 89.7853],
      date: "September 2025",
      category: "historical",
      color: "#4ecdc4"
    },
    rajshahi: {
      title: "Rajshahi",
      subtitle: "Mango City",
      coordinates: [24.3740, 88.6042],
      date: "July 2025",
      category: "cultural",
      color: "#7a1f1f"
    },
    dhaka: {
      title: "Dhaka",
      subtitle: "City of Mosques",
      coordinates: [23.8103, 90.4125],
      date: "Living Here",
      category: "urban",
      color: "#7a1f1f"
    },
    rangamati: {
      title: "Rangamati-Kaptai",
      subtitle: "Lake Paradise",
      coordinates: [22.6416, 92.1908],
      date: "November 2025",
      category: "hill",
      color: "#ffd166"
    },
    coxsbazar: {
      title: "Cox's Bazar",
      subtitle: "Sea Symphony",
      coordinates: [21.4272, 92.0058],
      date: "November 2024",
      category: "beach",
      color: "#ff6b6b"
    },
    sitakunda: {
      title: "Sitakunda-Mirshorai",
      subtitle: "Hill & Coast",
      coordinates: [22.6083, 91.7083],
      date: "May 2025",
      category: "hill",
      color: "#ffd166"
    }
  };

  const map = L.map('travelMap', {
    center: [23.6850, 90.3563], // Center of Bangladesh
    zoom: 7,
    zoomControl: true,
    scrollWheelZoom: true,
    attributionControl: false
  });
  

  const standardLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  });
  
  const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles © Esri'
  });
  
  const darkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© CARTO'
  });
  
  let currentLayer = standardLayer;
  currentLayer.addTo(map);

  const layerButtons = document.querySelectorAll('.layer-btn');
  
  layerButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
      layerButtons.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Remove current layer
      map.removeLayer(currentLayer);
      
      // Add new layer based on selection
      const layerType = this.getAttribute('data-layer');
      switch(layerType) {
        case 'satellite':
          currentLayer = satelliteLayer;
          break;
        case 'dark':
          currentLayer = darkLayer;
          break;
        default:
          currentLayer = standardLayer;
      }
      
      currentLayer.addTo(map);
    });
  });
  
  const markers = [];
  
  Object.entries(destinations).forEach(([id, dest]) => {
    // custom marker HTML
    const markerHtml = `
      <div class="custom-marker" style="background: ${dest.color};">
        <i class="fas fa-map-marker-alt"></i>
      </div>
    `;
    
    // custom icon
    const customIcon = L.divIcon({
      html: markerHtml,
      className: 'custom-div-icon',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    });
    
    // marker
    const marker = L.marker(dest.coordinates, {
      icon: customIcon,
      alt: dest.title
    }).addTo(map);
    
    // popup content
    const popupContent = `
      <div class="marker-content">
        <h3>${dest.title}</h3>
        <p>${dest.subtitle}</p>
        <p><small>${dest.date}</small></p>
        <button class="marker-btn" data-album="${id}">
          View Album <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    `;
    
    // Bind popup to marker
    marker.bindPopup(popupContent, {
      maxWidth: 250,
      className: 'custom-popup'
    });
    
    // Store marker with ID
    marker.destinationId = id;
    markers.push(marker);
    
    marker.on('click', function() {
      markers.forEach(m => {
        if (m !== marker && m.isPopupOpen()) {
          m.closePopup();
        }
      });
      
      const markerDiv = this.getElement();
      markerDiv.style.animation = 'pulse 0.5s';
      setTimeout(() => {
        markerDiv.style.animation = '';
      }, 500);
    });
  });
  

  map.on('popupopen', function(e) {
    const popup = e.popup;
    const popupElement = popup.getElement();
    
    // Add event listener to button in popup
    const viewBtn = popupElement.querySelector('.marker-btn');
    if (viewBtn) {
      viewBtn.addEventListener('click', function() {
        const albumId = this.getAttribute('data-album');
        openAlbumFromMap(albumId);
        map.closePopup();
      });
    }
  });
  

  function openAlbumFromMap(albumId) {
    if (typeof window.openAlbumModal === 'function') {
      window.openAlbumModal(albumId);
    } else {
      const albumCard = document.querySelector(`.album-card[data-album="${albumId}"]`);
      if (albumCard) {
        albumCard.scrollIntoView({ behavior: 'smooth' });
        
        albumCard.style.animation = 'highlight 1s';
        setTimeout(() => {
          albumCard.style.animation = '';
        }, 1000);
      }
    }
  }
  

  if (markers.length > 0) {
    const group = new L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.1));
  }

  const mapStyles = document.createElement('style');
  mapStyles.textContent = `
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.3); }
      100% { transform: scale(1); }
    }
    
    @keyframes highlight {
      0% { box-shadow: 0 0 0 0 rgba(122, 31, 31, 0.7); }
      70% { box-shadow: 0 0 0 20px rgba(122, 31, 31, 0); }
      100% { box-shadow: 0 0 0 0 rgba(122, 31, 31, 0); }
    }
    
    .custom-div-icon {
      background: transparent;
      border: none;
    }
    
    .leaflet-container {
      background: #1a1a1a !important;
      font-family: inherit !important;
    }
    
    .leaflet-control-attribution {
      background: rgba(10, 10, 10, 0.8) !important;
      color: var(--muted) !important;
      font-size: 11px !important;
      padding: 2px 5px !important;
    }
    
    .leaflet-control-attribution a {
      color: var(--accent) !important;
    }
  `;
  document.head.appendChild(mapStyles);
});