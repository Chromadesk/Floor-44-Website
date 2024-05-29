import { Container, Row, Col, Navbar, NavLink, NavbarBrand, NavbarCollapse, Carousel, CarouselItem, Card, CardTitle, CardBody, CardFooter, CardText, Nav, NavItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './images/floor44logo.png'
import starIcon from './images/star.png'
import outdoorAreaPhoto from "./images/outdoorarea.jpg"
const galleryFolder = require.context('./images/gallery', true);
const galleryImages = galleryFolder.keys().map(image => galleryFolder(image));

function HeaderNavBar() {
  return (
    <Navbar data-bs-theme="dark" expand='lg'>
      <Container fluid>
        <NavbarCollapse>
          <NavbarBrand><img src={logo} width="200" height="50" className="d-inline-block align-top" alt="" /></NavbarBrand>
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
            <img alt="Outdoor Rooftop Dining Area" width="100%" height="100%" src={outdoorAreaPhoto} />
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

function GallerySection() {
  let images = galleryImages.map((image, i) => {
    if (i > 4) return

    return (
      <Col style={{ padding: "3px" }}>
        <img alt="" width='100%' height='100%' src={image} className='center' />
      </Col>
    )
  })

  return (
    <Container fluid style={{ height: '500px' }}>
      <h1 className='sunken'>GALLERY</h1>
      <div className='galleryBack'>
        <Carousel className='center' style={{ top: '55%', msTransform: 'translateY(-50%)', transform: 'translateY(-50%)' }}>
          <CarouselItem>
            <Container><Row>{images}</Row></Container>
          </CarouselItem>
        </Carousel>
      </div>
    </Container>
  )
}

function ReviewSection() {
  let reviews = [];

  let demoReview = {
    title: 'Review',
    description: 'Exhilarating to the eyes and tastebuds alike, Azia Restaurant & Lounge offers bright flavors of the Far East in a surreal atmosphere that marries the serenity of Asia with the flamboyance of the Caribbean.',
    credit: 'John Doe'
  }

  for (let i = 0; i < 3; i++) { reviews.push(demoReview) }

  let allReviews = reviews.map((review, i) => {
    return (
      <Col style={{ paddingLeft: '50px', paddingRight: '50px' }}>
        <img alt="" src={starIcon} width="300" height="50" className='sunken' />
        <Card text="light" bg="danger" className='review'>
          <CardBody>
            <CardTitle style={{ textAlign: 'center', fontSize: '30px' }}>{review.title}</CardTitle>
            <CardText style={{ textAlign: 'center', fontSize: '20px' }}>{review.description}</CardText>
          </CardBody>
          <CardFooter>{review.credit}</CardFooter>
        </Card>
      </Col>
    )
  })

  return (
    <Container fluid style={{ padding: '50px' }}>
      <h1>Reviews</h1>
      <Row>{allReviews}</Row>
    </Container>
  )
}

function PageBottom() {
  return (
    <Container style={{ padding: '30px' }}>
      <NavbarBrand>
        <img src={logo} width="200" height="50" alt="" className='center' />
      </NavbarBrand>

      <Row style={{ padding: '30px' }}>
        <Col className='footerCol'>
          <h2>Opening Hours</h2>
          <Nav className='flex-column center'>
            <NavItem>Sunday - Thursday: 5pm - 12am</NavItem>
            <NavItem>Friday - Saturday: 5pm - 1am</NavItem>
            <NavItem>Delivery service: 5pm - 9:30pm</NavItem>
          </Nav>
        </Col>
        <Col className='footerCol'>
          <h2>Address</h2>
          <Nav className='flex-column center'>
            <NavItem>1228 Astronomy Rd</NavItem>
            <NavItem>44th Floor</NavItem>
            <NavItem>Suite B</NavItem>
            <NavItem>Philadelphia PA 11043</NavItem>
          </Nav>
        </Col>
        <Col className='footerCol'>
          <h2>Contact</h2>
          <Nav className='flex-column center'>
            <NavItem>TEL 215-512-2418</NavItem>
            <NavItem>yisraeleliyah@gmail.com</NavItem>
            <NavItem>Created by Chromadesk</NavItem>
            <NavItem>{/*media buttons*/}</NavItem>
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}

function App() {
  return (
    <div>
      <HeaderNavBar />
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
