import { Container, Row, Col, Nav, NavLink, NavItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HeaderNavBar, PageBottom, PhotoSeparator } from '../shared-content/SharedContent'
import MenuData from '../data/MenuData.json'

function CategoryPart(props) {
    let j = 0
    let rowContent = []
    let catContent = props.catProps.items.map((item, i) => {
        if (j === 0) { rowContent = [] }

        rowContent.push(
            <Col md={4}><Container style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                <h3>{item.name}</h3>
                <p style={{ fontSize: '16px' }}>{item.description}</p>
                <p>${item.price}</p>
                <br />
                <hr />
            </Container></Col>
        )
        j++

        if (j > 2 || i + 1 === props.catProps.items.length) {
            j = 0
            return <Row>{rowContent}</Row>
        } //Limit the amount of images in one carousel item

        return null
    })

    return (
        <Container style={{ padding: '30px' }}>
            <h2 id={props.catProps.title}>{props.catProps.title}</h2>
            <hr />
            <Container>
                {catContent}
            </Container>
        </Container>
    )
}

function MenuPage() {
    const navLinks = []
    let menuContent = MenuData.MenuCategories.map((category) => {
        navLinks.push(
            <NavItem><NavLink href={'#' + category.title} className='link'>
                <i>{category.title}</i>
            </NavLink></NavItem>
        )

        return (
            <CategoryPart catProps={category} />
        )
    })

    return (
        <div>
            <HeaderNavBar />
            <PhotoSeparator />
            <h1 style={{ padding: '50px' }}><b>MENU</b></h1>
            <Nav className='center'>{navLinks}</Nav>
            {menuContent}
            <Container fluid className="whiteSpace"></Container>
            <PageBottom />
        </div>
    )
}

export default MenuPage