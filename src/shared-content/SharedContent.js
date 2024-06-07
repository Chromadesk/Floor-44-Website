import { Container, Row, Col, Navbar, NavLink, NavbarBrand, NavbarCollapse, Nav, NavItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../shared-images/floor44logo.png'
import imageDivider from "../shared-images/imagedivider.png"
import instaIcon from "../shared-images/insta.png"
import tripIcon from "../shared-images/tripadvisor.png"
import twitIcon from "../shared-images/twitter.png"

export function HeaderNavBar() {
    return (
        <Navbar data-bs-theme="dark" expand='lg'>
            <Container fluid>
                <NavbarCollapse>
                    <NavbarBrand><img src={logo} width="200" height="50" className="d-inline-block align-top" alt="" /></NavbarBrand>
                    <NavLink className='navItem' href='/'>ABOUT</NavLink>
                    <NavLink className='navItem' href='/menu'>MENU</NavLink>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}

export function PhotoSeparator() {
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

export function PageBottom() {
    const iconStyle = { paddingLeft: '2px', paddingRight: '2px' }

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
                        <NavItem>chromadeskart@gmail.com</NavItem>
                        <NavItem>Created by Chromadesk</NavItem>
                        <NavItem>
                            <img width='24px' height='20px' src={instaIcon} alt='' style={iconStyle} />
                            <img width='24px' height='20px' src={twitIcon} alt='' style={iconStyle} />
                            <img width='24px' height='20px' src={tripIcon} alt='' style={iconStyle} />
                        </NavItem>
                    </Nav>
                </Col>
            </Row>
        </Container>
    )
}