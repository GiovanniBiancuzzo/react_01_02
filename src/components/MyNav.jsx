// Crea un componente MyNav che renderizzerà un componente react-bootstrap per la navigation bar con i seguenti link: Home, About and Browse.
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const MyNav = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Strive Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <NavDropdown
                    title="Browse (Generi)"
                    id="collasible-nav-dropdown"
                >
                    <NavDropdown.Item href="#fantasy">Fantasy</NavDropdown.Item>
                    <NavDropdown.Item href="#history">History</NavDropdown.Item>
                    <NavDropdown.Item href="#horror">Horror</NavDropdown.Item>
                    <NavDropdown.Item href="#romance">Romance</NavDropdown.Item>
                    <NavDropdown.Item href="#scifi">Sci-Fi</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default MyNav;
