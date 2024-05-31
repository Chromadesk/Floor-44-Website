import { Container, Row, Col, Navbar, NavLink, NavbarBrand, NavbarCollapse, Carousel, CarouselItem, Card, CardTitle, CardBody, CardFooter, CardText, Nav, NavItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './images/floor44logo.png'
import starIcon from './images/star.png'
import outdoorAreaPhoto from "./images/outdoorarea.jpg"
import imageDivider from "./images/imagedivider.png"
const galleryFolder = require.context('./images/gallery/', true);
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
        <img alt="" src={imageDivider} height='100%' width='100%' />
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
            <Container style={{ padding: '10px', textAlign: 'center' }}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Tristique sollicitudin nibh sit amet commodo nulla
                facilisi nullam.</p>

              <p>Ultrices eros in cursus turpis massa tincidunt dui ut. Ut
                sem nulla pharetra diam sit amet nisl. Turpis cursus in hac
                habitasse platea dictumst quisque sagittis. Amet nisl purus
                in mollis nunc sed id. Ipsum dolor sit amet consectetur
                adipiscing. Imperdiet proin fermentum orci porta.
                Cras sed felis eget velit aliquet sagittis.</p>

              <p>Consectetur purus ut faucibus pulvinar elementum integer.
                Pellentesque elit ullamcorper dignissim cras tincidunt
                lobortis feugiat vivamus. Commodo nulla facilisi nullam
                vehicula ipsum a arcu. Ornare massa eget egestas purus
                viverra accumsan in nisl.</p>
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
  let j = 0
  let imgContent = []
  let galleryContent = galleryImages.map((image, i) => {
    if (j === 0) { imgContent = [] }

    imgContent.push(
      <Col style={{ padding: "3px" }}>
        <img alt="" src={image} className='galleryImage center' />
      </Col>
    )
    j++

    if (j > 4 || i + 1 === galleryImages.length) {
      j = 0
      return <CarouselItem><Container style={{ width: '120%' }}><Row>{imgContent}</Row></Container></CarouselItem>
    } //Limit the amount of images in one carousel item

    return null
  })

  return (
    <Container fluid style={{ height: '550px' }}>
      <h1 className='sunken'>GALLERY</h1>
      <div className='galleryBack'>
        <Carousel className='center' style={{ top: '55%', msTransform: 'translateY(-50%)', transform: 'translateY(-50%)' }}>
          {galleryContent}
        </Carousel>
      </div>
    </Container>
  )
}

function ReviewSection() {
  let reviews = [];

  let demoReview = {
    title: 'Review',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.',
    credit: 'John Doe'
  }

  for (let i = 0; i < 3; i++) { reviews.push(demoReview) }

  let allReviews = reviews.map((review, i) => {
    return (
      <Col style={{ paddingLeft: '50px', paddingRight: '50px' }}>
        <img alt="" src={starIcon} width="300" height="50" className='sunken' />
        <Card text="light" className='review'>
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
    <div className='reviewsBack'>
      <Container fluid style={{ padding: '50px' }}>
        <h1>REVIEWS</h1>
        <Row>{allReviews}</Row>
      </Container>
    </div>
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
            <NavItem>Somewhereville CA 11043</NavItem>
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
