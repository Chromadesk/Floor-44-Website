import { Container, Row, Col, Navbar, NavLink, NavbarBrand, NavbarCollapse, Carousel, CarouselItem, Card, CardTitle, CardBody, CardFooter, CardText } from 'react-bootstrap'
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
            alt=""
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
        <img alt="" />
      </Container>
      <Container fluid className="whiteSpace"></Container>
    </div>
  )
}

function AboutSection() {
  return (
    <Container fluid className="paddingLG" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
      <Row>
        <Col>
          <Container className="paddingLG">
            <h2>A NEW DINING EXPERIENCE</h2>
            <Container style={{ padding: '10px' }}>
              <p>Exhilarating to the eyes and tastebuds alike, Azia Restaurant
                & Lounge offers bright flavors of the Far East in a surreal
                atmosphere that marries the serenity of Asia with the flamboyance
                of the Caribbean. </p>

              <p>Ornate asian decor and zen details open the
                senses into setting the stage for pan-Asian fare inspired by
                multiple traditions that transcends into something delicious for
                just about everyone.</p>

              <p>Menu features dim sum, sushi, soups, meat &
                seafood and favorite house specialties that pair delightfully.</p>
            </Container>
          </Container>
        </Col>
        <Col>
          <Container className="paddingLG">
            <img alt="Main Dining Area" />
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

function GallerySection() {
  return (
    <Container fluid>
      <h1>GALLERY</h1>
      <img alt="" width="100%" height="400px" style={{ backgroundColor: 'white' }} />
      <Carousel>
        <CarouselItem>
          {/*Automatically fill carousel with images stores in a folder*/}
        </CarouselItem>
      </Carousel>
    </Container>
  )
}

function ReviewSection() {
  return (
    <Container fluid>
      <h1>Reviews</h1>
      <Card className="review">
        <CardBody>
          <CardTitle>Title</CardTitle>
          <CardText>Body</CardText>
        </CardBody>
        <CardFooter>Credit</CardFooter>
      </Card>
    </Container>
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
