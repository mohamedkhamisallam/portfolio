import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, useLocation } from 'react-router-dom';
import image from '../assets/pics/about-BgAkqdr2.jpg';
import "./MainNavbar.css";

function MainNavbar() {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="bg-body-tertiary custom-navbar ">
      <Container>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas 
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="d-flex flex-column align-items-center justify-content-center w-100">
              <div className='mb-5 mt-3'>
                <img src={image} className='image-size' />
              </div>
              <h1 className='Jackson-Ford text-center'><a>Jackson Ford</a></h1>
              <span className='text-center fs-6'>UI/UX/Designer in</span>
              <span className='text-center'>Philippines</span>
              
              <NavLink to="home" className={`remove mt-2 ${location.pathname === '/' || location.pathname === '/home' ? 'active' : ''}`}>
                Home
              </NavLink>
              <NavLink to="about" className={`remove ${location.pathname === '/about' ? 'active' : ''}`}>
                About
              </NavLink>
              <NavLink to="skills" className={`remove ${location.pathname === '/skills' ? 'active' : ''}`}>
                Skills
              </NavLink>
              <NavLink to="experience" className={`remove ${location.pathname === '/experience' ? 'active' : ''}`}>
                Experience
              </NavLink>
              <NavLink to="work" className={`remove ${location.pathname === '/work' ? 'active' : ''}`}>
                Work
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
