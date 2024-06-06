import { Container, Row, Col, Nav, NavLink, NavItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PhotoSeparator } from '../shared-content/SharedContent'

class Item {
    constructor(name, desc, cost) {
        this.name = name
        this.desc = desc
        this.cost = cost
    }
}

class Category {
    constructor(title, items) {
        this.title = title
        this.items = items
    }
}

const MenuCategories = [
    new Category('Demo Category 1',
        [
            new Item("Item 1", "food", 3.99),
            new Item("Item 1", "food", 3.99),
            new Item("Item 1", "food", 3.99),
            new Item("Item 1", "food", 3.99),
            new Item("Item 1", "food", 3.99),
        ]
    ),
    new Category('Demo Category 2',
        [
            new Item("Item 1", "food", 3.99),
            new Item("Item 1", "food", 3.99),
            new Item("Item 1", "food", 3.99),
            new Item("Item 1", "food", 3.99),
            new Item("Item 1", "food", 3.99),
        ]
    ), new Category('Demo Category 3',
        [
            new Item("Item 1", "food", 3.99),
            new Item("Item 1", "food", 3.99),
            new Item("Item 1", "food", 3.99),
            new Item("Item 1", "food", 3.99),
            new Item("Item 1", "food", 3.99),
        ]
    ),
]

function CategoryPart(props) {
    let j = 0
    let rowContent = []
    let catContent = props.catProps.items.map((item, i) => {
        if (j === 0) { rowContent = [] }

        rowContent.push(
            <Col md={4}><Container style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <p>${item.cost}</p>
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
    let menuContent = MenuCategories.map((category) => {
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
            <PhotoSeparator />
            <h1 style={{ padding: '50px' }}><b>MENU</b></h1>
            <Nav className='center'>{navLinks}</Nav>
            {menuContent}
            <Container fluid className="whiteSpace"></Container>
        </div>
    )
}

export default MenuPage