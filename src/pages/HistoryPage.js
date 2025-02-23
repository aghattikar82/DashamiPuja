import { Container, Row, Col, Image } from 'react-bootstrap';
import '../HistoryPage.css';

const HistoryPage = () => {
  return (
    <section className="history-section py-5 position-relative">
      {/* Background pattern */}
      <div className="background-pattern"></div>
      
      <Container>
        <div className="section-header mb-5 text-center">
          <h2 className="display-3 mb-3 ornate-heading">
            Our Sacred Legacy
            <div className="divider"></div>
          </h2>
          <p className="section-subtitle">Preserving Tradition Since 1920</p>
        </div>

        <Row className="align-items-center g-5">
          <Col md={6} className="history-visual order-md-1 order-2">
            <div className="image-container position-relative">
              <Image 
                src="../assets/images/hero-bg.jpg" 
                fluid 
                className="main-image rounded-4 shadow-lg"
              />
              <div className="vintage-overlay"></div>
              <div className="decorative-border"></div>
              <div className="image-caption">
                <span className="caption-icon">📜</span>
                Historical Moments
              </div>
            </div>
          </Col>
          
          <Col md={6} className="order-md-2 order-1">
            <div className="history-content ps-lg-4">
              <div className="quote-card p-4 mb-4 rounded-4 shadow-sm">
                <p className="lead fst-italic golden-text mb-0">
                  "The Dashami Puja has been the cornerstone of our spiritual journey, 
                  uniting generations in devotion to Lord Mouneshwara."
                </p>
              </div>
              
              <div className="legacy-card p-4 rounded-4 shadow-lg">
                <h5 className="mb-4 timeline-heading">
                  Sacred Timeline
                  <span className="timeline-icon">⏳</span>
                </h5>
                <ul className="timeline-list">
                  {[
                    {
                      year: "1920",
                      title: "Humble Beginnings",
                      description: "First recorded celebration in family shrine"
                    },
                    {
                      year: "1950",
                      title: "Community Integration",
                      description: "Opened to village community participation"
                    },
                    {
                      year: "2000",
                      title: "Grand Scale",
                      description: "Reached 500+ devotees milestone"
                    },
                    {
                      year: "2020",
                      title: "Digital Transformation",
                      description: "Introduced virtual participation"
                    }
                  ].map((item, index) => (
                    <li className="timeline-item" key={index}>
                     
                      <div className="timeline-content">
                        <div className="timeline-year">{item.year}</div>
                        <h6 className="mb-1">{item.title}</h6>
                        <p className="mb-0">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HistoryPage;