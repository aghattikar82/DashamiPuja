import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPrayingHands, FaCalendarAlt, FaVideo } from 'react-icons/fa';
import '../HomePage.css';

const HomePage = () => {
  return (
    <section className="home-section py-5 position-relative">
      {/* Divine background overlay */}
      <div className="divine-background"></div>
      
      <Container className="position-relative">
        <div className="hero-section text-center mb-10">
          <h1 className="display-3 ornate-heading">
            Welcome to Dashami Puja
          </h1>
          <p className="lead section-subtitle">
            Celebrating Lord Mouneshwara for over a century
          </p>
        </div>

        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 feature-card">
              <Card.Body className="text-center">
                <div className="icon-wrapper mb-3">
                  <FaPrayingHands className="feature-icon" />
                </div>
                <Card.Title className="mb-3">About the Puja</Card.Title>
                <Card.Text>
                  Annual celebration with 200-500 devotees gathering to honor Lord Mouneshwara...
                </Card.Text>
                <Button 
                  variant="outline-primary" 
                  className="mt-3"
                  href="/history"
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4}>
            <Card className="h-100 feature-card">
              <Card.Body className="text-center">
                <div className="icon-wrapper mb-3">
                  <FaCalendarAlt className="feature-icon" />
                </div>
                <Card.Title className="mb-3">Event Highlights</Card.Title>
                <Card.Text>
                  Traditional rituals, cultural programs, and community feasting...
                </Card.Text>
                <Button 
                  variant="outline-primary" 
                  className="mt-3"
                  href="/schedule"
                >
                  View Schedule
                </Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4}>
            <Card className="h-100 feature-card">
              <Card.Body className="text-center">
                <div className="icon-wrapper mb-3">
                  <FaVideo className="feature-icon" />
                </div>
                <Card.Title className="mb-3">Live Stream</Card.Title>
                <Card.Text>
                  Can't attend in person? Join us virtually through our live stream...
                </Card.Text>
                <Button 
                  variant="outline-primary" 
                  className="mt-3"
                  href="/live"
                >
                  Watch Live
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="cta-section mt-5 text-center">
          <h2 className="mb-4">Join Our Celebration</h2>
          <div className="d-flex gap-3 justify-content-center">
            <Button variant="primary" size="lg" href="/register">
              Register Now
            </Button>
            <Button variant="outline-primary" size="lg" href="/donate">
              Make a Donation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;