import { Container, Row, Col, Nav, NavLink, NavItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HeaderNavBar, PageBottom, PhotoSeparator } from '../shared-content/SharedContent'

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
    new Category('Appetizers',
        [
            new Item("Fire Roasted Brussels Sprouts", "Caramel Vinaigrette, Mandarin Wedges", 16),
            new Item("Hot Honey Cauliflower Bites", "Garlic Ranch Dip", 14),
            new Item("Chicken Lettuce Wrap", "Chicken Thigh, Iceberg Lettuce, Carrot", 14),
            new Item("Mozzarella Sticks", "Crispy Outside, Marinara Sauce", 15),
            new Item("Crispy Cheese Bites", "Buttermilk Ranch, Firecracker Mayo", 16),
        ]
    ),
    new Category('Drinks',
        [
            new Item("Black Manhattan", "Bulleit Rye Whiskey, Amara Averna, Orange Bitters", 15),
            new Item("Parlor Trick", "Four Roses Bourbon Small Batch, Simple Syrup, splash of Soda Water", 15),
            new Item("The Conjurita", "el Mayor Blanco Tequila, Cointreau Liqueur, Simple Syrup, Lime Juice", 15),
            new Item("The Prospector", "Buffalo Trace Bourbon, Madagascar Vanilla, Honey, Lemon", 15),
            new Item("Midsummer Night", "Ketel One Botanicals, Licor 43, Strawberry, Lime", 15),
            new Item("Cosmopolitan", "Tito's Vodka, Orange Liqueur, Cranberr y, Lime", 15),
        ]
    ),
    new Category('Entrees',
        [
            new Item("8 Oz Top Sirloin", "Served with garlic mashed potatoes and broccoli.", 21),
            new Item("Glazed Baby Back Ribs", "With Honey BBQ sauce or Sweet Asian Chile sauce", 24),
            new Item("Chicken Tenders Platter", "Served with fries", 24),
            new Item("Clubhouse Grille", "Served with fries", 18),
            new Item("Whisky Bacon Burger", "All Beef, Turkey Bacon", 18),
        ]
    ),
    new Category('Deserts',
        [
            new Item("Tiramisú", "Classic Tiramisú with Caramel", 14),
            new Item("Cereal Milk Cheesecake", "Wild Berries & Crunchy Cereal", 14),
            new Item("Mochi Ice Cream", "Velvety Ice Cream in Japanese Mocha Shell", 14),
            new Item("Banana Tempura", "Fried & Crispy Tempura Dipped Banana", 14),
        ]
    ),
]

function CategoryPart(props) {
    let j = 0
    let rowContent = []
    let catContent = props.catProps.items.map((item, i) => {
        if (j === 0) { rowContent = [] }

        rowContent.push(
            <Col md={4}><Container style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                <h3>{item.name}</h3>
                <p style={{ fontSize: '16px' }}>{item.desc}</p>
                <p>${item.cost}</p>
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