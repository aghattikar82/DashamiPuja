import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaClock, FaPrayingHands, FaMusic, FaUtensils } from 'react-icons/fa';
import '../EventSchedulePage.css';

const EventSchedulePage = () => {
  const schedule = [
    {
      time: "7:00 AM",
      title: "Morning Prayer",
      icon: <FaPrayingHands />,
      color: "#4a90e2",
      description: "Traditional morning rituals and chanting of Vedic hymns"
    },
    {
      time: "10:00 AM",
      title: "Main Puja Ceremony",
      icon: <FaPrayingHands />,
      color: "#d4af37",
      description: "Grand worship of Lord Mouneshwara with sacred offerings"
    },
    {
      time: "12:30 PM",
      title: "Prasad Lunch",
      icon: <FaUtensils />,
      color: "#50b83c",
      description: "Community feast with traditional vegetarian cuisine"
    },
    {
      time: "4:00 PM",
      title: "Cultural Program",
      icon: <FaMusic />,
      color: "#f06292",
      description: "Devotional songs and traditional dance performances"
    },
    {
      time: "6:30 PM",
      title: "Evening Aarti",
      icon: <FaPrayingHands />,
      color: "#ff6f00",
      description: "Sacred fire ceremony with diya offerings"
    }
  ];

  return (
    <section className="schedule-section py-5 position-relative">
      {/* Background pattern */}
      <div className="background-pattern"></div>
      
      <Container className="position-relative">
        <div className="text-center mb-5">
          <h2 className="display-4 ornate-heading">
            Event Schedule
            <div className="divider"></div>
          </h2>
          <p className="section-subtitle">Plan Your Spiritual Journey</p>
        </div>

        <div className="timeline">
          {schedule.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker" style={{ backgroundColor: event.color }}>
                {event.icon}
              </div>
              <Card className="timeline-card">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="mb-0" style={{ color: event.color }}>{event.title}</h3>
                    <div className="time-display">
                      <FaClock className="me-2" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <p className="text-muted">{event.description}</p>
                  <div className="location-tag">
                    <span className="badge">Main Temple Hall</span>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        <Row className="mt-5">
          <Col md={6} className="mb-4">
            <Card className="info-card h-100">
              <Card.Body>
                <h4>Important Notes</h4>
                <ul className="custom-list">
                  <li>Traditional attire recommended</li>
                  <li>Free parking available</li>
                  <li>Children's activities during main events</li>
                  <li>Photography allowed in designated areas</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="info-card h-100">
              <Card.Body>
                <h4>Live Stream Schedule</h4>
                <div className="stream-timeline">
                  <div className="stream-item">
                    <span className="stream-time">10:00 AM</span>
                    <span className="stream-event">Main Puja Ceremony</span>
                  </div>
                  <div className="stream-item">
                    <span className="stream-time">6:30 PM</span>
                    <span className="stream-event">Evening Aarti</span>
                  </div>
                </div>
                <Button variant="primary" className="btn-reminder mt-3">
                  Set Calendar Reminder
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EventSchedulePage;