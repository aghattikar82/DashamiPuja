import React from 'react';
import { Container } from 'react-bootstrap';
import '../LiveStreamPage.css';

const LiveStreamPage = () => {
  return (
    <section className="live-stream-section py-5 position-relative">
      {/* Background pattern */}
      <div className="background-pattern"></div>
      
      <Container className="position-relative">
        <div className="text-center mb-5">
          <h2 className="display-4 ornate-heading">
            Live Stream
            <div className="divider"></div>
          </h2>
          <p className="section-subtitle">Experience the Divine Virtually</p>
        </div>

        <div className="stream-container">
          <div className="stream-card">
            <h3 className="stream-title">Main Puja Ceremony</h3>
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/sFLIpkGxnKs?si=aYNiZ1RY7NXx1KQH"
                title="Dashami Puja Live Stream"
                allowFullScreen
              ></iframe>
            </div>
            <div className="stream-info">
              <p className="stream-time">10:00 AM - 12:30 PM</p>
              <p className="stream-description">
                Watch the grand worship of Lord Mouneshwara with sacred offerings
              </p>
            </div>
          </div>

          <div className="stream-card">
            <h3 className="stream-title">Evening Aarti</h3>
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/sFLIpkGxnKs?si=aYNiZ1RY7NXx1KQH"
                title="Dashami Puja Live Stream"
                allowFullScreen
              ></iframe>
            </div>
            <div className="stream-info">
              <p className="stream-time">6:30 PM - 7:30 PM</p>
              <p className="stream-description">
                Experience the sacred fire ceremony with diya offerings
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LiveStreamPage;