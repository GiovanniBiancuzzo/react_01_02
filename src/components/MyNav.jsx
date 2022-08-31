// Crea un componente MyNav che renderizzerà un componente react-bootstrap per la navigation bar con i seguenti link: Home, About and Browse.
import { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import scifi from "../data/scifi.json";
// import horror from "../data/scifi.json";
// import fantasy from "../data/scifi.json";
// import romance from "../data/scifi.json";
// import history from "../data/scifi.json";

// const genres = ['scifi', 'horror', 'fantasy', 'romance', 'history'];

class MyNav extends Component {
    state = {
        selectedGenre: null, //valore iniziale del genere
    };

    render() {
        return (
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
                            <NavDropdown.Item
                                href="#fantasy"
                                onClick={() => {
                                    this.setState({
                                        selectedGenre: "fantasy",
                                    });
                                }}
                            >
                                Fantasy
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="#history"
                                onClick={() => {
                                    this.setState({
                                        selectedGenre: "history",
                                    });
                                }}
                            >
                                History
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="#horror"
                                onClick={() => {
                                    this.setState({
                                        selectedGenre: "horror",
                                    });
                                }}
                            >
                                Horror
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="#romance"
                                onClick={() => {
                                    this.setState({
                                        selectedGenre: "romance",
                                    });
                                }}
                            >
                                Romance
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="#scifi"
                                onClick={() => {
                                    this.setState({
                                        selectedGenre: "scifi",
                                    });
                                }}
                            >
                                Sci-Fi
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default MyNav;
