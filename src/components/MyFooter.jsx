// Crea un componente MyFooter che renderizzerà un footer per la pagina.
import { Navbar, Nav } from "react-bootstrap";

const MyFooter = () => (
    <Navbar className="justify-content-center" bg="dark" variant="dark">
        <Nav>
            <Nav.Item>
                <Nav.Link href="#facebook">Facebook</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#instagram">Instagram</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#discord">Discord</Nav.Link>
            </Nav.Item>
        </Nav>
    </Navbar>
);

export default MyFooter;
