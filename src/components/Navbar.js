import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Navbar.css'; // Create a new CSS file for custom styles

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-container">
          <img 
            src="../assets/images/om-logo.png" 
            alt="Logo"
            className="brand-logo"
          />
          <span className="brand-text">
            Dashami Puja
            <span className="brand-sub">Lord Mouneshwara</span>
          </span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="hamburger" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className="nav-link-item"
              activeclassname="active"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/history" 
              className="nav-link-item"
              activeclassname="active"
            >
              History
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/gallery" 
              className="nav-link-item"
              activeclassname="active"
            >
              Gallery
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/schedule" 
              className="nav-link-item"
              activeclassname="active"
            >
              Schedule
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/live" 
              className="nav-link-item live-link"
              activeclassname="active"
            >
              Live
              <span className="live-badge">Live</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;