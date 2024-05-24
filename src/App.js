import { Container, Row, Col, Navbar, NavLink, NavbarBrand, NavbarCollapse } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './floor44logo.png'

function NavBar() {
  return (
    <Navbar data-bs-theme="dark" expand='lg'>
      <Container fluid>
        <NavbarCollapse>
          <NavbarBrand><img
            src={logo}
            width="200"
            height="50"
            className="d-inline-block align-top"
            alt="Floor 44 Logo"
          /></NavbarBrand>

          <NavLink className='navItem'>ABOUT</NavLink>
          <NavLink className='navItem'>MENU</NavLink>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

function PhotoSeparator() {
  return (
    <div>
      <Container fluid className="whiteSpace"></Container>
      <Container fluid className='photoSeperator'>
        <img alt="separator" />
      </Container>
      <Container fluid className="whiteSpace"></Container>
    </div>
  )
}

function AboutSection() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>A NEW DINING EXPERIENCE</h2>
          <p>Exhilarating to the eyes and tastebuds alike, Azia Restaurant
            & Lounge offers bright flavors of the Far East in a surreal
            atmosphere that marries the serenity of Asia with the flamboyance
            of the Caribbean. Ornate asian decor and zen details open the
            senses into setting the stage for pan-Asian fare inspired by
            multiple traditions that transcends into something delicious for
            just about everyone. Menu features dim sum, sushi, soups, meat &
            seafood and favorite house specialties that pair delightfully</p>
        </Col>
        <Col>
          <img alt="Main Dining Area" />
        </Col>
      </Row>
    </Container>
  )
}

function GallerySection() {
  return (
    <div>
      <h2>GALLERY</h2>
      {/* image Carousel */}
    </div>
  )
}

function ReviewSection() {
  return (
    <div>
      <h2>Reviews</h2>
      <div className="Review">
        <h3>Title</h3>
        <p>Body</p>
        <label>Credit</label>
      </div>
    </div>
  )
}

function PageBottom() {
  return (
    <div>
      <h3>Floor 44</h3>

      <h3>Opening Hours</h3>
      <p>Sunday - Thursday: 5pm - 12am
        Friday - Saturday: 5pm - 1am
        Delivery service: 5pm - 9:30pm</p>

      <h3>Address</h3>
      <p>1228 Astronomy Rd
        44th Floor
        Suite B
        Philadelphia PA 11043</p>

      <h3>Contact</h3>
      <p>TEL 215-512-2418
        yisraeleliyah@gmail.com
        Created by Chromadesk</p>
      <div>{/*media buttons*/}</div>
    </div>
  )
}

function App() {
  return (
    <div>
      <NavBar />
      <PhotoSeparator />
      <AboutSection />
      <Container fluid className="whiteSpace"></Container>
      <GallerySection />
      <ReviewSection />
      <PhotoSeparator />
      <PageBottom />
    </div>
  );
}

export default App;
