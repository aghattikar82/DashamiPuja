import React, { useRef, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../GalleryPage.css';

const GalleryPage = () => {
  const galleryRef = useRef(null);
  const [activeIndices, setActiveIndices] = useState({
    2020: 0,
    2010: 0,
    2000: 0,
    1990: 0
  });

  // Sample images array (replace with your actual images)
  const images = [
    {
      original: require('../assets/images/hero-bg1.jpg'),
      thumbnail: require('../assets/images/hero-bg1.jpg'),
      description: '2025 Aarti Ceremony'
    },
    {
      original: require('../assets/images/hero-bg2.jpg'),
      thumbnail: require('../assets/images/hero-bg2.jpg'),
      description: '2024 Aarti Ceremony'
    },
    {
      original: require('../assets/images/hero-bg3.jpg'),
      thumbnail: require('../assets/images/hero-bg3.jpg'),
      description: '2023 Aarti Ceremony'
    },
  ];

  const highlights = [
    { 
      year: 2020, 
      photos: [
        require('../assets/images/hero-bg1.jpg'),
        require('../assets/images/hero-bg2.jpg'),
        require('../assets/images/hero-bg3.jpg')
      ]
    },
    { 
      year: 2010, 
      photos: [
        require('../assets/images/hero-bg1.jpg'),
        require('../assets/images/hero-bg2.jpg'),
        require('../assets/images/hero-bg3.jpg')
      ]
    },
  ];

  const handleCarouselNav = (e, year, direction) => {
    e.preventDefault();
    const currentIndex = activeIndices[year];
    const decadeData = highlights.find(d => d.year === year);
    const newIndex = (currentIndex + direction + decadeData.photos.length) % decadeData.photos.length;
    
    setActiveIndices(prev => ({
      ...prev,
      [year]: newIndex
    }));
  };

  const handleViewMore = (year) => {
    // Implement view more functionality
    console.log(`View more for ${year}`);
  };

  return (
    <section className="gallery-section py-5 position-relative">
      {/* Background pattern */}
      <div className="background-pattern"></div>
      
      <div className="container position-relative">
        <div className="section-header text-center mb-5">
          <h2 className="display-4 ornate-heading">
            Sacred Moments Gallery
            <div className="divider"></div>
          </h2>
          <p className="section-subtitle">A Visual Journey Through Time</p>
        </div>

        <div className="main-gallery mb-5">
          <ImageGallery
            ref={galleryRef}
            items={images}
            autoPlay={true}
            slideInterval={5000}
            showPlayButton={false}
            showFullscreenButton={true}
            showThumbnails={true}
            thumbnailPosition="bottom"
            additionalClass="custom-gallery"
          />
        </div>

        <div className="yearly-highlights">
          <h3 className="mb-4">Decade Highlights</h3>
          <div className="grid-container">
            {highlights.map((decade) => (
              <div key={decade.year} className="highlight-card">
                <div className="decade-carousel">
                  {decade.photos.map((photo, index) => (
                    <div 
                      key={index} 
                      className={`carousel-item ${index === activeIndices[decade.year] ? 'active' : ''}`}
                    >
                      <img 
                        src={photo} 
                        alt={`${decade.year} Highlights ${index + 1}`} 
                        className="highlight-image"
                      />
                    </div>
                  ))}
                  <button 
                    className="carousel-control prev"
                    onClick={(e) => handleCarouselNav(e, decade.year, -1)}
                  >
                    &lt;
                  </button>
                  <button 
                    className="carousel-control next"
                    onClick={(e) => handleCarouselNav(e, decade.year, 1)}
                  >
                    &gt;
                  </button>
                </div>
                <div className="highlight-content">
                  <h4>{decade.year}s</h4>
                  <p>Memorable moments from {decade.year-9}-{decade.year}</p>
                  <button 
                    className="btn-view-more"
                    onClick={() => handleViewMore(decade.year)}
                  >
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;